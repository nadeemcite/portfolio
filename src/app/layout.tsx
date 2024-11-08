import "./globals.css";
import { Source_Code_Pro } from "next/font/google";

export const metadata = {
  title: "devnadeem.com",
  description: "Nadeem - Solution Engineer Portfolio",
};

// Load Source Code Pro with specified weights
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // specify weights you need
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
