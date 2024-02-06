import Image from 'next/image'
import styles from './styles.module.css'
import localFont from 'next/font/local';
import { motion } from 'framer-motion'

const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})

export default function Prayers() {
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
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        >

                        <div className={`text-2xl  mt-7 ${DKFont.className}`}>
                            Leave Us Your Prayers
                        </div>
                    </motion.div>
                    <form>
                        <div className={`flex flex-col p-3 max-w-96 mx-auto ${geraniumFont.className}`}>
                            <input name="name" placeholder="Name" required className='mb-2'/>
                            <textarea name="wishes" placeholder="Wishes"/>
                            <button type="submit" className={styles.button}>Post Prayer</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
