import Image from 'next/image'
import styles from './mainvisual.module.css'

export default function Mainvisual() {
    return (
        <div className={styles.mainvisual}>
            <Image
                src="/mainvisual.jpg"
                alt="テキスト"
                width={1920}
                height={600}
                className={styles.mainImg}
            />
        </div>
    );
}