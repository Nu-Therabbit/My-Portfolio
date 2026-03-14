import {RiFacebookLine, RiGithubLine, RiInstagramLine, RiMailLine} from "react-icons/ri";
import Link from "next/link";

export default function Socials() {
    return (
        <div className={'flex items-center gap-x-5 text-xl'}>
            <Link href={'https://github.com/Nu-Therabbit'} target={'_blank'}
                  className={'hover:text-accent transition-all duration-300'}>
                <RiGithubLine/>
            </Link>
            <Link href={'mailto:anusornpromjan@gmail.com'} className={'hover:text-accent transition-all duration-300'}>
                <RiMailLine/>
            </Link>
            <Link href={''} className={'hover:text-accent transition-all duration-300'}>
                <RiFacebookLine/>
            </Link>
            <Link href={''} className={'hover:text-accent transition-all duration-300'}>
                <RiInstagramLine/>
            </Link>
        </div>
    )
};