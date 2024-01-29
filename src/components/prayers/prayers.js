import Image from 'next/image'
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
                    <div className={`text-2xl  mt-7 ${DKFont.className}`}>
                        Leave Us Your Prayers
                    </div>
                    <form>
                        <div className={`flex flex-col p-3 max-w-96 mx-auto ${geraniumFont.className}`}>
                            <input name="name" placeholder="Name" required className='mb-2'/>
                            <textarea name="wishes" placeholder="Wishes"/>
                            <button type="submit" className={styles.button}>Post Prayer</button>
                        </div>
                    </form>
                    <div className='m-4 mx-auto max-w-2xl'>
                        <div className={`${geraniumFont.className} text-left px-3`}>from <span className="font-bold">Steven Gerard</span></div>
                        <div className={`${geraniumFont.className} text-left text-xs px-3`}>Monday, January 1st 2024</div>
                        <div className={`${geraniumFont.className} text-3xl text-center p-4`}>Happy wedding blablablablaba</div>
                    </div>
                </div>
            </div>
        </>
    )
}
