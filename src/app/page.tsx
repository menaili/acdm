import Image from "next/image";
import Mostcourses from "./components/home/mostcourses";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white-500 justify-between p-24">
      <div className="w-fit">
        <Mostcourses />
      </div>
    </main>
  );
}
