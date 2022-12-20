import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>People List | Home</title>
    </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium expedita nesciunt laborum nostrum, enim maiores aut molestiae reiciendis, quis quisquam explicabo in modi odit, ratione ducimus impedit. Doloremque, temporibus tempore?</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium expedita nesciunt laborum nostrum, enim maiores aut molestiae reiciendis, quis quisquam explicabo in modi odit, ratione ducimus impedit. Doloremque, temporibus tempore?</p>
        <Link href="/people" className={styles.btn}>See people listing</Link>
      </div>
    </>
  )
}
