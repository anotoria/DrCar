
import React from 'react';
import { AppStage } from '../types';

interface AdminActivityHistoryProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminActivityHistory: React.FC<AdminActivityHistoryProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200 h-screen w-full flex flex-col overflow-hidden">
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] hidden lg:flex flex-col">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              {/* User Profile */}
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Avatar do administrador" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5eSN8xf2hqtdlzgWznq9AY9RxjhOfYBi-Nu5kQRQ3XuQwUVdu_JkZP5_Gxn7EPzfLZzQxyNHD38m_6o09ZMDSbGoX0RvScpbu9HGQeiFb0yWeosEQ5qY0JH87-wdpgL7zyL-n8yzj4ZyWoNX6mr3H_yauVIY_pKlmHtVH066SnAEe1dw3nUYNRfHMgl5eNLtjs86NZvHUDbe4KRq28VD14i5ojTS3EhuoAZZTcU-FSypj_ii9eVr9yP-89JVBA12LMXcesG9FpYA")'}}></div>
                <div className="flex flex-col">
                  <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">Ricardo Mendes</h1>
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
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Usuários</p>
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

                <button onClick={() => onNavigate(AppStage.ADMIN_REPORTS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">bar_chart</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Relatórios</p>
                </button>

                {/* Active Link */}
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary border-l-4 border-primary transition-colors text-left">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
                  <p className="text-sm font-bold leading-normal">Histórico</p>
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
          <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
            <div className="max-w-[1200px] w-full mx-auto flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">Histórico de Atividades</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-base">Monitore e audite todas as ações realizadas pelos administradores na plataforma.</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm font-medium text-sm">
                    <span className="material-symbols-outlined text-lg">download</span>
                    Exportar CSV
                  </button>
                </div>
              </div>

              {/* Filters & Search Toolbar */}
              <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 flex flex-col gap-4">
                {/* Search & Date Inputs */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-10 pr-4 h-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Pesquisar por ID, ação ou detalhe..." type="text"/>
                  </div>
                  <div className="w-full md:w-64 relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</span>
                    <input className="w-full pl-10 pr-4 h-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Período: Últimos 30 dias" type="text"/>
                  </div>
                </div>
                {/* Quick Filters (Chips) */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">Filtros Rápidos:</span>
                  {/* Admin Filter */}
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600">
                    <span className="material-symbols-outlined text-lg">person</span>
                    Todos os Admins
                    <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
                  </button>
                  {/* Action Type Filter */}
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600">
                    <span className="material-symbols-outlined text-lg">category</span>
                    Tipo de Ação: Todas
                    <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
                  </button>
                  {/* Status Filter */}
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    Status: Todos
                    <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
                  </button>
                  <button className="ml-auto text-primary text-sm font-semibold hover:underline">
                    Limpar Filtros
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-48">Data e Hora</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-64">Administrador</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Ação</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Alvo / Detalhe</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32">Status</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-24"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {/* Row 1 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white font-medium text-sm">24/10/2023</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">14:30</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-cover bg-center" data-alt="Avatar of Carlos Silva" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFjSjPRf9k6RkxQqniChcO2m3TaTdCxDpXGVNHYbkZV-NfxG2BKZ3cIknbjUjvIVKd8ULC_Pekdm5w5Uh1pDExH9GmgXcfveUBSRAcSXsMBe6jmkLjBHbSQ_HvyF6W1uWZDGxFPvA-Hu9L1NEFhUKWR6Xg3u86RCkZIJXdXSRSCkvcCJANLBCUFVtXIEFAD5V5wYz4cyPwwP6waBCr6N9adVqUUPZH0xmrXI1Ooq-whWXs7mok_Up9uKxGR6E0lAIpMrRxLgdySr8");'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-slate-900 dark:text-white">Carlos Silva</span>
                              <span className="text-xs text-slate-500">ID: #ADM-001</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                            Desativou Usuário
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-900 dark:text-white">Proprietário ID <a className="text-primary hover:underline" href="#">#8492</a></span>
                            <span className="text-xs text-slate-500">Motivo: Violação de termos</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                            <span className="size-1.5 rounded-full bg-emerald-500"></span>
                            Sucesso
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-xl">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white font-medium text-sm">24/10/2023</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">11:15</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-cover bg-center" data-alt="Avatar of Ana Souza" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtyfwXf8tvZujREQ7mmwyKG_h3biZRm9HuwZUaw896H6wn80Z08xb0RLU2hve6npOQlcNxX5LKQfQlpvKBE8xuXEoX9wFicRz1o_EWLyIb-AVLCAMtcgWBFo8uITNLiaEBstRXRdD3ZH_Y3aQWGjoQ3MunilVGsV5SQAMq_KIFTvt0gQ1ZHHfV9voNT_bQK5PYa4tLJ96lBDSc3UdS3YSvptUDvX_zWuFmmSMcDmnIZpczXJfTcsFy8UHubLONT5JazsI6InlmLg4");'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-slate-900 dark:text-white">Ana Souza</span>
                              <span className="text-xs text-slate-500">ID: #ADM-004</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                            Editou Plano
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-900 dark:text-white">Oficina <a className="text-primary hover:underline" href="#">Mecânica Rápida</a></span>
                            <span className="text-xs text-slate-500">Plano Básico -&gt; Premium</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                            <span className="size-1.5 rounded-full bg-emerald-500"></span>
                            Sucesso
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-xl">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white font-medium text-sm">23/10/2023</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">09:45</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-cover bg-center" data-alt="Avatar of Marcos Li" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0sQn9bVbmzaSG24O4icw1Z7BbhEuBjF8afdNUpxj2FmEgRCNvg7v5b1IST3AcFVLbIaDhkhA2Z8saaP65n_bG1DnP8QLn1o1u3S8o60kYr8A71Orm7043slwHAwGSwMaAsbzJSrmzKIT1NN6CS_pAHyuQEK3JcfN5LnsJM_HBh9VGWVUClymflKzSH_6n_fdHIsGTqBJFiVrJUTlt7624bdMSwDfgmcmIYshoqy6ZSoVwP_W2j2nDocDx3vWqv9iuY1HG8nOCMjE");'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-slate-900 dark:text-white">Marcos Li</span>
                              <span className="text-xs text-slate-500">ID: #ADM-002</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                            Login Admin
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-900 dark:text-white">Tentativa de acesso</span>
                            <span className="text-xs text-slate-500">IP: 192.168.1.1 (Desconhecido)</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-medium">
                            <span className="size-1.5 rounded-full bg-red-500"></span>
                            Falha
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-xl">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white font-medium text-sm">23/10/2023</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">16:20</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-cover bg-center" data-alt="Avatar of Carlos Silva" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDu6KWcXTLOwGcqRKGUfAzY7C83Lqf809YiYm9M6CKIdIXUoY8rP885jf-X3Fyyki5TkCZ5iaQvkYBSUg9j4usktx4NB1VA9YliZY6UuSx59heLH4ZfgdqHudvwmVBdFh0BnoNSx7cG9uZRaqV3aYoEPU5I4se4AbQbtptj4PrIqTwP4jsvh3C-lZsf1ksJu8lfWlTXNZ5fhKkjOPbsOHWgTqkF2H15iEHyiSHdGNGkN4y4oMhXUIGwnIn2Ieg87VUNElMj1vTzcoU");'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-slate-900 dark:text-white">Carlos Silva</span>
                              <span className="text-xs text-slate-500">ID: #ADM-001</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                            Aprovou Oficina
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-900 dark:text-white">Centro Automotivo Z</span>
                            <span className="text-xs text-slate-500">Verificação de documentos</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                            <span className="size-1.5 rounded-full bg-emerald-500"></span>
                            Sucesso
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-xl">visibility</span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 5 */}
                      <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white font-medium text-sm">22/10/2023</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">10:00</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-cover bg-center" data-alt="Avatar of Julia Lima" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6X02VWmnZd2WJZHVzVrQG0pmpEJqTIltWrpbFvJcmHh_yJVlv2XB40BUarFjbbmeO6FbTtaAq-3Iwv5MJvi2lpgMmpeL6RPXsBeqTysdInK5153sPUg9fZP7q1hsQyu-XhFpUxGvzXWL-zAzmXSxtAamWsvtVn-_0nMJLbTvjaB1yN_t8CfpWVnSyHuedP9JTwwi9iViC0Vx97aInOjGgHc3sZggs6LqpWm4qQTbVAOD0yG3EyKxU_FbFfkRBjPOYq7XJyeGlYc");'}}></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-slate-900 dark:text-white">Julia Lima</span>
                              <span className="text-xs text-slate-500">ID: #ADM-005</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                            Enviou Push
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-900 dark:text-white">Campanha de Pneus</span>
                            <span className="text-xs text-slate-500">Segmento: Todos os Proprietários</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                            <span className="size-1.5 rounded-full bg-emerald-500"></span>
                            Sucesso
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-xl">visibility</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex items-center justify-between sm:px-6">
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Mostrando <span className="font-bold text-slate-900 dark:text-white">1</span> a <span className="font-bold text-slate-900 dark:text-white">10</span> de <span className="font-bold text-slate-900 dark:text-white">97</span> resultados
                      </p>
                    </div>
                    <div>
                      <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
                          <span className="sr-only">Anterior</span>
                          <span className="material-symbols-outlined text-lg">chevron_left</span>
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
                          <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </button>
                      </nav>
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

export default AdminActivityHistory;
