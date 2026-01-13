
import React, { useState } from 'react';
import { AppStage, ViewMode } from '../types';

interface FaqSupportProps {
  viewMode: ViewMode;
  onNavigate: (stage: AppStage) => void;
  onLogout: () => void;
}

const FaqSupport: React.FC<FaqSupportProps> = ({ viewMode, onNavigate, onLogout }) => {
  const isBusiness = viewMode === ViewMode.BUSINESS;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userNavItems = [
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

  const businessNavItems = [
    { stage: AppStage.BUSINESS_DASHBOARD, icon: 'dashboard', label: 'Dashboard' },
    { stage: AppStage.BUSINESS_APPOINTMENTS, icon: 'calendar_month', label: 'Agendamentos' },
    { stage: AppStage.CHAT, icon: 'chat', label: 'Mensagens' },
    { stage: AppStage.BUSINESS_SERVICES, icon: 'build', label: 'Serviços' },
    { stage: AppStage.FAQ_SUPPORT, icon: 'help', label: 'Ajuda' },
  ];

  const activeNavItems = isBusiness ? businessNavItems : userNavItems;

  const faqs = [
    { q: 'Como faço para agendar um serviço?', a: 'Para agendar um serviço, navegue até a aba "Agendamentos" ou busque por uma oficina na página inicial. Selecione o serviço desejado, escolha uma data e horário disponíveis e confirme a solicitação. A oficina receberá seu pedido e confirmará em breve.' },
    { q: 'É seguro pagar pelo aplicativo?', a: 'Sim, totalmente seguro! O Dr. do Carro utiliza processadores de pagamento certificados que criptografam seus dados. Além disso, o pagamento só é liberado para a oficina após a conclusão do serviço e sua aprovação.' },
    { q: 'Posso cancelar um agendamento?', a: 'Sim, você pode cancelar gratuitamente com até 24 horas de antecedência. Para cancelamentos de última hora, pode haver uma taxa de deslocamento dependendo da política da oficina escolhida. Verifique os detalhes no seu histórico de agendamentos.' },
    { q: 'Como avalio uma oficina?', a: 'Após a conclusão do serviço, você receberá uma notificação para avaliar sua experiência. Você pode dar uma nota de 1 a 5 estrelas e deixar um comentário sobre o atendimento e a qualidade do serviço prestado.' },
    { q: 'Esqueci minha senha, como recuperar?', a: 'Na tela de login, clique em "Esqueci minha senha". Enviaremos um link de redefinição para o seu e-mail cadastrado. Siga as instruções no e-mail para criar uma nova senha segura.' }
  ];

  return (
    <div className="bg-background-dark text-white font-display overflow-hidden flex h-screen w-full">
      
      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card-light dark:bg-[#111a22] border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(isBusiness ? AppStage.BUSINESS_DASHBOARD : AppStage.DASHBOARD)}>
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-3xl">car_repair</span>
            </div>
            <h2 className="lg:block text-white text-lg font-bold tracking-tight">Dr. do Carro</h2>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">
          {activeNavItems.map((item) => (
            <button 
              key={item.stage}
              onClick={() => { onNavigate(item.stage); setIsSidebarOpen(false); }}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-left ${item.stage === AppStage.FAQ_SUPPORT ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-white/5 hover:text-white'}`}
            >
              <span className={`material-symbols-outlined ${item.stage === AppStage.FAQ_SUPPORT ? 'font-variation-fill' : ''}`}>{item.icon}</span>
              <span className={`block text-sm ${item.stage === AppStage.FAQ_SUPPORT ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
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
      <main className="flex-1 flex flex-col min-w-0 bg-background-dark overflow-y-auto custom-scrollbar">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b border-border-dark bg-surface-dark sticky top-0 z-30">
           <button onClick={() => setIsSidebarOpen(true)} className="text-white">
              <span className="material-symbols-outlined">menu</span>
           </button>
           <span className="font-bold">Ajuda e Suporte</span>
           <div className="size-8"></div>
        </header>

        {/* Hero Help Section */}
        <section className="bg-surface-dark border-b border-border-dark py-12 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Como podemos ajudar?</h1>
          <p className="text-text-secondary max-w-lg mb-8">Encontre respostas rápidas para suas dúvidas ou entre em contato com nosso time de suporte especializado.</p>
          <div className="relative w-full max-w-2xl group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-2xl group-focus-within:text-primary transition-colors">search</span>
            <input 
              className="block w-full p-4 pl-12 text-base text-white border border-border-dark rounded-xl bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-lg placeholder-text-secondary" 
              placeholder="Busque por 'agendamento', 'pagamento' ou 'cancelamento'..." 
              type="text"
            />
          </div>
        </section>

        <div className="max-w-6xl mx-auto w-full px-6 py-10 flex flex-col xl:flex-row gap-10">
          {/* FAQ Main Column */}
          <div className="flex-1 space-y-10">
            <div>
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-4">Tópicos Populares</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: 'calendar_month', label: 'Agendamentos', color: 'text-blue-400', bg: 'bg-blue-400/10' },
                  { icon: 'payments', label: 'Pagamentos', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                  { icon: 'car_repair', label: 'Oficinas', color: 'text-purple-400', bg: 'bg-purple-400/10' },
                  { icon: 'shield', label: 'Segurança', color: 'text-amber-400', bg: 'bg-amber-400/10' }
                ].map((topic, i) => (
                  <button key={i} className="flex flex-col items-center gap-3 p-4 bg-surface-dark rounded-xl border border-border-dark hover:border-primary/50 hover:shadow-md transition-all group text-center">
                    <div className={`p-3 ${topic.bg} ${topic.color} rounded-lg group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined">{topic.icon}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{topic.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Perguntas Frequentes</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-surface-dark rounded-xl border border-border-dark overflow-hidden open:border-primary/50 transition-colors">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-white hover:bg-white/5 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="material-symbols-outlined text-text-secondary transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-5 pb-5 pt-0 text-text-secondary text-sm leading-relaxed border-t border-transparent mt-0 animate-fade-in">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Support Sidebar */}
          <aside className="w-full xl:w-96 flex flex-col gap-6">
            <div className="bg-surface-dark rounded-2xl p-6 border border-border-dark shadow-sm sticky top-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white">Ainda precisa de ajuda?</h3>
                <p className="text-sm text-text-secondary mt-1">Nossa equipe está disponível de Seg a Sex, das 08h às 18h.</p>
              </div>
              
              <div className="space-y-3 mb-8">
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-border-dark" href="#">
                  <div className="bg-emerald-400/10 text-emerald-400 p-2 rounded-full">
                    <span className="material-symbols-outlined text-xl">chat</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Chat Online</p>
                    <p className="text-xs text-emerald-400 font-medium">Disponível agora</p>
                  </div>
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-border-dark" href="mailto:suporte@drdocarro.com">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">E-mail</p>
                    <p className="text-xs text-text-secondary">suporte@drdocarro.com</p>
                  </div>
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-border-dark" href="tel:08001234567">
                  <div className="bg-surface-highlight text-text-secondary p-2 rounded-full">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Telefone</p>
                    <p className="text-xs text-text-secondary">0800 123 4567</p>
                  </div>
                </a>
              </div>

              <hr className="border-border-dark mb-6"/>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <h4 className="font-bold text-white text-sm">Envie uma mensagem</h4>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1">Assunto</label>
                  <select className="block w-full rounded-lg border-border-dark bg-background-dark text-sm text-white focus:border-primary focus:ring-primary p-2.5 cursor-pointer">
                    <option>Dúvida sobre Agendamento</option>
                    <option>Problema com Pagamento</option>
                    <option>Reclamação</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1">Mensagem</label>
                  <textarea className="block w-full rounded-lg border-border-dark bg-background-dark text-sm text-white focus:border-primary focus:ring-primary p-3 resize-none h-24" placeholder="Descreva seu problema..."></textarea>
                </div>
                <button className="w-full py-2.5 px-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-sm shadow-sm shadow-blue-500/30">
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </aside>
        </div>

        <footer className="mt-auto py-6 px-6 border-t border-border-dark text-center">
          <p className="text-xs text-text-secondary">© 2024 Dr. do Carro. Todos os direitos reservados.</p>
        </footer>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" />
      )}
    </div>
  );
};

export default FaqSupport;
