'use client'
import Image from "next/image";
import Table from "./components/table";
import { H1 } from "./components/styles/styled-components";


export default function Home() {
  return (
    <main>
      <div>
            <H1 >Welcome to our shop</H1>
            <Table />
      </div>
    </main>
  );
}
