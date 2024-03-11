import Messages from "@/components/inbox/messages";
import Searchbar from "@/components/single/search";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-row bg-white-500 gap-5 px-24">
            <div className="flex flex-col w-fit h-auto rounded-xl border border-opacity-40 border-solid border-gray">
                <Messages />
            </div>

            <div className="flex flex-col w-fit">
                
            </div>
        </main>
    );
}