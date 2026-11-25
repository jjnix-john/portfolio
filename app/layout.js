import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-sigma-ten-43.vercel.app"),
  title: {
    default: "John Elton Geromo | Full Stack Developer & Software Engineer",
    template: "%s | John Elton Geromo",
  },
  description:
    "Official portfolio of John Elton Geromo (John Elton D. Geromo), Full Stack Developer and BSIT student at UCLM in Mandaue City, Cebu, Philippines. ICS x IBM Bobathon 2026 Champion, IBPAP Hackathon Finalist, and Co-Engineer at Tuon.net.",
  keywords: [
    "John Elton Geromo",
    "John Elton D. Geromo",
    "John Elton",
    "Elton Geromo",
    "Full Stack Developer Philippines",
    "Full Stack Developer Cebu",
    "Software Engineer Mandaue City",
    "ICS x IBM Bobathon Champion",
    "Tuon.net",
    "BoxedLinks",
    "React Developer",
    "Next.js Developer",
    "Supabase",
    "UCLM BSIT",
    "jjnix-john",
  ],
  authors: [{ name: "John Elton Geromo", url: "https://portfolio-sigma-ten-43.vercel.app" }],
  creator: "John Elton Geromo",
  publisher: "John Elton Geromo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sigma-ten-43.vercel.app/",
    siteName: "John Elton Geromo Portfolio",
    title: "John Elton Geromo | Full Stack Developer & ICS x IBM Bobathon Champion",
    description:
      "Explore the projects, achievements, and skills of John Elton Geromo — Full Stack Developer specializing in React, Next.js, Node.js, Supabase, Java, Python, and AI integration.",
    images: [
      {
        url: "/files/PictureUpload.png",
        width: 800,
        height: 800,
        alt: "John Elton Geromo - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Elton Geromo | Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer in Cebu, Philippines. ICS x IBM Bobathon 2026 Champion, Co-Engineer at Tuon.net, and builder of BoxedLinks.",
    images: ["/files/PictureUpload.png"],
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.classList.toggle('light', theme === 'light');
              document.documentElement.classList.toggle('dark', theme === 'dark');
            })()
          `,
        }} />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
