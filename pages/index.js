import Head from "next/head"
import styles from "../styles/Home.module.css"
import Navbar from "../comps/Navbar"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const { name } = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>{name === undefined ? "Hey" : name},{" you're invited."}</title>
        <meta name="title" content="Intechgration's grad party" />
        <meta name="description" content="invitation to join intech's first cohort grad party 🎉" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://invite.intechgration.io/"/>
        <meta property="og:title" content="Intechgration's grad party"/>
        <meta property="og:description" content="invitation to join intech's first cohort grad party 🎉"/>
        <meta property="og:image" content="public/meta-media-link.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://invite.intechgration.io/"/>
        <meta property="twitter:title" content="Intechgration's grad party"/>
        <meta property="twitter:description" content="invitation to join intech's first cohort grad party 🎉"/>
        <meta property="twitter:image" content="public/meta-media-link.png"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎉</text></svg>" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey{" "}
          <span className={styles.name}>
            {name === undefined ? "there" : name}!
          </span>
        </h1>
        <h1 className={styles.inviteText}>
          {"You're invited to "}
          <span>
            in<span style={{ color: "gray" }}>tech</span>gration
          </span>
          {"'s grad party  🎉 "}
        </h1>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Date &darr;</h2>
            <p>Friday 18th</p>
          </a>

          <a
            href="https://goo.gl/maps/XuBjmnA3fYjS1vSh8"
            className={styles.card}
          >
            <h2>Place &darr;</h2>
            <p>Echo Hub Athens</p>
          </a>

          <a className={styles.card}>
            <h2>Time &darr;</h2>
            <p>7 PM</p>
          </a>

          <a href="tel:+306992870501" className={styles.card}>
            <h2>Contact &darr;</h2>
            <p>click to call</p>
            <a>+306992870501</a>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by in<span className="footerTech">tech</span>gration
      </footer>
    </div>
  )
}
