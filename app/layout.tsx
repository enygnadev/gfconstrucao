import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"

// Initialize the fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: {
    default: "GF Construtora | Soluções em Vidro e Alumínio",
    template: "%s | GF Construtora",
  },
  description:
    "Serviços profissionais de instalação de vidro e alumínio. Especializados em janelas, portas, box de banheiro e soluções comerciais em vidro com qualidade premium e expertise técnica.",
  keywords: [
    "instalação de vidro",
    "janelas de alumínio", 
    "box de banheiro",
    "vidro comercial",
    "vidro residencial",
    "portas de vidro",
    "fachadas cortina",
    "serviços de vidraçaria",
    "esquadrias de alumínio",
    "construtora",
  ],
  authors: [{ name: "GF Construtora" }],
  creator: "GF Construtora",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gfconstrutora.com.br",
    title: "GF Construtora | Soluções em Vidro e Alumínio",
    description:
      "Serviços profissionais de instalação de vidro e alumínio com qualidade premium e expertise técnica.",
    siteName: "GF Construtora",
  },
  twitter: {
    card: "summary_large_image",
    title: "GF Construtora | Soluções em Vidro e Alumínio",
    description:
      "Serviços profissionais de instalação de vidro e alumínio com qualidade premium e expertise técnica.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div suppressHydrationWarning>
              {children}
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}