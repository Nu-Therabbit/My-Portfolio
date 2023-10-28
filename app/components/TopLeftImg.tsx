import Image from "next/image";
import img from '../../public/top-left-img.png'

export default function TopLeftImg() {
    return (
        <>
            <div className={"absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50"}>
                <Image src={img}
                       alt={''}
                       priority={true}
                       width={400}
                       height={400}
                ></Image>
            </div>
        </>
    )
}
