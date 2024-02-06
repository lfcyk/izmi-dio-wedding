import Image from 'next/image'
import styles from './styles.module.css'
import localFont from 'next/font/local';
import { motion } from 'framer-motion'
import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { ClipLoader } from 'react-spinners';
const fetcher = url => fetch(url).then(r => r.json())

const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})

export default function Prayers() {
    const { mutate } = useSWRConfig()

    const [prayerInfo, setPrayerInfo] = useState({ "name": "", "wish": "" });
    const [showLoader, setShowLoader] = useState(false);

    const handleChange = (event) => {
        setPrayerInfo({
            "name": event.target.form[0].value,
            "wish": event.target.form[1].value,
        });
    };

    const handleSubmit = async (e) => {
        setShowLoader(true);
        setTimeout(() => setShowLoader(false), 2000);

        await fetch('/api/postWishes', {
            method: 'POST',
            body: JSON.stringify(prayerInfo),
            headers: {
            'content-type': 'application/json'
            }
        })
        .then((response) => {
            return {
                text: response.text(),
                isOk: response.ok,
            }
        })

        await mutate(`/api/getWishes`);
    }

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
                            <input name="name" placeholder="Name" required className='mb-2' onChange={handleChange}/>
                            <textarea name="wishes" placeholder="Wishes" onChange={handleChange}/>
                            <button type="button" className={styles.button} onClick={handleSubmit}>
                                {showLoader
                                    ?   <ClipLoader color="#FFFFFF" size={10}/>
                                    :   "Submit"
                                }
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
