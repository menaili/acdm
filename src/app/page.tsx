import Image from "next/image";
import Mostcourses from "../components/home/mostcourses";
import Coursestable from "../components/home/coursestable";
import Learningtates from "../components/home/learningstates";
import Onlinestories from "../components/home/onlinestories";
import Trendingcourses from "../components/home/trendingcourses";

export default function Home() {
  return (
    <main className="flex min-h-screen 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col bg-white-500 gap-5 pl-24 pr-10">

      <div className="flex flex-col h-full w-full">
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
        <div className="w-full">
          <Trendingcourses />
        </div> 
      </div>
    </main>
  );
}
