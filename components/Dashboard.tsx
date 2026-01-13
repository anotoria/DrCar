
import React, { useState } from 'react';
import { AppStage } from '../types';

interface DashboardProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile toggle
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop collapse

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
    <div className="font-display bg-background-dark text-white antialiased min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-surface-dark border-r border-border-dark transform transition-all duration-300 
        lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64 flex flex-col`}
      >
        <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(AppStage.DASHBOARD)}>
            <div className="bg-primary/10 p-2 rounded-xl text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl">local_taxi</span>
            </div>
            {!isCollapsed && (
              <div className="transition-opacity duration-300">
                <h1 className="text-xl font-bold leading-none tracking-tight">Dr. do Carro</h1>
                <p className="text-xs text-text-secondary font-medium mt-1">Gestão Automotiva</p>
              </div>
            )}
          </div>
          {/* Mobile Close Button */}
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-text-secondary">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        {/* Toggle Button Desktop */}
        <div className="hidden lg:flex justify-end px-4 mb-2">
            <button 
                onClick={() => setIsCollapsed(!isCollapsed)} 
                className="text-text-secondary hover:text-white transition-colors"
            >
                <span className="material-symbols-outlined text-xl">
                    {isCollapsed ? 'chevron_right' : 'chevron_left'}
                </span>
            </button>
        </div>
        
        <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => (
            <button 
              key={item.stage}
              onClick={() => { onNavigate(item.stage); setIsSidebarOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all whitespace-nowrap group relative
                ${item.stage === AppStage.DASHBOARD ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white hover:bg-white/5'}
                ${isCollapsed ? 'justify-center' : ''}
              `}
              title={isCollapsed ? item.label : ''}
            >
              <span className="material-symbols-outlined shrink-0">{item.icon}</span>
              {!isCollapsed && <span className="font-semibold text-sm">{item.label}</span>}
              
              {/* Badge Logic */}
              {item.badge && (
                <span className={`
                    ${isCollapsed ? 'absolute top-2 right-2 size-2 p-0' : 'ml-auto px-1.5 py-0.5'} 
                    bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center
                `}>
                    {!isCollapsed && item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border-dark flex flex-col gap-4">
            <button 
                onClick={onLogout} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title={isCollapsed ? 'Sair' : ''}
            >
              <span className="material-symbols-outlined shrink-0">logout</span>
              {!isCollapsed && <span className="font-medium text-sm">Sair</span>}
            </button>
            
            <div 
                className={`flex items-center gap-3 px-2 cursor-pointer ${isCollapsed ? 'justify-center' : ''}`} 
                onClick={() => onNavigate(AppStage.USER_PROFILE)}
            >
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-border-dark shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac")' }}></div>
              {!isCollapsed && (
                  <div className="flex flex-col overflow-hidden">
                     <h1 className="text-sm font-bold text-white truncate">Roberto Silva</h1>
                     <p className="text-text-secondary text-xs truncate">Proprietário</p>
                  </div>
              )}
            </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-border-dark bg-surface-dark/95 backdrop-blur-sm sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg lg:hidden">Início</span>
            <div className="hidden lg:flex relative w-64 lg:w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
              <input className="w-full bg-background-dark/50 border-border-dark rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary text-white placeholder:text-text-secondary/50" placeholder="Buscar serviços..."/>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <button onClick={() => onNavigate(AppStage.CHAT)} className="p-2 text-text-secondary hover:text-white relative">
              <span className="material-symbols-outlined">chat</span>
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
            </button>
             <button onClick={() => onNavigate(AppStage.USER_NOTIFICATIONS)} className="p-2 text-text-secondary hover:text-white relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-white">Olá, Roberto! 👋</h2>
                <p className="text-text-secondary">Confira o status da sua frota.</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => onNavigate(AppStage.CHAT)} className="bg-surface-dark hover:bg-white/5 text-white px-5 py-3 rounded-xl font-bold border border-border-dark transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  Falar com Oficina
                </button>
                <button onClick={() => onNavigate(AppStage.GARAGE)} className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">directions_car</span>
                  Adicionar Carro
                </button>
              </div>
            </div>
            
            {/* Main Vehicle Card */}
            <div className="bg-surface-dark rounded-2xl p-6 border border-border-dark">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/3 aspect-video lg:aspect-square rounded-xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070" className="w-full h-full object-cover" alt="Car" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold">Chevrolet Onix</h3>
                      <p className="text-text-secondary">2020 • 1.0 Turbo • ABC-1234</p>
                    </div>
                    <span className="text-emerald-500 flex items-center gap-1 font-bold text-sm bg-emerald-500/10 px-3 py-1 rounded-full">
                      <span className="material-symbols-outlined text-sm">check_circle</span> Em dia
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-background-dark/50 rounded-xl border border-border-dark">
                      <p className="text-text-secondary text-[10px] font-bold uppercase tracking-wider mb-1">Km Atual</p>
                      <p className="text-xl font-bold">45.230 km</p>
                    </div>
                    <div className="p-4 bg-background-dark/50 rounded-xl border border-border-dark">
                      <p className="text-text-secondary text-[10px] font-bold uppercase tracking-wider mb-1">Saúde Geral</p>
                      <p className="text-xl font-bold text-emerald-500">98%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button onClick={() => onNavigate(AppStage.SEARCH)} className="bg-surface-dark p-6 rounded-2xl border border-border-dark hover:border-primary transition-all flex flex-col items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all"><span className="material-symbols-outlined text-3xl">build</span></div>
                <span className="font-bold">Agendar Revisão</span>
              </button>
              <button onClick={() => onNavigate(AppStage.APPOINTMENTS)} className="bg-surface-dark p-6 rounded-2xl border border-border-dark hover:border-primary transition-all flex flex-col items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all"><span className="material-symbols-outlined text-3xl">history</span></div>
                <span className="font-bold">Ver Histórico</span>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" />
      )}
    </div>
  );
};

export default Dashboard;
