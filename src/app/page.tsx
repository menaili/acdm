import Image from "next/image";
import Mostcourses from "./components/home/mostcourses";
import Coursestable from "./components/home/coursestable";
import Learningtates from "./components/home/learningstates";
import Onlinestories from "./components/home/onlinestories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row bg-white-500 gap-5 px-24">
      <div className="flex flex-col w-fit">
        <Mostcourses />
        <Coursestable />
      </div>

      <div className="flex flex-col bg-main rounded-2xl gap-4 my-6 w-full p-8">
        <div>
          <Learningtates />
        </div>
        <div>
          <Onlinestories />
        </div>
        
      </div>
    </main>
  );
}
