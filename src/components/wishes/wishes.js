import localFont from 'next/font/local';
import styles from './styles.module.css'



const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})

export default function Wishes() {
    return (
        <div className={`${styles.card} m-7 mx-auto max-w-2xl`}>
            <div className={`${geraniumFont.className} text-left px-3`}>from <span className="font-bold">Steven Gerard</span></div>
            <div className={`${geraniumFont.className} text-left text-xs px-3`}>Monday, January 1st 2024</div>
            <div className={`${geraniumFont.className} text-2xl text-center p-4`}>Happy wedding blablablablaba</div>
        </div>
    )
}
