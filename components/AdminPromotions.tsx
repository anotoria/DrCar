
import React from 'react';
import { AppStage } from '../types';

interface AdminPromotionsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminPromotions: React.FC<AdminPromotionsProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-display text-[#0d141b] dark:text-white overflow-hidden h-screen w-full flex flex-col">
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-72 h-full bg-white dark:bg-[#1a2632] border-r border-[#e7edf3] dark:border-[#2a3845] flex-shrink-0 transition-colors">
          <div className="flex items-center gap-3 px-6 py-6 border-b border-[#e7edf3] dark:border-[#2a3845]">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">car_repair</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold leading-normal text-[#0d141b] dark:text-white">AutoFix Admin</h1>
              <p className="text-[#4c739a] dark:text-[#94a3b8] text-xs font-normal">Painel Super Admin</p>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-2">
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-[#e7edf3] dark:hover:bg-[#2a3845] hover:text-primary transition-colors text-left w-full"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Dashboard</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-[#e7edf3] dark:hover:bg-[#2a3845] hover:text-primary transition-colors text-left w-full"
            >
              <span className="material-symbols-outlined">business</span>
              <p className="text-sm font-medium">Empresas</p>
            </button>
            {/* Active State */}
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors text-left w-full">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
              <p className="text-sm font-bold">Promoções</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_OWNERS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-[#e7edf3] dark:hover:bg-[#2a3845] hover:text-primary transition-colors text-left w-full"
            >
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium">Usuários</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-[#e7edf3] dark:hover:bg-[#2a3845] hover:text-primary transition-colors text-left w-full"
            >
              <span className="material-symbols-outlined">payments</span>
              <p className="text-sm font-medium">Financeiro</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_GENERAL_SETTINGS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-[#e7edf3] dark:hover:bg-[#2a3845] hover:text-primary transition-colors text-left w-full"
            >
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium">Configurações</p>
            </button>
          </nav>
          <div className="p-4 border-t border-[#e7edf3] dark:border-[#2a3845]">
            <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-left">
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium">Sair</p>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          {/* Top Nav */}
          <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#1a2632] border-b border-[#e7edf3] dark:border-[#2a3845] shrink-0">
            <div className="flex items-center gap-4 lg:hidden">
              <button className="text-[#0d141b] dark:text-white">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <h2 className="text-lg font-bold text-[#0d141b] dark:text-white">Promoções</h2>
            </div>
            {/* Breadcrumbs / Title (Desktop) */}
            <div className="hidden lg:flex flex-col">
              <div className="flex items-center gap-2 text-sm text-[#4c739a] dark:text-[#94a3b8]">
                <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary">Admin</button>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="text-primary font-medium">Promoções</span>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex gap-2">
                <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-[#e7edf3] dark:hover:bg-[#2a3845] text-[#4c739a] dark:text-[#94a3b8] transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-[#1a2632]"></span>
                </button>
                <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#e7edf3] dark:hover:bg-[#2a3845] text-[#4c739a] dark:text-[#94a3b8] transition-colors">
                  <span className="material-symbols-outlined">help</span>
                </button>
              </div>
              <div className="h-8 w-px bg-[#e7edf3] dark:bg-[#2a3845] mx-2"></div>
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-[#e7edf3] dark:border-[#2a3845]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1I_DFZi4RCkbrkwTVdhUjniMPnB70C9C5c1FuAOU38FNK6BYa9YMwDfNJ0bkDKBVYNsnjTanJui9M86_5CcPb13eUDVaMUVD3oH3AnTk-Y-p8OhXKnYo0RJN-x7nhQH4nvTeOK2R2vkud4kZTCLLXAvIoz1uaXQJsnSB15CSDWNnUm7c2qjnCicFrlt1yGZh1bmRzVLpHzVl9GPK-zmyy37QzPWFOhXMOehjdPqX3pQH_uTAAWVWM4S73RbxRgWz1wftz3aebqEE")'}}></div>
                <div className="hidden md:flex flex-col">
                  <span className="text-sm font-bold leading-none text-[#0d141b] dark:text-white">Carlos Admin</span>
                  <span className="text-xs text-[#4c739a] dark:text-[#94a3b8] mt-1">Moderador Chefe</span>
                </div>
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
              {/* Page Heading */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#0d141b] dark:text-white">Visão Geral de Promoções</h1>
                  <p className="text-[#4c739a] dark:text-[#94a3b8] text-base max-w-2xl">Visualize, filtre e modere as ofertas criadas pelas oficinas parceiras. Sua ação é necessária em 15 itens.</p>
                </div>
                <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold shadow-sm shadow-blue-500/20 flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  Nova Campanha Global
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Stat 1 */}
                <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#e7edf3] dark:border-[#2a3845] shadow-sm flex flex-col gap-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#4c739a] dark:text-[#94a3b8] text-sm font-medium">Promoções Ativas</span>
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg text-[20px]">check_circle</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#0d141b] dark:text-white">124</span>
                    <span className="text-green-600 text-sm font-medium bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span> 12%
                    </span>
                  </div>
                  <span className="text-xs text-[#4c739a] dark:text-[#94a3b8] mt-1">vs. mês passado</span>
                </div>
                {/* Stat 2 */}
                <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-yellow-200 dark:border-yellow-900/30 shadow-sm flex flex-col gap-1 relative overflow-hidden">
                  <div className="absolute right-0 top-0 p-2 opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-[100px]">hourglass_top</span>
                  </div>
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <span className="text-[#4c739a] dark:text-[#94a3b8] text-sm font-medium">Aguardando Aprovação</span>
                    <span className="material-symbols-outlined text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 p-1.5 rounded-lg text-[20px]">hourglass_empty</span>
                  </div>
                  <div className="flex items-baseline gap-2 relative z-10">
                    <span className="text-3xl font-bold text-[#0d141b] dark:text-white">15</span>
                    <span className="text-yellow-600 text-sm font-medium bg-yellow-50 dark:bg-yellow-900/20 px-1.5 py-0.5 rounded">Prioridade Alta</span>
                  </div>
                  <span className="text-xs text-[#4c739a] dark:text-[#94a3b8] mt-1 relative z-10">Tempo médio: 4h</span>
                </div>
                {/* Stat 3 */}
                <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#e7edf3] dark:border-[#2a3845] shadow-sm flex flex-col gap-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#4c739a] dark:text-[#94a3b8] text-sm font-medium">Rejeitadas</span>
                    <span className="material-symbols-outlined text-red-500 bg-red-50 dark:bg-red-900/20 p-1.5 rounded-lg text-[20px]">block</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#0d141b] dark:text-white">4</span>
                    <span className="text-[#4c739a] dark:text-[#94a3b8] text-sm font-medium">Esta semana</span>
                  </div>
                  <span className="text-xs text-[#4c739a] dark:text-[#94a3b8] mt-1">Motivo principal: Imagem ruim</span>
                </div>
                {/* Stat 4 */}
                <div className="bg-white dark:bg-[#1a2632] p-5 rounded-xl border border-[#e7edf3] dark:border-[#2a3845] shadow-sm flex flex-col gap-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#4c739a] dark:text-[#94a3b8] text-sm font-medium">Taxa de Conversão</span>
                    <span className="material-symbols-outlined text-purple-500 bg-purple-50 dark:bg-purple-900/20 p-1.5 rounded-lg text-[20px]">insights</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#0d141b] dark:text-white">3.5%</span>
                    <span className="text-green-600 text-sm font-medium bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 0.5%
                    </span>
                  </div>
                  <span className="text-xs text-[#4c739a] dark:text-[#94a3b8] mt-1">Média da plataforma</span>
                </div>
              </div>

              {/* Main Content Block */}
              <div className="flex flex-col bg-white dark:bg-[#1a2632] rounded-xl border border-[#e7edf3] dark:border-[#2a3845] shadow-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-[#e7edf3] dark:border-[#2a3845] flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-gray-50/50 dark:bg-gray-900/50">
                  {/* Search */}
                  <div className="relative w-full lg:w-96 group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-[#4c739a] dark:text-[#94a3b8] group-focus-within:text-primary transition-colors">search</span>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-2.5 border border-[#e7edf3] dark:border-[#2a3845] rounded-lg leading-5 bg-white dark:bg-[#1a2632] placeholder-[#4c739a] dark:placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary sm:text-sm text-[#0d141b] dark:text-white transition-shadow" placeholder="Buscar por promoção, empresa ou ID..." type="text"/>
                  </div>
                  {/* Filters */}
                  <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1a2632] border border-[#e7edf3] dark:border-[#2a3845] rounded-lg cursor-pointer hover:border-primary transition-colors text-[#0d141b] dark:text-white">
                      <span className="material-symbols-outlined text-[#4c739a] dark:text-[#94a3b8] text-[20px]">filter_list</span>
                      <span className="text-sm font-medium">Status: Todos</span>
                      <span className="material-symbols-outlined text-[#4c739a] dark:text-[#94a3b8] text-[16px]">expand_more</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1a2632] border border-[#e7edf3] dark:border-[#2a3845] rounded-lg cursor-pointer hover:border-primary transition-colors text-[#0d141b] dark:text-white">
                      <span className="material-symbols-outlined text-[#4c739a] dark:text-[#94a3b8] text-[20px]">category</span>
                      <span className="text-sm font-medium">Tipo: Todos</span>
                      <span className="material-symbols-outlined text-[#4c739a] dark:text-[#94a3b8] text-[16px]">expand_more</span>
                    </div>
                    <button className="ml-auto lg:ml-0 flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-[#1a2632] border border-[#e7edf3] dark:border-[#2a3845] rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-[#4c739a] dark:text-[#94a3b8]">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      <span className="hidden sm:inline">Exportar</span>
                    </button>
                  </div>
                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#e7edf3] dark:divide-[#2a3845]">
                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-[#94a3b8] uppercase tracking-wider w-12" scope="col">
                          <input className="rounded border-gray-300 text-primary focus:ring-primary/20 size-4" type="checkbox"/>
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-[#94a3b8] uppercase tracking-wider" scope="col">
                          Promoção
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-[#94a3b8] uppercase tracking-wider" scope="col">
                          Empresa
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-[#94a3b8] uppercase tracking-wider" scope="col">
                          Tipo
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-[#94a3b8] uppercase tracking-wider" scope="col">
                          Validade
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-[#94a3b8] uppercase tracking-wider" scope="col">
                          Status
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-semibold text-[#4c739a] dark:text-[#94a3b8] uppercase tracking-wider" scope="col">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#1a2632] divide-y divide-[#e7edf3] dark:divide-[#2a3845]">
                      {/* Row 1: Pending (High Priority) */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="rounded border-gray-300 text-primary focus:ring-primary/20 size-4" type="checkbox"/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-16 bg-gray-200 dark:bg-gray-700 rounded-md bg-cover bg-center" data-alt="Oil change promotion thumbnail" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9iLM3UMwdKO5zrn4ddeSucAoMccOua9eL2-HjWW-Wru5tiPcbmORfUSWhdAkX_by7WKbg0_9TE2qAS8rXkcBJL2NT_efZtbg3Z2PfJ2rBQBHabCiUH79ZKu5YygV1h2nzRdSmKn0o1vkyF0TicnM2eifD0QE4_ZeK9VbhLZLzKxLSsFQRGtw0vQ7c9W1t2MmQQ0jPgLmQ96rJ1lKoqOVdmilQi1GJalaT36848b57k0sMn1B2tLzviErkHX8PMURM-PvLB5uOBqw")'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-[#0d141b] dark:text-white">Troca de Óleo Grátis*</span>
                              <span className="text-xs text-[#4c739a] dark:text-[#94a3b8]">ID: #PRO-2023-089</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="size-6 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" data-alt="Oficina Silva Logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBns4i3kL80lMviYbQ830ptpXhiv23N3SxhEXRfDkz2Wm9BqaJuEm47v2qcv878bR9U8pfSn2-lJMnf0V8fFAoDpMde5rOkWy1hSzaEZtcdIg1-9UkzPJtOptbebm84bjXLmZg3A_0bTwM0gI_lBNTCohiV-ppIK3xK6yQoA4Os__MWobPZuT3cNjSX6fmCPkBqpjnif7Et4RAAzu0JGh91dydSUxUGt8Nl-aQ91pthzlydQ9lpbSptODUZRGFd31s_qqDPgn3MJ1w")'}}></div>
                            <a className="text-sm font-medium text-primary hover:underline" href="#">Oficina Silva &amp; Filhos</a>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            Bundle / Combo
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a] dark:text-[#94a3b8]">
                          01 Out - 15 Out
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800/50">
                            <span className="size-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            Pendente
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 rounded-lg text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors" title="Aprovar">
                              <span className="material-symbols-outlined">check</span>
                            </button>
                            <button className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Rejeitar">
                              <span className="material-symbols-outlined">close</span>
                            </button>
                            <button className="p-1.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Ver Detalhes">
                              <span className="material-symbols-outlined">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 2: Active */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="rounded border-gray-300 text-primary focus:ring-primary/20 size-4" type="checkbox"/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-16 bg-gray-200 dark:bg-gray-700 rounded-md bg-cover bg-center" data-alt="Brake pads promotion thumbnail" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASgMCz0JV_YSUgoKSF1edrXWIFJgr3323hpyYdpq35dMSnY0DZZecGpW1yMuu1K4lqSuRxgJgXiIjlAbfajLQt8RnooWOOsn0pKM3o2efvkxueTFvrIrtBCZ765nleWM5jH0yBOJGoOSRDPl_xNI03DAFe4SB8RUjoDSGzYyRMDjUqRa13TE_ubhOAGdBCMO1cUTU2KjvzNhueJY5lL1mGgMsz9Z9LNyZMAkYH_u7RtWFN8e31pYsrua4gPdtE4dxD3JFuBif1Ehw")'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-[#0d141b] dark:text-white">20% OFF Pastilhas</span>
                              <span className="text-xs text-[#4c739a] dark:text-[#94a3b8]">ID: #PRO-2023-042</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="size-6 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" data-alt="AutoCenter Logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAktoZZSS2ZFpH-55kT3lObFPAunNbYJSl8cCMNMRasuwktDyKhZXxtacNIaMFrhDo9IWGtpxjvctBL2hTRhPnuxFSyNoXD_wGv36lceY3PqyoMlE44g2ZE_-XVDICiwsJPSniJlbEenDDVElbINTLdnCxNPHkCviZBK6YGX-TymCBOiGXU5Rrc2vlTTdaxFruyh6YaegohTt-h1xY3E7DbM6kK8gEf6WOXM5m3GpR4_XhgHqWfd7kaDYDrxCUNCuRGWz5VeFbHW58")'}}></div>
                            <a className="text-sm font-medium text-primary hover:underline" href="#">AutoCenter Prime</a>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                            Desconto %
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a] dark:text-[#94a3b8]">
                          20 Set - 20 Out
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border border-green-200 dark:border-green-800/50">
                            Ativa
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Pausar">
                              <span className="material-symbols-outlined">pause</span>
                            </button>
                            <button className="p-1.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Mais opções">
                              <span className="material-symbols-outlined">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 3: Rejected */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="rounded border-gray-300 text-primary focus:ring-primary/20 size-4" type="checkbox"/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-16 bg-gray-200 dark:bg-gray-700 rounded-md bg-cover bg-center grayscale opacity-60" data-alt="Tire rotation promotion thumbnail" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjtjr-LcMMUiJXygT2El0kRMn_EOO1R8w3u3Sy3VsePZBIgY2rhu2IC-2vpq1SyUA3hNKMdF2hgXMrlh7I1Y-gwWueDG4yz229XrSaVHxeaKXpjDPMAOGBiOoLes2kK0Bh5fLdXJ3wbrAUEIZn_BMwxTEOft9232rqOFpph1VmjKmGAAYQGKy9td7JqZHODFFOKF2_trD7685WMmKLW82q6piYfdglpcOPYKP-OdMeEyetCk2GFTq81ZjPegUhvZpwj4DWKV6qr2o")'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-[#0d141b] dark:text-white line-through decoration-red-500/50 text-opacity-60">Alinhamento 3D</span>
                              <span className="text-xs text-[#4c739a] dark:text-[#94a3b8]">ID: #PRO-2023-011</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="size-6 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" data-alt="Garage X Logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDAflM4emtlWfP5alMs7L5kQ8fa3in4LEwI9SggXziHbWzaZ5a9iInZ9UpNc3FQrkFRF0CEDfz99GWjzq1epxnsazY3p0hxSagtmsw-e_8bUqtiCmzH2fR4jf8d3QCi8GnHlHicgPSJ5ZzAiG6ZlbB6G41m4rJmSFUwrPdZGlM-RGEyHf6biU-aFpzMaebv-_x5uPXycFLyNP__adlN0I3KQkeAYrt5Zk0I44zSq2WkcTDih8mAl5RMzySOxohILc2N7S5tIy2zfw")'}}></div>
                            <a className="text-sm font-medium text-primary hover:underline" href="#">Garage Xtreme</a>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                            Valor Fixo
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a] dark:text-[#94a3b8]">
                          15 Set - 30 Set
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border border-red-200 dark:border-red-800/50">
                            Rejeitada
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary hover:text-blue-700 text-xs font-bold uppercase tracking-wide">
                            Ver Motivo
                          </button>
                        </td>
                      </tr>
                      {/* Row 4: Expired */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors opacity-70">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="rounded border-gray-300 text-primary focus:ring-primary/20 size-4" type="checkbox"/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-16 bg-gray-200 dark:bg-gray-700 rounded-md bg-cover bg-center grayscale" data-alt="Car wash promotion thumbnail" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt_RubKA4ZtcSJ2jq1s452lfb5j1AqDD1graWDKuGxxTi4kw6omn6m7fauXesjmk5sq54CKuyod-eDFrLeE3t1mlPUOFFIxvH7bVTvYb9f375-uYgwIwdg2F0DgXBFexyXFNqCGohgndST_5v6jttlsZ8OBM3xwLQNAsjqwJgbyg6wJQE0hX6Lpv90bSQ_HLKfMS6kJsyn1obqe7GB3bCniveL78TBjHbQ3ofX15Z74QACCe1BY6sgmk-OaovxxOjBfA5L9Wnsm98")'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-[#0d141b] dark:text-white">Lavagem Completa</span>
                              <span className="text-xs text-[#4c739a] dark:text-[#94a3b8]">ID: #PRO-2023-005</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="size-6 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" data-alt="Lava Jato Logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3V9OfakaJGnil8DfIgI2bELr6ywDcxGZL4caXQP3_yB8AvH5euiLvwa_DmcnuEuo0mz056qxQSXDpJJfdKC8iCuT_UKr0AJK0z_SAoNffp3jk565tmdo_3nLD0UNwiybPifQ6udyuyAye3--OMJZxx6-hZh4Hynf2i03TloiVdwRRvOkxyB-jXK-MFAwZ31rG5xh7HMcqJrYgFjCGq3Trs_EvbuVPo3JwmS6baTmoGsOHR8WM2S3aqc3nB6TyORZQbPtOlY5vDmA")'}}></div>
                            <a className="text-sm font-medium text-[#4c739a] dark:text-[#94a3b8]" href="#">Lava Jato Central</a>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                            Serviço
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a] dark:text-[#94a3b8]">
                          01 Ago - 31 Ago
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 border border-gray-200 dark:border-gray-600">
                            Expirada
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Arquivar">
                              <span className="material-symbols-outlined">archive</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 5: Pending */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input className="rounded border-gray-300 text-primary focus:ring-primary/20 size-4" type="checkbox"/>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-16 bg-gray-200 dark:bg-gray-700 rounded-md bg-cover bg-center" data-alt="Engine diagnostics thumbnail" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQp0BmKEaN_0D8aacLOO8ggTzpNrknMfmxUuMl3nA-Tr1hOcmY6wk6aYWnv6pjxwaxZzWVQyavRHPhXDnXK6rWgCnzZPrUn7Ha-ANAqccqiAvTqMbnK27Y_B9jgXcS8rFtirQq_857ZWwsvmMMPfG1wyQO8IKeFLjuQdaeFbi2sLmuqionGm2uZxg10nvXseE2Fs1HnDQzVlR1N5uCyq1bA0C2r3usPfF1S8FjstMOAsbQyZMVbwYETpHe0OqUlqGbtyUmAFpPIv4")'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-[#0d141b] dark:text-white">Check-up Gratuito</span>
                              <span className="text-xs text-[#4c739a] dark:text-[#94a3b8]">ID: #PRO-2023-092</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="size-6 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" data-alt="Mecanica Rapida Logo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsoKaCEV8HNuz69XhDiVsYvYzY_3KF1rGQuSDU5pZVOdQ_Nv-Aav-wy2-dyYYprl1htyHWBYZH5dZAMkOhkbTmqj3BQgHo5nfO9ONP2R7NeNwmngEe8998RIF5sWdw5qEV-l3xXEcnJCl_1WiLwWwSh7lRtqUG8oz1o9_MFu_Ka0tc_doWtj-43KM-_ip_UmpNFVcYHZHInfCQ1L9TuvNrT8aMfggZc1i85fMEaa-zmYhNXqWEaM6LC1CBmdtfaRbmInezf_UaThg")'}}></div>
                            <a className="text-sm font-medium text-primary hover:underline" href="#">Mecânica Rápida</a>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                            Serviço
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a] dark:text-[#94a3b8]">
                          05 Out - 25 Out
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800/50">
                            <span className="size-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            Pendente
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 rounded-lg text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors" title="Aprovar">
                              <span className="material-symbols-outlined">check</span>
                            </button>
                            <button className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Rejeitar">
                              <span className="material-symbols-outlined">close</span>
                            </button>
                            <button className="p-1.5 rounded-lg text-[#4c739a] dark:text-[#94a3b8] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Ver Detalhes">
                              <span className="material-symbols-outlined">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-[#e7edf3] dark:border-[#2a3845] bg-gray-50/50 dark:bg-gray-900/50">
                  <p className="text-sm text-[#4c739a] dark:text-[#94a3b8]">
                    Mostrando <span className="font-bold text-[#0d141b] dark:text-white">1</span> a <span className="font-bold text-[#0d141b] dark:text-white">10</span> de <span className="font-bold text-[#0d141b] dark:text-white">124</span> resultados
                  </p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded border border-[#e7edf3] dark:border-[#2a3845] bg-white dark:bg-[#1a2632] text-[#4c739a] dark:text-[#94a3b8] hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 text-sm font-medium">
                      Anterior
                    </button>
                    <button className="px-3 py-1.5 rounded border border-[#e7edf3] dark:border-[#2a3845] bg-white dark:bg-[#1a2632] text-[#4c739a] dark:text-[#94a3b8] hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium">
                      Próximo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPromotions;
