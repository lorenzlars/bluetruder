// https://www.typescriptlang.org/docs/handbook/modules.html#wildcard-module-declarations
declare module "*?url" {
  const content: string;
  export default content;
}

declare module "*?raw" {
  const content: string;
  export default content;
}