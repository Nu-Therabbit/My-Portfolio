import Image from "next/image";
import img from "../../public/rounded-text.png"
import {HiArrowRight} from "react-icons/hi2";

const ProjectsBtn = () => {
    const scrollToExperience = () => {
        window.dispatchEvent(new Event('scrollToExperience'))
        setTimeout(() => {
            document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})
        }, 100)
    }

    return (
        <div className={"mx-auto xl:mx-0"}>
            <div
                className={"relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer"}
                onClick={scrollToExperience}>
                <Image className={"animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"}
                       src={img}
                       alt={''}
                       width={141}
                       height={148}
                />
                <HiArrowRight
                    className={"absolute text-4xl group-hover:translate-x-2 transition-all duration-300"}/>
            </div>
        </div>
    )
};

export default ProjectsBtn;