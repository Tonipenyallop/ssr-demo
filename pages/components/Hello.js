import React from "react";
import Link from "next/link";
export default function Hello() {
  return (
    <div className="">
      <div>Hello page is here</div>
      <Link href="/">
        <button>CLICK ME</button>
      </Link>
    </div>
  );
}
