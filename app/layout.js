import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfc' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indtec.com.br';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "IND TEC - Assistência Técnica e Eletrônicos em Campinas/SP",
      template: '%s | IND TEC Assistência Técnica'
    },
    description: "Seu equipamento parou? A IND TEC resolve. Especialistas em conserto de celulares, notebooks, computadores e consoles em Campinas/SP. Faça um orçamento gratuito!",
    keywords: [
      "assistência técnica campinas", "conserto de celular campinas",
      "manutenção de notebook", "reparo de placa mãe", "conserto de videogame",
      "IND TEC", "Jardim dos Oliveiras"
    ],
    authors: [{ name: "IND TEC Assistência Técnica" }],
    creator: "IND TEC",
    applicationName: "IND TEC Website",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: "IND TEC Assistência Técnica",
      locale: "pt_BR",
      title: "IND TEC - Assistência Técnica de Excelência em Campinas",
      description: "Manutenção rápida e com garantia para celulares, notebooks, PCs e consoles. Avaliação nota 5.0 no Google. Fale com a gente pelo WhatsApp!",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Fachada e Equipe da IND TEC Assistência Técnica em Campinas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "IND TEC - Assistência Técnica e Eletrônicos",
      description: "Conserto de celulares, notebooks, PCs e consoles em Campinas/SP com peças de qualidade e garantia.",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/#indtec`,
              name: "IND TEC Assistência Técnica e Eletrônicos",
              image: `${process.env.NEXT_PUBLIC_SITE_URL}/logo-ind-tec.webp`,
              description: "Assistência técnica especializada em celulares, notebooks, computadores e consoles.",
              url: process.env.NEXT_PUBLIC_SITE_URL,
              telephone: "+5519953243237",
              hasMap: "https://goo.gl/maps/SeuLinkDoGoogleMapsAqui",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Jorge Tibiriçá, 1050",
                addressLocality: "Campinas",
                addressRegion: "SP",
                postalCode: "13045-120",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -22.946328,
                longitude: -47.022934,
              },
              areaServed: {
                "@type": "City",
                name: "Campinas"
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "13:00"
                }
              ],
              priceRange: "$$",
              currenciesAccepted: "BRL",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "83"
              },
              sameAs: [
                "https://www.instagram.com/indtec_oficial/", 
                "https://www.facebook.com/indtecassistenciatecnica/", 
                "https://g.page/ind-tec-assistencia-tecnica" 
              ]
            }),
          }}
        />
      </head>
      
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col">
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}