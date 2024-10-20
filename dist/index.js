"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const parser_babel_1 = require("prettier/parser-babel");
const parser_typescript_1 = require("prettier/parser-typescript");
const t = __importStar(require("@babel/types"));
const debug_1 = __importDefault(require("debug"));
const chakraPriorityOrder_1 = __importDefault(require("./chakraPriorityOrder"));
const log = (0, debug_1.default)('propOCD');
function sortProps(node) {
    if (node.type !== 'JSXOpeningElement' || !node.attributes) {
        log('Invalid node type or missing attributes:', node);
        return;
    }
    const priorityMap = {};
    Object.values(chakraPriorityOrder_1.default).flat().forEach((prop, index) => {
        priorityMap[prop.toLowerCase()] = index;
    });
    node.attributes.sort((a, b) => {
        var _a, _b;
        const aName = a.name.name.toLowerCase();
        const bName = b.name.name.toLowerCase();
        const aPriority = (_a = priorityMap[aName]) !== null && _a !== void 0 ? _a : -1;
        const bPriority = (_b = priorityMap[bName]) !== null && _b !== void 0 ? _b : -1;
        // compare by priority first
        if (aPriority !== -1 && bPriority !== -1) {
            return aPriority - bPriority;
        }
        // properties with a valid priority come first
        if (aPriority !== -1)
            return -1;
        if (bPriority !== -1)
            return 1;
        // if neither then sort alphabetically
        return aName.localeCompare(bName);
    });
}
const propOCD = {
    parsers: {
        babel: {
            ...parser_babel_1.parsers.babel,
            parse(text, options) {
                const ast = parser_babel_1.parsers.babel.parse(text, options);
                function traverse(node) {
                    if (node && typeof node === 'object') {
                        if (Array.isArray(node)) {
                            node.forEach(traverse);
                        }
                        else if (t.isJSXOpeningElement(node)) {
                            sortProps(node);
                        }
                        Object.keys(node).forEach((key) => {
                            const value = node[key];
                            traverse(value);
                        });
                    }
                }
                traverse(ast);
                return ast;
            },
        },
        typescript: {
            ...parser_typescript_1.parsers.typescript,
            parse(text, options) {
                const ast = parser_typescript_1.parsers.typescript.parse(text, options);
                function traverse(node) {
                    if (node && typeof node === 'object') {
                        if (Array.isArray(node)) {
                            node.forEach(traverse);
                        }
                        else if (t.isJSXOpeningElement(node)) {
                            sortProps(node);
                        }
                        Object.keys(node).forEach((key) => {
                            const value = node[key];
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
module.exports = propOCD;
