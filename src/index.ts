// Reexport the native module. On web, it will be resolved to rngtmModule.web.ts
// and on native platforms to rngtmModule.ts
export { default } from './rngtmModule';
export { default as rngtmView } from './rngtmView';
export * from  './rngtm.types';
