
import React from 'react';
import { AppStage } from '../types';

interface BusinessNotificationsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const BusinessNotifications: React.FC<BusinessNotificationsProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-dark text-white font-display overflow-hidden flex h-screen w-full selection:bg-primary/30">
      {/* Sidebar - Consistent with BusinessDashboard */}
      <aside className="w-20 lg:w-72 bg-surface-dark border-r border-border-dark flex-col hidden md:flex transition-all duration-300 shrink-0 h-full">
        <div className="h-16 flex items-center px-4 lg:px-6 border-b border-border-dark gap-3 cursor-pointer" onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}>
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-xl">build_circle</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight hidden lg:block">AutoFix <span className="text-primary">Pro</span></h1>
        </div>
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 px-3">
          <button onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
            <p className="text-sm font-medium hidden lg:block">Dashboard</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_SERVICES)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">build</span>
            <p className="text-sm font-medium hidden lg:block">Meus Serviços</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_APPOINTMENTS)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
            <p className="text-sm font-medium hidden lg:block">Agendamentos</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_NOTIFICATIONS)} className="flex items-center gap-3 px-3 py-3 rounded-lg bg-surface-highlight text-white w-full text-left shadow-sm">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
            <p className="text-sm font-bold hidden lg:block">Notificações</p>
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
          <div className="mt-auto pt-4 border-t border-border-dark">
            <button className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">settings</span>
              <p className="text-sm font-medium hidden lg:block">Configurações</p>
            </button>
            <button onClick={onLogout} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-red-400 hover:text-red-300 transition-colors group w-full text-left">
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium hidden lg:block">Sair</p>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-background-dark relative scroll-smooth">
        {/* Top Nav */}
        <header className="h-16 border-b border-border-dark bg-surface-dark px-4 lg:px-8 flex items-center justify-between shrink-0 z-20 sticky top-0">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-white p-1">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg">AutoFix</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-white">
            <h2 className="text-lg font-bold leading-tight">Notificações da Oficina</h2>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 flex-1 justify-end">
            <div className="size-10 rounded-full bg-cover bg-center border border-border-dark cursor-pointer" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjRPzTxnBRUOOlEsfkoEmeJzi-HyD5T_dXTIo_jDn4Ph_Jh58E7CJlp934phKft_R76h2zuVSM6KFaGIDZsp4vI6xFKb4cF8Kgs_qYiMbylxxx6EtJ3LSW8FHSMaSF1oxMdBvBCrUagU13HrF4QB8Hwa988x3czVElLJ1ifRcjzPUaj4hk_tnZH9p0nnd7SaMD-TY2R2vUBZuG4oKfyS0IgimnMRXrJNHsj60zQztVnm7i_boWD6X0rKnqjCUKK1-JgTHHQ397oaI')"}}></div>
          </div>
        </header>

        <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10 gap-8">
          {/* Page Heading & Actions */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-white">Centro de Notificações</h1>
              <p className="text-text-secondary">Fique por dentro de tudo o que acontece na sua oficina.</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">done_all</span>
              Marcar todas como lidas
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['Todas', 'Não lidas', 'Sistema', 'Clientes'].map((label, idx) => (
              <button key={label} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-primary text-white' : 'bg-surface-dark text-text-secondary hover:text-white hover:bg-surface-highlight border border-border-dark'}`}>
                {label}
              </button>
            ))}
          </div>

          {/* Notifications List */}
          <div className="flex flex-col gap-4">
            
            {/* Notification Item - Unread */}
            <div className="bg-surface-dark border-l-4 border-l-primary rounded-xl p-5 border-y border-r border-border-dark hover:border-r-primary/50 transition-all cursor-pointer group">
              <div className="flex gap-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">event_available</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-bold text-base group-hover:text-primary transition-colors">Novo Agendamento Confirmado</h3>
                    <span className="text-xs text-text-secondary whitespace-nowrap ml-2">10 min atrás</span>
                  </div>
                  <p className="text-text-secondary text-sm line-clamp-2">O cliente <strong>Roberto Silva</strong> confirmou o agendamento para <strong>Troca de Óleo</strong> amanhã às 14:00.</p>
                </div>
              </div>
            </div>

            {/* Notification Item - Unread */}
            <div className="bg-surface-dark border-l-4 border-l-red-500 rounded-xl p-5 border-y border-r border-border-dark hover:border-r-red-500/50 transition-all cursor-pointer group">
              <div className="flex gap-4">
                <div className="size-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-bold text-base group-hover:text-red-500 transition-colors">Estoque Baixo: Filtro de Óleo</h3>
                    <span className="text-xs text-text-secondary whitespace-nowrap ml-2">2h atrás</span>
                  </div>
                  <p className="text-text-secondary text-sm line-clamp-2">O item <strong>Filtro de Óleo PH6607</strong> atingiu o nível mínimo de estoque (3 unidades). Reponha o quanto antes.</p>
                </div>
              </div>
            </div>

            {/* Notification Item - Read */}
            <div className="bg-surface-dark border border-border-dark rounded-xl p-5 hover:border-text-secondary/30 transition-all cursor-pointer group opacity-80 hover:opacity-100">
              <div className="flex gap-4">
                <div className="size-12 rounded-full bg-surface-highlight flex items-center justify-center text-text-secondary shrink-0">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-medium text-base">Nova Avaliação 5 Estrelas</h3>
                    <span className="text-xs text-text-secondary whitespace-nowrap ml-2">Ontem</span>
                  </div>
                  <p className="text-text-secondary text-sm line-clamp-2">Mariana Costa avaliou sua oficina com 5 estrelas: "Atendimento excelente e muito rápido!"</p>
                </div>
              </div>
            </div>

            {/* Notification Item - Read */}
            <div className="bg-surface-dark border border-border-dark rounded-xl p-5 hover:border-text-secondary/30 transition-all cursor-pointer group opacity-80 hover:opacity-100">
              <div className="flex gap-4">
                <div className="size-12 rounded-full bg-surface-highlight flex items-center justify-center text-text-secondary shrink-0">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-medium text-base">Documentação Aprovada</h3>
                    <span className="text-xs text-text-secondary whitespace-nowrap ml-2">3 dias atrás</span>
                  </div>
                  <p className="text-text-secondary text-sm line-clamp-2">Os documentos atualizados da sua empresa foram validados pela nossa equipe administrativa.</p>
                </div>
              </div>
            </div>

          </div>
          
          <button className="text-primary text-sm font-bold hover:underline text-center mt-4">
            Carregar mais notificações
          </button>
        </div>
      </main>
    </div>
  );
};

export default BusinessNotifications;
