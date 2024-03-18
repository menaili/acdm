import { Progress, ProgressProps } from "antd";
import Image from "next/image";

const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };
  
const Mostcourses: React.FC = () => {
    return(
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-row justify-between items-center my-4">
                <h1 className="text-5xl">Most courses</h1>
                <button className="text-sm bg-clickable px-2 py-1 rounded-lg">ENROLL NOW</button>
            </div>

            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-around gap-4 w-full my-4">
                 
                <div className="w-60 h-auto rounded-2xl bg-main hover:bg-hover hover:scale-110 mx-2 px-5 py-9 transition duration-300 ease-in-out">
                    <div className="flex flex-row h-auto justify-between">
                        <div>
                            <Image 
                                src={"/courses/Figma.png"}
                                alt={"Course logo"}
                                width={80}
                                height={80}
                            />
                        </div>
                            
                        <div>
                            <Image 
                                src={"/statics/star.png"}
                                alt={"favorit"}
                                width={16}
                                height={16}
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </div>
                    </div>
                    <div className="my-4">
                        <h1 className="text-3xl">Figma</h1>
                    </div>

                    <div className="">
                        <p className="text-gray">Progress 16/30</p>
                        <Progress percent={47} strokeColor={twoColors} />
                    </div>
                </div>

                <div className="w-60 h-auto rounded-2xl bg-main hover:bg-hover hover:scale-110 mx-2 px-5 py-9 transition duration-300 ease-in-out">
                    <div className="flex flex-row justify-between">
                        <div>
                            <Image 
                                src={"/courses/Figma.png"}
                                alt={"Course logo"}
                                width={80}
                                height={80}
                            />
                        </div>
                            
                        <div>
                            <Image 
                                src={"/statics/starGold.png"}
                                alt={"favorit"}
                                width={16}
                                height={16}
                            />
                        </div>
                    </div>
                    <div className="my-4">
                        <h1 className="text-3xl">Figma</h1>
                    </div>

                    <div className="">
                        <p className="text-gray">Progress 16/30</p>
                        <Progress percent={100} strokeColor={twoColors} />
                    </div>
                </div>

                <div className="w-60 h-auto rounded-2xl bg-main hover:bg-hover hover:scale-110 mx-2 px-5 py-9 transition duration-300 ease-in-out">
                    <div className="flex flex-row justify-between">
                        <div>
                            <Image 
                                src={"/courses/Figma.png"}
                                alt={"Course logo"}
                                width={80}
                                height={80}
                            />
                        </div>
                            
                        <div>
                            <Image 
                                src={"/statics/star.png"}
                                alt={"favorit"}
                                width={16}
                                height={16}
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </div>
                    </div>
                    <div className="my-4">
                        <h1 className="text-3xl">Figma</h1>
                    </div>

                    <div className="">
                        <p className="text-gray">Progress 16/30</p>
                        <Progress percent={70} strokeColor={twoColors} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Mostcourses;