import '@umijs/max/typings';
// work-web/src/README.d.ts
declare module '*.md' {
    const content: string;
    export default content;
  }