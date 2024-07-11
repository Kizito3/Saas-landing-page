import Social from '../assets/Socials.png'
import Social2 from '../assets/Socials2.png';
import Social3 from '../assets/Socials3.png';
import Social4 from '../assets/Socials4.png';
import Image from 'next/image'

export const Footer = () => {
    return(
        <footer className='bg-black text-white/60 py-5 border-t border-white/20'>
            <div className="container">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                    <div className="text-center">&copy; 2024 Your Company, Inc. All rights reserved</div>
                    <ul className="flex justify-center gap-2.5">
                        <li>
                            <Image src={Social} alt="socilas" />
                        </li>
                        <li>
                            <Image src={Social2} alt="socilas" />
                        </li>
                        <li>
                            <Image src={Social3} alt="socilas" />
                        </li>
                        <li>
                            <Image src={Social4} alt="socilas" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}