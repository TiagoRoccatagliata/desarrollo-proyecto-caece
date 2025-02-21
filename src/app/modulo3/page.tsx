"use client";
import React from "react";
import { DocumentTextIcon, ChartBarIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const menuItems = [
  {
    title: "3.1 Políticas de Seguridad Digital",
    icon: "ph--policy-duotone",
  },
  {
    title: "3.2 Evaluación de Riesgos",
    icon: "ph--graph-duotone",
  },
  {
    title: "3.3 Cultura Organizacional",
    icon: "ph--users-duotone",
  },
];

const ejercicios = [
  {
    title: "Desarrollo de Política",
    type: "documento",
    progress: 40
  },
  {
    title: "Análisis de Escenarios",
    type: "casos",
    progress: 25
  }
];

export default function Modulo3() {
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
            Módulo 3
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
            Módulo 3: Gerentes y Directivos
          </h1>
        </header>

        {/* Sección de Contenido Interactivo */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor de Políticas */}
          <div className="border border-primary/10 rounded-xl p-6 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <DocumentTextIcon className="h-8 w-8 text-violet-600" />
              <h3 className="text-xl font-semibold text-primary">Desarrollo de Políticas</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-muted/20 rounded-lg">
                <h4 className="font-medium text-primary/90 mb-2">Plantilla Base:</h4>
                <textarea 
                  className="w-full h-40 p-3 border border-primary/20 rounded-lg text-primary/80"
                  placeholder="1. Objetivo de la política...\n2. Alcance...\n3. Responsabilidades..."
                />
              </div>
              <button className="w-full btn bg-emerald-600 hover:bg-emerald-700 text-white">
                Validar Política
              </button>
            </div>
          </div>

          {/* Simulador de Riesgos */}
          <div className="border border-primary/10 rounded-xl p-6 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ChartBarIcon className="h-8 w-8 text-amber-600" />
              <h3 className="text-xl font-semibold text-primary">Evaluación de Riesgos</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-muted/20 rounded-lg">
                <h4 className="font-medium text-primary/90 mb-3">Escenario Actual:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded">
                    <span className="icon-[ph--caret-right-duotone] text-primary/70" />
                    Filtración de datos confidenciales
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded">
                    <span className="icon-[ph--caret-right-duotone] text-primary/70" />
                    Ataque de phishing a directivos
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="btn bg-primary/10 hover:bg-primary/20 text-primary">
                  Añadir Escenario
                </button>
                <button className="btn bg-amber-600 hover:bg-amber-700 text-white">
                  Simular Impacto
                </button>
              </div>
            </div>
          </div>

          {/* Cultura Organizacional */}
          
        </section>

        {/* Sección de Evaluaciones */}
        <section className="border border-primary/10 rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6">Evaluaciones Gerenciales</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {ejercicios.map((ejercicio, index) => (
              <div key={index} className="p-4 bg-muted/20 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-primary/90">{ejercicio.title}</h3>
                  <span className="text-sm text-emerald-600">{ejercicio.progress}%</span>
                </div>
                <div className="h-2 bg-primary/10 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-violet-600 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${ejercicio.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}