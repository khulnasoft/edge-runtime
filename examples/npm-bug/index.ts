import { createClient } from "npm:@khulnasoft/khulnasoft-js@2.40.0";

console.log('x');
globalThis.hello = "world";
console.log(createClient);