import Image from "next/image"
import localFont from 'next/font/local'

const quickSand = localFont({
    src : '../../public/fonts/Quicksand-Regular.woff2'
})


const Footer: React.FC = () => {
    return (
        <div className={`${quickSand.className}`}>
            <footer className="grid grid-cols-2 w-full border-t-20 p-3 gap-5 border-teal-600 text-stone-300 bg-neutral-950 ">
                <div className="">
                    <Image src="/assets/Logo/Vector.svg" className="mb-4" alt="alx_logo" aria-description="alx logo" width={100} height={100} />
                    <p className={`text-[16px] font-semibold w-4/5`}>
                        ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
                    </p>
                </div>
                <div className="grid grid-cols-3">
                    <div className="">
                        <p className={`text-[25px] font-semibold`}>Explore</p>
                        <ul className="mt-3 font-[16px]">
                            <li>Apartments in Dubai</li>
                            <li>Hotels in New York</li>
                            <li>Villa in Spain</li>
                            <li>Mansion in Indonesia</li>
                        </ul>
                    </div>
                    <div>
                        <p className={`text-[25px] font-semibold`}>Company</p>
                        <ul className="mt-3 font-[16px]">
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Career</li>
                            <li>Customers</li>
                            <li>Brand</li>
                        </ul>
                    </div>
                    <div>
                        <p className={`text-[25px] font-semibold ${quickSand.className}`}>Help</p>
                        <ul className="mt-3 font-[16px]">
                            <li>Support</li>
                            <li>Cancel booking</li>
                            <li>Refunds Process</li>
                        </ul>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer