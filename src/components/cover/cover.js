import Image from "next/image";
import styles from './styles.module.css'

export default function Cover() {
    return (
        <div className={styles.container}>  
            <div className={styles.coverPicture}>
                <Image
                    src="/pictures/BZS01648.jpg"
                    fill={true}
                    alt="izmi & Dio"
                    style={{
                        objectFit: 'cover',
                    }}
                    />
            </div>
            <div className={styles.theWeddingOf}>
                <Image
                    src="/asset/the-wedding-of.png"
                    height={100}
                    width={300}
                    alt="izmi & Dio"
                    />
            </div>
            <div className={styles.names}>
                <Image
                    src="/asset/names.png"
                    height={100}
                    width={250}
                    alt="names"
                    />
            </div>
            <div className={styles.datetime}>
                <Image
                    src="/asset/datetime.png"
                    height={100}
                    width={250}
                    alt="datetime"
                    />
            </div>
            <div
                className={styles.flower1}>
                <Image
                    src="/asset/buttonflower.png"
                    height={100}
                    width={800}
                    alt="flower1"
                />
            </div>
        </div>
    )
}
