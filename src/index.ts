import { Plugin, ParserOptions } from 'prettier';
import { parsers } from 'prettier/parser-babel';
import * as t from '@babel/types';
import debug from 'debug';
import chakraPriorityOrder from './chakraPriorityOrder';

const log = debug('propOCD');

interface JSXAttribute {
  type: string;
  name: { name: string };
}

interface JSXOpeningElement {
  type: string;
  attributes: JSXAttribute[];
}

function sortProps(node: JSXOpeningElement): void {
  if (node.type !== 'JSXOpeningElement' || !node.attributes) {
    log('Invalid node type or missing attributes:', node);
    return;
  }

  const priorityMap: Record<string, number> = {};
  Object.values(chakraPriorityOrder).flat().forEach((prop, index) => {
    priorityMap[prop.toLowerCase()] = index;
  });

  node.attributes.sort((a, b) => {
    const aName = a.name.name.toLowerCase();
    const bName = b.name.name.toLowerCase();

    const aPriority = priorityMap[aName] ?? -1;
    const bPriority = priorityMap[bName] ?? -1;

    // compare by priority first
    if (aPriority !== -1 && bPriority !== -1) {
      return aPriority - bPriority;
    }

    // properties with a valid priority come first
    if (aPriority !== -1) return -1;
    if (bPriority !== -1) return 1;

    // if neither then sort alphabetically
    return aName.localeCompare(bName);
  });
}

const propOCD: Plugin = {
  parsers: {
    babel: {
      ...parsers.babel,
      parse(text: string, options: ParserOptions<t.File>) {
        const ast = parsers.babel.parse(text, options) as t.File;

        function traverse(node: t.Node): void {
          if (node && typeof node === 'object') {
            if (Array.isArray(node)) {
              node.forEach(traverse);
            } else if (t.isJSXOpeningElement(node)) {
              sortProps(node as unknown as JSXOpeningElement);
            }

            Object.keys(node).forEach((key) => {
              const value = (node as t.Node & Record<string, t.Node>)[key];
              traverse(value);
            });
          }
        }

        traverse(ast);
        return ast;
      },
    },
  },
};

export = propOCD;
