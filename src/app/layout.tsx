import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ambitious Academy",
  description: "A Project Called Ambitious Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <Navbar />
          {children}
          <Footer />
          {/* Load Razorpay script from a local or CDN location */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/razorpay/1.0/checkout.js'; // Replace with your CDN URL
                  document.body.appendChild(script);
                })();
              `
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
