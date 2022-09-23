import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>SlicedPixel</h1>
      <p className={styles.paragraphs} >
        <a className={styles.link} href="mailto:wildiney@gmail.com" > wildiney@gmail.com</a>
      </p>
    </div>
  )
}
