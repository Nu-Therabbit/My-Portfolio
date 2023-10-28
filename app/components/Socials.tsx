import {RiFacebookLine, RiInstagramLine, RiMailLine} from "react-icons/ri";
import Link from "next/link";

export default function Socials() {
    return (
        <div className={'flex items-center gap-x-5 text-xl'}>
            <Link href={''} className={'hover:text-accent transition-all duration-300'}>
                <RiFacebookLine/>
            </Link>
            <Link href={''} className={'hover:text-accent transition-all duration-300'}>
                <RiInstagramLine/>
            </Link>
            <Link href={''} className={'hover:text-accent transition-all duration-300'}>
                <RiMailLine/>
            </Link>
        </div>
    )
};
