const ffi = require('ffi-napi');
const path = require('path');

const lib = ffi.Library(path.join(__dirname, 'target/release/libffi'), {
    'hello': ['string', []]
});

console.log(lib.hello()); // Outputs: Hello from Rust!
