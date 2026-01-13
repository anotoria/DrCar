
import React from 'react';
import { AppStage } from '../types';

interface AdminPlansProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminPlans: React.FC<AdminPlansProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden font-display h-screen w-full flex flex-col">
      <div className="flex h-screen w-full">
        {/* Side Navigation */}
        <aside className="w-64 flex-shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] transition-all hidden lg:flex">
          <div className="p-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AutoAdmin</h1>
          </div>
          <div className="flex-1 px-4 flex flex-col gap-2 mt-4 overflow-y-auto">
            <div className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Principal</div>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}
              className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">dashboard</span>
              <span className="text-sm font-medium">Visão Geral</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)}
              className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">store</span>
              <span className="text-sm font-medium">Empresas</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_OWNERS)}
              className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">person</span>
              <span className="text-sm font-medium">Proprietários</span>
            </button>
            
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">calendar_month</span>
              <span className="text-sm font-medium">Agendamentos</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">star</span>
              <span className="text-sm font-medium">Avaliações</span>
            </a>

            <div className="px-2 mt-6 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Gestão</div>
            
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)}
              className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">notifications</span>
              <span className="text-sm font-medium">Notificações</span>
            </button>

            <button 
              onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)}
              className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">admin_panel_settings</span>
              <span className="text-sm font-medium">Administradores</span>
            </button>
            
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)}
              className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">payments</span>
              <span className="text-sm font-medium">Financeiro</span>
            </button>

            {/* Active State */}
            <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors text-left">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>sell</span>
              <span className="text-sm font-bold">Planos</span>
            </button>

            <button 
              onClick={() => onNavigate(AppStage.ADMIN_REPORTS)}
              className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">bar_chart</span>
              <span className="text-sm font-medium">Relatórios</span>
            </button>

            <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">settings</span>
              <span className="text-sm font-medium">Configurações</span>
            </button>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cover bg-center" data-alt="User avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac")'}}></div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Admin Master</p>
                <button onClick={onLogout} className="text-xs text-slate-500 truncate hover:text-primary text-left">Sair</button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Wrapper */}
        <div className="flex-1 flex flex-col h-full relative min-w-0">
          {/* Top Header */}
          <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b]">
            <div className="flex items-center text-sm breadcrumbs text-slate-500">
              <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary cursor-pointer transition-colors">Home</button>
              <span className="mx-2 text-slate-300">/</span>
              <span className="text-slate-900 dark:text-white font-medium">Planos</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <input className="pl-9 pr-4 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 w-64 transition-all text-slate-900 dark:text-white placeholder-slate-500" placeholder="Buscar..." type="text"/>
                <span className="material-symbols-outlined absolute left-2.5 top-1.5 text-slate-400 text-[18px]">search</span>
              </div>
              <button className="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors relative">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#151f2b]"></span>
              </button>
              <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="lg:hidden text-slate-500">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </header>

          {/* Scrollable Content Area */}
          <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
              
              {/* Page Heading */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Gerenciamento de Planos</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Configure os planos de assinatura disponíveis para as oficinas parceiras e acompanhe o desempenho financeiro.</p>
                </div>
                <button className="flex shrink-0 items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-wide shadow-md shadow-primary/20">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span className="truncate">Criar Novo Plano</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Planos Ativos</p>
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-md text-[20px]">inventory_2</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">3</p>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Disponíveis</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">MRR Mensal</p>
                    <span className="material-symbols-outlined text-green-600 bg-green-100 dark:bg-green-900/30 p-1 rounded-md text-[20px]">trending_up</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">R$ 42.450</p>
                    <span className="text-green-600 text-sm font-medium bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">+12% vs mês anterior</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Novas Assinaturas</p>
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-md text-[20px]">group_add</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">+28</p>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Neste mês</span>
                  </div>
                </div>
              </div>

              {/* Pricing Cards Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                  <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-tight">Planos Disponíveis</h2>
                  <div className="flex gap-2">
                    <button className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 transition-colors">Ver Arquivados</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Basic Plan */}
                  <div className="flex flex-col gap-4 rounded-xl border border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Oficina Start</h3>
                        <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">Ativo</span>
                      </div>
                      <div className="flex items-baseline gap-1 text-slate-900 dark:text-white">
                        <span className="text-3xl font-black leading-tight tracking-tight">R$ 99</span>
                        <span className="text-base font-medium text-slate-500 dark:text-slate-400">/mês</span>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">group</span>
                        15 Assinaturas ativas
                      </div>
                    </div>
                    <div className="h-px bg-slate-200 dark:bg-slate-700 w-full"></div>
                    <div className="flex flex-col gap-3 flex-1">
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Até 10 veículos simultâneos
                      </div>
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Agendamento online básico
                      </div>
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Suporte por email
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="flex-1 cursor-pointer items-center justify-center rounded-lg h-9 px-4 border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold transition-colors">
                        Editar
                      </button>
                      <button className="cursor-pointer items-center justify-center rounded-lg size-9 flex border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Desativar">
                        <span className="material-symbols-outlined text-[20px]">block</span>
                      </button>
                    </div>
                  </div>

                  {/* Pro Plan */}
                  <div className="flex flex-col gap-4 rounded-xl border-2 border-solid border-primary bg-white dark:bg-[#151f2b] p-6 shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Mais Popular</div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Oficina Pro</h3>
                        <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">Ativo</span>
                      </div>
                      <div className="flex items-baseline gap-1 text-slate-900 dark:text-white">
                        <span className="text-3xl font-black leading-tight tracking-tight">R$ 199</span>
                        <span className="text-base font-medium text-slate-500 dark:text-slate-400">/mês</span>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">group</span>
                        128 Assinaturas ativas
                      </div>
                    </div>
                    <div className="h-px bg-slate-200 dark:bg-slate-700 w-full"></div>
                    <div className="flex flex-col gap-3 flex-1">
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Até 50 veículos simultâneos
                      </div>
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Gestão de estoque de peças
                      </div>
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Relatórios financeiros
                      </div>
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Suporte prioritário WhatsApp
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="flex-1 cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-sm">
                        Editar
                      </button>
                      <button className="cursor-pointer items-center justify-center rounded-lg size-9 flex border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Desativar">
                        <span className="material-symbols-outlined text-[20px]">block</span>
                      </button>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="flex flex-col gap-4 rounded-xl border border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Oficina Premium</h3>
                        <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">Ativo</span>
                      </div>
                      <div className="flex items-baseline gap-1 text-slate-900 dark:text-white">
                        <span className="text-3xl font-black leading-tight tracking-tight">R$ 399</span>
                        <span className="text-base font-medium text-slate-500 dark:text-slate-400">/mês</span>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">group</span>
                        42 Assinaturas ativas
                      </div>
                    </div>
                    <div className="h-px bg-slate-200 dark:bg-slate-700 w-full"></div>
                    <div className="flex flex-col gap-3 flex-1">
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Veículos ilimitados
                      </div>
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        API para integrações
                      </div>
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Gerente de conta exclusivo
                      </div>
                      <div className="text-[13px] font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Múltiplas filiais
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="flex-1 cursor-pointer items-center justify-center rounded-lg h-9 px-4 border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold transition-colors">
                        Editar
                      </button>
                      <button className="cursor-pointer items-center justify-center rounded-lg size-9 flex border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Desativar">
                        <span className="material-symbols-outlined text-[20px]">block</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Companies Table Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-1 mt-4">
                  <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-tight">Últimas Assinaturas</h2>
                  <div className="flex gap-2 items-center">
                    <div className="relative hidden sm:block">
                      <input className="pl-9 pr-4 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#151f2b] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 w-64" placeholder="Buscar empresa..." type="text"/>
                      <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-[18px]">search</span>
                    </div>
                    <button className="h-9 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#151f2b] text-slate-900 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Exportar</button>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                        <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Empresa</th>
                        <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Plano Atual</th>
                        <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Data Início</th>
                        <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                        <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Próxima Cobrança</th>
                        <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-xs">AC</div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">Auto Center Silva</p>
                              <p className="text-xs text-slate-500">contato@autocenter.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-600/20">Oficina Pro</span>
                        </td>
                        <td className="p-4 text-sm text-slate-900 dark:text-slate-300">12 Jan 2024</td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Ativo</span>
                        </td>
                        <td className="p-4 text-sm text-slate-900 dark:text-slate-300">12 Set 2024</td>
                        <td className="p-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold text-xs">MV</div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">Mecânica Veloz</p>
                              <p className="text-xs text-slate-500">adm@mecveloz.com.br</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-600/20">Oficina Start</span>
                        </td>
                        <td className="p-4 text-sm text-slate-900 dark:text-slate-300">05 Mar 2024</td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-500 ring-1 ring-inset ring-yellow-600/20">Pendente</span>
                        </td>
                        <td className="p-4 text-sm text-slate-900 dark:text-slate-300">-</td>
                        <td className="p-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold text-xs">GP</div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">Garage Premium</p>
                              <p className="text-xs text-slate-500">financeiro@garagepremium.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/20 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10">Oficina Premium</span>
                        </td>
                        <td className="p-4 text-sm text-slate-900 dark:text-slate-300">22 Jun 2023</td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Ativo</span>
                        </td>
                        <td className="p-4 text-sm text-slate-900 dark:text-slate-300">22 Set 2024</td>
                        <td className="p-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 font-bold text-xs">OS</div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">Oficina do Sul</p>
                              <p className="text-xs text-slate-500">osul@email.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-600/20">Oficina Pro</span>
                        </td>
                        <td className="p-4 text-sm text-slate-900 dark:text-slate-300">10 Ago 2023</td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-900/20 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-600/10">Cancelado</span>
                        </td>
                        <td className="p-4 text-sm text-slate-900 dark:text-slate-300">-</td>
                        <td className="p-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1a2632] flex items-center justify-between">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Mostrando <span className="font-bold">4</span> de <span className="font-bold">185</span> resultados</p>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-xs font-medium rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-white dark:bg-[#151f2b] hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors" disabled>Anterior</button>
                      <button className="px-3 py-1 text-xs font-medium rounded border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white bg-white dark:bg-[#151f2b] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Próximo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPlans;
