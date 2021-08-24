import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et, recusandae fuga laboriosam ipsam ipsum nihil sit enim totam, nulla molestiae. Ut hic obcaecati possimus recusandae nobis voluptas cumque quos.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et, recusandae fuga laboriosam ipsam ipsum nihil sit enim totam, nulla molestiae. Ut hic obcaecati possimus recusandae nobis voluptas cumque quos.</p>
      <Link href="/users">
        <a className={styles.btn}>See User Listing</a>
      </Link>
    </div>
  )
}
