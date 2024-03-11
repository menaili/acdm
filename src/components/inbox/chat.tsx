import { Button } from "antd";
import Input from "antd/es/input/Input";
import Image from "next/image";

const Chat: React.FC = () => {
    return(
        <>
            <div className="flex flex-row justify-between items-center border-b border-gray border-opacity-40 relative">
                <div className="flex items-center gap-3 w-auto hover:bg-hover transition duration-300 ease-in-out rounded-md mx-1 px-5 py-2">
                    <div className="relative">
                        <Image
                            src={'/profile/portrait-man-laughing.jpg'}
                            width={40}
                            height={40}
                            alt={"profile"}    
                            className="rounded-full"            
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                        <ul className="list-none">
                            <li>Doctor champ</li>
                            <li className="text-gray text-base">Active now</li>
                        </ul>
                </div>

                <div className="flex gap-2 mx-1 px-5 py-2">
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                </div>

            </div>

            <div className="flex flex-col gap-3 absolute bottom-14 w-full px-5">
                <div className="flex flex-row items-end">
                    <div className="bg-hover px-5 py-2 w-fit rounded-xl">
                        <p>Hello Dr Champ, hoe are you?</p>
                    </div>
                    <p className="text-xs text-gray px-2">14:43</p>
                </div>

                <div className="flex flex-row-reverse items-end">
                    <div className="bg-clickable px-5 py-2 w-fit rounded-xl">
                        <p>Am good what about you</p>
                    </div>
                    <p className="text-xs text-gray px-2">14:51</p>
                </div>

                <div className="flex flex-row items-end">
                    <div className="bg-hover px-5 py-2 w-fit rounded-xl">
                        <p>am okay thank you!</p>
                    </div>
                    <p className="text-xs text-gray px-2">Just now</p>
                </div>
                
            </div>

            <div className="w-full absolute bottom-0 flex flex-row justify-between items-center gap-2 px-5 py-2">
                <div className="w-full">
                    <Input 
                    placeholder="write a message..."
                    style={{background: "#23273d",color: "white" , border: "none"}}
                    />
                </div>
                
                <div>
                    <a className="text-md bg-clickable px-2 py-1 rounded-lg">
                        Send
                    </a>
                </div>
            </div>
        </>
    )
}

export default Chat;