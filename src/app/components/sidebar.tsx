import Image from "next/image";

const Sidebar: React.FC = () => {

    return(
        <div className="flex flex-col justify-around items-center fixed bg-main h-screen w-16 p-1">
            <div>
                <Image
                    src={'/statics/logo/mortarboard.png'}
                    width={40}
                    height={40} 
                    alt={"Logo"}                
                />
            </div>

            <div className="flex flex-col justify-between gap-3">
                <div className="my-1 p-1 rounded-lg hover:bg-hover">
                    <Image
                        src={'/statics/menu/app.png'}
                        width={30}
                        height={30} 
                        alt={"Logo"}
                        style={{ filter: 'brightness(0) invert(1)' }} 
                    />
                </div>

                <div className="my-1 p-1 rounded-lg hover:bg-hover">
                    <Image
                        src={'/statics/menu/people.png'}
                        width={30}
                        height={30} 
                        alt={"Logo"}
                        style={{ filter: 'brightness(0) invert(1)' }} 
                    />
                </div>

                <div className="my-1 p-1 rounded-lg hover:bg-hover relative">
                    <Image
                        src={'/statics/menu/notification.png'}
                        width={30}
                        height={30} 
                        alt={"Logo"}
                        style={{ filter: 'brightness(0) invert(1)' }} 
                    />
                    <div className="absolute top-2 right-2 w-3 h-3 bg-red rounded-full"></div>
                </div>

                <div className="my-1 p-1 rounded-lg hover:bg-hover">
                    <Image
                        src={'/statics/menu/message.png'}
                        width={30}
                        height={30} 
                        alt={"Logo"}
                        style={{ filter: 'brightness(0) invert(1)' }} 
                    />
                </div>

                <div className="my-1 p-1 rounded-lg hover:bg-hover">
                    <Image
                        src={'/statics/menu/list.png'}
                        width={30}
                        height={30} 
                        alt={"Logo"}
                        style={{ filter: 'brightness(0) invert(1)' }} 
                    />
                </div>

                <div className="my-1 p-1 rounded-lg hover:bg-hover">
                    <Image
                        src={'/statics/menu/settings.png'}
                        width={30}
                        height={30} 
                        alt={"Logo"}
                        style={{ filter: 'brightness(0) invert(1)' }} 
                    />
                </div>
            </div>
            <div>
            <Image
                    src={'/profile/portrait-man-laughing.jpg'}
                    width={40}
                    height={40}
                    alt={"profile"}    
                    className="rounded-full"            
                />
            </div>
        </div>
    )
}

export default Sidebar;