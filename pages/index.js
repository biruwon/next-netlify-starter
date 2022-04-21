import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>

          This is an edit for the onboarding! :)
        </p>

        <form 
          name="contact"
          method="POST" 
          netlify
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

      </main>

      <Footer />
    </div>
  )
}
