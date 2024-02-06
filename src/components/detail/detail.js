import Image from 'next/image'
import styles from './styles.module.css'
import localFont from 'next/font/local';
import { FaMapMarkedAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})

export default function Detail() {
    return (
        <>
            <div className={styles.imgContainer}>
                <div className={styles.flower}>
                    <Image
                            src="/asset/bg-note.png"
                            fill={true}
                            alt="flower1"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                </div>
                <div className={styles.container}>
                    <div className='text-amber-900 mb-16'>
                        <div className={DKFont.className}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ ease: "easeOut", duration: 2 }}
                                >
                                <div className="pt-11 text-2xl mx-auto max-w-fit ">
                                    Witness our sacred ceremony
                                </div>
                            </motion.div>
                        </div>
                        <div className={geraniumFont.className}>
                            <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            >

                                <div className='mt-3'>Sunday</div>
                            </motion.div>
                            <div className='flex flex-row  max-w-fit mx-auto gap-2'>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ ease: "easeOut", duration: 2 }}
                                >
                                    <div className='text-5xl'>
                                        18
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ ease: "easeOut", duration: 2 }}
                                    >

                                    <div className='flex flex-col items-start'>
                                        <div>
                                            February
                                        </div>
                                        <div>
                                            2024
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ ease: "easeOut", duration: 2 }}
                                >
                                <div className='flex flex-row justify-around mb-7 max-w-72 mx-auto'>
                                    <div className='flex flex-col'>
                                        <div className={DKFont.className}>
                                            <div className='text-xl mt-7'>
                                                Akad Nikah
                                            </div>
                                        </div>
                                        <div className={geraniumFont.className}>
                                            <div className='text-xs mb-2'>
                                                08:00 - end
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className={DKFont.className}>
                                            <div className='text-xl mt-7'>
                                                Resepsi
                                            </div>
                                        </div>
                                        <div className={geraniumFont.className}>
                                            <div className='text-xs mb-2'>
                                                11:00 - 14:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={geraniumFont.className}>
                                    <div className="text-sm">Rumah Makan Saung Ema'</div>
                                    <div className="text-sm">Jalan RA Moetarsih , Kuningan, Kecamatan Kuningan, Kabupaten Kuningan</div>
                                    <a href="https://maps.google.com/?cid=4004019819268301902" target="_blank">
                                        <button className={styles.button}>
                                            <div className='flex flex-row gap-2 items-center justify-center'>
                                                <FaMapMarkedAlt/>
                                                <div>
                                                    View Map
                                                </div>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </motion.div>
                            
                        </div>
                        
                    </div>
                </div>           
            </div>
        </>
    )
}
