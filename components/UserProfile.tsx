
import React, { useState } from 'react';
import { AppStage } from '../types';
import { useApp } from '../AppContext';

interface UserProfileProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onLogout, onNavigate }) => {
  const { currentUser } = useApp();
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
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white flex overflow-hidden">
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${item.stage === AppStage.USER_PROFILE ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
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
            <span className="font-bold text-lg lg:hidden">Meu Perfil</span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => onNavigate(AppStage.USER_NOTIFICATIONS)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 flex justify-center">
            <div className="w-full max-w-3xl space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="size-24 rounded-full bg-cover bg-center border-4 border-slate-200 dark:border-slate-800 shadow-lg" style={{backgroundImage: `url('${currentUser?.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac"}')`}}></div>
                <div className="text-center md:text-left">
                <h1 className="text-3xl font-black">{currentUser?.name || 'Usuário'}</h1>
                <p className="text-slate-500 dark:text-slate-400">{currentUser?.email || 'email@exemplo.com'}</p>
                <div className="mt-3 flex gap-3 justify-center md:justify-start">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">Editar Foto</button>
                </div>
                </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">person</span>
                    Dados Pessoais
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-500">Nome Completo</label>
                    <input className="w-full h-11 px-4 rounded-lg bg-slate-50 dark:bg-[#111a22] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary outline-none" defaultValue={currentUser?.name} />
                    </div>
                    <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-500">Telefone</label>
                    <input className="w-full h-11 px-4 rounded-lg bg-slate-50 dark:bg-[#111a22] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary outline-none" defaultValue="(11) 98765-4321" />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-500">E-mail</label>
                    <input className="w-full h-11 px-4 rounded-lg bg-slate-50 dark:bg-[#111a22] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary outline-none" defaultValue={currentUser?.email} disabled />
                    </div>
                </div>
                </div>

                <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">lock</span>
                    Segurança
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-500">Nova Senha</label>
                    <input className="w-full h-11 px-4 rounded-lg bg-slate-50 dark:bg-[#111a22] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary outline-none" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-500">Confirmar Senha</label>
                    <input className="w-full h-11 px-4 rounded-lg bg-slate-50 dark:bg-[#111a22] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary outline-none" type="password" placeholder="••••••••" />
                    </div>
                </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4">
                <button onClick={onLogout} className="text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/10 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined">logout</span>
                    Sair da Conta
                </button>
                <button className="bg-primary hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all w-full sm:w-auto">
                    Salvar Alterações
                </button>
                </div>
            </form>
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

export default UserProfile;
