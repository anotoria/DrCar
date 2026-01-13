
import React from 'react';
import { AppStage } from '../types';

interface BusinessEditProfileProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const BusinessEditProfile: React.FC<BusinessEditProfileProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-dark text-white font-display overflow-hidden flex h-screen w-full selection:bg-primary/30">
      {/* Sidebar */}
      <aside className="w-20 lg:w-72 bg-surface-dark border-r border-border-dark flex-col hidden md:flex transition-all duration-300 shrink-0 h-full">
        <div className="h-16 flex items-center px-4 lg:px-6 border-b border-border-dark gap-3 cursor-pointer" onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}>
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-xl">build_circle</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight hidden lg:block">AutoFix <span className="text-primary">Pro</span></h1>
        </div>
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 px-3">
          <button onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
            <p className="text-sm font-medium hidden lg:block">Início</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_SERVICES)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">build</span>
            <p className="text-sm font-medium hidden lg:block">Meus Serviços</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_APPOINTMENTS)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
            <p className="text-sm font-medium hidden lg:block">Agendamentos</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_REVIEWS)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">star</span>
            <p className="text-sm font-medium hidden lg:block">Avaliações</p>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_EDIT_PROFILE)} className="flex items-center gap-3 px-3 py-3 rounded-lg bg-surface-highlight text-white w-full text-left shadow-sm">
            <span className="material-symbols-outlined text-primary">storefront</span>
            <p className="text-sm font-bold hidden lg:block">Perfil da Loja</p>
          </button>
          <div className="mt-auto pt-4 border-t border-border-dark">
            <button className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">settings</span>
              <p className="text-sm font-medium hidden lg:block">Configurações</p>
            </button>
            <button onClick={onLogout} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-red-400 hover:text-red-300 transition-colors group w-full text-left">
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium hidden lg:block">Sair</p>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="flex items-center justify-between border-b border-border-dark px-6 py-3 bg-surface-dark z-20 shrink-0">
          <div className="flex items-center gap-3 lg:hidden">
            <button className="p-2 -ml-2 text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-white">
            <h2 className="text-lg font-bold tracking-tight">Editar Perfil</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="flex size-10 items-center justify-center rounded-lg bg-surface-highlight hover:bg-border-dark text-white transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-surface-dark"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-background-dark p-4 md:p-8 scroll-smooth">
          <div className="max-w-5xl mx-auto space-y-6 pb-20">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <button onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)} className="hover:text-primary transition-colors">Início</button>
              <span className="text-slate-700">/</span>
              <span className="font-medium text-white">Perfil da Empresa</span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Editar Perfil</h1>
                <p className="text-text-secondary text-base">Gerencie as informações públicas da sua oficina.</p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => onNavigate(AppStage.BUSINESS_PROFILE)}
                  className="px-4 h-10 rounded-lg border border-border-dark text-slate-300 font-semibold text-sm bg-surface-dark hover:bg-surface-highlight transition-colors"
                >
                  Visualizar
                </button>
                <button className="px-6 h-10 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  Salvar
                </button>
              </div>
            </div>

            {/* Section: Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Col: Logo & Services */}
              <div className="md:col-span-4 flex flex-col gap-6">
                <div className="bg-surface-dark rounded-xl border border-border-dark shadow-sm p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">image</span>
                    Logo
                  </h3>
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative group cursor-pointer">
                      <div className="w-32 h-32 rounded-full border-4 border-border-dark bg-cover bg-center shadow-inner" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsAJu7V7m5oucgr6ufJTmoU6jq1i-caKgCl7eWpDU07ax4nBPpHLFd68tiEbzWnEfjAgcsAtcPPqWwBpyRvEEwedFEUuVcA89YrFc-_ZDbBOYtTWX4Atn7FFMmpJKy3l267GgdIjUR8TKZXni1qkvUb8vaH_6tsEq-kA2dMLeprvOF0A4amBRk_eZM88fllSHTcMgExf_5Hdn0BfN8ZFu8WOztwFtD3pWkpvQuUmw8AxQoHwzYAgkLFQrxP2frA8IWiPIacY9Gs_s')"}}></div>
                      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-text-secondary text-center px-4">
                      PNG ou JPG. Máximo 2MB.
                    </p>
                    <button className="text-primary text-sm font-bold hover:underline">Alterar Logo</button>
                  </div>
                </div>

                <div className="bg-surface-dark rounded-xl border border-border-dark shadow-sm p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Especialidades</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                      Mecânica Geral <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span>
                    </span>
                    <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                      Troca de Óleo <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span>
                    </span>
                  </div>
                  <div className="relative mt-4">
                    <input className="w-full rounded-lg border-border-dark bg-background-dark text-xs focus:ring-primary py-2 pl-3 pr-8" placeholder="Adicionar..." type="text"/>
                    <button className="absolute right-2 top-1.5 text-primary">
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Col: Form */}
              <div className="md:col-span-8 flex flex-col gap-6">
                {/* Basic Info */}
                <div className="bg-surface-dark rounded-xl border border-border-dark shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">storefront</span>
                      Dados da Empresa
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-300">Nome Fantasia</label>
                      <input className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm text-sm p-2.5" type="text" defaultValue="AutoCenter Silva"/>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-300">CNPJ</label>
                      <div className="relative">
                        <input className="w-full rounded-lg border-border-dark bg-slate-900 text-slate-500 cursor-not-allowed focus:ring-0 shadow-sm text-sm pl-10 p-2.5" readOnly type="text" defaultValue="12.345.678/0001-90"/>
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">lock</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-6">
                    <label className="text-sm font-semibold text-slate-300">Slogan</label>
                    <input className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm text-sm p-2.5" type="text" defaultValue="Sua oficina de confiança na Zona Sul."/>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-300">Sobre</label>
                    <textarea className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm text-sm p-3 resize-none" rows={4} defaultValue="Fundada em 2010, a AutoCenter Silva nasceu com a missão de trazer transparência e qualidade."></textarea>
                  </div>
                </div>

                {/* Contact & Location */}
                <div className="bg-surface-dark rounded-xl border border-border-dark shadow-sm p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    Endereço & Contato
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-300">Telefone</label>
                      <input className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm text-sm p-2.5" type="tel" defaultValue="(11) 3344-5566"/>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-300">WhatsApp</label>
                      <input className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm text-sm p-2.5" type="tel" defaultValue="(11) 99888-7777"/>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-span-1 space-y-1.5">
                        <label className="text-sm font-semibold text-slate-300">CEP</label>
                        <input className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm text-sm p-2.5" type="text" defaultValue="04555-000"/>
                      </div>
                      <div className="col-span-3 space-y-1.5">
                        <label className="text-sm font-semibold text-slate-300">Rua</label>
                        <input className="w-full rounded-lg border-border-dark bg-background-dark text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm text-sm p-2.5" type="text" defaultValue="Rua das Oficinas, 120"/>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-surface-dark rounded-xl border border-border-dark shadow-sm p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    Horários
                  </h3>
                  <div className="space-y-4">
                    {['Segunda-Sexta', 'Sábado'].map((day) => (
                      <div key={day} className="flex items-center justify-between py-2 border-b border-border-dark/50 last:border-0">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded border-border-dark text-primary focus:ring-primary size-4 bg-background-dark" />
                          <span className="text-sm font-medium text-white w-24">{day}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input className="rounded-md border-border-dark bg-background-dark text-xs py-1 px-2 text-white" type="time" defaultValue="08:00"/>
                          <span className="text-slate-500 text-xs">até</span>
                          <input className="rounded-md border-border-dark bg-background-dark text-xs py-1 px-2 text-white" type="time" defaultValue="18:00"/>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between py-2 opacity-50">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="rounded border-border-dark text-primary focus:ring-primary size-4 bg-background-dark" />
                        <span className="text-sm font-medium text-white w-24">Domingo</span>
                      </div>
                      <span className="text-xs text-slate-500 font-medium bg-slate-800 px-3 py-1 rounded">Fechado</span>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className="bg-surface-dark rounded-xl border border-border-dark shadow-sm p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">collections</span>
                    Galeria
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="aspect-square rounded-lg border-2 border-dashed border-border-dark bg-background-dark hover:bg-surface-highlight flex flex-col items-center justify-center text-slate-500 hover:text-primary cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-3xl mb-1">add_a_photo</span>
                      <span className="text-[10px] font-bold">Adicionar</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Save Button */}
                <div className="md:hidden pt-4 pb-8">
                  <button className="px-4 h-12 w-full rounded-lg bg-primary text-white font-bold text-sm shadow-md flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">save</span>
                    Salvar Alterações
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessEditProfile;
