"use client";

import styles from "./page.module.css";

import dynamic from "next/dynamic";
import { useState } from "react";

const WasmComponent = dynamic(
  async () => {
    const wasmModule = await import("../../../rust_lib/pkg/rust_lib_bg.wasm");
    const wasmfunc = () => (
      <div> Adding two numbers: {wasmModule.add(2, 4)}</div>
    );
    wasmfunc.displayName = "wasm";
    return wasmfunc;
  },
  { ssr: false }
);

export default function Home() {
  const [show, changeShow] = useState(false);

  return (
    <main className={styles.description}>
      <p>
        Example client-side usage of Rust functions in NextJS via wasm-pack
        following
        https://javascript.plainenglish.io/next-js-webassembly-77df3537690 with
        some adaptations for compatibility with Typescript and recent changes to
        Next.
      </p>
      <p>Source: https://github.com/jlogan03/rust-wasm-nextjs</p>
      <hr></hr>
      <p>
        <button onClick={() => changeShow(true)}>Render WASM Component</button>
        Our WASM component:{" "}
        {show ? <WasmComponent /> : <p>is not rendered yet</p>}
      </p>
    </main>
  );
}
