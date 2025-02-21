import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`${className} bg-gray-400 py-8 border-t border-gray-300`}>

      <div className="container mx-auto px-4">
       {/* Derechos reservados */}
       <div className="text-right text-md text-gray-600 mt-6">
          <p>&copy; {new Date().getFullYear()} Universidad CAECE. Todos los derechos reservados.</p>
        </div>
        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo_caece2.png" alt="políticas" width={100} height={20} />
          </div>

        
        </div>
      
      </div>
    </footer>
  );
}


  