"use client";
import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

// Configuración de colores en tailwind.config.js (te la agrego al final)
const menuItems = [
  {
    title: "1.1 Fundamentos de Ciberseguridad",
    icon: "ph--play-circle-duotone",
  },
  {
    title: "1.2 Tipos de Amenazas",
    icon: "ph--lock-key-duotone",
  },
  {
    title: "1.3 Principios de Seguridad",
    icon: "ph--shield-check-duotone",
  },
];

export default function Modulo1() {
  return (
    <div className="flex min-h-screen bg-gray-300 pt-24">
      {/* Sidebar - Nuevos tonos pastel */}
      <aside className="hidden lg:flex flex-col w-80 bg-primary/5 border-r border-primary/10">
        <header className="p-6 border-b border-primary/10">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-violet-600">📚</span>
            Contenido del Curso
          </h2>
        </header>

        <nav className="flex-1 p-4">
          <h3 className="menu-title mt-4 mb-2 text-primary/70 text-sm font-semibold">
            Módulo 1
          </h3>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className="flex items-center gap-3 p-4 text-primary/90 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors duration-200">
                  <span className={`icon-[${item.icon}] text-xl text-primary/70`} />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Progress Bar - Degradado más suave */}
        <footer className="p-6 border-t border-primary/10">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-primary/70">Progreso</span>
              <span className="font-medium text-emerald-600">30%</span>
            </div>
            <div className="relative h-2.5 rounded-full overflow-hidden bg-primary/10">
              <div
                className="absolute h-full bg-gradient-to-r from-violet-600 to-emerald-400 rounded-full 
                         transition-all duration-1000 ease-out"
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </footer>
      </aside>

      {/* Main Content - Contraste elegante */}
      <main className="flex-1 p-8 space-y-8 bg-gradient-to-br from-white to-muted/30">
        {/* Encabezado */}
        <header>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent tracking-tight">
            Módulo 1: Fundamentos de Ciberseguridad
          </h1>
        </header>

        {/* Sección de Video - Nuevo esquema de colores */}
        <section className="border border-primary/10 rounded-xl shadow-sm overflow-hidden bg-white">
          <div className="bg-gradient-to-tr from-primary/5 to-muted/20 p-1">
            <div className="relative aspect-video bg-white rounded-lg flex items-center justify-center">
              <button
                aria-label="Reproducir video"
                className="group p-6 rounded-full bg-violet-600 hover:bg-violet-700 
                         transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <PlayIcon className="h-14 w-14 text-white/90 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <span className="absolute bottom-4 right-4 text-sm text-primary/60 flex items-center gap-2">
                <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                🎥 Video demostrativo
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}