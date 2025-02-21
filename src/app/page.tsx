'use client';
import Hero from './components/Hero';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Home() {
  
  return (
    <div className="min-h-screen bg-[url('/images/fondo2.jpg')] bg-cover bg-center">
      
        <Hero />
    </div>
  );
}
