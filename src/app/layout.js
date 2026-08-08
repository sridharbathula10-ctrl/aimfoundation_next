import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "AIM Foundation | Healthcare Innovation for India's Public Health System",
  description: "AIM Foundation builds healthcare innovation for India's public health system through its flagship Amaravati School of Biodesign.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col"><Header />{children}<Footer /></body>
    </html>
  );
}
