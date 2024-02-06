import Image from 'next/image'
import styles from './styles.module.css'
import localFont from 'next/font/local';
import { FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion';

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})

const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

export default function Welcome() {
    return (
        <>
            <div className={styles.imgContainer}>

                <Image
                        src="/asset/bg1.png"
                        fill={true}
                        alt="flower1"
                        style={{
                            objectFit: 'cover',
                        }}
                        className='brightness-50'
                    />
                <div className={styles.container}>

                    <div className={styles.text}>
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            >
                            <div className={DKFont.className}>
                                <h1 className="pt-14 text-3xl pb-5">We are Tying the Knot</h1>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            >

                            <div className={styles.dalil}>
                                <div className={geraniumFont.className}>
                                    <p className="mt-5 text-xl mx-5">"and of His signs is that He created spouses from among yourselves for you to live with in tranquility : He ordained love and kindness between you. There truly are signs in this for those who reflect". </p>
                                    <p className="mt-2">Qur'an (30:21)</p>
                                </div>
                            </div>
                        </motion.div>
                        </div>
                    
                    <div className='mt-14'>
                    <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            >

                           
                        <Image
                                src="/pictures/dio.jpg"
                                height='240'
                                width='240'
                                alt="dio"
                                className='m-auto'
                            />
                    </motion.div>
                    <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0}}
                            transition={{ ease: "easeOut", duration: 2 }}
                            >

                            
                        <div className={styles.text}>
                            <div className={DKFont.className}>
                                <h1 className='text-xl'>
                                    Al Atur Aji Dio Utomo, M. Sos.
                                </h1>
                            </div>
                            <div className={geraniumFont.className}>
                                <p className='w-80 mx-auto pt-3 px-3'>
                                    The eldest son of Bpk. H. Eko Handayanto & Ibu. Hj. Tias Susanti, S.Pd.I
                                </p>
                            </div>
                            <div className={geraniumFont.className}>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <FaInstagram /> 
                                    <div>
                                        @alajidio
                                    </div>
                                </div>
                            </div>
                        </div>
                        </motion.div>
                        <div className='my-9 text-3xl'>
                            <div className={styles.text}>
                                <div className={geraniumFont.className}>
                                    &
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            >
                            <Image
                                    src="/pictures/izmi.jpg"
                                    height='240'
                                    width='240'
                                    alt="dio"
                                    className='m-auto'
                                />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            >
                        <div className={styles.text}>
                            <div className={DKFont.className}>
                                <h1 className='text-xl'>
                                    Izmi Multazami, S.Pd.
                                </h1>
                            </div>
                            <div className={geraniumFont.className}>
                                <p className='w-80 mx-auto pt-3 px-3'>
                                    The second daughter of Bpk. H. Paturakhman & Ibu. Hj. N.E. Srimulyati, S.Pd. 
                                </p>
                            </div>
                            <div className={`${geraniumFont.className} pb-24`}>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <FaInstagram /> 
                                    <div>
                                        @sugoizmi
                                    </div>
                                </div>
                            </div>
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
