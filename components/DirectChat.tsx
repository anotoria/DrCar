
import React, { useState } from 'react';
import { AppStage, ViewMode } from '../types';

interface DirectChatProps {
  viewMode: ViewMode;
  onNavigate: (stage: AppStage) => void;
  onLogout: () => void;
}

const DirectChat: React.FC<DirectChatProps> = ({ viewMode, onNavigate, onLogout }) => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [showDetails, setShowDetails] = useState(false);
  const isBusiness = viewMode === ViewMode.BUSINESS;

  // Mock data for chats
  const chats = [
    { id: 1, name: "Oficina Mecânica Silva", lastMsg: "Vocês têm horário para amanhã cedo?", time: "10:30", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDNPauWhdHt3EwaZa0wPuG9tdTvdGgImq15QqFu7wR8b9JdgbSTqBIrP2e0Lp0-9x90PExTidsuUH-YPw0odNpedRZlbgyNvW3-h7DPREzL-387Bplv0yPrAn-VXBx-OCHK9iVPlIns5cMVvvO61k6WM8-gldtmZWS-Io87SWSl_Yr86Gv1udbJ0DRhK4zqg9N3uki3cgfnEPdoRqJk5JScoCjEWYfSTxPhv3OvNhSpxVNaTm7LjmYGxYpnXBFNZ9jTn53yQ9oVC4", online: true },
    { id: 2, name: "Auto Center Expresso", lastMsg: "Seu orçamento foi aprovado. Pode trazer o carro.", time: "Ontem", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUsLJ64FFC21O-pCnDGNWRl2u_6G9A0lScR3bAnNu07XsUPJOB40F9YlYt5z0W79JAdpY9XXtkAEhF1WXp8XrxTgojwajobhVNwCauoO6h4GHdJBg5yf83X8_kxL_CVY3W-HDwPhstfAnev_Aygyddwyl1A7j97E2P157N6G4-p21omAQBa8DofMuttl4EQcebjJveXkjylvUYHdNgkZ4hac2zxAqHx1zEzb0es8Y_v86oxdfQqp0MWxlTfocwjEMavafQhfkY6CA", online: false },
    { id: 3, name: "Funilaria Oliveira", lastMsg: "O carro ficará pronto na quarta-feira.", time: "Seg", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSLcfwr8hsoajfCHft4J_EttrRFPWN9lzJSBoYc8yaXmnKX3g_LO2n3Us5m8vAAOxEnmRgaBD9K_SGCfd3OgZYVVzry5f7JbwtW3PDG7LEQo-FSxaJPF35dTZqkWyn7rO0Yj8y673CnqiOFpM9H64iTFMEQMplGkxNUseQZ6CUwa49MylhOjGAQogP2-fk7n0Lyrmco5tAX1zEyPHhrcIivPLUDVcElslzLuatNN_b-btDSaLEGhci7euunbmVRymYFHV0x6z7kzI", online: false },
  ];

  const userNavItems = [
    { stage: AppStage.DASHBOARD, icon: 'dashboard', label: 'Início' },
    { stage: AppStage.GARAGE, icon: 'directions_car', label: 'Meus Veículos' },
    { stage: AppStage.SEARCH, icon: 'car_repair', label: 'Buscar Oficinas' },
    { stage: AppStage.USER_PROMOTIONS, icon: 'local_offer', label: 'Promoções' },
    { stage: AppStage.APPOINTMENTS, icon: 'calendar_month', label: 'Agendamentos' },
    { stage: AppStage.CHAT, icon: 'chat', label: 'Mensagens' },
    { stage: AppStage.USER_NOTIFICATIONS, icon: 'notifications', label: 'Notificações' },
    { stage: AppStage.USER_PROFILE, icon: 'person', label: 'Meu Perfil' },
    { stage: AppStage.FAQ_SUPPORT, icon: 'help', label: 'Ajuda' },
  ];

  const businessNavItems = [
    { stage: AppStage.BUSINESS_DASHBOARD, icon: 'dashboard', label: 'Dashboard' },
    { stage: AppStage.BUSINESS_APPOINTMENTS, icon: 'calendar_month', label: 'Agendamentos' },
    { stage: AppStage.CHAT, icon: 'chat', label: 'Mensagens' },
    { stage: AppStage.BUSINESS_SERVICES, icon: 'build', label: 'Serviços' },
  ];

  const activeNavItems = isBusiness ? businessNavItems : userNavItems;

  return (
    <div className="bg-background-dark text-white font-display overflow-hidden flex h-screen w-full">
      
      {/* 1. Lateral Navigation Sidebar */}
      <aside className="w-20 lg:w-64 flex-shrink-0 border-r border-border-dark bg-surface-dark flex flex-col py-6 z-20 transition-all duration-300 hidden md:flex">
        <div className="flex flex-col gap-8 px-4 flex-1 overflow-y-auto">
          <div className="flex items-center gap-3 px-2 lg:px-0 justify-center lg:justify-start cursor-pointer" onClick={() => onNavigate(isBusiness ? AppStage.BUSINESS_DASHBOARD : AppStage.DASHBOARD)}>
            <div className="size-8 text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">car_repair</span>
            </div>
            <h2 className="hidden lg:block text-white text-lg font-bold tracking-tight">Dr. do Carro</h2>
          </div>
          <nav className="flex flex-col gap-2">
            {activeNavItems.map((item) => (
              <button 
                key={item.stage}
                onClick={() => onNavigate(item.stage)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${item.stage === AppStage.CHAT ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-white/5 hover:text-white'}`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="hidden lg:block font-bold text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="px-4 mt-auto border-t border-border-dark pt-4 flex flex-col gap-4">
           <button onClick={onLogout} className="flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors w-full text-left">
            <span className="material-symbols-outlined">logout</span>
            <span className="hidden lg:block font-bold text-sm">Sair</span>
          </button>
          {!isBusiness && (
             <div className="flex items-center gap-3 px-2 cursor-pointer" onClick={() => onNavigate(AppStage.USER_PROFILE)}>
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 ring-2 ring-border-dark" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac")' }}></div>
              <div className="flex flex-col hidden lg:flex">
                 <h1 className="text-xs font-bold text-white">Roberto Silva</h1>
                 <p className="text-text-secondary text-[10px]">Proprietário</p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* 2. Conversation List Sidebar */}
      <aside className={`w-full md:w-80 lg:w-96 flex-shrink-0 border-r border-border-dark bg-surface-dark flex flex-col z-10 shadow-sm ${selectedChat ? 'hidden md:flex' : 'flex'}`}>
        {/* ... (rest of the chat list implementation remains same) ... */}
        <div className="p-5 border-b border-border-dark flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Conversas</h2>
            <button className="p-2 rounded-lg hover:bg-white/5 text-text-secondary transition-colors">
              <span className="material-symbols-outlined">edit_square</span>
            </button>
          </div>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[20px]">search</span>
            <input 
              className="block w-full p-3 pl-10 text-sm text-white border border-border-dark rounded-lg bg-background-dark focus:ring-1 focus:ring-primary focus:border-primary outline-none" 
              placeholder="Buscar conversas..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {chats.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`cursor-pointer p-4 hover:bg-white/5 transition-colors border-l-4 ${selectedChat === chat.id ? 'bg-primary/5 border-primary' : 'border-transparent'}`}
            >
              <div className="flex gap-3">
                <div className="relative shrink-0">
                  <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 border border-border-dark shadow-sm" style={{backgroundImage: `url(${chat.avatar})`}}></div>
                  {chat.online && <span className="absolute bottom-0 right-0 size-3 bg-emerald-500 border-2 border-surface-dark rounded-full"></span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-sm font-bold text-white truncate">{chat.name}</h3>
                    <span className={`text-[10px] font-semibold ${selectedChat === chat.id ? 'text-primary' : 'text-text-secondary'}`}>{chat.time}</span>
                  </div>
                  <p className={`text-xs truncate ${selectedChat === chat.id ? 'text-white' : 'text-text-secondary'}`}>{chat.lastMsg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* 3. Active Chat Main Area */}
      <main className={`flex-1 flex flex-col min-w-0 bg-background-dark relative ${!selectedChat ? 'hidden md:flex' : 'flex'}`}>
        {!selectedChat ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 gap-4">
            <div className="size-20 rounded-full bg-surface-dark flex items-center justify-center text-text-secondary">
              <span className="material-symbols-outlined text-4xl">chat</span>
            </div>
            <h2 className="text-xl font-bold">Selecione uma conversa</h2>
            <p className="text-text-secondary max-w-xs text-sm">Escolha uma oficina na lista ao lado para iniciar ou continuar o atendimento.</p>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <header className="bg-surface-dark border-b border-border-dark px-6 py-3 flex items-center justify-between shadow-sm z-10 shrink-0">
              <div className="flex items-center gap-4">
                <button onClick={() => setSelectedChat(null)} className="md:hidden text-text-secondary">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="relative">
                  <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 lg:size-12 border border-border-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDNPauWhdHt3EwaZa0wPuG9tdTvdGgImq15QqFu7wR8b9JdgbSTqBIrP2e0Lp0-9x90PExTidsuUH-YPw0odNpedRZlbgyNvW3-h7DPREzL-387Bplv0yPrAn-VXBx-OCHK9iVPlIns5cMVvvO61k6WM8-gldtmZWS-Io87SWSl_Yr86Gv1udbJ0DRhK4zqg9N3uki3cgfnEPdoRqJk5JScoCjEWYfSTxPhv3OvNhSpxVNaTm7LjmYGxYpnXBFNZ9jTn53yQ9oVC4")'}}></div>
                  <span className="absolute bottom-0 right-0 size-3 bg-emerald-500 border-2 border-surface-dark rounded-full"></span>
                </div>
                <div>
                  <h2 className="text-sm lg:text-base font-bold text-white leading-tight">Oficina Mecânica Silva</h2>
                  <div className="flex items-center gap-2 text-[10px] lg:text-xs text-text-secondary">
                    <span className="flex items-center text-amber-500 gap-0.5">
                      4.8 <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    </span>
                    <span>•</span>
                    <span className="text-emerald-500 font-medium">Online agora</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-full text-text-secondary hover:text-primary transition-colors" title="Ligar">
                  <span className="material-symbols-outlined">call</span>
                </button>
                <button onClick={() => setShowDetails(!showDetails)} className="p-2 rounded-full text-text-secondary hover:text-primary transition-colors xl:hidden" title="Detalhes">
                  <span className="material-symbols-outlined">info</span>
                </button>
                <button className="p-2 rounded-full text-text-secondary hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </header>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 bg-background-dark custom-scrollbar">
              <div className="flex justify-center">
                <span className="bg-surface-dark text-text-secondary text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-border-dark">Hoje, 12 de Outubro</span>
              </div>
              
              <div className="flex justify-center">
                <div className="flex items-center gap-2 bg-primary/5 text-primary text-[11px] px-4 py-2 rounded-lg border border-primary/20 max-w-md text-center">
                  <span className="material-symbols-outlined text-base">security</span>
                  <p>Para sua segurança, nunca transfira dinheiro fora da plataforma Dr. do Carro.</p>
                </div>
              </div>

              {/* Message User */}
              <div className="flex flex-row-reverse items-end gap-3 group">
                <div className="flex flex-col items-end max-w-[85%] lg:max-w-[70%]">
                  <div className="bg-primary text-white p-3 lg:p-4 rounded-2xl rounded-tr-sm shadow-lg text-sm leading-relaxed">
                    Olá, bom dia! Gostaria de saber se vocês realizam troca de óleo de câmbio para Honda Civic?
                  </div>
                  <span className="text-[10px] text-text-secondary mt-1 mr-1 flex items-center gap-1">
                    10:05 <span className="material-symbols-outlined text-[14px]">done_all</span>
                  </span>
                </div>
              </div>

              {/* Message Shop */}
              <div className="flex items-end gap-3 group">
                <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 mb-6 border border-border-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDNPauWhdHt3EwaZa0wPuG9tdTvdGgImq15QqFu7wR8b9JdgbSTqBIrP2e0Lp0-9x90PExTidsuUH-YPw0odNpedRZlbgyNvW3-h7DPREzL-387Bplv0yPrAn-VXBx-OCHK9iVPlIns5cMVvvO61k6WM8-gldtmZWS-Io87SWSl_Yr86Gv1udbJ0DRhK4zqg9N3uki3cgfnEPdoRqJk5JScoCjEWYfSTxPhv3OvNhSpxVNaTm7LjmYGxYpnXBFNZ9jTn53yQ9oVC4")'}}></div>
                <div className="flex flex-col items-start max-w-[85%] lg:max-w-[70%]">
                  <div className="bg-surface-dark text-white border border-border-dark p-3 lg:p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm leading-relaxed">
                    Olá João! Sim, realizamos esse serviço. Qual o ano do seu Civic?
                  </div>
                  <span className="text-[10px] text-text-secondary mt-1 ml-1">10:12</span>
                </div>
              </div>

              {/* Message User 2 */}
              <div className="flex flex-row-reverse items-end gap-3 group">
                <div className="flex flex-col items-end max-w-[85%] lg:max-w-[70%]">
                  <div className="bg-primary text-white p-3 lg:p-4 rounded-2xl rounded-tr-sm shadow-lg text-sm leading-relaxed">
                    É um modelo 2020/2020, motor 2.0.
                  </div>
                  <span className="text-[10px] text-text-secondary mt-1 mr-1 flex items-center gap-1">
                    10:15 <span className="material-symbols-outlined text-[14px]">done_all</span>
                  </span>
                </div>
              </div>

              {/* Budget Message Shop */}
              <div className="flex items-end gap-3 group">
                <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 mb-6 border border-border-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDNPauWhdHt3EwaZa0wPuG9tdTvdGgImq15QqFu7wR8b9JdgbSTqBIrP2e0Lp0-9x90PExTidsuUH-YPw0odNpedRZlbgyNvW3-h7DPREzL-387Bplv0yPrAn-VXBx-OCHK9iVPlIns5cMVvvO61k6WM8-gldtmZWS-Io87SWSl_Yr86Gv1udbJ0DRhK4zqg9N3uki3cgfnEPdoRqJk5JScoCjEWYfSTxPhv3OvNhSpxVNaTm7LjmYGxYpnXBFNZ9jTn53yQ9oVC4")'}}></div>
                <div className="flex flex-col items-start max-w-[85%] lg:max-w-[70%]">
                  <div className="bg-surface-dark text-white border border-border-dark p-3 lg:p-4 rounded-2xl rounded-tl-sm shadow-sm flex flex-col gap-3">
                    <p className="text-sm">Perfeito. O serviço completo com óleo original Honda fica em R$ 450,00.</p>
                    <div className="flex items-center gap-3 bg-background-dark p-3 rounded-lg border border-border-dark">
                      <div className="bg-primary/10 rounded p-2 text-primary">
                        <span className="material-symbols-outlined">receipt_long</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">Pré-Orçamento #4092</span>
                        <span className="text-[10px] text-text-secondary">R$ 450,00 • Válido por 7 dias</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-text-secondary mt-1 ml-1">10:18</span>
                </div>
              </div>

              <div className="flex items-end gap-3">
                <div className="size-8 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center">
                   <div className="flex gap-1">
                    <div className="size-1 bg-text-secondary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="size-1 bg-text-secondary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="size-1 bg-text-secondary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <footer className="bg-surface-dark border-t border-border-dark p-4 lg:p-6 shrink-0">
              <div className="flex items-end gap-2 bg-background-dark rounded-xl p-2 border border-border-dark focus-within:border-primary/50 transition-all">
                <button className="p-2 text-text-secondary hover:text-primary transition-colors shrink-0" title="Anexar">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <textarea 
                  className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-text-secondary/50 resize-none py-2 text-sm lg:text-base max-h-32 custom-scrollbar" 
                  placeholder="Digite sua mensagem..." 
                  rows={1}
                ></textarea>
                <button className="p-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 shrink-0" title="Enviar">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>send</span>
                </button>
              </div>
            </footer>
          </>
        )}
      </main>

      {/* 4. Context Panel (Right Column) */}
      <aside className={`xl:flex w-80 flex-shrink-0 border-l border-border-dark bg-surface-dark flex-col overflow-y-auto fixed inset-0 z-30 xl:relative xl:z-0 xl:translate-x-0 transition-transform duration-300 ${showDetails ? 'translate-x-0' : 'translate-x-full xl:translate-x-0 hidden xl:flex'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8 xl:hidden">
            <h3 className="font-bold">Detalhes</h3>
            <button onClick={() => setShowDetails(false)} className="text-text-secondary"><span className="material-symbols-outlined">close</span></button>
          </div>
          <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-6">Informações do Veículo</h3>
          
          <div className="mb-8 group">
            <div className="aspect-video w-full rounded-xl bg-background-dark mb-4 bg-center bg-cover border border-border-dark overflow-hidden" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070")'}}></div>
            <h4 className="font-bold text-white text-lg">Honda Civic EXL</h4>
            <p className="text-text-secondary text-sm">2020 • 2.0 Flex • Prata</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-background-dark text-text-secondary text-[10px] rounded font-bold border border-border-dark">Placa: ABC-1234</span>
              <span className="px-2 py-1 bg-background-dark text-text-secondary text-[10px] rounded font-bold border border-border-dark">45.000 km</span>
            </div>
          </div>

          <hr className="border-border-dark mb-8"/>

          <div className="space-y-6 flex-1">
            <div>
              <span className="text-[10px] font-bold text-text-secondary uppercase block mb-2">Serviço em Aberto</span>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-white font-bold text-sm">Troca de Óleo Câmbio</p>
                <span className="inline-flex mt-2 items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-primary border border-primary/20">
                  Em Negociação
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold text-text-secondary uppercase block mb-2">Última Revisão</span>
              <div className="flex items-center gap-3 bg-background-dark/50 p-3 rounded-xl border border-border-dark">
                <div className="bg-surface-dark p-2 rounded-lg text-text-secondary">
                  <span className="material-symbols-outlined text-[20px]">event</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">15 Ago 2023</p>
                  <p className="text-[10px] text-text-secondary">Revisão Geral</p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-4 mt-6 border border-border-dark rounded-xl text-white font-bold text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
            <span className="material-symbols-outlined text-[18px] group-hover:text-primary transition-colors">history</span>
            Ver histórico completo
          </button>
        </div>
      </aside>

      {/* Overlay for mobile details */}
      {showDetails && <div onClick={() => setShowDetails(false)} className="fixed inset-0 bg-black/60 z-25 xl:hidden" />}
    </div>
  );
};

export default DirectChat;
