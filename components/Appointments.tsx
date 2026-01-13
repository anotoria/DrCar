
import React, { useState } from 'react';
import { AppStage } from '../types';
import { useApp } from '../AppContext';

interface AppointmentsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const Appointments: React.FC<AppointmentsProps> = ({ onLogout, onNavigate }) => {
  const { appointments } = useApp();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch(status) {
        case 'confirmed': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
        case 'pending': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
        case 'cancelled': return 'text-red-500 bg-red-500/10 border-red-500/20';
        case 'completed': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
        default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getStatusLabel = (status: string) => {
      switch(status) {
          case 'confirmed': return 'Confirmado';
          case 'pending': return 'Pendente';
          case 'cancelled': return 'Cancelado';
          case 'completed': return 'Concluído';
          default: return status;
      }
  };

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
      {/* Sidebar Navigation */}
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${item.stage === AppStage.APPOINTMENTS ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
         <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111a22] z-40 shrink-0">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg lg:hidden">Agendamentos</span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => onNavigate(AppStage.USER_NOTIFICATIONS)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-background-dark p-4 md:p-8">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-8 pb-20">
            {/* Page Heading */}
            <header className="flex flex-col gap-2">
                <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Histórico de Agendamentos</h1>
                <p className="text-text-secondary text-base md:text-lg font-normal leading-normal">Gerencie seus serviços automotivos passados e futuros.</p>
            </header>

            {/* Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-3 rounded-xl p-6 border border-border-dark bg-surface-dark/30">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined">calendar_month</span>
                    </div>
                    <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">Total</p>
                </div>
                <p className="text-white tracking-tight text-3xl font-bold">{appointments.length}</p>
                </div>
                {/* ... other stats static for now ... */}
            </section>

            {/* Appointment List */}
            <section className="flex flex-col gap-4">
                {appointments.map((apt) => (
                    <div key={apt.id} className="flex flex-col md:flex-row gap-5 p-5 rounded-xl border border-border-dark bg-[#1a2632] hover:border-text-secondary/50 transition-colors">
                    <div className="w-full md:w-24 md:h-24 h-32 shrink-0 rounded-lg bg-cover bg-center grayscale opacity-80" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCq9lY951kHUvBmUW-SGyCTbgCcWYevIijxfmKbzGAdSrw50XHhAa6N5lmdN1zIwTWjF5hpBp0P1TVFItXmipcWKSP6gE_FisbaUrx6ux2_imCeA4DMySDeB3zADiDXm6UNE3rW4WPFZXGN0mHqwIgZtXF55hI259B-EJFBoWholr0FfM8R9Ofn7f91j2qe_bnFWLbDwLdsWXbgA7NWhXdTwYCRZB5etI5-8G7T6EehGtwjb7rfKN9o-idwl6pfKhb7EcSn4HgfRQg")'}}></div>
                    <div className="flex flex-col flex-1 gap-1">
                        <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-bold text-white">{apt.workshopName}</h3>
                            <p className="text-text-secondary text-sm">{apt.serviceName}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${getStatusColor(apt.status)}`}>
                            {getStatusLabel(apt.status)}
                        </div>
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-text-secondary">
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            <span>{apt.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-secondary">
                            <span className="material-symbols-outlined text-[18px]">payments</span>
                            <span>R$ {apt.price},00</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 border border-border-dark hover:bg-surface-dark text-white rounded-lg font-medium text-sm transition-colors">
                            Detalhes
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
            </section>
            </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" />
      )}
    </div>
  );
};

export default Appointments;
