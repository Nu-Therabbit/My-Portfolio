import Image from "next/image";
import avatar from '../../public/FB_IMG_1730390240178.png'

const Avatar = () => {
    return (
        <>
            <div className={'hidden xl:flex xl:max-w-none'}>
                <Image className={'translate-z-0 w-full h-full'} src={avatar} width={737} height={678} alt={''}/>
            </div>
        </>
    )
};

export default Avatar;
