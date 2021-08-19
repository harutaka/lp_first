import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={`${styles.header} wrapper`}>
            <h1 className="site-title">
                <Link href="/">
                    <a>
                        <Image
                            src="/logo.svg"
                            alt="Profile"
                            width={120}
                            height={40}
                        />
                    </a>
                </Link>
            </h1>
            <nav>
                <ul>
                    <li><Link href="#about"><a>About</a></Link></li>
                    <li><Link href="#bicycle"><a>Bicycle</a></Link></li>
                </ul>
            </nav>
        </header>
    );
}