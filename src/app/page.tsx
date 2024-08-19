'use client'
import Image from "next/image";
import Table from "./components/table/table";
import { H1 } from "./components/table/styled-components";


export default function AdminTable() {
  return (
    <main>
      <div>
            <H1 >Welcome to our shop</H1>
            <Table />
      </div>
    </main>
  );
}
