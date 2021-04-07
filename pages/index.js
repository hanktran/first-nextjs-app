import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam adipisci nulla itaque laboriosam odit aliquam quasi, quisquam sequi, aliquid iure. Odit fugiat alias porro debitis quia nostrum. Culpa, id?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam adipisci nulla itaque laboriosam odit aliquam quasi, quisquam sequi, aliquid iure. Odit fugiat alias porro debitis quia nostrum. Culpa, id?</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
