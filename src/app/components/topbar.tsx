import Image from "next/image";
import Searchbar from "./single/search";

const Topbar: React.FC = () => {
    return(
        <div className="flex flex-row justify-around p-8">
            <div className="flex flex-col">
                <h1>Hello Dr.Champ</h1>
                <h3 className="text-gray text-base">You are making great progress</h3>
            </div>

            <div>
                <Searchbar />
            </div>

            <div>
                <ul className="flex gap-3">
                    <li className="my-1 p-1 rounded-lg hover:bg-hover inline">
                        <Image
                            src={'/statics/menu/message.png'}
                            width={25}
                            height={25} 
                            alt={"Logo"}
                            style={{ filter: 'brightness(0) invert(1)' }} 
                        />
                    </li>
                    <li className="my-1 p-1 rounded-lg hover:bg-hover inline relative">
                        <Image
                            src={'/statics/menu/notification.png'}
                            width={25}
                            height={25} 
                            alt={"Logo"}
                            style={{ filter: 'brightness(0) invert(1)' }} 
                        />
                        <div className="absolute top-0 right-0 w-3 h-3 bg-red rounded-full"></div>
                    </li>
                    <li className="my-1 p-1 rounded-lg hover:bg-hover inline flex items-center gap-2">
                        <Image
                            src={'/statics/menu/happy.png'}
                            width={25}
                            height={25} 
                            alt={"Logo"}
                            style={{ filter: 'brightness(0) invert(1)' }} 
                        />
                        <p>Help center</p>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}

export default Topbar;