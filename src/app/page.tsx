"use client"; // Acredito que seja necessario "use client" aqui... por padrão o Next usa server side || pesquisem sobre!!

import { useState } from "react";
import { Button } from "@/components/ui/button";

/* export default function Home() {
  const [status, setStatus] = useState("");

const connectDrone = async () => {
  setStatus("Função de Connect a ser implementada pela equipe");
};

const takeoffDrone = async () => {
  setStatus("Função de Go to Point A a ser implementada pela equipe");
};

const goToPointA = async () => {
  setStatus("Função de Go to Point A a ser implementada pela equipe");
};

const returnHome = async () => {
  setStatus("Função de Return Home a ser implementada pela equipe");
}; */

export default function Home() {
  return (
<main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Drone Control Interface</h1>

      <div className="space-y-4">
        <Button /* onClick={connectDrone} */ className="mr-2">Connect</Button>
        <Button /* onClick={takeoffDrone} */ className="mr-2">Takeoff</Button>
        <Button /* onClick={goToPointA} */ className="mr-2">Go to Point A</Button>
        <Button /* onClick={returnHome} */ className="mr-2">Return Home</Button>
      </div>
{/* 
      {status && <p className="mt-4 text-gray-700">{status}</p>} 
*/}
    </main>
  );
}
