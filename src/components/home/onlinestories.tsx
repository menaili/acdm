import Image from "next/image";


  
const Onlinestories: React.FC = () => {
    return(
        <div>
            {/* line chart */}
            <h1 className="text-2xl capitalize ">Instructor Online</h1>
            <div className="w-full h-auto flex mx-auto my-auto">
                <div className='flex flex-row gap-2 p-4 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 w-fit p-[3px]">
                        <Image
                            src={'/profile/portrait-man-laughing.jpg'}
                            width={55}
                            height={55}
                            alt={"profile"}
                            className="rounded-full bg-main p-1"
                        />
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 w-fit p-[3px]">
                        <Image
                            src={'/profile/portrait-man-laughing.jpg'}
                            width={55}
                            height={55}
                            alt={"profile"}
                            className="rounded-full bg-main p-1"
                        />
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 w-fit p-[3px]">
                        <Image
                            src={'/profile/portrait-man-laughing.jpg'}
                            width={55}
                            height={55}
                            alt={"profile"}
                            className="rounded-full bg-main p-1"
                        />
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 w-fit p-[3px]">
                        <Image
                            src={'/profile/portrait-man-laughing.jpg'}
                            width={55}
                            height={55}
                            alt={"profile"}
                            className="rounded-full bg-main p-1"
                        />
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 w-fit p-[3px]">
                        <Image
                            src={'/profile/portrait-man-laughing.jpg'}
                            width={55}
                            height={55}
                            alt={"profile"}
                            className="rounded-full bg-main p-1"
                        />
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 w-fit p-[3px]">
                        <Image
                            src={'/profile/portrait-man-laughing.jpg'}
                            width={55}
                            height={55}
                            alt={"profile"}
                            className="rounded-full bg-main p-1"
                        />
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 w-fit p-[3px]">
                        <Image
                            src={'/profile/portrait-man-laughing.jpg'}
                            width={55}
                            height={55}
                            alt={"profile"}
                            className="rounded-full bg-main p-1"
                        />
                    </div>
        
                </div>
            </div>
        </div>
    )
}

export default Onlinestories;