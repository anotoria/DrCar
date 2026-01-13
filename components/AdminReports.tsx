
import React from 'react';
import { AppStage } from '../types';

interface AdminReportsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminReports: React.FC<AdminReportsProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200 h-screen w-full flex flex-col overflow-hidden">
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] hidden lg:flex flex-col">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              {/* User Profile */}
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Avatar do administrador" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAolhCW_ug22YSuMW8gdXxR1knD_GGI5tR_kKbHbg2LPnsL7ZiKxMSqAjQZzDVclak3f9m_VILAqS4E07MfNiRyoOJlZOyhqkBKTai-RoFL7ry1FQgKJ-AHhcRuFsbY4VFc0aYgPhoD-9mjOquTbMVmmiREStII2QlCObF2e6OSYiR9Bkus_VbbHih1fDRGZKu95U9224fvHCNWpfMRySVH3CKpFwdWv7g7YmHGzMX8ZIAHy4vIlEe-eJ49Ar3jopzfsueatWDW8v4")'}}></div>
                <div className="flex flex-col">
                  <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">AutoAdmin</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Super Admin</p>
                </div>
              </div>
              {/* Navigation Links */}
              <div className="flex flex-col gap-2">
                <div className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Principal</div>
                <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">dashboard</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Visão Geral</p>
                </button>
                <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">store</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Empresas</p>
                </button>
                <button onClick={() => onNavigate(AppStage.ADMIN_OWNERS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">person</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Proprietários</p>
                </button>
                
                <div className="px-2 mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Gestão</div>

                <button onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">notifications</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Notificações</p>
                </button>
                <button onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">admin_panel_settings</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Administradores</p>
                </button>
                
                <button onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">payments</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Financeiro</p>
                </button>

                <button onClick={() => onNavigate(AppStage.ADMIN_PLANS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">sell</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Planos</p>
                </button>

                {/* Active Link */}
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors text-left">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>bar_chart</span>
                  <p className="text-sm font-bold leading-normal">Relatórios</p>
                </button>

                <button onClick={() => onNavigate(AppStage.ADMIN_PAYMENT_SETTINGS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">settings</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Configurações</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={onLogout} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group text-left">
                <span className="material-symbols-outlined text-red-500">logout</span>
                <p className="text-red-500 text-sm font-medium leading-normal">Sair</p>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
          <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b]">
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="relative hidden sm:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                <input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50 w-64 transition-all" placeholder="Buscar relatórios..." type="text"/>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#151f2b]"></span>
              </button>
              <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-[22px]">help</span>
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Breadcrumbs & Heading */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary cursor-pointer">Home</span>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                    <span onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)} className="hover:text-primary cursor-pointer">Financeiro</span>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                    <span className="text-primary font-medium">Relatórios</span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Visão Geral Financeira</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Análise detalhada de receita, inadimplência e performance dos planos.</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    <span>Este Mês</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-md shadow-primary/20">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Exportar Relatório</span>
                  </button>
                </div>
              </div>

              {/* KPI Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* KPI 1 */}
                <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">payments</span>
                  </div>
                  <div className="flex flex-col gap-1 z-10">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Faturamento Total</span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">R$ 1.25M</span>
                  </div>
                  <div className="flex items-center gap-1 z-10">
                    <span className="material-symbols-outlined text-emerald-500 text-sm">trending_up</span>
                    <span className="text-xs font-semibold text-emerald-500">+12%</span>
                    <span className="text-xs text-slate-400 ml-1">vs mês anterior</span>
                  </div>
                </div>
                {/* KPI 2 */}
                <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">autorenew</span>
                  </div>
                  <div className="flex flex-col gap-1 z-10">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Receita Recorrente (MRR)</span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">R$ 342K</span>
                  </div>
                  <div className="flex items-center gap-1 z-10">
                    <span className="material-symbols-outlined text-emerald-500 text-sm">trending_up</span>
                    <span className="text-xs font-semibold text-emerald-500">+5.4%</span>
                    <span className="text-xs text-slate-400 ml-1">vs mês anterior</span>
                  </div>
                </div>
                {/* KPI 3 */}
                <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-red-500">warning</span>
                  </div>
                  <div className="flex flex-col gap-1 z-10">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Inadimplência</span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">4.5%</span>
                  </div>
                  <div className="flex items-center gap-1 z-10">
                    <span className="material-symbols-outlined text-red-500 text-sm">trending_up</span>
                    <span className="text-xs font-semibold text-red-500">+0.2%</span>
                    <span className="text-xs text-slate-400 ml-1">vs mês anterior</span>
                  </div>
                </div>
                {/* KPI 4 */}
                <div className="bg-white dark:bg-[#151f2b] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">receipt</span>
                  </div>
                  <div className="flex flex-col gap-1 z-10">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Ticket Médio</span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">R$ 185</span>
                  </div>
                  <div className="flex items-center gap-1 z-10">
                    <span className="material-symbols-outlined text-emerald-500 text-sm">trending_up</span>
                    <span className="text-xs font-semibold text-emerald-500">+1.2%</span>
                    <span className="text-xs text-slate-400 ml-1">vs mês anterior</span>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart: Revenue Evolution */}
                <div className="lg:col-span-2 bg-white dark:bg-[#151f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Evolução da Receita</h3>
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary mt-1"></span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Receita Bruta</span>
                    </div>
                  </div>
                  {/* Custom CSS Bar Chart Simulation */}
                  <div className="h-64 w-full flex items-end justify-between gap-2 pt-4 border-b border-slate-200 dark:border-slate-700 pb-2 relative">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      <div className="w-full h-px bg-slate-100 dark:bg-slate-800 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                      <div className="w-full h-px bg-slate-100 dark:bg-slate-800 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                      <div className="w-full h-px bg-slate-100 dark:bg-slate-800 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                      <div className="w-full h-px bg-slate-100 dark:bg-slate-800 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                    </div>
                    {/* Bars */}
                    <div className="w-full bg-primary/20 hover:bg-primary/30 transition-colors rounded-t-sm relative group" style={{height: '40%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$40k</div>
                    </div>
                    <div className="w-full bg-primary/30 hover:bg-primary/40 transition-colors rounded-t-sm relative group" style={{height: '55%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$55k</div>
                    </div>
                    <div className="w-full bg-primary/40 hover:bg-primary/50 transition-colors rounded-t-sm relative group" style={{height: '45%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$45k</div>
                    </div>
                    <div className="w-full bg-primary/50 hover:bg-primary/60 transition-colors rounded-t-sm relative group" style={{height: '70%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$70k</div>
                    </div>
                    <div className="w-full bg-primary/60 hover:bg-primary/70 transition-colors rounded-t-sm relative group" style={{height: '65%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$65k</div>
                    </div>
                    <div className="w-full bg-primary/70 hover:bg-primary/80 transition-colors rounded-t-sm relative group" style={{height: '85%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$85k</div>
                    </div>
                    <div className="w-full bg-primary/80 hover:bg-primary/90 transition-colors rounded-t-sm relative group" style={{height: '75%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$75k</div>
                    </div>
                    <div className="w-full bg-primary hover:bg-primary-dark transition-colors rounded-t-sm relative group" style={{height: '95%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">R$95k</div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400 px-1">
                    <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Ago</span>
                  </div>
                </div>
                {/* Secondary Chart: Plan Distribution */}
                <div className="bg-white dark:bg-[#15202b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Receita por Plano</h3>
                  <div className="flex-1 flex flex-col justify-center gap-6">
                    {/* Progress Bars for distribution */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-200">Plano Enterprise</span>
                        <span className="font-bold text-slate-900 dark:text-white">45%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <p className="text-xs text-slate-400">Grandes redes de oficinas</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-200">Plano Profissional</span>
                        <span className="font-bold text-slate-900 dark:text-white">35%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-indigo-400 h-2.5 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <p className="text-xs text-slate-400">Oficinas independentes</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-200">Plano Básico</span>
                        <span className="font-bold text-slate-900 dark:text-white">20%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-teal-400 h-2.5 rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <p className="text-xs text-slate-400">Mecânicos autônomos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter & Data Table Section */}
              <div className="bg-white dark:bg-[#15202b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                {/* Filters Header */}
                <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white whitespace-nowrap self-start md:self-center">Transações Recentes</h3>
                  <div className="flex flex-wrap gap-3 w-full md:w-auto">
                    {/* Search inside table context */}
                    <div className="relative flex-1 md:flex-none">
                      <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                      <input className="pl-9 pr-3 py-2 w-full md:w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Buscar cliente..." type="text"/>
                    </div>
                    {/* Plan Filter */}
                    <select className="py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer">
                      <option>Todos os Planos</option>
                      <option>Enterprise</option>
                      <option>Profissional</option>
                      <option>Básico</option>
                    </select>
                    {/* Status Filter */}
                    <select className="py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer">
                      <option>Todos Status</option>
                      <option>Pago</option>
                      <option>Pendente</option>
                      <option>Atrasado</option>
                    </select>
                  </div>
                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
                        <th className="px-6 py-4">ID Transação</th>
                        <th className="px-6 py-4">Cliente / Oficina</th>
                        <th className="px-6 py-4">Plano</th>
                        <th className="px-6 py-4">Data Venc.</th>
                        <th className="px-6 py-4 text-right">Valor</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-4 text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
                      {/* Row 1 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-slate-500">#TRX-9921</td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Oficina Central SP</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Enterprise</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">12 Ago 2024</td>
                        <td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">R$ 899,00</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Pago
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-slate-500">#TRX-9922</td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">AutoCenter Silva</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Profissional</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">14 Ago 2024</td>
                        <td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">R$ 299,00</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                            Pendente
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-slate-500">#TRX-9923</td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Mecânica Rápida JD</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Básico</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">01 Ago 2024</td>
                        <td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">R$ 99,00</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                            Atrasado
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-slate-500">#TRX-9924</td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Rede Box 7</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Enterprise</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">11 Ago 2024</td>
                        <td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">R$ 899,00</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Pago
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 5 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-slate-500">#TRX-9925</td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Garage do Pedro</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Básico</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">12 Ago 2024</td>
                        <td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">R$ 99,00</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Pago
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Mostrando <span className="font-medium text-slate-900 dark:text-white">1</span> a <span className="font-medium text-slate-900 dark:text-white">5</span> de <span className="font-medium text-slate-900 dark:text-white">124</span> resultados
                  </span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>Anterior</button>
                    <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Próximo</button>
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

export default AdminReports;
