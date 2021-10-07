import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>yum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>wahoo</h1>
        <form action="/api/form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <br />

          <label htmlFor="food">Food</label>
          <input list="foods" name="food" id="food" />

          <datalist id="foods">
            <option value="soup">soup</option>
            <option value="salad">salad</option>
            <option value="poop">poop</option>
          </datalist>

          <br />

          <label htmlFor="name">Notes</label>
          <input type="text" id="notes" name="notes" />
          <br />
          <input type="submit" />
        </form>
      </main>

      <footer className={styles.footer}>
        <p>hack hack hack hack hack</p>
      </footer>
    </div>
  );
}
