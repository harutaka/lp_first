import { css } from "@linaria/core"
import Image from "next/image"
import Link from "next/link"

const styles = {
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  `,

  ul: css`
    display: flex;
    padding: 10px 0;
  `,

  li: css`
    margin-left: 30px;
  `,

  link: css`
    color: #24292e;
  `,
}

const Header = () => {
  return (
    <header className={`${styles.header} wrapper`}>
      <h1 className="site-title">
        <Link href="/">
          <Image src="/logo.svg" alt="Profile" width={120} height={40} />
        </Link>
      </h1>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="#about" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#bicycle" className={styles.link}>
              Bicycle
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
