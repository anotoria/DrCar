
import React, { useState } from 'react';
import { AppStage } from '../types';
import { useApp } from '../AppContext';

interface SchedulingProps {
  onNavigate: (stage: AppStage) => void;
  onLogout: () => void;
}

const Scheduling: React.FC<SchedulingProps> = ({ onNavigate, onLogout }) => {
  const { addAppointment, setAppStage } = useApp();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleConfirm = () => {
    addAppointment({
      workshopName: 'Auto Center Silva',
      serviceName: 'Troca de Óleo',
      date: '15 Out, 10:00',
      price: 150,
      vehicleId: '1' // Mocked ID
    });
    setAppStage(AppStage.BOOKING_CONFIRMATION);
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
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex overflow-hidden">
      {/* Sidebar */}
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${item.stage === AppStage.SEARCH ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
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
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        <header className="flex items-center justify-between border-b border-solid border-border-dark bg-white dark:bg-background-dark px-6 lg:px-10 py-3 sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg lg:hidden text-slate-900 dark:text-white">Agendar</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate(AppStage.SEARCH)} className="hidden md:block text-sm font-medium text-slate-600 dark:text-white hover:text-primary transition-colors">Voltar</button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto w-full p-4 md:p-8">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-8">
                    <section className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-border-dark shadow-sm">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">1</span>
                        Selecione o Serviço
                    </h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-4 p-4 rounded-xl border border-border-dark cursor-pointer hover:border-primary transition-all bg-slate-50 dark:bg-background-dark/50">
                        <input type="radio" name="service" defaultChecked className="text-primary focus:ring-primary h-5 w-5 bg-transparent border-border-dark" />
                        <div className="flex-1">
                            <div className="flex justify-between font-bold"><span>Troca de Óleo e Filtro</span><span className="text-primary">R$ 150,00</span></div>
                            <p className="text-sm text-text-secondary mt-1">Óleo sintético 5W30 + Filtro padrão.</p>
                        </div>
                        </label>
                    </div>
                    </section>

                    <section className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-border-dark shadow-sm text-center">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-left">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">2</span>
                        Confirme seus dados
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Veículo</label>
                        <p className="font-bold text-white">Chevrolet Onix 2020 • ABC-1234</p>
                        </div>
                    </div>
                    </section>
                </div>

                <div className="lg:col-span-4">
                    <div className="sticky top-4 bg-white dark:bg-surface-dark rounded-xl p-6 border border-border-dark shadow-xl">
                    <h3 className="text-lg font-bold mb-4">Resumo</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Serviço:</span>
                        <span className="font-bold text-white">Troca de Óleo</span>
                        </div>
                        <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Data sugerida:</span>
                        <span className="font-bold text-white">15 Out, 2023 - 10:00</span>
                        </div>
                    </div>
                    <div className="border-t border-border-dark my-6"></div>
                    <div className="flex justify-between items-end mb-6">
                        <span className="text-text-secondary">Total Estimado</span>
                        <span className="text-2xl font-bold text-white">R$ 150,00</span>
                    </div>
                    <button onClick={handleConfirm} className="w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition-all active:scale-[0.98]">
                        Confirmar Agendamento
                    </button>
                    </div>
                </div>
                </div>
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

export default Scheduling;
