
import React from 'react';
import { AppStage } from '../types';

interface AdminDashboardProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden h-screen w-full">
      <div className="flex h-screen w-full">
        {/* SideNavBar */}
        <aside className="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-[#151f2b] border-r border-slate-200 dark:border-slate-800 h-full overflow-y-auto hidden lg:flex">
          <div className="p-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AutoAdmin</h1>
          </div>
          <nav className="flex-1 px-4 flex flex-col gap-2 mt-4">
            <div className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Principal</div>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium group w-full text-left"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
              Início
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">store</span>
              Empresas
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_PROMOTIONS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">campaign</span>
              Promoções
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_OWNERS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">person</span>
              Proprietários
            </button>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined">calendar_month</span>
              Agendamentos
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined">star</span>
              Avaliações
            </a>
            <div className="px-2 mt-6 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Gestão</div>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">notifications</span>
              Notificações
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">admin_panel_settings</span>
              Administradores
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">payments</span>
              Financeiro
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_PLANS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">sell</span>
              Planos
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_REPORTS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">bar_chart</span>
              Relatórios
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_ACTIVITY_HISTORY)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">history</span>
              Histórico
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_GENERAL_SETTINGS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">settings</span>
              Configurações
            </button>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cover bg-center" data-alt="User profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac')" }}></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Admin Master</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">admin@autoadmin.com</p>
              </div>
              <button onClick={onLogout} className="ml-auto text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          {/* TopNavBar */}
          <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-[#151f2b] border-b border-slate-200 dark:border-slate-800 z-10 shrink-0">
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Início</h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-96 max-w-md hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm" placeholder="Buscar usuários, oficinas ou agendamentos..." type="text" />
              </div>
              <button className="relative p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#151f2b]"></span>
              </button>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              {/* PageHeading */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Bem-vindo, Administrador</h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Acompanhe os principais indicadores da plataforma hoje.</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Exportar Relatório
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Nova Oficina
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Stat 1 */}
                <div className="bg-white dark:bg-[#151f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">person</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Proprietários Ativos</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">12.450</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    <span>+5% este mês</span>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="bg-white dark:bg-[#151f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">storefront</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Oficinas Cadastradas</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">850</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    <span>+12% novos cadastros</span>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="bg-white dark:bg-[#151f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">calendar_month</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Agendamentos Hoje</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">142</p>
                  </div>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>34 pendentes</span>
                  </div>
                </div>
                {/* Stat 4 */}
                <div className="bg-white dark:bg-[#151f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">payments</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Volume Transacionado</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">R$ 45k</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    <span>+8% vs. semana ant.</span>
                  </div>
                </div>
              </div>

              {/* Layout Grid: Main Chart & Details vs Quick Actions & Ratings */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Larger) */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                  {/* Chart Section (CSS Mockup) */}
                  <div className="bg-white dark:bg-[#151f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Volume de Agendamentos</h3>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700">7 Dias</button>
                        <button className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">30 Dias</button>
                        <button className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700">90 Dias</button>
                      </div>
                    </div>
                    {/* Fake Chart Container */}
                    <div className="h-64 w-full flex items-end justify-between gap-2 px-2 pb-2 border-b border-slate-200 dark:border-slate-700 relative">
                      {/* Y Axis Labels */}
                      <div className="absolute left-0 bottom-0 top-0 flex flex-col justify-between text-xs text-slate-400 -translate-x-full pr-2 h-full py-2">
                        <span>200</span>
                        <span>150</span>
                        <span>100</span>
                        <span>50</span>
                        <span>0</span>
                      </div>
                      {/* Bars */}
                      <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm h-[40%] transition-all duration-300 relative group cursor-pointer" data-alt="Data bar">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">84</div>
                      </div>
                      <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm h-[55%] transition-all duration-300 relative group cursor-pointer" data-alt="Data bar">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">110</div>
                      </div>
                      <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm h-[45%] transition-all duration-300 relative group cursor-pointer" data-alt="Data bar">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">92</div>
                      </div>
                      <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm h-[70%] transition-all duration-300 relative group cursor-pointer" data-alt="Data bar">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">145</div>
                      </div>
                      <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm h-[60%] transition-all duration-300 relative group cursor-pointer" data-alt="Data bar">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">123</div>
                      </div>
                      <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm h-[85%] transition-all duration-300 relative group cursor-pointer" data-alt="Data bar">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">178</div>
                      </div>
                      <div className="w-full bg-primary rounded-t-sm h-[75%] transition-all duration-300 relative group cursor-pointer" data-alt="Current Data bar">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">142</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-2 px-2">
                      <span>Seg</span>
                      <span>Ter</span>
                      <span>Qua</span>
                      <span>Qui</span>
                      <span>Sex</span>
                      <span>Sab</span>
                      <span>Dom</span>
                    </div>
                  </div>

                  {/* Recent Activity Table */}
                  <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Atividades Recentes</h3>
                      <a className="text-sm font-medium text-primary hover:text-primary/80" href="#">Ver tudo</a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                          <tr>
                            <th className="px-6 py-3">Descrição</th>
                            <th className="px-6 py-3">Tipo</th>
                            <th className="px-6 py-3">Data</th>
                            <th className="px-6 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                              Nova oficina: Auto Center Silva
                            </td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Cadastro</td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Há 5 min</td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                                Pendente
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                              Agendamento #4892 confirmado
                            </td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Agendamento</td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Há 25 min</td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Concluído
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                              Novo usuário: Mariana Souza
                            </td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Cadastro</td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Há 1 hora</td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Ativo
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                              Avaliação negativa: Oficina X
                            </td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Review</td>
                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Há 2 horas</td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                Atenção
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Right Column (Smaller) */}
                <div className="flex flex-col gap-8">
                  {/* Quick Actions */}
                  <div className="bg-white dark:bg-[#151f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Acesso Rápido</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-primary/5 hover:border-primary/50 border border-transparent transition-all group">
                        <span className="material-symbols-outlined text-3xl text-slate-500 dark:text-slate-400 group-hover:text-primary">verified</span>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary text-center">Validar Empresas</span>
                      </button>
                      <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-primary/5 hover:border-primary/50 border border-transparent transition-all group">
                        <span className="material-symbols-outlined text-3xl text-slate-500 dark:text-slate-400 group-hover:text-primary">manage_accounts</span>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary text-center">Gerenciar Usuários</span>
                      </button>
                      <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-primary/5 hover:border-primary/50 border border-transparent transition-all group">
                        <span className="material-symbols-outlined text-3xl text-slate-500 dark:text-slate-400 group-hover:text-primary">campaign</span>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary text-center">Enviar Notificação</span>
                      </button>
                      <button 
                        onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)}
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-primary/5 hover:border-primary/50 border border-transparent transition-all group"
                      >
                        <span className="material-symbols-outlined text-3xl text-slate-500 dark:text-slate-400 group-hover:text-primary">person_add</span>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary text-center">Adicionar Admin</span>
                      </button>
                    </div>
                  </div>

                  {/* Rating Summary Widget */}
                  <div className="bg-white dark:bg-[#151f2b] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Satisfação Geral</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex flex-col">
                        <p className="text-4xl font-black text-slate-900 dark:text-white">4.7</p>
                        <div className="flex text-yellow-400">
                          <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 0" }}>star_half</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">3.420 avaliações</p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center ml-auto">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400">sentiment_satisfied</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="w-3 font-bold text-slate-700 dark:text-slate-300">5</span>
                        <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-slate-500 dark:text-slate-400 text-xs w-8 text-right">75%</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="w-3 font-bold text-slate-700 dark:text-slate-300">4</span>
                        <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '15%' }}></div>
                        </div>
                        <span className="text-slate-500 dark:text-slate-400 text-xs w-8 text-right">15%</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="w-3 font-bold text-slate-700 dark:text-slate-300">3</span>
                        <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary/60 rounded-full" style={{ width: '5%' }}></div>
                        </div>
                        <span className="text-slate-500 dark:text-slate-400 text-xs w-8 text-right">5%</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="w-3 font-bold text-slate-700 dark:text-slate-300">2</span>
                        <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-400 rounded-full" style={{ width: '3%' }}></div>
                        </div>
                        <span className="text-slate-500 dark:text-slate-400 text-xs w-8 text-right">3%</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="w-3 font-bold text-slate-700 dark:text-slate-300">1</span>
                        <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-red-400 rounded-full" style={{ width: '2%' }}></div>
                        </div>
                        <span className="text-slate-500 dark:text-slate-400 text-xs w-8 text-right">2%</span>
                      </div>
                    </div>
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

export default AdminDashboard;
