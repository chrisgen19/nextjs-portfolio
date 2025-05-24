import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import TechStack from '../components/TechStack'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>John Doe - Full Stack Developer Portfolio</title>
        <meta name="description" content="Full Stack Developer passionate about creating innovative digital solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <TechStack />
        <About />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}