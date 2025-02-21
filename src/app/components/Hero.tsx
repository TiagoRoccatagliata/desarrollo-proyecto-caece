import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Hero() {
    return (
        <>
            <section id="hero" className="relative min-h-screen w-full flex items-center justify-center text-white pb-[10%]">
                {/* Main Content Container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    {/* Left Chat Dashboard */}
                    <div className="w-full md:w-1/2 md:pr-8">
                    <div className="bg-black bg-opacity-80 rounded-[30px] max-w-[500px] h-[300px] mx-auto flex flex-col justify-start p-6 shadow-2xl border-[5px] border-black overflow-y-auto">
                            <div className="chat chat-start mb-4">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Jefe
                                    <time className="text-xs opacity-50 ml-2">12:45</time>
                                </div>
                                <div className="chat-bubble">Mañana empezamos el Curso!</div>
                                <div className="chat-footer opacity-50">Enviado</div>
                            </div>
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Jefe
                                    <time className="text-xs opacity-50 ml-2">12:46</time>
                                </div>
                                <div className="chat-bubble">Vamos a estar mas Seguros!</div>
                                <div className="chat-footer opacity-50">Visto a las 12:46</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl font-thin mb-4"
                        >
                            La importancia de la <span className="text-[#6c63ff] font-bold inline-block whitespace-nowrap">Seguridad</span>
                        </motion.div>
                        <h3 className="text-lg md:text-2xl text-white-700 mb-6 leading-relaxed max-w-2xl">
                            Capacita tu empresa en CiberSeguridad
                        </h3>
                        <button
                            onClick={() => (document.querySelector('input[name="name"]') as HTMLInputElement)?.focus()}
                            className="bg-primary text-white px-6 py-4 rounded-lg text-base font-regular hover:bg-green-300 transition-colors duration-300 shadow-sm"
                        >
                            REGISTRARSE
                        </button>
                    </div>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/fondo2.jpg"
                        alt="AgroSistemas Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </section>
        </>
    );
}