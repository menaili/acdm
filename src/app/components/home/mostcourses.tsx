import { Progress, ProgressProps } from "antd";
import Image from "next/image";

const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };
  
const Mostcourses: React.FC = () => {
    return(
        <div className="flex flex-col justify-between h-auto">
            <div className="flex flex-row justify-between items-center my-4">
                <h1 className="text-5xl">Most courses</h1>
            </div>

            <div className="flex flex-row justify-around w-auto my-4">
                 
                <div className="w-52 h-auto rounded-2xl bg-main hover:bg-hover mx-2 p-5">
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

                <div className="w-52 h-auto rounded-2xl bg-main hover:bg-hover mx-2 p-5">
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

                <div className="w-52 h-auto rounded-2xl bg-main hover:bg-hover mx-2 p-5">
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
                <div className="w-52 h-auto rounded-2xl bg-main hover:bg-hover mx-2 p-5">
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