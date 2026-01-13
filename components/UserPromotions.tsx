
import React, { useState } from 'react';
import { AppStage } from '../types';

interface UserPromotionsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const UserPromotions: React.FC<UserPromotionsProps> = ({ onLogout, onNavigate }) => {
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
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white min-h-screen flex overflow-hidden font-display">
       {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#1A2633] border-r border-[#e7edf3] dark:border-[#2a3b4d] transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${item.stage === AppStage.USER_PROMOTIONS ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-semibold text-sm">{item.label}</span>
              {item.badge && <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#e7edf3] dark:border-[#2a3b4d] flex flex-col gap-4">
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
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#e7edf3] dark:border-[#2a3b4d] bg-white dark:bg-[#1A2633] z-40 shrink-0">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg lg:hidden">Promoções</span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => onNavigate(AppStage.USER_NOTIFICATIONS)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>
      
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6 md:py-10 overflow-y-auto">
            {/* HeroSection */}
            <section className="mb-10 rounded-2xl bg-white dark:bg-[#1A2633] overflow-hidden shadow-sm border border-[#e7edf3] dark:border-[#2a3b4d]">
            <div className="@container">
                <div className="flex flex-col-reverse md:flex-row gap-6 p-6 md:p-10 items-center">
                <div className="flex flex-col gap-6 md:w-1/2 items-start justify-center">
                    <div className="flex flex-col gap-3 text-left">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold text-primary">
                        <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                        Ofertas da Semana
                    </span>
                    <h1 className="text-[#0d141b] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                        Economize na manutenção do seu carro
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                        Encontre descontos exclusivos em troca de óleo, pneus, revisão e estética automotiva com nossos parceiros certificados.
                    </p>
                    </div>
                    <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-blue-500/20">
                    <span>Ver Destaques</span>
                    </button>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-80 bg-center bg-no-repeat bg-cover rounded-xl shadow-inner" data-alt="Mechanic working on a car engine in a modern garage with blue lighting" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5r1ThCIS4Tu2z0LNznvDOUnx6D4WaW4SvJ5j-0pxvrOG7ZNgWFdUb6YkgQ0cO_X9sNOV73ZYilaPbdI3fWZdBrYFvDvEUuImJ51HpLa9P6eNedGvXYwSb0diPTR2WHxDTm7PdCtLfXm7aLOJWNvut-U7VUm3RcUl7d2SxtX2jYxecivTdxO0ISSiDPkjRzctesAbt-RmJdHx7t_p9cijS8z9Y1dUslX9pC343U0YD8wG1se7PX6Qyq1jg5GSX5EoFWXlnmB0dvN4")'}}></div>
                </div>
            </div>
            </section>

            {/* Search & Filter Section */}
            <section className="flex flex-col gap-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
                {/* SearchBar */}
                <div className="w-full md:flex-1">
                <label className="flex flex-col h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white dark:bg-[#1A2633] border border-[#e7edf3] dark:border-[#2a3b4d] overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                    <div className="text-[#4c739a] flex items-center justify-center pl-4 pr-2">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input className="flex w-full min-w-0 flex-1 resize-none bg-transparent text-[#0d141b] dark:text-white focus:outline-0 placeholder:text-gray-400 px-2 text-base font-normal leading-normal" placeholder="Busque por serviço, peça ou nome da oficina..."/>
                    <button className="bg-primary hover:bg-blue-600 text-white font-bold px-6 transition-colors">
                        Buscar
                    </button>
                    </div>
                </label>
                </div>
                {/* Location Filter Button */}
                <button className="w-full md:w-auto flex h-12 items-center justify-between md:justify-center gap-x-2 rounded-xl bg-white dark:bg-[#1A2633] border border-[#e7edf3] dark:border-[#2a3b4d] px-4 shadow-sm hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">location_on</span>
                    <p className="text-[#0d141b] dark:text-white text-sm font-medium whitespace-nowrap">São Paulo, SP</p>
                </div>
                <span className="material-symbols-outlined text-gray-400">expand_more</span>
                </button>
            </div>
            {/* Chips / Categories */}
            <div className="flex flex-wrap gap-3 items-center">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mr-2">Filtrar por:</p>
                <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#1A2633] border border-[#e7edf3] dark:border-[#2a3b4d] hover:border-primary hover:text-primary pl-4 pr-3 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-gray-500 group-hover:text-primary transition-colors">oil_barrel</span>
                <p className="text-[#0d141b] dark:text-white group-hover:text-primary text-sm font-medium transition-colors">Troca de Óleo</p>
                </button>
                {/* ... other chips ... */}
            </div>
            </section>

            {/* Promotions Grid */}
            <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight">Promoções Disponíveis</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">Mostrando 6 de 24 ofertas</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="group flex flex-col bg-white dark:bg-[#1A2633] rounded-2xl overflow-hidden border border-[#e7edf3] dark:border-[#2a3b4d] hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                        <img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Car being lifted in a garage for oil change" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixkAUqiiIap8yCb3BiIpUozC64Tjw5HnhRZ5lp1U72GnA8g7R93s9YxW0nKRo9UhBnp2dNyp4cHvU1Y9jT0QknioAQj62pbQjWzXuMF2p9RVwZDK7_x0BQRA43jFzKrtWLK2kuUU7VkItZ2BgI5AHdkKy54yCk9_jxtkqvOHi2YVmwDFFiS5SvhfRTwNOfz9YEri5MQ8nol9gihHolBMJo6EYno-bbDQ4Lycmg-r5tbMA7pzFlegrTH-dCayLMqkGj_DfHjIRXyU"/>
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                        20% OFF
                        </div>
                        <button className="absolute top-3 right-3 p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                        </button>
                    </div>
                    <div className="p-5 flex flex-col flex-1 gap-3">
                        <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700" data-alt="AutoCenter Silva Logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3DjgAy0XNSDqL62K3bvoRViiePt2hnUjxXP4qUJQauEWGUKe7Rc8O0vRbaaLBWl6hj2J4HUjq0A2WfEocCy_TBIyCQ3K7monWIsg2147KsfwjPELa7Fv79tynQ3oSxUapD_kCiT0Rgx263nSHYInVJGeZ_JJE6IWsj6AbSvAo89FnwI2RmcO0y8GKJsk6up9rmF6u8tug1b_MV9c477Kx0b-Y8AsjraXigDZAedMtsubLWIvcjwGCNqQKcdLJw1x7HTHTUAjEatY")'}}></div>
                            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">AutoCenter Silva</span>
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs font-bold text-yellow-700 dark:text-yellow-500">
                            <span className="material-symbols-outlined text-[14px]">star</span>
                            4.8
                        </div>
                        </div>
                        <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#0d141b] dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">Troca de Óleo + Filtro</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">Pacote completo com até 4 litros de óleo sintético 5W30 e filtro original.</p>
                        </div>
                        <div className="mt-2 pt-3 border-t border-dashed border-gray-200 dark:border-gray-700/50">
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center gap-1" title="Validade">
                            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                            <span>Até 30/11</span>
                            </div>
                            <div className="flex items-center gap-1" title="Localização">
                            <span className="material-symbols-outlined text-[16px]">distance</span>
                            <span>2.5 km</span>
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                            <span className="text-xs line-through text-gray-400">R$ 250,00</span>
                            <span className="text-xl font-black text-primary">R$ 199,90</span>
                            </div>
                            <button onClick={() => onNavigate(AppStage.SCHEDULING)} className="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-sm shadow-blue-500/20 transition-colors">
                            Ver Oferta
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                 {/* ... other cards ... */}
            </div>
            
            <div className="mt-12 flex justify-center">
                <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-[#1A2633] border border-[#e7edf3] dark:border-[#2a3b4d] rounded-lg text-sm font-bold text-[#0d141b] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
                Carregar mais ofertas
                <span className="material-symbols-outlined">expand_more</span>
                </button>
            </div>
            </section>
        </main>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" />
      )}
    </div>
  );
};

export default UserPromotions;
