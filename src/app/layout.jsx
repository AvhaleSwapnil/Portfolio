import { Inter } from "next/font/google";
import "./globals.css";
import SocialSidebar from "../components/SocialSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description: "My Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <SocialSidebar />
            </body>
        </html>
    );
}
