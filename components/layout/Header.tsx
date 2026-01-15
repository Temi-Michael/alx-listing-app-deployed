import Image from "next/image"
import Button from "../common/Button"
import localFont from "next/font/local"

const quickSand = localFont({
    src: '../../public/fonts/Quicksand-Regular.woff2'
})

const Header: React.FC = () => {

    return (
        <>
            <div className={`grid grid-cols-[0.5fr_2fr_1fr] justify-center-safe items-center p-3 bg-white text-black ${quickSand.className}`}>
                <div className="w-fit">
                    <Image src="/assets/Logo/LogoShowcase.svg" width={70} height={70} alt="alx Logo" />
                </div>
                <div className="flex w-fit p-2 ml-20 items-center rounded-full bg-neutral-100 shadow-xl">
                    <section className="pl-5">
                        <p>
                            Location
                        </p>
                        <input type="text" placeholder="Search for destination" className="font-light text-stone-300 w-auto mr-3 outline-none" />
                    </section>
                    <div className="w-0.5 h-10 bg-gray-300"></div>
                    <section className="pl-3">
                        <p>
                            Check In
                        </p>
                        <input type="text" placeholder="Add date" className="font-light text-stone-300 w-30 mr-3 outline-none" />
                    </section>
                    <div className="w-0.5 h-10 bg-gray-300"></div>
                    <section className="pl-3">
                        <p>
                            Check Out
                        </p>
                        <input type="text" placeholder="Add date" className="font-light text-stone-300 w-30 mr-3 outline-none" />
                    </section>
                    <div className="w-0.5 h-10 bg-gray-300"></div>
                    <section className="pl-3">
                        <p>
                            People
                        </p>
                        <input type="text" placeholder="Add guest" className="font-light text-stone-300 w-30 mr-3 outline-none" />
                    </section>
                    <div className="w-0.5 h-10 bg-gray-300"></div>
                    <section className="bg-amber-500 rounded-full w-10 h-10 ml-7">
                        <div className=""></div>
                    </section>
                </div>
                <div className="flex justify-end items-center gap-4">
                    <Button text="Sign in" bgColor="bg-teal-600" color="text-white" />
                    <Button text="Sign up" bgColor="bg-transparent" color="text-black" border="border" borderColor="border-gray-300" />
                </div>
            </div>
            <hr />
        </>

    )
}

export default Header