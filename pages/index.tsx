// pages/index.tsx
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import TechStack from '../components/TechStack'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// SEO Data
const seoData = {
  name: "John Doe",
  title: "John Doe - Full Stack Developer & Creative Problem Solver",
  description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. 15+ years building innovative digital solutions for startups and enterprises.",
  keywords: "Full Stack Developer, React Developer, Next.js, Node.js, JavaScript, TypeScript, Web Development, Software Engineer, Frontend Developer, Backend Developer",
  url: "https://your-domain.vercel.app", // Replace with your actual URL
  image: "https://your-domain.vercel.app/og-image.jpg", // Add this image
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  phone: "+1 (234) 567-890"
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": seoData.name,
    "jobTitle": "Full Stack Developer",
    "description": seoData.description,
    "url": seoData.url,
    "image": seoData.image,
    "email": seoData.email,
    "telephone": seoData.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/in/your-profile",
      "https://github.com/your-username",
      "https://twitter.com/your-handle"
    ],
    "knowsAbout": [
      "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
      "Python", "Web Development", "Software Engineering"
    ],
    "alumniOf": "Your University", // Optional
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.name} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={seoData.name} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.image} />
        <meta property="twitter:creator" content="@your-twitter-handle" />

        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Francisco" />

        {/* Canonical URL */}
        <link rel="canonical" href={seoData.url} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

// Static generation for better SEO
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 86400, // Revalidate every 24 hours
  }
}