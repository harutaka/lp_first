import Image from 'next/image'
import styles from './bicycle.module.css'

const imgs = ["/bicycle1.jpg", "/bicycle2.jpg", "/bicycle3.jpg"]

export default function Bicycle() {
    return (
      <section id="bicycle" className="wrapper">
        <h2 className="section-title">Bicycle</h2>
        <ul className={styles.ul}>
            {imgs.map((item) => {
                return (
                    <li className={styles.li} key={item}>
                        <Image src={item} alt="テキストテキストテキスト" width={640} height={424} />
                        <h3 className="content-title">タイトルタイトル</h3>
                        <p>テキストテキストテキスト</p>
                    </li>
                )
            })}
        </ul>
      </section>
    );
}