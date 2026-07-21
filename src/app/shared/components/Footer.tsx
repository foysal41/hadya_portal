import Image from "next/image";
import Link from "next/link";
import {  HiOutlineMapPin,  HiOutlinePhone,  HiOutlineEnvelope,} from "react-icons/hi2";
import logo from "../../../../public/images/logo-hadya.png"

const Footer = () => {
    return (
        <footer className="bg-[#222222] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Logo */}
                    <div>
                        <Image src={logo} alt="Hadya" width={170} height={60}
                        />

                        <p className="text-gray-400 mt-6 leading-7 max-w-xs"> Hadya simplifies Hajj & Umrah management with digital tools for pilgrims, operators and sponsors.
                        </p>
                    </div>

                    {/* Service */}
                    <div>
                        <h3 className="font-semibold text-xl mb-6"> Services </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <Link href="#">Digital Platform</Link>
                            </li>

                            <li>
                                <Link href="#">Tour Operators</Link>
                            </li>

                            <li>
                                <Link href="#">Pilgrim Services</Link>
                            </li>

                            <li>
                                <Link href="#">Knowledge Center</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-xl mb-6">
                            Further Links
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link href="#">Terms & Conditions</Link>
                            </li>

                            <li>
                                <Link href="#">News</Link>
                            </li>

                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-xl mb-6">  Get In Touch </h3>

                        <div className="space-y-5">

                            <div className="flex gap-3">
                                <HiOutlineMapPin className="text-white mt-1 text-xl" />

                                <p className="text-gray-400">
                                    Makkah Road,
                                    <br />
                                    Madinah, Saudi Arabia
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <HiOutlinePhone className="text-white mt-1 text-xl" />

                                <p className="text-gray-400">  +966 123 456 789 </p>
                            </div>

                            <div className="flex gap-3"> <HiOutlineEnvelope className="text-white mt-1 text-xl" />

                                <p className="text-gray-400"> support@hadya.sa  </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
                    Copyright © 2025 Hadya Services | Powered by Hadya
                </div>

            </div>
        </footer>
    );
};

export default Footer;