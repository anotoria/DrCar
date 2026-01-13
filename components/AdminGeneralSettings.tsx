import React from 'react';
import { AppStage } from '../types';

interface AdminGeneralSettingsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminGeneralSettings: React.FC<AdminGeneralSettingsProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-hidden h-screen w-full flex flex-col font-display">
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 flex flex-col bg-surface-light dark:bg-[#1a2632] border-r border-slate-200 dark:border-slate-800 hidden md:flex transition-colors duration-200">
          <div className="p-6 flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight">Dr. Carro</h1>
              <span className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-1">Admin Panel</span>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-1">
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </button>
            <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Gestão</div>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_OWNERS)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">person</span>
              <span className="text-sm font-medium">Usuários</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">build</span>
              <span className="text-sm font-medium">Oficinas</span>
            </button>
            <button 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
              <span className="text-sm font-medium">Agendamentos</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">payments</span>
              <span className="text-sm font-medium">Financeiro</span>
            </button>
            <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Sistema</div>
            <button 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium w-full text-left"
            >
              <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
              <span className="text-sm">Configurações</span>
            </button>
            <button 
              onClick={onLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-red-500 transition-all group w-full text-left"
            >
              <span className="material-symbols-outlined group-hover:text-red-500 transition-colors">logout</span>
              <span className="text-sm font-medium">Sair</span>
            </button>
          </nav>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-slate-700" data-alt="Admin user profile picture showing a professional man in a suit" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqh1UvJED3p9Z71vYWBcD5XglZsExFKLPvNxL4Vx6TUO1tapc-veU6XSIw4aJZ6jK8jCR8WG44QrQniJfhScOcKAqOph-P5EYnef15Yz3ivlsjcSbUzApqWfrWlWe0vDBTo_Y4Iw6NhQkl5-5bs52hRWH-_BAmhZ8gwUpvFHQOvQ4m1thZ3zp3ASiEmnTD9FpKH-bZBGi6xbWQftHByy5OxEtWBPo6_oBjk_jCezx6isgjxJh0aCOD3QH3VIHdEUe1IyZbXtTyfkA")'}}></div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-bold text-slate-900 dark:text-white truncate">Carlos Silva</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 truncate">Super Admin</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          {/* Header Sticky */}
          <header className="h-16 flex items-center justify-between px-6 bg-white/80 dark:bg-[#1a2632]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-20">
            {/* Mobile Menu Button (Hidden on Desktop) */}
            <button className="md:hidden p-2 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary transition-colors">Início</button>
              <span className="material-symbols-outlined text-base">chevron_right</span>
              <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary transition-colors">Painel Admin</button>
              <span className="material-symbols-outlined text-base">chevron_right</span>
              <span className="text-slate-900 dark:text-white font-medium">Configurações Gerais</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-primary transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border border-white dark:border-slate-800"></span>
              </button>
            </div>
          </header>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 md:p-10 scroll-smooth">
            <div className="max-w-[1024px] mx-auto pb-20">
              {/* Page Heading & Actions */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Configurações Gerais</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-lg">Gerencie as informações básicas, links legais, notificações e status do sistema da plataforma Dr. Carro.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95 whitespace-nowrap">
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  <span>Salvar Alterações</span>
                </button>
              </div>

              {/* Layout Grid */}
              <div className="flex flex-col gap-8">
                {/* Section: Identidade */}
                <div className="bg-white dark:bg-[#1a2632] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">branding_watermark</span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Identidade da Plataforma</h2>
                  </div>
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nome da Aplicação</label>
                      <input className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" type="text" defaultValue="Dr. Carro"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">URL do Suporte</label>
                      <input className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" type="text" defaultValue="https://drdocarro.com/ajuda"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">E-mail de Contato</label>
                      <input className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" type="email" defaultValue="contato@drdocarro.com"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Telefone de Suporte</label>
                      <input className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" type="tel" defaultValue="+55 11 99999-9999"/>
                    </div>
                  </div>
                </div>

                {/* Section: Status do Sistema */}
                <div className="bg-white dark:bg-[#1a2632] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">power_settings_new</span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Status do Sistema</h2>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">Modo de Manutenção</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">Quando ativado, apenas administradores podem acessar a plataforma. Usuários verão uma página de manutenção.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">Novos Cadastros</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Permitir que novas oficinas e usuários se cadastrem na plataforma.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
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

export default AdminGeneralSettings;