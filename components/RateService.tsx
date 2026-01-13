
import React, { useState } from 'react';
import { AppStage } from '../types';

interface RateServiceProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const RateService: React.FC<RateServiceProps> = ({ onLogout, onNavigate }) => {
  const [rating, setRating] = useState(4);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getRatingText = (val: number) => {
    switch (val) {
      case 1: return "Muito Ruim";
      case 2: return "Ruim";
      case 3: return "Regular";
      case 4: return "Muito Bom";
      case 5: return "Excelente";
      default: return "Selecione uma nota";
    }
  };

  const navItems = [
    { stage: AppStage.DASHBOARD, icon: 'dashboard', label: 'Início' },
    { stage: AppStage.GARAGE, icon: 'directions_car', label: 'Meus Veículos' },
    { stage: AppStage.SEARCH, icon: 'car_repair', label: 'Buscar Oficinas' },
    { stage: AppStage.USER_PROMOTIONS, icon: 'local_offer', label: 'Promoções' },
    { stage: AppStage.APPOINTMENTS, icon: 'calendar_month', label: 'Agendamentos' },
    { stage: AppStage.CHAT, icon: 'chat', label: 'Mensagens', badge: 2 },
    { stage: AppStage.USER_NOTIFICATIONS, icon: 'notifications', label: 'Notificações', badge: 3 },
    { stage: AppStage.USER_PROFILE, icon: 'person', label: 'Meu Perfil' },
    { stage: AppStage.FAQ_SUPPORT, icon: 'help', label: 'Ajuda' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden flex h-screen w-full">
      {/* Sidebar - Matching the app consistency */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card-light dark:bg-[#111a22] border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(AppStage.DASHBOARD)}>
            <div className="bg-primary/10 p-2 rounded-xl text-primary">
              <span className="material-symbols-outlined text-3xl">local_taxi</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none tracking-tight">Dr. do Carro</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Gestão Automotiva</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => (
            <button 
              key={item.stage}
              onClick={() => { onNavigate(item.stage); setIsSidebarOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${item.stage === AppStage.APPOINTMENTS ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-semibold text-sm">{item.label}</span>
              {item.badge && <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
            <button onClick={onLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors w-full text-left">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-medium text-sm">Sair</span>
            </button>
            <div className="flex items-center gap-3 px-2 cursor-pointer" onClick={() => onNavigate(AppStage.USER_PROFILE)}>
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-slate-200 dark:ring-slate-800" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac")' }}></div>
              <div className="flex flex-col">
                 <h1 className="text-sm font-bold text-slate-900 dark:text-white">Roberto Silva</h1>
                 <p className="text-slate-500 dark:text-slate-400 text-xs">Proprietário</p>
              </div>
            </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col h-full overflow-hidden relative">
        <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-card-light dark:bg-[#111a22]">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg lg:hidden">Avaliar</span>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <div className="relative w-full max-w-md hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="material-symbols-outlined text-slate-400">search</span>
              </div>
              <input className="block w-full rounded-lg border-none bg-slate-100 dark:bg-surface-highlight py-2 pl-10 pr-3 text-sm focus:ring-2 focus:ring-primary" placeholder="Buscar serviços, oficinas..." type="text"/>
            </div>
            <button className="relative text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-100 dark:ring-slate-900"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="mb-6 flex flex-wrap gap-2 text-sm font-medium text-slate-500">
              <button onClick={() => onNavigate(AppStage.DASHBOARD)} className="hover:text-primary transition-colors">Início</button>
              <span>/</span>
              <button onClick={() => onNavigate(AppStage.APPOINTMENTS)} className="hover:text-primary transition-colors">Histórico</button>
              <span>/</span>
              <span className="text-slate-900 dark:text-white">Avaliar Serviço</span>
            </nav>

            {/* Page Heading */}
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Avaliar Serviço Concluído</h1>
              <p className="text-slate-500">Sua opinião é fundamental para manter a qualidade dos nossos parceiros.</p>
            </div>

            {/* Review Card */}
            <div className="rounded-xl bg-white dark:bg-[#192633] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
              {/* Service Summary Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#233648]/30 p-6">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-center bg-no-repeat bg-cover rounded-lg size-16 shrink-0 shadow-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArL-2InXiQaRIT4yQ85yDMy9K3x57bp0G15UpGGEoWXTnuv1wYM5hdmPkRumWufJEqUDqf2YngPxn34EK96Ytr57bp0G15UpGGEoWXTnuv1wYM5hdmPkRumWufJEqUDqf2YngPxn34EK96Ytr57OSEzFOYIhFmmZPRh1Bl1XUCio0hznyOIn8BDYwBYqPKLKUzq6relj0-uCpkIvMKepby_GzMAvwpRvxft9YhkbypAuKBJthxrdiszchO-gMrGDf93jGFNPE6U1opkAFAMfz5uRbbGRFa5gXt_419v-5HlEZdXRCfQpYoONpL2TGklLTUrqaTYI")' }}></div>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Auto Center Silva</h3>
                    <div className="flex flex-wrap gap-y-1 gap-x-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">build</span>
                        Troca de Óleo e Filtros
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        12 Out 2023
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="text-green-500 font-medium">Concluído</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Form */}
              <div className="p-6 md:p-8 flex flex-col gap-8">
                {/* Star Rating Section */}
                <div className="flex flex-col items-center gap-4">
                  <h4 className="text-slate-900 dark:text-white font-semibold text-lg">Como foi sua experiência?</h4>
                  <div className="flex items-center gap-2 group">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => setRating(star)}
                        className={`transition-all transform hover:scale-110 focus:outline-none ${
                          (hoveredRating || rating) >= star ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-700'
                        }`}
                      >
                        <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: (hoveredRating || rating) >= star ? "'FILL' 1" : "'FILL' 0" }}>
                          star
                        </span>
                      </button>
                    ))}
                  </div>
                  <span className="text-slate-500 text-sm font-medium">
                    {getRatingText(hoveredRating || rating)}
                  </span>
                </div>

                {/* Comment Section */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-900 dark:text-white" htmlFor="comment">
                    Deixe um comentário <span className="text-slate-500 font-normal">(opcional)</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="comment"
                      className="block w-full rounded-lg border-0 bg-slate-100 dark:bg-[#111a22] p-4 text-slate-900 dark:text-white placeholder-slate-500 shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 resize-none"
                      placeholder="O que você achou do atendimento, prazo e qualidade do serviço?"
                      rows={4}
                    />
                  </div>
                  <p className="text-xs text-slate-500">Seu comentário ajuda outros proprietários a escolherem a melhor oficina.</p>
                </div>

                {/* Anonymous Toggle */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-slate-50 dark:bg-background-dark/30">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Avaliar anonimamente</span>
                    <span className="text-xs text-slate-500">Seu nome não será exibido publicamente nesta avaliação.</span>
                  </div>
                  <label className="inline-flex cursor-pointer items-center">
                    <input className="peer sr-only" type="checkbox" />
                    <div className="peer relative h-6 w-11 rounded-full bg-slate-300 dark:bg-slate-700 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50"></div>
                  </label>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse sm:flex-row items-center gap-3 pt-2">
                  <button 
                    onClick={() => onNavigate(AppStage.APPOINTMENTS)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={() => onNavigate(AppStage.APPOINTMENTS)}
                    className="w-full sm:flex-1 px-6 py-2.5 rounded-lg bg-primary text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors flex justify-center items-center gap-2"
                  >
                    <span>Enviar Avaliação</span>
                    <span className="material-symbols-outlined text-lg">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
       {/* Overlay for mobile sidebar */}
       {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" />
      )}
    </div>
  );
};

export default RateService;
