import React from "react";
import Link from "next/link";
export default function AnotherOne() {
  return (
    <div>
      <h1>WELCOME TO ANOTHER ONE</h1>
      <button>create new Array</button>
      <Link href={"/components/Hello"}>
        <button>BACK TO HELLO PAGE</button>
      </Link>
      <Link href={"/"}>
        <button>BACK TO MAIN PAGE</button>
      </Link>
    </div>
  );
}
