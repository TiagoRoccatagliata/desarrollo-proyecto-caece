import Logo from "./Logo";
import Link from "next/link";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Módulo 1", href: "/modulo1" },
  { name: "Módulo 2", href: "/modulo2" },
  { name: "Módulo 3", href: "/modulo3" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur-sm bg-black/50 shadow-xl">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="hover:scale-105 transition-transform duration-300">
          <Logo />
        </div>

        {/* Navegación Desktop */}
        <ul className="hidden md:flex flex-1 justify-center gap-8">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <Link href={item.href} className="px-4 py-2 transition-all duration-300 hover:text-primary">
                {item.name}
                <span className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full opacity-50"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón Iniciar Sesión */}
        <Link href="/login">
          <button className="bg-primary text-white font-medium text-lg px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-md">
            INICIAR SESIÓN
          </button>
        </Link>
      </div>
    </nav>
  );
}
