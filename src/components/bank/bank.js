import Image from "next/image";
import localFont from 'next/font/local';
import { IoIosCopy } from "react-icons/io";
import { motion } from 'framer-motion';
import { toast } from "react-hot-toast";

const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})

export default function Bank() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                >
                <div className={`${DKFont.className} text-center text-3xl pt-3`}>Send Us Some Love</div>
                <div className={`${geraniumFont.className} text-center pb-3 px-3`}>Your presence is the best gift of all. However, if you wish to honor us with a gift, you may share below. Thank you!</div>
            </motion.div>
            <div className="flex flex-row mx-auto gap-7 items-end  max-w-fit px-3 pb-7">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    >
                    <Image
                        src="/asset/BCA_logo.svg"
                        width={150}
                        height={100}
                        alt="bca logo"
                        className="mx-auto mt-5"
                    />
                    <div className="text-center">Al Atur Aji Dio Utomo</div>
                    <div className="flex flex-row max-w-min mx-auto items-center gap-2">
                        <div className="text-center">2990784160</div>
                        <button 
                            className="bg-white p-1 border-solid border-orange-500 border-2 rounded-full"
                            onClick={() =>  {
                                navigator.clipboard.writeText('2990784160');
                                toast.success('account number copied')
                            }}>
                            <IoIosCopy className="text-orange-500"/>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    >

                    <Image
                        src="/asset/BNI_logo.svg"
                        width={150}
                        height={150}
                        alt="bca logo"
                        className="mx-auto mt-5"
                    />
                    <div className="text-center">Suyanti Multazami</div>
                    <div className="flex flex-row max-w-min mx-auto items-center gap-2">
                        <div className="text-center">0401721596</div>
                        <button 
                            className="bg-white p-1 border-solid border-orange-500 border-2 rounded-full"
                            onClick={() =>  {
                                navigator.clipboard.writeText('0401721596');
                                toast.success('account number copied')
                            }}
                            >
                            <IoIosCopy className="text-orange-500"/>
                        </button>
                    </div>
                </motion.div>
            </div>
            
            
        </>
    )
}
