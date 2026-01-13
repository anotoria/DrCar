
import React from 'react';
import { AppStage } from '../types';

interface AdminFinancialProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminFinancial: React.FC<AdminFinancialProps> = ({ onLogout, onNavigate }) => {
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
                
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">calendar_month</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Agendamentos</p>
                </button>
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">star</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Avaliações</p>
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
                
                {/* Active Link */}
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 transition-colors text-left">
                  <span className="material-symbols-outlined text-primary">payments</span>
                  <p className="text-primary text-sm font-bold leading-normal">Financeiro</p>
                </button>

                <button onClick={() => onNavigate(AppStage.ADMIN_REPORTS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">bar_chart</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Relatórios</p>
                </button>

                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
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
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-[#151f2b] border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-8" data-alt="Mobile profile picture" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzJsrUUr0XAxfq9dMNcf61pEYaDWWzYLUPqzj0_K2tnBGTFDW_nSP0hmbAWA7npz6Jmo8iI3dXgDLXwIama6388s2tB7QHzZzknpoxZ24xbMDSpwy_mzMJg19cHvWTqyu8MUPo5H7_zzaTg5f6dWASi21IMquxeD-J9WPpxt85l3pxaJXJufwql9B0m6KenqmBGqzIqL2eKIc4yIi8AKTJUloF9u6SjcgvAtZGHQx8a_x9f64k3483eYcSbHRuUi1wk19QJyxFzOM")'}}></div>
              <span className="font-bold text-slate-900 dark:text-white">Admin Financeiro</span>
            </div>
            <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="mx-auto max-w-6xl flex flex-col gap-6 md:gap-8 pb-10">
              {/* Page Heading */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Visão Geral Financeira</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-medium">Acompanhe o desempenho financeiro e indicadores chave.</p>
                </div>
                <div className="flex gap-2">
                  <button className="hidden md:flex items-center justify-center h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#151f2b] text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-[18px] mr-2">calendar_today</span>
                    Este Mês
                  </button>
                  <button className="flex items-center justify-center h-10 px-4 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-sm shadow-blue-200 dark:shadow-none transition-colors">
                    <span className="material-symbols-outlined text-[18px] mr-2">download</span>
                    Exportar Relatório
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Stat 1 */}
                <div className="flex flex-col gap-3 rounded-xl p-5 bg-white dark:bg-[#1a2632] shadow-sm border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">Faturamento Total</p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-1.5 rounded-md text-primary">
                      <span className="material-symbols-outlined text-[20px]">attach_money</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">R$ 125.400,00</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[16px] text-green-600">trending_up</span>
                      <p className="text-green-600 text-sm font-bold">+12%</p>
                      <span className="text-slate-400 dark:text-slate-500 text-xs font-medium ml-1">vs. mês anterior</span>
                    </div>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col gap-3 rounded-xl p-5 bg-white dark:bg-[#1a2632] shadow-sm border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">Recebíveis Pendentes</p>
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-1.5 rounded-md text-orange-500">
                      <span className="material-symbols-outlined text-[20px]">pending_actions</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">R$ 4.200,00</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[16px] text-orange-500">warning</span>
                      <p className="text-orange-500 text-sm font-bold">3 Empresas</p>
                      <span className="text-slate-400 dark:text-slate-500 text-xs font-medium ml-1">em atraso</span>
                    </div>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col gap-3 rounded-xl p-5 bg-white dark:bg-[#1a2632] shadow-sm border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">Planos Ativos</p>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-1.5 rounded-md text-purple-500">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">85</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[16px] text-red-500">trending_down</span>
                      <p className="text-red-500 text-sm font-bold">-2</p>
                      <span className="text-slate-400 dark:text-slate-500 text-xs font-medium ml-1">cancelamentos</span>
                    </div>
                  </div>
                </div>
                {/* Stat 4 */}
                <div className="flex flex-col gap-3 rounded-xl p-5 bg-white dark:bg-[#1a2632] shadow-sm border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">Ticket Médio</p>
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 p-1.5 rounded-md text-emerald-500">
                      <span className="material-symbols-outlined text-[20px]">analytics</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">R$ 1.450,00</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[16px] text-green-600">arrow_upward</span>
                      <p className="text-green-600 text-sm font-bold">+0.5%</p>
                      <span className="text-slate-400 dark:text-slate-500 text-xs font-medium ml-1">estável</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Chart Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 rounded-xl bg-white dark:bg-[#1a2632] border border-slate-200/60 dark:border-slate-800 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Evolução de Receita</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Comparativo últimos 6 meses</p>
                    </div>
                    <button className="text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg p-2 transition-colors">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                  {/* CSS Bar Chart Visualization */}
                  <div className="w-full h-64 flex items-end justify-between gap-2 sm:gap-4 mt-4">
                    {/* Bar Item */}
                    <div className="flex flex-col items-center gap-2 group flex-1">
                      <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-48 flex items-end overflow-hidden">
                        <div className="w-full bg-primary/30 group-hover:bg-primary/40 transition-all h-[45%]"></div>
                        <div className="absolute bottom-0 w-full top-[55%] border-t border-white/20"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Jan</span>
                    </div>
                    {/* Bar Item */}
                    <div className="flex flex-col items-center gap-2 group flex-1">
                      <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-48 flex items-end overflow-hidden">
                        <div className="w-full bg-primary/40 group-hover:bg-primary/50 transition-all h-[58%]"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Fev</span>
                    </div>
                    {/* Bar Item */}
                    <div className="flex flex-col items-center gap-2 group flex-1">
                      <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-48 flex items-end overflow-hidden">
                        <div className="w-full bg-primary/50 group-hover:bg-primary/60 transition-all h-[52%]"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Mar</span>
                    </div>
                    {/* Bar Item */}
                    <div className="flex flex-col items-center gap-2 group flex-1">
                      <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-48 flex items-end overflow-hidden">
                        <div className="w-full bg-primary/70 group-hover:bg-primary/80 transition-all h-[75%]"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Abr</span>
                    </div>
                    {/* Bar Item */}
                    <div className="flex flex-col items-center gap-2 group flex-1">
                      <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-48 flex items-end overflow-hidden">
                        <div className="w-full bg-primary/80 group-hover:bg-primary/90 transition-all h-[85%]"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Mai</span>
                    </div>
                    {/* Bar Item (Active) */}
                    <div className="flex flex-col items-center gap-2 group flex-1">
                      <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-48 flex items-end overflow-hidden shadow-lg shadow-blue-500/20">
                        <div className="w-full bg-primary group-hover:bg-blue-600 transition-all h-[92%] relative">
                          {/* Tooltip Simulation */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            R$ 125k
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Jun</span>
                    </div>
                  </div>
                </div>
                {/* Revenue Breakdown */}
                <div className="lg:col-span-1 rounded-xl bg-white dark:bg-[#1a2632] border border-slate-200/60 dark:border-slate-800 shadow-sm p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Origem da Receita</h3>
                  <div className="flex-1 flex flex-col justify-center gap-6">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">domain</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">Planos Corp.</span>
                          <span className="text-xs text-slate-500">Assinaturas Mensais</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">65%</span>
                        <span className="block text-xs text-slate-500">R$ 81.5k</span>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                          <span className="material-symbols-outlined">build</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">Comissões</span>
                          <span className="text-xs text-slate-500">Serviços de Oficinas</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">25%</span>
                        <span className="block text-xs text-slate-500">R$ 31.3k</span>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                          <span className="material-symbols-outlined">workspace_premium</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">Premium</span>
                          <span className="text-xs text-slate-500">Destaques &amp; Ads</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">10%</span>
                        <span className="block text-xs text-slate-500">R$ 12.5k</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button className="w-full text-center text-sm font-bold text-primary hover:text-blue-700 transition-colors">
                      Ver Detalhes Completos
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Transactions Table */}
              <div className="rounded-xl bg-white dark:bg-[#1a2632] border border-slate-200/60 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Transações Recentes</h3>
                  <div className="flex gap-2">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">search</span>
                      <input className="pl-9 pr-4 py-2 h-9 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Buscar empresa..." type="text"/>
                    </div>
                    <button className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-medium">
                      <tr>
                        <th className="px-6 py-4">Empresa</th>
                        <th className="px-6 py-4">Plano</th>
                        <th className="px-6 py-4">Data</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Valor</th>
                        <th className="px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {/* Row 1 */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">TR</div>
                            <span className="font-bold text-slate-900 dark:text-white">Transportadora Rapidex</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Frota Premium (50+)</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">12 Jun, 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            <span className="size-1.5 rounded-full bg-green-500"></span> Pago
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">R$ 2.450,00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">LM</div>
                            <span className="font-bold text-slate-900 dark:text-white">Logística Mundial</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Frota Standard (20)</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">10 Jun, 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                            <span className="size-1.5 rounded-full bg-orange-500"></span> Pendente
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">R$ 890,00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                            <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">SE</div>
                            <span className="font-bold text-slate-900 dark:text-white">Soluções Express</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Oficina Parceira</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">09 Jun, 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            <span className="size-1.5 rounded-full bg-green-500"></span> Pago
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">R$ 150,00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-teal-100 text-teal-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">AC</div>
                            <span className="font-bold text-slate-900 dark:text-white">Auto Center Norte</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Comissão (Reparo #8823)</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">08 Jun, 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                            <span className="size-1.5 rounded-full bg-red-500"></span> Falhou
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">R$ 45,00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                            <span className="material-symbols-outlined text-[20px]">refresh</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 5 */}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">BE</div>
                            <span className="font-bold text-slate-900 dark:text-white">Brasilia Entregas</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Frota Premium (50+)</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">08 Jun, 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            <span className="size-1.5 rounded-full bg-green-500"></span> Pago
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">R$ 2.450,00</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                  <button className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Ver todas as transações</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminFinancial;
