"use client";
import React from "react";
import { ShieldCheckIcon, DocumentTextIcon, WifiIcon } from "@heroicons/react/24/solid";

const menuItems = [
  {
    title: "2.1 Protección de Dispositivos y Redes",
    icon: "ph--shield-duotone",
  },
  {
    title: "2.2 Gestión de Documentos Segura",
    icon: "ph--folder-lock-duotone",
  },
  {
    title: "2.3 Seguridad en Trabajo Remoto",
    icon: "ph--laptop-duotone",
  },
];

const ejercicios = [
  "Configuración de backups automáticos",
  "Cuestionario sobre seguridad de dispositivos",
  "Caso de estudio sobre redes públicas"
];

export default function Modulo2() {
  return (
    <div className="flex min-h-screen bg-gray-300 pt-24">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-80 bg-primary/5 border-r border-primary/10">
        <header className="p-6 border-b border-primary/10">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-violet-600">📚</span>
            Contenido del Curso
          </h2>
        </header>

        <nav className="flex-1 p-4">
          <h3 className="menu-title mt-4 mb-2 text-primary/70 text-sm font-semibold">
            Módulo 2
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

        {/* Progress Bar */}
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

      {/* Contenido Principal */}
      <main className="flex-1 p-8 space-y-8 bg-gradient-to-br from-white to-muted/30">
        {/* Encabezado */}
        <header>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent tracking-tight">
            Módulo 2: Supervisores y Líderes de Equipo
          </h1>
        </header>

        {/* Sección de Contenido Principal */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tarjeta 1 - Protección de Dispositivos */}
          <div className="border border-primary/10 rounded-xl p-6 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-emerald-600" />
              <h3 className="text-xl font-semibold text-primary">Protección de Dispositivos y Redes</h3>
            </div>
            <ul className="space-y-2 text-primary/80">
              <li>✔️ Configuración de antivirus y firewalls</li>
              <li>✔️ Actualizaciones de seguridad automáticas</li>
              <li>✔️ Monitoreo de redes corporativas</li>
            </ul>
          </div>

          {/* Tarjeta 2 - Gestión Documental */}
          <div className="border border-primary/10 rounded-xl p-6 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <DocumentTextIcon className="h-8 w-8 text-violet-600" />
              <h3 className="text-xl font-semibold text-primary">Gestión de Documentos Segura</h3>
            </div>
            <ul className="space-y-2 text-primary/80">
              <li>🔐 Almacenamiento en la nube seguro</li>
              <li>🔄 Sistema de backups automatizados</li>
              <li>📁 Políticas de acceso a documentos</li>
            </ul>
          </div>

          {/* Tarjeta 3 - Trabajo Remoto */}
          <div className="border border-primary/10 rounded-xl p-6 bg-white shadow-sm col-span-full">
            <div className="flex items-center gap-3 mb-4">
              <WifiIcon className="h-8 w-8 text-amber-600" />
              <h3 className="text-xl font-semibold text-primary">Normas de Trabajo Remoto</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-primary/90">Requisitos Esenciales:</h4>
                <ul className="space-y-2 text-primary/80">
                  <li>🔒 Uso obligatorio de VPN</li>
                  <li>🛡️ Autenticación de dos factores</li>
                  <li>📱 Dispositivos autorizados</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-primary/90">Mejores Prácticas:</h4>
                <ul className="space-y-2 text-primary/80">
                  <li>🚫 Evitar redes públicas no seguras</li>
                  <li>💻 Configuración de cortafuegos personal</li>
                  <li>🔔 Protocolos de reporte de incidentes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Ejercicios */}
        <section className="border border-primary/10 rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6">Ejercicios y Evaluaciones</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ejercicios.map((ejercicio, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-primary/5 transition-colors">
                <span className="icon-[ph--check-circle-duotone] text-xl text-emerald-600" />
                <span className="text-primary/90">{ejercicio}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}