import './story.css'
import {education} from '@/_data/about'

export default function Story() {
    return (
        <>
            <section>
                {education.map((item, index) => {
                    return <div key={index} className="relative sm:table sm:table-fixed w-[100%] pb-6 last:pb-0">
                        <div
                            className="text-start ml-[15%] pl-8 sm:text-right sm:w-[30%] sm:pr-8 sm:table-cell max-h-full align-top">
                            <h5 className="mt-[3px] text-sm">{item.period}</h5>
                            <span className="text-[13px]">{item.category}</span>
                        </div>
                        <div className="divider-flag animate-pulse"></div>
                        <div className="text-start ml-[15%] pl-8 sm:ml-0">
                            <h4 className="text-[16px] mb-1/2 text-white">{item.company}</h4>
                            <p className={'text-sm'}>{item.department}</p>
                        </div>
                    </div>
                })}
            </section>
        </>
    )
}
