
import React, { useState } from 'react';
import { AppStage } from '../types';

interface AdminNotificationsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminNotifications: React.FC<AdminNotificationsProps> = ({ onLogout, onNavigate }) => {
  const [title, setTitle] = useState("Campanha de Verão: Revisão Grátis");
  const [message, setMessage] = useState("Garanta a segurança da sua família nestas férias. Agende uma revisão completa de freios e suspensão com nossos parceiros e ganhe 10% de desconto no serviço.");
  const [audience, setAudience] = useState("all");

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex overflow-hidden font-display text-slate-900 dark:text-white transition-colors duration-200">
      {/* Side Navigation */}
      <aside className="w-64 bg-slate-50 dark:bg-[#151f2b] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between h-screen sticky top-0 flex-shrink-0 z-20 hidden lg:flex">
        <div className="flex flex-col gap-4 p-4">
          {/* User Profile */}
          <div className="flex gap-3 items-center mb-6">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 shrink-0 shadow-sm" data-alt="Admin profile picture" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsUj91kX2LwXPuf0bE_QKwHhXkjFEn5aNsmGL5FnivORIweTvtkoRzR5fz3EqzGI2EahhHGAi7BsgzS_reuyUsFjcsBoHKUeP1nF8B0-HYgj1lQ8sNFDa4KB-9iSmf9-kOCdJ0SFfw8uYZCHO8ebrHoo2YJ9-vSzorrrWFZwqw773JdKEiyf86ozl8hsMJrA46BbfrIpv-cBnM2ganOfYtwbAg8l63HWMLzU6K5RFNnikzon0pscKfC8dxYBRoeRlmviT1QDpMzX8")'}}></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-slate-900 dark:text-white text-sm font-bold leading-tight truncate">AutoAdmin</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal truncate">Gestão Geral</p>
            </div>
          </div>
          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            <div className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Principal</div>
            <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">dashboard</span>
              <p className="text-sm font-medium leading-normal">Visão Geral</p>
            </button>
            <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">store</span>
              <p className="text-sm font-medium leading-normal">Empresas</p>
            </button>
            <button onClick={() => onNavigate(AppStage.ADMIN_OWNERS)} className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">person</span>
              <p className="text-sm font-medium leading-normal">Proprietários</p>
            </button>
            
            <div className="px-2 mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Gestão</div>
            {/* Active Link */}
            <button className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:text-primary">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>notifications</span>
              <p className="text-sm font-bold leading-normal">Notificações</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)}
              className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">admin_panel_settings</span>
              <p className="text-sm font-medium leading-normal">Administradores</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)}
              className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">payments</span>
              <p className="text-sm font-medium leading-normal">Financeiro</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_REPORTS)}
              className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">bar_chart</span>
              <p className="text-sm font-medium leading-normal">Relatórios</p>
            </button>
            <button className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">settings</span>
              <p className="text-sm font-medium leading-normal">Configurações</p>
            </button>
          </div>
        </div>
        {/* Footer / Logout */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Sair</p>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative scroll-smooth">
        {/* Mobile Header (similar to dashboard) */}
        <header className="lg:hidden h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button className="text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Notificações</h2>
          </div>
        </header>

        {/* Breadcrumbs / Top Bar (Desktop) */}
        <div className="hidden lg:block sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 lg:px-10">
          <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
            <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500 dark:text-slate-400 mb-1">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary dark:hover:text-primary transition-colors">Início</button>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="ml-1 font-medium text-slate-900 dark:text-white cursor-default">Notificações</span>
                  </div>
                </li>
              </ol>
            </nav>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_SPECIFIC_NOTIFICATION)}
              className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
            >
              Criar Específica <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 px-6 py-8 lg:px-10">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Nova Notificação Geral</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl">Crie e dispare comunicados importantes para toda a base de usuários ou grandes grupos.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              {/* Left Column: Form */}
              <div className="xl:col-span-7 flex flex-col gap-6">
                {/* Audience Selection */}
                <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">campaign</span>
                      Público-Alvo
                    </h2>
                    <button 
                      onClick={() => onNavigate(AppStage.ADMIN_SPECIFIC_NOTIFICATION)}
                      className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      Selecionar Usuários Específicos
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className="cursor-pointer relative group">
                      <input checked={audience === 'all'} onChange={() => setAudience('all')} className="peer sr-only" name="audience" type="radio"/>
                      <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary text-slate-600 dark:text-slate-400 h-full">
                        <span className="material-symbols-outlined text-3xl mb-1">groups</span>
                        <span className="font-bold text-sm text-center">Todos</span>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
                        <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      </div>
                    </label>
                    <label className="cursor-pointer relative group">
                      <input checked={audience === 'owners'} onChange={() => setAudience('owners')} className="peer sr-only" name="audience" type="radio"/>
                      <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary text-slate-600 dark:text-slate-400 h-full">
                        <span className="material-symbols-outlined text-3xl mb-1">directions_car</span>
                        <span className="font-bold text-sm text-center">Proprietários</span>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
                        <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      </div>
                    </label>
                    <label className="cursor-pointer relative group">
                      <input checked={audience === 'businesses'} onChange={() => setAudience('businesses')} className="peer sr-only" name="audience" type="radio"/>
                      <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary text-slate-600 dark:text-slate-400 h-full">
                        <span className="material-symbols-outlined text-3xl mb-1">store</span>
                        <span className="font-bold text-sm text-center">Oficinas</span>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
                        <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      </div>
                    </label>
                  </div>
                  <p className="text-xs text-slate-400 mt-3 pl-1">
                    {audience === 'all' ? 'Enviar para 14.520 usuários ativos.' : audience === 'owners' ? 'Enviar para 13.200 proprietários.' : 'Enviar para 1.320 oficinas.'}
                  </p>
                </div>

                {/* Content Form */}
                <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col gap-6">
                  <h2 className="text-slate-900 dark:text-white text-lg font-bold mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">edit_note</span>
                    Conteúdo
                  </h2>
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-700 dark:text-slate-200 text-sm font-semibold">Título da Notificação</span>
                    <input 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
                      placeholder="Ex: Manutenção preventiva em dia?" 
                      type="text" 
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-700 dark:text-slate-200 text-sm font-semibold">Mensagem Detalhada</span>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white px-4 py-3 text-base min-h-[160px] resize-y focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
                      placeholder="Escreva o conteúdo da notificação aqui..."
                    ></textarea>
                    <div className="flex justify-between items-center text-xs text-slate-400">
                      <span>Recomendado: Máximo 250 caracteres</span>
                      <span>{message.length}/250</span>
                    </div>
                  </label>
                  <div className="flex items-center gap-2">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4" id="high-priority" type="checkbox"/>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer" htmlFor="high-priority">Marcar como Alta Prioridade</label>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">send</span>
                    Enviar Notificação
                  </button>
                  <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="flex-1 sm:flex-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium h-12 px-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                    Cancelar
                  </button>
                </div>
              </div>

              {/* Right Column: Preview */}
              <div className="xl:col-span-5 relative">
                <div className="sticky top-28 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Pré-visualização</h3>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Mobile View</span>
                  </div>
                  {/* Phone Mockup Container */}
                  <div className="bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-4 shadow-2xl max-w-[380px] w-full mx-auto relative overflow-hidden">
                    {/* Status Bar Simulation */}
                    <div className="h-6 w-full flex justify-between items-center px-4 mb-4">
                      <span className="text-[10px] font-bold text-slate-900 dark:text-white">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-slate-900 dark:bg-white rounded-full opacity-20"></div>
                        <div className="w-3 h-3 bg-slate-900 dark:bg-white rounded-full opacity-20"></div>
                      </div>
                    </div>
                    {/* App Header Simulation */}
                    <div className="flex items-center justify-between px-2 mb-6">
                      <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-sm">menu</span>
                      </div>
                      <span className="font-bold text-slate-800 dark:text-white">Início</span>
                      <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full relative">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-sm">notifications</span>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-800"></div>
                      </div>
                    </div>
                    {/* Mock Content Body */}
                    <div className="flex flex-col gap-4 mb-4 opacity-50 pointer-events-none select-none blur-[1px]">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 rounded-2xl w-full" data-alt="Abstract gradient background pattern"></div>
                      <div className="flex gap-3 overflow-hidden">
                        <div className="bg-slate-100 dark:bg-slate-800 h-24 w-24 rounded-xl shrink-0"></div>
                        <div className="bg-slate-100 dark:bg-slate-800 h-24 w-24 rounded-xl shrink-0"></div>
                        <div className="bg-slate-100 dark:bg-slate-800 h-24 w-24 rounded-xl shrink-0"></div>
                      </div>
                    </div>
                    {/* Notification Toast (The Preview) */}
                    <div className="absolute top-16 left-4 right-4 bg-white/95 dark:bg-[#1f2d3a]/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-top-4 duration-700 z-10">
                      <div className="flex gap-3 items-start">
                        <div className="bg-primary rounded-xl p-2 shrink-0 text-white">
                          <span className="material-symbols-outlined text-[20px]">local_offer</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-1">{title || 'Título da Notificação'}</h4>
                            <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">Agora</span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 break-words">{message || 'O conteúdo da sua notificação aparecerá aqui.'}</p>
                        </div>
                      </div>
                    </div>
                    {/* Bottom Nav Simulation */}
                    <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-4 flex justify-around opacity-40">
                      <div className="w-8 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-2"></div>
                    </div>
                  </div>
                  <p className="text-center text-xs text-slate-400 max-w-[300px] mx-auto">Esta é uma simulação de como a notificação aparecerá nos dispositivos dos usuários.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminNotifications;
