"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [status, setStatus] = useState("");

  const connectDrone = async () => {
    setStatus("Conectando ao drone...");
    try {
      const response = await fetch("http://localhost:5001/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      if (data.status === "success") {
        setStatus("Drone conectado com sucesso!");
      } else {
        setStatus(`Erro: ${data.message}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Erro ao conectar: ${error.message}`);
      } else {
        setStatus("Erro desconhecido ao conectar.");
      }
    }
  };
  

  const takeoffDrone = async () => {
    setStatus("Função de Takeoff a ser implementada pela equipe");
  };

  const goToPointA = async () => {
    setStatus("Função de Go to Point A a ser implementada pela equipe");
  };

  const returnHome = async () => {
    setStatus("Função de Return Home a ser implementada pela equipe");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Drone Control Interface</h1>

      <div className="space-y-4">
        <Button onClick={connectDrone} className="mr-2">Connect</Button>
        <Button onClick={takeoffDrone} className="mr-2">Takeoff</Button>
        <Button onClick={goToPointA} className="mr-2">Go to Point A</Button>
        <Button onClick={returnHome} className="mr-2">Return Home</Button>
      </div>

      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </main>
  );
}
