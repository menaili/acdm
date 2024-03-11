import Image from "next/image";


const Coursestable: React.FC = () => {
    return(
        <div>
            <div className="my-4">
                <h2 className="text-2xl capitalize">Courses progress</h2>
            </div>

            <div className="bg-main p-4 my-4 rounded-2xl">
                <table className="h-auto w-full">
                    <thead>
                        <tr className="text-left text-gray h-10 border-b-2 border-second">
                            <th className="">COURSE NAME</th>
                            <th className="">PROGRESS</th>
                            <th className="">INSTRACTOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-left h-12 border-b-2 border-second hover:bg-hover hover:rounded-lg hover:scale-105 mx-2 p-5 transition duration-300 ease-in-out">
                            <td className="flex items-center">
                                <Image
                                    src={"/courses/Figma.png"}
                                    width={30}
                                    height={30}
                                    alt={"course pic"}
                                    className="m-2"
                                />
                                <ul className="list-none">
                                    <li>Introduction in figma</li>
                                    <li className="text-gray text-base">learn basics</li>
                                </ul>
                            </td>
                            <td>14/<span className="text-gray">30</span> (46%)</td>
                            <td className="text-clickable">Doctor Champ</td>
                        </tr>

                        <tr className="text-left h-12 border-b-2 border-second hover:bg-hover hover:rounded-lg hover:scale-105 mx-2 p-5 transition duration-300 ease-in-out">
                            <td className="flex items-center">
                                <Image
                                    src={"/courses/Figma.png"}
                                    width={30}
                                    height={30}
                                    alt={"course pic"}
                                    className="m-2"
                                />
                                <ul className="list-none">
                                    <li>Introduction in figma</li>
                                    <li className="text-gray text-base">learn basics</li>
                                </ul>
                            </td>
                            <td>14/<span className="text-gray">30</span> (46%)</td>
                            <td className="text-clickable">Doctor Champ</td>
                        </tr>

                        <tr className="text-left h-12 border-b-2 border-second hover:bg-hover hover:rounded-lg hover:scale-105 mx-2 p-5 transition duration-300 ease-in-out">
                            <td className="flex items-center">
                                <Image
                                    src={"/courses/Figma.png"}
                                    width={30}
                                    height={30}
                                    alt={"course pic"}
                                    className="m-2"
                                />
                                <ul className="list-none">
                                    <li>Introduction in figma</li>
                                    <li className="text-gray text-base">learn basics</li>
                                </ul>
                            </td>
                            <td>14/<span className="text-gray">30</span> (46%)</td>
                            <td className="text-clickable">Doctor Champ</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}

export default Coursestable;