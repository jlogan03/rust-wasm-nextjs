# Rust + WASM + NextJS Example

Hosted here: https://rust-wasm-nextjs.vercel.app/

All required changes from default rust lib and nextjs app are documented in this diff:
https://github.com/jlogan03/rust-wasm-nextjs/commit/de7e9a9c1702f1dc3359d67f8f707d82da22c1d9

To run locally:
in rust-wasm-nextjs/rust-wasm-nextjs,

```
npm run dev
```

To rebuild the WASM package after changing the Rust lib:
in rust-wasm-nextjs/rust_lib,

```
wasm-pack build --target web
```

which requires that you have installed wasm-pack like

```
cargo install wasm-pack
```
