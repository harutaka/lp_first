import Image from 'next/image'
import styles from './about.module.css'

export default function About() {
    return (
        <section id="about" className="wrapper">
            <h2 className="section-title">About</h2>
            <div className={styles.content}>
                <div className={styles.imgblock}>
                    <Image
                        src="/about.jpg"
                        className={styles.img}
                        width={100}
                        height={100}
                        alt="テキストテキストテキスト"
                    />
                </div>
                <div className={styles.text}>
                    <h3 className="content-title">Taro Yamada</h3>
                    <p>
                        テキストテキストテキストテキストテキストテキストテキスト<br />
                        テキストテキストテキストテキストテキストテキストテキスト<br />
                        テキストテキストテキストテキストテキストテキストテキスト
                    </p>
                </div>
            </div>
        </section>
    );
}