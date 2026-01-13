
import React from 'react';
import { AppStage } from '../types';

interface AdminPartnerSuccessProps {
  onNavigate: (stage: AppStage) => void;
}

const AdminPartnerSuccess: React.FC<AdminPartnerSuccessProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-[#0d141b] dark:text-white overflow-x-hidden transition-colors duration-200">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-[#2a3844] bg-white dark:bg-[#1a2632] px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}>
          <div className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">car_repair</span>
          </div>
          <h2 className="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Dr. Carro Empresas</h2>
        </div>
        <div className="flex gap-3">
          <button className="hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-[#cfdbe7] dark:border-[#4c739a] text-[#0d141b] dark:text-white text-sm font-bold leading-normal transition hover:bg-slate-50 dark:hover:bg-slate-800">
            <span className="truncate">Ajuda</span>
          </button>
          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[#4c739a] dark:text-slate-300">
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="layout-container flex h-full grow flex-col items-center justify-center py-10 px-4 sm:px-6">
        {/* Success Card Container */}
        <div className="w-full max-w-[800px] bg-white dark:bg-[#1a2632] rounded-xl shadow-lg border border-[#e7edf3] dark:border-[#2a3844] overflow-hidden">
          {/* Hero / Status Header */}
          <div className="flex flex-col items-center p-8 sm:p-12 pb-6 text-center">
            <div className="size-20 mb-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
              <span className="material-symbols-outlined text-[48px]">check_circle</span>
            </div>
            <h1 className="text-[#0d141b] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
              Cadastro Enviado com Sucesso!
            </h1>
            <p className="text-[#4c739a] dark:text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-[600px]">
              Recebemos os dados da oficina. Agora, nossa equipe fará a validação das informações para ativar a conta na plataforma.
            </p>
          </div>
          <div className="px-8 sm:px-12 w-full">
            <div className="h-px w-full bg-[#e7edf3] dark:bg-[#2a3844]"></div>
          </div>
          {/* Content Grid: Timeline & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 pt-8">
            {/* Left Column: Timeline Status */}
            <div className="flex flex-col">
              <h3 className="text-[#0d141b] dark:text-white text-lg font-bold mb-6">Status da Solicitação</h3>
              <div className="grid grid-cols-[40px_1fr] gap-x-2">
                {/* Step 1: Completed */}
                <div className="flex flex-col items-center gap-1">
                  <div className="size-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg font-bold">check</span>
                  </div>
                  <div className="w-[2px] bg-green-200 dark:bg-green-900 h-full min-h-[30px]"></div>
                </div>
                <div className="flex flex-col pb-6">
                  <p className="text-[#0d141b] dark:text-white text-base font-bold leading-tight">Envio do Cadastro</p>
                  <p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal">Concluído</p>
                </div>
                {/* Step 2: Active */}
                <div className="flex flex-col items-center gap-1">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 ring-4 ring-primary/10">
                    <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>manage_search</span>
                  </div>
                  <div className="w-[2px] bg-[#e7edf3] dark:bg-[#2a3844] h-full min-h-[30px]"></div>
                </div>
                <div className="flex flex-col pb-6">
                  <p className="text-primary text-base font-bold leading-tight">Análise de Dados</p>
                  <p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal">Em andamento</p>
                </div>
                {/* Step 3: Pending */}
                <div className="flex flex-col items-center gap-1">
                  <div className="size-8 rounded-full border-2 border-[#cfdbe7] dark:border-slate-600 bg-transparent text-[#cfdbe7] dark:text-slate-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">lock</span>
                  </div>
                </div>
                <div className="flex flex-col pt-1">
                  <p className="text-[#8a9bb1] dark:text-slate-500 text-base font-medium leading-tight">Aprovação Final</p>
                  <p className="text-[#8a9bb1] dark:text-slate-600 text-sm font-normal">Pendente</p>
                </div>
              </div>
            </div>
            {/* Right Column: Next Steps Cards */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[#0d141b] dark:text-white text-lg font-bold mb-2 md:mb-6">Próximos Passos</h3>
              {/* Time Card */}
              <div className="flex gap-4 rounded-xl border border-[#cfdbe7] dark:border-[#2a3844] bg-[#f8fakk] dark:bg-[#202d3a] p-5 shadow-sm">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-[28px]">schedule</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d141b] dark:text-white text-base font-bold leading-tight">Prazo Estimado</h2>
                  <p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-normal">
                    Nossa equipe leva em média <span className="font-bold text-[#0d141b] dark:text-slate-200">48 horas úteis</span> para validar seus documentos e liberar o acesso.
                  </p>
                </div>
              </div>
              {/* Notification Card */}
              <div className="flex gap-4 rounded-xl border border-[#cfdbe7] dark:border-[#2a3844] bg-[#f8fakk] dark:bg-[#202d3a] p-5 shadow-sm">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-[28px]">mark_email_unread</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d141b] dark:text-white text-base font-bold leading-tight">Fique Atento</h2>
                  <p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-normal">
                    Você receberá o resultado da análise e as instruções de primeiro acesso no e-mail cadastrado.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Actions */}
          <div className="bg-slate-50 dark:bg-[#15202b] px-8 sm:px-12 py-6 border-t border-[#e7edf3] dark:border-[#2a3844] flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-sm text-[#4c739a] dark:text-slate-500 font-medium">Tem alguma dúvida sobre o processo?</p>
            <div className="flex gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-white dark:bg-[#2a3844] border border-[#cfdbe7] dark:border-[#4c739a] text-[#0d141b] dark:text-white text-sm font-bold shadow-sm transition hover:bg-slate-50 dark:hover:bg-[#344250]">
                Falar com Suporte
              </button>
              <button 
                onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}
                className="flex-1 sm:flex-none cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 transition hover:bg-blue-600"
              >
                Voltar ao Início
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Link */}
        <div className="mt-8 text-center">
          <a 
            onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)}
            className="text-sm font-medium text-[#4c739a] dark:text-slate-500 hover:text-primary transition flex items-center gap-1 justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Ir para o site principal
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminPartnerSuccess;
