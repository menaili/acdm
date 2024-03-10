import Image from "next/image";
import Mostcourses from "./components/home/mostcourses";
import Coursestable from "./components/home/coursestable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row bg-white-500 justify-between p-24">
      <div className="flex flex-col w-fit">
        <Mostcourses />
        <Coursestable />
      </div>
    </main>
  );
}
