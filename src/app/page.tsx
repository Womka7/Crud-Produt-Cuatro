'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Table from './components/table/table';
import { H1 } from './components/table/styled-components';
import Preloader from './components/preloader/Preloader'; // Asegúrate de importar tu componente de preloader

export default function AdminTable() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // Muestra el preloader mientras loading es true
      ) : (
        <main>
          <div>
            <H1>Welcome to our shop</H1>
            <Table />
          </div>
        </main>
      )}
    </>
  );
}
