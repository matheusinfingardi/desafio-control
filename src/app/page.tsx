import { Button } from "@/components/ui/button";

export default function Home() {
  return (
<main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Drone Control Interface</h1>

      <div className="space-y-4">
        <Button className="mr-2">Connect</Button>
        <Button className="mr-2">Takeoff</Button>
        <Button className="mr-2">Go to Point A</Button>
        <Button className="mr-2">Return Home</Button>
      </div>
    </main>
  );
}
