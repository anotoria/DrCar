
import React, { useState } from 'react';
import { AppStage } from '../types';

interface ServiceSearchProps {
  onNavigate: (stage: AppStage) => void;
  onLogout: () => void;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({ onNavigate, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { stage: AppStage.DASHBOARD, icon: 'dashboard', label: 'Início' },
    { stage: AppStage.GARAGE, icon: 'directions_car', label: 'Meus Veículos' },
    { stage: AppStage.SEARCH, icon: 'car_repair', label: 'Buscar Oficinas' },
    { stage: AppStage.USER_PROMOTIONS, icon: 'local_offer', label: 'Promoções' },
    { stage: AppStage.APPOINTMENTS, icon: 'calendar_month', label: 'Agendamentos' },
    { stage: AppStage.CHAT, icon: 'chat', label: 'Mensagens', badge: 2 },
    { stage: AppStage.USER_NOTIFICATIONS, icon: 'notifications', label: 'Notificações', badge: 3 },
    { stage: AppStage.USER_PROFILE, icon: 'person', label: 'Meu Perfil' },
    { stage: AppStage.FAQ_SUPPORT, icon: 'help', label: 'Ajuda' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-hidden min-h-screen flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#111a22] border-r border-[#dce0e5] dark:border-[#233648] transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className="p-6 flex items-center justify-between">
           <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(AppStage.DASHBOARD)}>
            <div className="bg-primary/10 p-2 rounded-xl text-primary">
              <span className="material-symbols-outlined text-3xl">local_taxi</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none tracking-tight">Dr. do Carro</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Gestão Automotiva</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => (
            <button 
              key={item.stage}
              onClick={() => { onNavigate(item.stage); setIsSidebarOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${item.stage === AppStage.SEARCH ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-semibold text-sm">{item.label}</span>
              {item.badge && <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#dce0e5] dark:border-[#233648] flex flex-col gap-4">
            <button onClick={onLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors w-full text-left">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-medium text-sm">Sair</span>
            </button>
            <div className="flex items-center gap-3 px-2 cursor-pointer" onClick={() => onNavigate(AppStage.USER_PROFILE)}>
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-slate-200 dark:ring-slate-800" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac")' }}></div>
              <div className="flex flex-col">
                 <h1 className="text-sm font-bold text-slate-900 dark:text-white">Roberto Silva</h1>
                 <p className="text-slate-500 dark:text-slate-400 text-xs">Proprietário</p>
              </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#dce0e5] dark:border-[#233648] bg-white dark:bg-[#111a22] z-40 shrink-0">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg lg:hidden">Buscar Oficinas</span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => onNavigate(AppStage.USER_NOTIFICATIONS)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Search Hero Banner (Compact) */}
          <div className="relative w-full bg-cover bg-center py-8 px-4 md:px-10" data-alt="Dark abstract background showing blurred car workshop details" style={{ backgroundImage: 'linear-gradient(rgba(17, 26, 34, 0.8), rgba(17, 26, 34, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCL9U6V5nvLXFhwcrdKRMcy7hzr1HqPgqFRyclAGrY4FIVmAMGwzZAyUUnP7f8DdiNkyuEkxxdkBJS_St1Kaj71reB5qkw6xSAxjgZcAKDc_zPisHBiB325yTQul-cOf4wcuKUne8P2XbdCi6gUcaMscAhFKdrDK-RAyyczaXQKu2GDNsZaDaoYoWT20PgWJYhL67P2EGTXjCdbRMbWKbKgRsKoK7ERmx5cFbZOkzqnw02yPBem3L02xZI73tgnegQ3Sug2G7vXAmk")' }}>
            <div className="max-w-[800px] mx-auto flex flex-col gap-4">
              <h1 className="text-white text-2xl md:text-3xl font-black leading-tight text-center">
                Encontre o especialista certo para o seu carro
              </h1>
              {/* Search Input Group */}
              <label className="flex flex-col md:flex-row w-full h-auto md:h-14 gap-2 md:gap-0">
                <div className="flex w-full flex-1 items-stretch rounded-lg md:rounded-r-none h-12 md:h-full overflow-hidden shadow-lg">
                  <div className="text-[#92adc9] flex border border-[#324d67] bg-[#192633] items-center justify-center pl-[15px] border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="flex w-full min-w-0 flex-1 resize-none text-white focus:outline-0 focus:ring-0 border border-[#324d67] bg-[#192633] focus:border-[#324d67] h-full placeholder:text-[#92adc9] px-[15px] border-l-0 text-base font-normal leading-normal" placeholder="O que você procura? (ex: Revisão, Pneus...)" defaultValue="" />
                </div>
                <button className="flex items-center justify-center overflow-hidden rounded-lg md:rounded-l-none h-12 md:h-full px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold shadow-lg transition-colors">
                  Buscar
                </button>
              </label>
            </div>
          </div>
          
          <div className="flex flex-1 flex-col lg:flex-row max-w-[1440px] mx-auto w-full">
            {/* Filters Sidebar (Desktop) */}
            <aside className="hidden lg:flex w-72 flex-col gap-6 p-5 border-r border-[#dce0e5] dark:border-[#233648] bg-white dark:bg-[#111a22]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Filtros</h3>
                <button className="text-sm font-medium text-primary hover:underline">Limpar</button>
              </div>
              {/* Location Filter */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold">Localização</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined text-[20px]">location_on</span>
                  <input className="w-full h-10 rounded-lg border border-[#dce0e5] dark:border-[#324d67] bg-transparent pl-10 pr-3 text-sm focus:border-primary focus:ring-0 placeholder:text-gray-500" placeholder="Cidade ou CEP" type="text" defaultValue="São Paulo, SP" />
                </div>
                <div className="flex items-center gap-2">
                  <input className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary" max="50" min="1" type="range" defaultValue="10" />
                  <span className="text-xs font-medium whitespace-nowrap text-gray-500">10 km</span>
                </div>
              </div>
              <hr className="border-[#dce0e5] dark:border-[#324d67]" />
              {/* Categories Filter */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold">Categorias</label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input defaultChecked className="peer h-5 w-5 rounded border-[#dce0e5] dark:border-[#324d67] bg-transparent text-primary focus:ring-0 checked:bg-primary checked:border-primary" type="checkbox" />
                    </div>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Mecânica Geral</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="h-5 w-5 rounded border-[#dce0e5] dark:border-[#324d67] bg-transparent text-primary focus:ring-0" type="checkbox" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Funilaria e Pintura</span>
                  </label>
                   {/* ... more filters ... */}
                </div>
              </div>
            </aside>
            
            <div className="flex-1">
                 {/* Chips & Sorting Header */}
                <div className="flex flex-col sticky top-0 z-30 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#dce0e5] dark:border-[#233648]">
                    {/* Chips */}
                    <div className="w-full overflow-x-auto no-scrollbar px-4 md:px-8 py-3">
                    <div className="flex gap-3 min-w-max">
                        <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary text-white pl-3 pr-4 shadow-sm transition-transform active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">engineering</span>
                        <span className="text-sm font-medium">Mecânica Geral</span>
                        </button>
                        <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#233648] border border-[#dce0e5] dark:border-transparent hover:border-primary dark:hover:border-primary pl-3 pr-4 shadow-sm transition-colors">
                        <span className="material-symbols-outlined text-[18px]">format_paint</span>
                        <span className="text-sm font-medium">Funilaria</span>
                        </button>
                        {/* ... more chips ... */}
                    </div>
                    </div>
                    
                    {/* Results Meta */}
                    <div className="px-4 md:px-8 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <h2 className="text-xl font-bold dark:text-white">24 resultados em São Paulo, SP</h2>
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                        <button className="lg:hidden flex items-center gap-2 text-sm font-medium bg-white dark:bg-[#233648] px-3 py-1.5 rounded-lg border border-[#dce0e5] dark:border-transparent">
                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filtros
                        </button>
                        <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 hidden sm:inline">Ordenar por:</span>
                        <select className="bg-transparent text-sm font-bold border-none focus:ring-0 cursor-pointer p-0 pr-6 text-[#111418] dark:text-white">
                            <option>Relevância</option>
                            <option>Menor Distância</option>
                            <option>Melhor Avaliação</option>
                            <option>Menor Preço</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                
                {/* Results Grid */}
                <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div onClick={() => onNavigate(AppStage.BUSINESS_PROFILE)} className="cursor-pointer group flex flex-col rounded-xl border border-[#dce0e5] dark:border-[#233648] bg-white dark:bg-[#192633] overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 w-full bg-cover bg-center" data-alt="Clean and modern car workshop interior with mechanics working" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFNywbyMTGw0xyRfBgHqOd6P-8DXZFyHaWClmTNgkMvRAGZX4S8DiOPZSHCM8MB-RavyDzMats2075vRDNmU0zZVU0pL-bWSegtwUfCm4d5voZyQxGiUY8one6-2VlzWgUeBVzSRuy6YzdTYuWxTq_1BkEyZxOteMwlBjZnFjsQrhAj1klbmUNH8F4jESdJD1G6WOpfR9QyEWoPIPauDVUnIzxMJ0pOtFjw38BFO7QqfLwxbVi1M78RZb8C4wph_8e20ItldwBmkU")' }}>
                        <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                          Oficina Verificada
                        </div>
                        <button className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white hover:bg-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">favorite</span>
                        </button>
                      </div>
                      <div className="flex flex-col gap-3 p-4 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">Auto Center Porto</h3>
                            <p className="text-sm text-gray-500 dark:text-[#92adc9]">Mecânica Geral • Injeção Eletrônica</p>
                          </div>
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">Aberto</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-[#f59e0b]">
                            <span className="material-symbols-outlined text-[18px] filled" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="font-bold text-[#111418] dark:text-white">4.9</span>
                            <span className="text-gray-500 text-xs">(128)</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 dark:text-[#92adc9]">
                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                            2.3 km
                          </div>
                        </div>
                        <div className="mt-auto pt-3 border-t border-[#dce0e5] dark:border-[#233648] flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-gray-500">Diagnóstico a partir de</span>
                            <span className="text-sm font-bold">R$ 150,00</span>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); onNavigate(AppStage.SCHEDULING); }} className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors">
                            Agendar
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* ... other cards ... */}
                </div>
            </div>
          </div>
        </main>

        {/* Map View Toggle (Floating Action Button) */}
        <button className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#111a22] dark:bg-white text-white dark:text-[#111a22] px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold">
            <span className="material-symbols-outlined">map</span>
            Ver no Mapa
        </button>
      </div>

       {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" />
      )}
    </div>
  );
};

export default ServiceSearch;
