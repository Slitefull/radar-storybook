declare module '*.svg';
declare module '*.png';

declare module '*.woff';
declare module '*.woff2';
declare module '*.otf';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;
