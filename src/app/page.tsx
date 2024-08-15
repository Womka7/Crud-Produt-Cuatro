'use client'
import Image from "next/image";
import Table from "./components/table";
import { H1 } from "./components/styles/styled-components";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <H1 >Welcome to our shop</H1>
            <Table />
      </div>
    </main>
  );
}
