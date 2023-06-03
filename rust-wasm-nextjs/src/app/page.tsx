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
    <main className={styles.main}>
      <div>
        <button onClick={() => changeShow(true)}>Render WASM Component</button>
        Our WASM component:{" "}
        {show ? <WasmComponent /> : <p>is not rendered yet</p>}
      </div>
    </main>
  );
}
