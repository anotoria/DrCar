
import React from 'react';
import { AppStage } from '../types';

interface AdminAdminsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminAdmins: React.FC<AdminAdminsProps> = ({ onLogout, onNavigate }) => {
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

            {/* Active State */}
            <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors text-left">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>admin_panel_settings</span>
              <span className="text-sm font-bold">Administradores</span>
            </button>
            
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)}
              className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-left"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">payments</span>
              <span className="text-sm font-medium">Financeiro</span>
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
              <div className="w-10 h-10 rounded-full bg-cover bg-center" data-alt="User avatar of the current admin logged in" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac")'}}></div>
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
              <span className="text-slate-900 dark:text-white font-medium">Administradores</span>
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
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 h-full">
              {/* Left Column: User List (Takes up remaining space) */}
              <div className="flex-1 flex flex-col gap-6 min-h-0">
                {/* Page Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Gerenciamento de Acesso</h2>
                    <p className="text-slate-500 text-sm mt-1">Controle quem tem acesso ao painel administrativo e suas permissões.</p>
                  </div>
                  {/* Mobile-only add button if sidebar is hidden (logic not implemented but visual cue) */}
                  <button className="lg:hidden bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/30 flex items-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Novo Admin
                  </button>
                </div>

                {/* Filters & Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
                    <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                      <span className="material-symbols-outlined">security</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase">Admin Master</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">2</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
                    <div className="size-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
                      <span className="material-symbols-outlined">manage_accounts</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase">Gerentes</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">5</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#151f2b] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
                    <div className="size-10 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex items-center justify-center">
                      <span className="material-symbols-outlined">support_agent</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase">Suporte</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">12</p>
                    </div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex flex-col overflow-hidden flex-1">
                  <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 dark:text-white">Lista de Usuários</h3>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">filter_list</span>
                        Filtrar
                      </button>
                      <button className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        Exportar
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                          <th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[35%]">Administrador</th>
                          <th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">Perfil</th>
                          <th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">Status</th>
                          <th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[15%]">Último Acesso</th>
                          <th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[10%] text-right">Ações</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {/* Row 1: Active Master */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-3">
                              <div className="size-9 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-[#151f2b]" data-alt="Avatar of Roberto Santos" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6UcDpHubzrDSTW0wcVQC3d-DMZAU1qKugNQgl1g-MrqWFXEfYpsTyWRHzLeUg47XRBRHYjsu_mfunydj5Pk4PoSveu4ND0RCJAdFcyX9OkHG5xvn8zQQgXPAyvPcGRUATDFX-rmgYuebvfCoLFLxa55eJLrtt6JzeC7Epxxmw2RbMfL4pUa51mbKSKviDEbaCayOlM_vKvHTiCYsvp972aKhZ-2iGTKZ8OxTPr7z6ubrTyjzX04T0tEjNvUVTPLGQiJayB-jfoA")'}}></div>
                              <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Roberto Santos</p>
                                <p className="text-xs text-slate-500">roberto.santos@autoadmin.com</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                              <span className="size-1.5 rounded-full bg-purple-500"></span>
                              Master
                            </span>
                          </td>
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-2">
                              <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                              </span>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Ativo</span>
                            </div>
                          </td>
                          <td className="py-4 px-5 text-sm text-slate-500">Agora</td>
                          <td className="py-4 px-5 text-right">
                            <button className="text-slate-400 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed" title="Editar">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 2: Manager */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-3">
                              <div className="size-9 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-[#151f2b]" data-alt="Avatar of Amanda Costa" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpxS-KBLIXZ7DXVDI6n782ULitKFAFvoBqdvm7nAkplaPeBTg3Zk_NRbL158Eq9pcvJkHtatqMwELjtERpMWVyLa1F6Jr9E6f1isIZMU06jPsn9w8j45eeefX82v45UOd6JFt39sbHfPPktYppGvMjpqiQIsjuAKaX44jn6JqKG5vwibprBnVUyU1jG7GTQYU7pWLs6JQ67vRAKwJWHsg9agoR5aQNljyAnqbaGjhO4vROvRfMczyXVSRNZ3LeMQhqceln6ZGWZ7w")'}}></div>
                              <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Amanda Costa</p>
                                <p className="text-xs text-slate-500">amanda.costa@autoadmin.com</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                              <span className="size-1.5 rounded-full bg-blue-500"></span>
                              Gerente
                            </span>
                          </td>
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-2">
                              <span className="size-2.5 rounded-full bg-emerald-500"></span>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Ativo</span>
                            </div>
                          </td>
                          <td className="py-4 px-5 text-sm text-slate-500">2h atrás</td>
                          <td className="py-4 px-5 text-right flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-slate-400 hover:text-primary transition-colors" title="Editar">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button className="text-slate-400 hover:text-red-500 transition-colors" title="Remover Acesso">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 3: Support */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-3">
                              <div className="size-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 ring-2 ring-white dark:ring-[#151f2b]">
                                <span className="text-xs font-bold">CJ</span>
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Carlos Junior</p>
                                <p className="text-xs text-slate-500">carlos.jr@autoadmin.com</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                              <span className="size-1.5 rounded-full bg-slate-500"></span>
                              Suporte
                            </span>
                          </td>
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-2">
                              <span className="size-2.5 rounded-full bg-emerald-500"></span>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Ativo</span>
                            </div>
                          </td>
                          <td className="py-4 px-5 text-sm text-slate-500">Ontem</td>
                          <td className="py-4 px-5 text-right flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-slate-400 hover:text-primary transition-colors" title="Editar">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button className="text-slate-400 hover:text-red-500 transition-colors" title="Remover Acesso">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 4: Inactive */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group opacity-60 bg-slate-50/50 dark:bg-slate-800/20">
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-3">
                              <div className="size-9 rounded-full bg-cover bg-center grayscale ring-2 ring-white dark:ring-[#151f2b]" data-alt="Avatar of Lucas Pereira" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0PTqIHyeetYgQKB4jY4ujwbcZoMbAESthHLQ-wkCv_PbmUezmlykeRueJsFYWsBkmCHiC6whxwu2_Dxj5H44mUEdBDsCw7elCu61ZyvUSdsGIz4gXeOTSEMAEPnEMjBkfUA7_R7BEFj2VjDb9KiIJPAITsEFIToTgl8UUwjgtltrFZT5EBWQd6FhFcMDN94sLTxcYjEsKY56F_i4RoKpt2j5IJjn6rBy2fMnpgc5zMFxc4CR-V_hEzJPfQtoAEczSksLDSOKinIQ")'}}></div>
                              <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white line-through decoration-slate-400">Lucas Pereira</p>
                                <p className="text-xs text-slate-500">lucas.p@autoadmin.com</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                              <span className="size-1.5 rounded-full bg-slate-400"></span>
                              Suporte
                            </span>
                          </td>
                          <td className="py-4 px-5">
                            <div className="flex items-center gap-2">
                              <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                              <span className="text-sm text-slate-500">Inativo</span>
                            </div>
                          </td>
                          <td className="py-4 px-5 text-sm text-slate-500">12 Out, 2023</td>
                          <td className="py-4 px-5 text-right flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-primary hover:text-primary/80 transition-colors text-xs font-bold" title="Reativar">
                              Reativar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination */}
                  <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Mostrando <strong>1-4</strong> de <strong>19</strong></span>
                    <div className="flex gap-1">
                      <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                      </button>
                      <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Add New Admin */}
              <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-6">
                <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col overflow-hidden h-fit sticky top-6">
                  <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Novo Administrador</h3>
                    <p className="text-sm text-slate-500 mt-1">Cadastre um novo usuário para gerenciar a plataforma.</p>
                  </div>
                  <div className="p-6 flex flex-col gap-5">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Nome Completo</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">badge</span>
                        <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Ex: Maria Silva" type="text"/>
                      </div>
                    </div>
                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">E-mail Profissional</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">mail</span>
                        <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="nome@autoadmin.com" type="email"/>
                      </div>
                    </div>
                    {/* Password Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Senha Temporária</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[20px]">lock</span>
                        <input className="w-full pl-10 pr-10 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white" type="password" defaultValue="Password123"/>
                        <button className="absolute right-3 top-2.5 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                      </div>
                      {/* Strength Meter */}
                      <div className="flex gap-1 mt-1">
                        <div className="h-1 flex-1 rounded-full bg-emerald-500"></div>
                        <div className="h-1 flex-1 rounded-full bg-emerald-500"></div>
                        <div className="h-1 flex-1 rounded-full bg-emerald-500"></div>
                        <div className="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      </div>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium text-right">Senha Forte</p>
                    </div>
                    {/* Role Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Nível de Acesso</label>
                      <div className="grid grid-cols-1 gap-2">
                        <label className="relative flex items-start p-3 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                          <input className="mt-0.5 text-primary focus:ring-primary border-slate-300" name="role" type="radio"/>
                          <div className="ml-3">
                            <span className="block text-sm font-bold text-slate-900 dark:text-white">Master</span>
                            <span className="block text-xs text-slate-500">Acesso total ao sistema, incluindo configurações financeiras e gestão de usuários.</span>
                          </div>
                        </label>
                        <label className="relative flex items-start p-3 rounded-lg border border-primary bg-primary/5 dark:bg-primary/10 cursor-pointer transition-colors">
                          <input defaultChecked className="mt-0.5 text-primary focus:ring-primary border-slate-300" name="role" type="radio"/>
                          <div className="ml-3">
                            <span className="block text-sm font-bold text-slate-900 dark:text-white">Gerente</span>
                            <span className="block text-xs text-slate-500">Gestão de oficinas e clientes. Acesso limitado ao financeiro.</span>
                          </div>
                        </label>
                        <label className="relative flex items-start p-3 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                          <input className="mt-0.5 text-primary focus:ring-primary border-slate-300" name="role" type="radio"/>
                          <div className="ml-3">
                            <span className="block text-sm font-bold text-slate-900 dark:text-white">Suporte</span>
                            <span className="block text-xs text-slate-500">Visualização de dados para atendimento. Sem permissão de edição crítica.</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex gap-3">
                    <button className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                      Limpar
                    </button>
                    <button className="flex-[2] bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-primary/30 transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">check</span>
                      Criar Acesso
                    </button>
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

export default AdminAdmins;
