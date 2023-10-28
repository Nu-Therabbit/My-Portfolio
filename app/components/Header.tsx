import Link from "next/link";
import Socials from "@/app/components/Socials";

export default function Header() {
    return (
        <header className={'absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'}>
            <div className={'container mx-auto'}>
                <div
                    className={'flex flex-col lg:flex-row justify-between items-center gap-y-6 md:gap-y-3 sm:gap-y-3'}>
                    <Link href={'/'}>
                        <h1 className={'text-[38px] font-sora'}>
                            <span className={'text-accent'}>Nu </span>
                            Anusorn
                            <span className={'text-accent'}>.</span>
                        </h1>
                    </Link>
                    <Socials/>
                </div>
            </div>
        </header>
    )
}
