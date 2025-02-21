import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="light">
      <body className="min-h-screen bg-base-100 relative"> 
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
