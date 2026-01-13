
import React, { useState } from 'react';
import { AppStage } from '../types';
import { useApp } from '../AppContext';

interface UserNotificationsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const UserNotifications: React.FC<UserNotificationsProps> = ({ onLogout, onNavigate }) => {
  const { notifications } = useApp();
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
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white font-display overflow-hidden flex">
      {/* Sidebar - Consistent with Dashboard */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card-light dark:bg-[#111a22] border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${item.stage === AppStage.USER_NOTIFICATIONS ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-semibold text-sm">{item.label}</span>
              {item.badge && <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
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

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto bg-background-dark">
         <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111a22] sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg lg:hidden">Notificações</span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => onNavigate(AppStage.USER_NOTIFICATIONS)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8">
            <div className="max-w-[960px] mx-auto flex flex-col gap-6">
            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-border-dark">
                <div className="flex flex-col gap-1">
                <h1 className="text-white text-3xl font-extrabold tracking-tight">Minhas Notificações</h1>
                <p className="text-text-secondary text-base">Acompanhe alertas de manutenção e confirmações.</p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-surface-dark border border-border-dark text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-lg">done_all</span>
                <span className="truncate">Marcar todas como lidas</span>
                </button>
            </div>

            {/* Filters Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {['Todas', 'Não lidas', 'Agendamentos', 'Manutenção', 'Promoções'].map((label, idx) => (
                <button key={label} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-all ${idx === 0 ? 'bg-primary text-white shadow-md' : 'bg-surface-dark border border-border-dark text-text-secondary hover:text-white'}`}>
                    <span className="text-sm font-bold">{label}</span>
                    {label === 'Não lidas' && notifications.length > 0 && <span className="flex items-center justify-center bg-red-900/50 text-red-400 text-[10px] font-bold h-5 min-w-5 px-1 rounded-full">{notifications.length}</span>}
                </button>
                ))}
            </div>

            {/* Notifications List */}
            <div className="flex flex-col gap-3">
                {/* Dynamic Items from Context */}
                {notifications.map((msg, index) => (
                    <div key={index} className="group relative flex flex-col sm:flex-row gap-4 bg-surface-dark p-5 rounded-xl border-l-4 border-l-primary border-border-dark shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4 flex-1">
                        <div className="relative shrink-0">
                        <div className="text-primary bg-primary/10 flex items-center justify-center rounded-xl size-12">
                            <span className="material-symbols-outlined">notifications_active</span>
                        </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 pr-8">
                        <div className="flex items-center gap-2">
                            <h3 className="text-white text-base font-bold">Nova Mensagem</h3>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Novo</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            {msg}
                        </p>
                        <p className="text-text-secondary/50 text-xs font-medium mt-1">Agora mesmo</p>
                        </div>
                    </div>
                    </div>
                ))}

                {/* Static Examples */}
                <div className="group relative flex flex-col sm:flex-row gap-4 bg-surface-dark p-5 rounded-xl border border-border-dark shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4 flex-1">
                    <div className="text-green-600 bg-green-900/30 flex items-center justify-center rounded-xl size-12 shrink-0">
                    <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 pr-8">
                    <h3 className="text-white text-base font-bold">Agendamento Confirmado</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        Sua visita à <strong>Oficina TopCar</strong> está confirmada para amanhã, <strong>14/10 às 09:00</strong>.
                    </p>
                    <p className="text-text-secondary/50 text-xs font-medium mt-1">Recebido há 5 horas</p>
                    </div>
                </div>
                <div className="shrink-0 flex items-center sm:self-center pt-2 sm:pt-0">
                    <button onClick={() => onNavigate(AppStage.APPOINTMENTS)} className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-9 px-5 border border-border-dark hover:border-primary hover:text-primary text-white text-sm font-medium transition-all">
                    <span>Ver Detalhes</span>
                    </button>
                </div>
                </div>

                {/* Read item */}
                <div className="flex items-center gap-4 py-2">
                <div className="h-px bg-border-dark flex-1"></div>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Lidas Anteriormente</span>
                <div className="h-px bg-border-dark flex-1"></div>
                </div>

                <div className="group relative flex flex-col sm:flex-row gap-4 bg-surface-dark/50 p-5 rounded-xl border border-transparent opacity-70 hover:opacity-100 transition-all">
                <div className="flex items-start gap-4 flex-1">
                    <div className="text-text-secondary bg-gray-800 flex items-center justify-center rounded-xl size-12 shrink-0">
                    <span className="material-symbols-outlined">history</span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 pr-8">
                    <h3 className="text-white text-base font-semibold">Histórico de Manutenção Atualizado</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        O serviço "Troca de Pneus" foi adicionado ao seu histórico.
                    </p>
                    <p className="text-text-secondary/50 text-xs font-medium mt-1">Recebido em 05/10/2023</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="py-8 text-center">
                <button className="text-sm font-bold text-primary hover:underline">
                Carregar notificações antigas
                </button>
            </div>
            </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
            <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" />
        )}
      </main>
    </div>
  );
};

export default UserNotifications;
