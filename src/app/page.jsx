import Image from "next/image"
import homeimage from '../assets/homeimage.webp'

export default function Home(){
    return (
        <>
            <div className="px-[7%]">
                <div className="bg-gray-500 h-[110vh] w-full">
                    <div className="bg-black h-full w-[55%]">
                        <Image src={homeimage} className="h-[50%] object-cover"/>
                        <div className="text-white ps-[5%]">
                            <div className="">
                                <h1 className="text-[52px] font-bold leading-[65px]">The Tech Trends Driving Major Transformations in</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}