
import React from 'react';
import { AppStage } from '../types';

interface AdminBusinessesProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminBusinesses: React.FC<AdminBusinessesProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 font-display min-h-screen flex flex-col">
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-72 bg-surface-light dark:bg-[#1a2632] border-r border-slate-200 dark:border-slate-800 h-full flex-shrink-0 transition-colors duration-200">
          <div className="p-6 flex items-center gap-3">
            <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-2xl">car_repair</span>
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">AutoAdmin</h1>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Plataforma de Gestão</p>
            </div>
          </div>
          <div className="px-4 flex flex-col gap-1 flex-1 overflow-y-auto">
            <p className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-4">Menu Principal</p>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
              <span className="font-medium text-sm">Início</span>
            </button>
            {/* Active State */}
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 transition-all w-full text-left"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>store</span>
              <span className="font-bold text-sm">Empresas</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_OWNERS)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
              <span className="font-medium text-sm">Usuários</span>
            </button>
            <p className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-6">Sistema</p>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">notifications</span>
              <span className="font-medium text-sm">Notificações</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">admin_panel_settings</span>
              <span className="font-medium text-sm">Administradores</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">payments</span>
              <span className="font-medium text-sm">Financeiro</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_REPORTS)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">bar_chart</span>
              <span className="font-medium text-sm">Relatórios</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_PAYMENT_SETTINGS)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">settings</span>
              <span className="font-medium text-sm">Configurações</span>
            </button>
            <button 
              onClick={onLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-red-500 transition-all group mt-auto mb-6 w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-red-500 transition-colors">logout</span>
              <span className="font-medium text-sm">Sair</span>
            </button>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <div className="size-10 rounded-full bg-cover bg-center" data-alt="Admin user profile picture showing a professional man in a suit" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqSU77mewCa1ESmQQor81_hJCkqoq0812DLnxU-h7lSXopyhaFmMJ1U1Bf_deKGCUZ3NmuOhxPjyOjb7AR5aQDXAOlgdjcnykdzZJkX7negyZkFeYScERD6gxW0wfjY5DwGR7okOitHwcEHbugUIQbNniEne_nuWbI59gK7xBOwrn8aC1KTX9F0UkIXTFjbQk2Vry6CZfIvoT6Tk2fIbDBrI9ihh64mwtTVtqbHwYXqhg8kNut-SFj8yVjCFpTKfS9UedVmO9p7ao")'}}></div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Carlos Admin</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Super Admin</p>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          {/* Top Bar (Mobile Only trigger basically, keeping it simple for desktop focus) */}
          <header className="flex md:hidden items-center justify-between p-4 bg-surface-light dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">menu</span>
            <span className="font-bold text-lg">Gerenciamento</span>
            <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          </header>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              {/* Breadcrumbs */}
              <nav className="flex text-sm font-medium text-slate-500 dark:text-slate-400">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary transition-colors">Início</button></li>
                  <li className="flex items-center text-slate-400"><span className="material-symbols-outlined text-[16px]">chevron_right</span></li>
                  <li><button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary transition-colors">Painel Admin</button></li>
                  <li className="flex items-center text-slate-400"><span className="material-symbols-outlined text-[16px]">chevron_right</span></li>
                  <li aria-current="page" className="text-primary font-bold">Empresas</li>
                </ol>
              </nav>
              
              {/* Page Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Gerenciamento de Empresas</h1>
                  <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-base">Visualize, aprove ou remova oficinas e prestadores de serviço da plataforma. Gerencie o ecossistema de parceiros.</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center justify-center gap-2 px-5 h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-[#1a2632] text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Exportar CSV
                  </button>
                  <button 
                    onClick={() => onNavigate(AppStage.ADMIN_REGISTER_PARTNER)}
                    className="flex items-center justify-center gap-2 px-5 h-11 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                  >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Adicionar Empresa
                  </button>
                </div>
              </div>
              
              {/* Filters & Search Toolbar */}
              <div className="bg-surface-light dark:bg-[#1a2632] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="w-full h-11 pl-10 pr-4 rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" placeholder="Buscar por nome, CNPJ ou ID..." type="text"/>
                </div>
                {/* Filters Group */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Status Filter */}
                  <div className="relative min-w-[180px]">
                    <select className="w-full h-11 pl-3 pr-10 rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer">
                      <option disabled selected value="">Status de Aprovação</option>
                      <option value="all">Todos os Status</option>
                      <option value="active">Ativo</option>
                      <option value="pending">Pendente</option>
                      <option value="blocked">Bloqueado</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                  {/* Type Filter */}
                  <div className="relative min-w-[180px]">
                    <select className="w-full h-11 pl-3 pr-10 rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer">
                      <option disabled selected value="">Tipo de Serviço</option>
                      <option value="all">Todos os Tipos</option>
                      <option value="mechanic">Oficina Mecânica</option>
                      <option value="aesthetics">Estética Automotiva</option>
                      <option value="parts">Loja de Peças</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                  <button aria-label="Mais filtros" className="h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined">tune</span>
                  </button>
                </div>
              </div>
              
              {/* Companies Table */}
              <div className="bg-surface-light dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                        <th className="p-4 pl-6 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-12">
                          <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
                        </th>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Empresa</th>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tipo de Serviço</th>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Localização</th>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Data Cadastro</th>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                        <th className="p-4 pr-6 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {/* Row 1 */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                        <td className="p-4 pl-6">
                          <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-lg bg-white dark:bg-slate-800 p-1 border border-slate-100 dark:border-slate-700 flex-shrink-0">
                              <img alt="Logo of Auto Center Silva" className="w-full h-full object-cover rounded-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBximbCWvn1IhcrOOZBjgz95968CA3v0UAXHFYzLGVz-i5Dcg9DKLfsTXDzEp-0ZMoA6kmMrmlbcduSXncjOMclgqSwvPaI2IWBv2cpCSxHFptU-ZqtayoTiG5-kLg46WKoRbsrHZ9VTSMJqIoENwiRimKFclHyw732DQ-yXlOA2XMdPTvZZ3FWrUbuNHYcLra5YpWTznkfil4lK1ZxiRj3kuVyBv5lWSNLPQkm1gOsHwlfVawRb62ilds6vF6RJ_I2f21XhvZGwoA"/>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-slate-900 dark:text-slate-100">Auto Center Silva</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">CNPJ: 12.345.678/0001-90</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-[18px]">build</span>
                            <span className="text-sm text-slate-600 dark:text-slate-300">Oficina Mecânica</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-slate-600 dark:text-slate-300">São Paulo, SP</div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-slate-500 dark:text-slate-400 tabular-nums">12 Ago 2023</div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                            <span className="size-1.5 rounded-full bg-green-500"></span>
                            Ativo
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="size-8 flex items-center justify-center rounded text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors" title="Ver Detalhes">
                              <span className="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors" title="Suspender">
                              <span className="material-symbols-outlined text-[20px]">block</span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Remover">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 2 (Pending) */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                        <td className="p-4 pl-6">
                          <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-lg bg-white dark:bg-slate-800 p-1 border border-slate-100 dark:border-slate-700 flex-shrink-0">
                              <div className="w-full h-full rounded-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold text-xs">LJR</div>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-slate-900 dark:text-slate-100">Lava Jato Rápido</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">CNPJ: 98.765.432/0001-10</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-[18px]">water_drop</span>
                            <span className="text-sm text-slate-600 dark:text-slate-300">Estética Automotiva</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-slate-600 dark:text-slate-300">Rio de Janeiro, RJ</div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-slate-500 dark:text-slate-400 tabular-nums">24 Out 2023</div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                            <span className="size-1.5 rounded-full bg-orange-500"></span>
                            Pendente
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <div className="flex items-center justify-end gap-1 opacity-100">
                            <button className="h-8 px-3 gap-1 flex items-center justify-center rounded text-green-600 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 transition-colors text-xs font-bold mr-1" title="Aprovar Cadastro">
                              <span className="material-symbols-outlined text-[16px]">check</span>
                              Aprovar
                            </button>
                            <button 
                              onClick={() => onNavigate(AppStage.ADMIN_APPROVE_PARTNER)}
                              className="size-8 flex items-center justify-center rounded text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors" 
                              title="Ver Detalhes"
                            >
                              <span className="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Remover">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                        <td className="p-4 pl-6">
                          <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-transparent" type="checkbox"/>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-lg bg-white dark:bg-slate-800 p-1 border border-slate-100 dark:border-slate-700 flex-shrink-0">
                              <div className="w-full h-full rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold text-xs">OJ</div>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-slate-900 dark:text-slate-100">Oficina do João</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">CNPJ: 56.123.789/0001-22</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-[18px]">bolt</span>
                            <span className="text-sm text-slate-600 dark:text-slate-300">Elétrica</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-slate-600 dark:text-slate-300">Curitiba, PR</div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-slate-500 dark:text-slate-400 tabular-nums">05 Set 2023</div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800">
                            <span className="size-1.5 rounded-full bg-red-500"></span>
                            Bloqueado
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="size-8 flex items-center justify-center rounded text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors" title="Ver Detalhes">
                              <span className="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded text-slate-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors" title="Reativar">
                              <span className="material-symbols-outlined text-[20px]">check_circle</span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Remover">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Mostrando <span className="font-medium text-slate-900 dark:text-white">1</span> a <span className="font-medium text-slate-900 dark:text-white">3</span> de <span className="font-medium text-slate-900 dark:text-white">85</span> resultados
                      </p>
                    </div>
                    <div>
                      <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
                          <span className="sr-only">Anterior</span>
                          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                        </button>
                        <button aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-bold cursor-pointer">
                          1
                        </button>
                        <button className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer">
                          2
                        </button>
                        <button className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer">
                          3
                        </button>
                        <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-400">
                          ...
                        </span>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
                          <span className="sr-only">Próximo</span>
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                      </nav>
                    </div>
                  </div>
                  {/* Mobile Pagination */}
                  <div className="flex items-center justify-between sm:hidden w-full">
                    <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 text-sm font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700">
                      Anterior
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 text-sm font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700">
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

export default AdminBusinesses;
