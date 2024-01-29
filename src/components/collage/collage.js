import Image from "next/image";
import styles from './styles.module.css'
import localFont from 'next/font/local';

const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})

export default function Collage() {
    return (
        <>
            <div className={styles.imgContainer}>
                <div className={styles.flower}>
                    <Image
                            src="/asset/o (17).png"
                            fill={true}
                            alt="flower1"
                            style={{
                                objectFit: 'contain',
                                transform: 'translate(-7%, -40%) scale(1.7)',
                            }}
                        />
                </div>
                <div className={styles.container}>
                    <div className="m-5 text-amber-900 max-w-72 mx-auto text-xl">
                        <div className={DKFont.className}>
                            "You're my violet in the sun, you're the chosen one" - Daniel Caesar.
                        </div>
                    </div>
                    <div className="h-48  grid grid-cols-4 gap-2 max-w-80 mx-auto">
                            <div className={styles.collageFrame}>
                                <Image
                                    src="/pictures/BZS01865.jpg"
                                    fill={true}
                                    alt="collage"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <div className={`col-span-2 ${styles.collageFrame}`}>
                                <Image
                                    src="/pictures/BZS01478.jpg"
                                    fill={true}
                                    alt="collage"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <div className={styles.collageFrame}>
                                <Image
                                    src="/pictures/BZS01685.jpg"
                                    fill={true}
                                    alt="collage"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <div className={styles.collageFrame}>
                                <Image
                                    src="/pictures/BZS01662.jpg"
                                    fill={true}
                                    alt="collage"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <div className={`col-span-2 ${styles.collageFrame}`}>
                                <Image
                                    src="/pictures/BZS01800.jpg"
                                    fill={true}
                                    alt="collage"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <div className={styles.collageFrame}>
                                <Image
                                    src="/pictures/BZS01600.jpg"
                                    fill={true}
                                    alt="collage"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
