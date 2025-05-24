// next-seo.config.js
export default {
  title: 'John Doe - Full Stack Developer',
  description: 'Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  canonical: 'https://your-domain.vercel.app',
  openGraph: {
    url: 'https://your-domain.vercel.app',
    title: 'John Doe - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: 'https://your-domain.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe - Full Stack Developer',
      },
    ],
    site_name: 'John Doe Portfolio',
  },
  twitter: {
    handle: '@your-handle',
    site: '@your-handle',
    cardType: 'summary_large_image',
  },
}