'use client'
import Image from "next/image";
import Table from "./components/table";
import { H1 } from "./components/styles/styled-components";


export default function Home() {
  return (
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <H1 >Welcome to our shop</H1>
            <Table />
      </div>
  );
}
