"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chakraPriorityOrder = {
    Position: [
        'pos', 'position', 'top', 'right', 'bottom', 'left'
    ],
    Display: [
        'display', 'hideFrom', 'hideBelow'
    ],
    Flexbox: [
        'gap', 'rowGap', 'columnGap', 'alignItems', 'align', 'alignContent',
        'justifyItems', 'justifyContent', 'justify', 'flexWrap', 'wrap',
        'flexDirection', 'flexDir', 'direction', 'flex', 'flexGrow',
        'flexShrink', 'flexBasis', 'justifySelf', 'alignSelf', 'order',
    ],
    GridLayout: [
        'gridGap', 'gap', 'gridRowGap', 'rowGap', 'gridColumnGap',
        'columnGap', 'gridColumn', 'column', 'gridRow', 'row',
        'gridArea', 'area', 'gridAutoFlow', 'autoFlow',
        'gridAutoRows', 'autoRows', 'gridAutoColumns', 'autoColumns',
        'gridTemplateRows', 'templateRows', 'gridTemplateColumns',
        'templateColumns', 'gridTemplateAreas', 'templateAreas',
    ],
    Typography: [
        'fontFamily', 'fontSize', 'fontWeight', 'lineHeight',
        'letterSpacing', 'textAlign', 'fontStyle', 'textTransform',
        'textDecoration',
    ],
    Shadow: [
        'textShadow', 'shadow', 'boxShadow'
    ],
    Borders: [
        'border', 'borderWidth', 'borderStyle', 'borderColor',
        'borderTop', 'borderTopWidth', 'borderTopStyle', 'borderTopColor',
        'borderRight', 'borderEnd', 'borderRightWidth', 'borderEndWidth',
        'borderRightStyle', 'borderEndStyle', 'borderRightColor',
        'borderEndColor', 'borderBottom', 'borderBottomWidth',
        'borderBottomStyle', 'borderBottomColor', 'borderLeft',
        'borderStart', 'borderLeftWidth', 'borderStartWidth',
        'borderLeftStyle', 'borderStartStyle', 'borderLeftColor',
        'borderStartColor', 'borderX', 'borderY',
    ],
    BorderRadius: [
        'borderRadius', 'borderTopLeftRadius', 'borderTopStartRadius',
        'borderTopRightRadius', 'borderTopEndRadius',
        'borderBottomRightRadius', 'borderBottomEndRadius',
        'borderBottomLeftRadius', 'borderBottomStartRadius',
        'borderTopRadius', 'borderRightRadius', 'borderEndRadius',
        'borderBottomRadius', 'borderLeftRadius', 'borderStartRadius',
    ],
    ColorAndBackgroundColor: [
        'color', 'bg', 'background', 'bgColor', 'opacity'
    ],
    Background: [
        'bg', 'background', 'bgImage', 'backgroundImage', 'bgSize',
        'backgroundSize', 'bgPosition', 'backgroundPosition',
        'bgRepeat', 'backgroundRepeat', 'bgAttachment', 'backgroundAttachment',
    ],
    Gradient: [
        'bgGradient', 'bgClip', 'backgroundClip'
    ],
    Filter: [
        'filter', 'blur', 'brightness', 'contrast', 'hueRotate',
        'invert', 'saturate', 'dropShadow', 'backdropFilter',
        'backdropBlur', 'backdropBrightness', 'backdropContrast',
        'backdropHueRotate', 'backdropInvert', 'backdropSaturate',
        'as',
    ],
    OtherProps: [
        'animation', 'appearance', 'content', 'transform',
        'transformOrigin', 'visibility', 'whiteSpace', 'userSelect',
        'pointerEvents', 'wordBreak', 'overflowWrap', 'textOverflow',
        'boxSizing', 'cursor', 'resize', 'transition',
        'objectFit', 'objectPosition', 'float', 'fill', 'stroke',
        'outline',
    ],
    LayoutWidthAndHeight: [
        'w', 'width', 'h', 'height', 'minW', 'minWidth', 'maxW',
        'maxWidth', 'minH', 'minHeight', 'maxH', 'maxHeight',
        'boxSize', 'verticalAlign', 'overflow', 'overflowX',
        'overflowY',
    ],
    MarginAndPadding: [
        'm', 'margin', 'mt', 'marginTop', 'mr', 'marginRight',
        'me', 'marginEnd', 'mb', 'marginBottom', 'ml', 'marginLeft',
        'ms', 'marginStart', 'mx', 'marginX', 'my', 'marginY',
        'p', 'padding', 'pt', 'paddingTop', 'pr', 'paddingRight',
        'pe', 'paddingEnd', 'pb', 'paddingBottom', 'pl', 'paddingLeft',
        'ps', 'paddingStart', 'px', 'paddingX', 'py', 'paddingY', 'zIndex'
    ],
    Pseudo: [
        '_hover', '_active', '_focus', '_highlighted', '_focusWithin',
        '_focusVisible', '_disabled', '_readOnly', '_before',
        '_after', '_empty', '_expanded', '_checked', '_grabbed',
        '_pressed', '_invalid', '_valid', '_loading', '_selected',
        '_hidden', '_autofill', '_even', '_odd', '_first',
        '_last', '_notFirst', '_notLast', '_visited',
        '_activeLink', '_activeStep', '_indeterminate', '_groupHover',
        '_peerHover', '_groupFocus', '_peerFocus', '_groupFocusVisible',
        '_peerFocusVisible', '_groupActive', '_peerActive',
        '_groupDisabled', '_peerDisabled', '_groupInvalid',
        '_peerInvalid', '_groupChecked', '_peerChecked',
        '_groupFocusWithin', '_peerFocusWithin', '_peerPlaceholderShown',
        '_placeholder', '_placeholderShown', '_fullScreen',
        '_selection', '_rtl', '_ltr', '_mediaDark',
        '_mediaReduceMotion', '_dark', '_light',
    ],
};
exports.default = chakraPriorityOrder;
