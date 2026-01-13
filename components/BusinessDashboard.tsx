
import React from 'react';
import { AppStage } from '../types';

interface BusinessDashboardProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const BusinessDashboard: React.FC<BusinessDashboardProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-dark text-white font-display overflow-hidden flex h-screen w-full selection:bg-primary selection:text-white">
      <aside className="w-20 lg:w-72 bg-surface-dark border-r border-border-color flex-col hidden md:flex transition-all duration-300 shrink-0 h-full">
        <div className="h-16 flex items-center px-4 lg:px-6 border-b border-border-color gap-3 cursor-pointer" onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}>
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-xl">build_circle</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight hidden lg:block">AutoFix <span className="text-primary">Pro</span></h1>
        </div>
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 px-3">
          <button onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)} className="flex items-center gap-3 px-3 py-3 rounded-lg bg-surface-highlight text-white group w-full text-left">
            <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">dashboard</span>
            <p className="text-sm font-medium hidden lg:block">Início</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_SERVICES)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">build</span>
            <p className="text-sm font-medium hidden lg:block">Meus Serviços</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_APPOINTMENTS)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
            <p className="text-sm font-medium hidden lg:block">Agendamentos</p>
          </button>
          <button onClick={() => onNavigate(AppStage.CHAT)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">chat</span>
            <p className="text-sm font-medium hidden lg:block">Mensagens</p>
            <div className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">5</div>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_PROMOTIONS)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">campaign</span>
            <p className="text-sm font-medium hidden lg:block">Promoções</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_NOTIFICATIONS)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">notifications</span>
            <p className="text-sm font-medium hidden lg:block">Notificações</p>
            <div className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</div>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_REVIEWS)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">star</span>
            <p className="text-sm font-medium hidden lg:block">Avaliações</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_EDIT_PROFILE)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">storefront</span>
            <p className="text-sm font-medium hidden lg:block">Perfil da Loja</p>
          </button>
          <button onClick={() => onNavigate(AppStage.FAQ_SUPPORT)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">help</span>
            <p className="text-sm font-medium hidden lg:block">Ajuda</p>
          </button>
          <div className="mt-auto pt-4 border-t border-border-color">
            <button onClick={onLogout} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-red-400 hover:text-red-300 transition-colors group w-full text-left">
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium hidden lg:block">Sair</p>
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-background-dark">
        <header className="h-16 border-b border-border-color bg-surface-dark px-4 lg:px-8 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-white p-1"><span className="material-symbols-outlined">menu</span></button>
            <span className="font-bold text-lg">AutoFix</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-white">
            <h2 className="text-lg font-bold leading-tight">Visão Geral</h2>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 flex-1 justify-end">
             <button onClick={() => onNavigate(AppStage.CHAT)} className="size-10 rounded-lg bg-surface-highlight flex items-center justify-center text-white hover:bg-border-color transition-colors relative">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border border-surface-highlight"></span>
            </button>
            <button onClick={() => onNavigate(AppStage.BUSINESS_NOTIFICATIONS)} className="size-10 rounded-lg bg-surface-highlight flex items-center justify-center text-white hover:bg-border-color transition-colors relative">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-surface-highlight"></span>
            </button>
            <div className="size-10 rounded-full bg-cover bg-center border border-border-color cursor-pointer" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjRPzTxnBRUOOlEsfkoEmeJzi-HyD5T_dXTIo_jDn4Ph_Jh58E7CJlp934phKft_R76h2zuVSM6KFaGIDZsp4vI6xFKb4cF8Kgs_qYiMbylxxx6EtJ3LSW8FHSMaSF1oxMdBvBCrUagU13HrF4QB8Hwa988x3czVElLJ1ifRcjzPUaj4hk_tnZH9p0nnd7SaMD-TY2R2vUBZuG4oKfyS0IgimnMRXrJNHsj60zQztVnm7i_boWD6X0rKnqjCUKK1-JgTHHQ397oaI')"}}></div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6 lg:gap-8 pb-10">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">Olá, Oficina AutoCenter</h1>
              <p className="text-text-secondary">Aqui está o resumo das suas atividades de hoje.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-surface-dark border border-border-color rounded-xl p-5 hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">event</span></div>
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">+20%</span>
                </div>
                <p className="text-text-secondary text-sm font-medium mb-1">Novos Agendamentos</p>
                <p className="text-3xl font-bold text-white">12</p>
              </div>
              <div className="bg-surface-dark border border-border-color rounded-xl p-5 hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">chat</span></div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">5 novas</span>
                </div>
                <p className="text-text-secondary text-sm font-medium mb-1">Conversas Ativas</p>
                <p className="text-3xl font-bold text-white">8</p>
              </div>
              <div className="bg-surface-dark border border-border-color rounded-xl p-5 hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">attach_money</span></div>
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">+12%</span>
                </div>
                <p className="text-text-secondary text-sm font-medium mb-1">Faturamento (Mês)</p>
                <p className="text-3xl font-bold text-white">R$ 15.4k</p>
              </div>
            </div>

            <div className="bg-surface-dark border border-border-color rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Ações Rápidas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button onClick={() => onNavigate(AppStage.CHAT)} className="flex flex-col items-center justify-center gap-2 bg-surface-highlight hover:bg-border-color p-4 rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">chat</span>
                  <span className="text-xs font-medium text-center">Falar com Clientes</span>
                </button>
                <button onClick={() => onNavigate(AppStage.BUSINESS_APPOINTMENTS)} className="flex flex-col items-center justify-center gap-2 bg-surface-highlight hover:bg-border-color p-4 rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">edit_calendar</span>
                  <span className="text-xs font-medium text-center">Agendamentos</span>
                </button>
                <button onClick={() => onNavigate(AppStage.BUSINESS_PROMOTIONS)} className="flex flex-col items-center justify-center gap-2 bg-surface-highlight hover:bg-border-color p-4 rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">campaign</span>
                  <span className="text-xs font-medium text-center">Criar Promoção</span>
                </button>
                <button onClick={() => onNavigate(AppStage.BUSINESS_REVIEWS)} className="flex flex-col items-center justify-center gap-2 bg-surface-highlight hover:bg-border-color p-4 rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">star</span>
                  <span className="text-xs font-medium text-center">Avaliações</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;
