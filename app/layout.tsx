import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LocomotiveProvider from "@/contexts/LocomotiveProvider";
import { Footer } from "@/templates/components/footer";
import Navbar2 from "@/templates/components/Navbar2";
import AnimateScrollProvider from "@/contexts/AnimateScrollProvider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PKK Papua Pegunungan",
  description: "Pemberdayaan & Kesejahteraan Keluarga (PKK) Provinsi Papua Pegunungan",
  icons: {
    icon: "/templates/components/PKK.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white1 text-black antialiased`}>
        <LocomotiveProvider>
          <AnimateScrollProvider>
            <Navbar2 />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </AnimateScrollProvider>
        </LocomotiveProvider>
      </body>
    </html>
  );
}
