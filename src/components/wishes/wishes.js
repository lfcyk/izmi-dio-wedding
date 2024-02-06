import localFont from 'next/font/local';
import styles from './styles.module.css'
import { format } from 'date-fns';
import { motion } from 'framer-motion'



const DKFont = localFont({
	src: './../../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

const geraniumFont = localFont({
	src: './../../../src/fonts/Geranium.otf',
	display: 'swap',
})

export default function Wishes(props) {
    const wishes = props.wishes?.toReversed();

    return (
        <>
            {wishes?.map((pray) => {
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        >

                        <div className={`${styles.card} m-7 mx-auto max-w-2xl p-3`}>
                            <div className={`${geraniumFont.className} text-left px-3`}>from <span className="font-bold text-orange-500">{pray.name}</span></div>
                            <div className={`${geraniumFont.className} text-left text-xs px-3 text-gray-500`}>{format(new Date(), "cccc', 'dd-MM-yyyy' 'HH:mm 'WIB")}</div>
                            <div className={`${geraniumFont.className} text-2xl text-center p-4 `}>{pray.wish}</div>
                        </div>
                    </motion.div>
                )
            })
            }
        </>
    )
}
