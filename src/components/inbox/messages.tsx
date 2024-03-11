import Image from "next/image";
import Searchbar from "../single/search";

const Messages: React.FC = () => {
    return(
        <div className=" flex flex-col gap-4">
            <div className="flex flex-row justify-between pt-6 px-6">
                <h1>Inbox</h1>
                <h1>Icon</h1>
            </div>

            <div className="px-6">
                <Searchbar />
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-3 w-auto bg-hover hover:bg-hover transition duration-300 ease-in-out px-6 py-2">
                    <Image
                        src={'/profile/portrait-man-laughing.jpg'}
                        width={40}
                        height={40}
                        alt={"profile"}    
                        className="rounded-full"            
                    />
                    <ul className="list-none">
                        <li>Doctor champ</li>
                        <li className="text-gray text-base w-[230px] overflow-hidden whitespace-nowrap overflow-ellipsis">Come to learn to gother somes tricks of devops</li>
                    </ul>
                </div>

                <div className="flex items-center gap-3 w-auto hover:bg-hover transition duration-300 ease-in-out px-6 py-2">
                    <Image
                        src={'/profile/portrait-man-laughing.jpg'}
                        width={40}
                        height={40}
                        alt={"profile"}    
                        className="rounded-full"            
                    />
                    <ul className="list-none">
                        <li>Doctor champ</li>
                        <li className="text-gray text-base w-[230px] overflow-hidden whitespace-nowrap overflow-ellipsis">Come to learn to gother somes tricks of devops</li>
                    </ul>
                </div>

                <div className="flex items-center gap-3 w-auto hover:bg-hover transition duration-300 ease-in-out px-6 py-2">
                    <Image
                        src={'/profile/portrait-man-laughing.jpg'}
                        width={40}
                        height={40}
                        alt={"profile"}    
                        className="rounded-full"            
                    />
                    <ul className="list-none">
                        <li>Doctor champ</li>
                        <li className="text-gray text-base w-[230px] overflow-hidden whitespace-nowrap overflow-ellipsis">Come to learn to gother somes tricks of devops</li>
                    </ul>
                </div>

                <div className="flex items-center gap-3 w-auto hover:bg-hover transition duration-300 ease-in-out px-6 py-2">
                    <Image
                        src={'/profile/portrait-man-laughing.jpg'}
                        width={40}
                        height={40}
                        alt={"profile"}    
                        className="rounded-full"            
                    />
                    <ul className="list-none">
                        <li>Doctor champ</li>
                        <li className="text-gray text-base w-[230px] overflow-hidden whitespace-nowrap overflow-ellipsis">Come to learn to gother somes tricks of devops</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Messages;