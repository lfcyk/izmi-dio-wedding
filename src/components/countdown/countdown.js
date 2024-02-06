'use client';

import Image from 'next/image'
import styles from './styles.module.css'
import localFont from 'next/font/local';
import { differenceInDays, differenceInMinutes, differenceInHours, differenceInSeconds, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})



export default function Countdown() {
    const date = new Date(2024, 1, 18, 8, 0);
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    })
    return (
        <>
            <div className={styles.imgContainer}>
                <div className={styles.flower}>
                    <Image
                            src="/asset/flower3.png"
                            fill={true}
                            alt="flower1"
                            style={{
                                objectFit: 'cover',
                                transform: 'scale(1.7) translateX(70px)',
                                overflow: 'hidden',
                            }}
                        />
                </div>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        >
                        <div className={DKFont.className}>
                            <div className="pt-20 text-3xl text-white mx-auto max-w-fit">
                                February 18th, 2024
                            </div>
                        </div>
                        <Image 
                            src="/asset/save-the-date.gif"
                            height={240}
                            width={240}
                            alt="save-the-date"
                            className='mx-auto my-11'
                            />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        >

                        <div className={geraniumFont.className}>
                            <div className='flex flex-row gap-5 max-w-fit mx-auto text-2xl text-white'>
                                <div className='flex flex-col'>
                                    <div>
                                        {differenceInDays(date, time)}
                                    </div>
                                    <div>
                                        Days
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div>
                                        {differenceInHours(date, time) % 24}
                                    </div>
                                    <div>
                                        Hours
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div>
                                        {differenceInMinutes(date, time) % 60}
                                    </div>
                                    <div>
                                        Minutes
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div>
                                        {differenceInSeconds(date, time) % 60}
                                    </div>
                                    <div>
                                        Seconds
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
