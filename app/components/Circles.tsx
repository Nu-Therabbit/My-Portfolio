import img from '../../public/circles.png'
import Image from "next/image";

const Circles = () => {
    return (
        <>
            <div
                className={"absolute mix-blend-color-dodge w-[200px] xl:w-[300px] -right-16 -bottom-2 animate-pulse duration-75 z-10"}>
                <Image src={img}
                       alt={''}
                       width={260}
                       height={200}
                       className={'w-full h-full'}
                ></Image>
            </div>
        </>
    )
};

export default Circles;
