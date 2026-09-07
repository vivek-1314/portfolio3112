import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL = "https://portfoliovivek-eight.vercel.app";
const FULL_NAME = "Vivek Gaindhar";
const SHORT_NAME = "Vivek Gaindhar";
const JOB_TITLE = "Fullstack Developer & AI Engineer";
const DESCRIPTION =
  "Vivek Gaindhar is a Fullstack Developer & AI Engineer from Bhopal, India, specializing in the MERN Stack, Next.js, LangChain, and LangGraph. Explore projects, AI/RAG pipelines, and full-stack case studies.";
const SHORT_DESCRIPTION =
  "Fullstack Developer & AI Engineer building production-grade MERN, Next.js, and LangChain/LangGraph applications.";
const TWITTER_HANDLE = "@vivekgaindhar"; // update if incorrect
const GITHUB_URL = "https://github.com/vivek-1314";
const LINKEDIN_URL = "https://www.linkedin.com/in/vivekgaindhar/";
const LEETCODE_URL = "https://leetcode.com/u/vivek_-vivek/";
const CODOLIO_URL = "https://codolio.com/profile/vivek_gurjar";

const KEYWORDS = [
  "Vivek Gaindhar",
  "Vivek Gaindhar portfolio",
  "Vivek Gaindhar developer",
  "Fullstack Developer India",
  "AI Engineer India",
  "MERN Stack Developer",
  "Next.js Developer India",
  "React Developer Bhopal",
  "Node.js Developer",
  "LangChain Developer India",
  "LangGraph Developer",
  "TypeScript Developer",
  "Web Developer Bhopal",
  "LNCT Bhopal Developer",
  "Bhopal Developer Portfolio",
  "vivek1314",
  "vivek-1314",
  "Software Engineer India",
  "AI Developer India",
  "RAG pipeline developer",
  "Retrieval Augmented Generation developer",
  "Vector database developer",
  "LLM application developer",
  "Open to work developer India",
  "Hire Fullstack Developer India",
  "Hire AI Engineer",
];

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: `${FULL_NAME} | ${JOB_TITLE}`,
    template: `%s | ${FULL_NAME}`,
  },

  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: FULL_NAME, url: BASE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  category: "technology",
  applicationName: `${FULL_NAME} Portfolio`,
  generator: "Next.js",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: `${FULL_NAME} Portfolio`,
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description: DESCRIPTION,
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — ${JOB_TITLE}`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description: SHORT_DESCRIPTION,
    images: [`${BASE_URL}/images/og-image.png`],
  },

  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
    shortcut: "/favicon.png",
  },

  verification: {
    google: "H4dxpfXKyBbPYuVq_KUqJ5ev8zF-Dd-oTjqhTu3BaAg",
    // yandex: 'your-yandex-code',
    // other: { 'msvalidate.01': 'your-bing-code' },
  },

  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "apple-mobile-web-app-title": SHORT_NAME,
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: FULL_NAME,
  url: BASE_URL,
  image: `${BASE_URL}/images/og-image.png`,
  email: "mailto:vivek1314gurjar@gmail.com",
  jobTitle: JOB_TITLE,
  description: DESCRIPTION,
  nationality: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lakshmi Narain College of Technology, Bhopal",
    url: "https://www.lnct.ac.in",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "LangChain",
    "LangGraph",
    "Artificial Intelligence",
    "Large Language Models",
    "RAG pipelines",
    "Fullstack Development",
    "Data Structures and Algorithms",
  ],
  sameAs: [GITHUB_URL, LINKEDIN_URL, LEETCODE_URL, CODOLIO_URL],
  worksFor: {
    "@type": "Organization",
    name: "SyncAndExplore",
    description: "Internship — Oct 2025",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: `${FULL_NAME} Portfolio`,
  url: BASE_URL,
  description: DESCRIPTION,
  publisher: { "@id": `${BASE_URL}/#person` },
  inLanguage: "en-US",
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/#profilepage`,
  mainEntity: { "@id": `${BASE_URL}/#person` },
  isPartOf: { "@id": `${BASE_URL}/#website` },
  url: BASE_URL,
  name: `${FULL_NAME} | ${JOB_TITLE}`,
  description: DESCRIPTION,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};

const jsonLdSchemas = [personSchema, websiteSchema, profilePageSchema, breadcrumbSchema];

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect / dns-prefetch for Core Web Vitals + crawlability */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://leetcode.com" />

        {/* JSON-LD: all structured data linked via @id */}
        {jsonLdSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}