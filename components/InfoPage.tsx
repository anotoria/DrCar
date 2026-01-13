
import React from 'react';
import { AppStage, ViewMode } from '../types';

interface InfoPageProps {
  stage: AppStage;
  viewMode: ViewMode;
  onNavigate: (stage: AppStage) => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ stage, viewMode, onNavigate }) => {
  const isBusiness = viewMode === ViewMode.BUSINESS;

  const renderContent = () => {
    switch (stage) {
      case AppStage.INFO_HOW_IT_WORKS:
        return (
          <div className="space-y-16 animate-fade-in pb-20">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">A maneira inteligente de <br/><span className="text-primary">cuidar do seu veículo</span></h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">O Dr. do Carro simplifica a jornada de manutenção, do agendamento ao histórico digital.</p>
            </div>

            {/* Fluxo para Motoristas */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">person</span>
                <h3 className="text-2xl font-bold text-white">Para Motoristas</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: 'search_insights', title: 'Busca Inteligente', text: 'Filtre oficinas por proximidade, especialidade (mecânica, funilaria, etc.) e avaliações reais de outros usuários.' },
                  { icon: 'event_available', title: 'Agendamento Online', text: 'Escolha o serviço, a data e o horário. A oficina recebe sua solicitação e confirma em tempo real.' },
                  { icon: 'history_edu', title: 'Histórico na Nuvem', text: 'Esqueça os papéis. Cada serviço realizado gera um registro digital que valoriza o seu veículo na hora da venda.' }
                ].map((item, i) => (
                  <div key={i} className="bg-surface-dark/50 p-8 rounded-2xl border border-border-dark flex flex-col gap-4 hover:border-primary/50 transition-all">
                    <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black">0{i+1}</div>
                    <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fluxo para Oficinas */}
            <div className="space-y-8 pt-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">storefront</span>
                <h3 className="text-2xl font-bold text-white">Para Oficinas</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: 'dashboard_customize', title: 'Painel de Gestão', text: 'Gerencie todos os seus agendamentos, equipe e catálogo de serviços em uma interface intuitiva.' },
                  { icon: 'campaign', title: 'Visibilidade Digital', text: 'Sua oficina exposta para milhares de motoristas qualificados que buscam serviços na sua região.' },
                  { icon: 'star_rate', title: 'Reputação e Feedback', text: 'Receba avaliações dos seus clientes e construa uma marca forte baseada na confiança e qualidade.' }
                ].map((item, i) => (
                  <div key={i} className="bg-surface-dark/50 p-8 rounded-2xl border border-border-dark flex flex-col gap-4 hover:border-primary/50 transition-all">
                    <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black">0{i+1}</div>
                    <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl text-center space-y-6">
              <h3 className="text-2xl font-bold">Pronto para começar?</h3>
              <p className="text-text-secondary max-w-xl mx-auto">Junte-se a milhares de motoristas e oficinas que já transformaram a forma de cuidar do carro.</p>
              <button onClick={() => onNavigate(AppStage.AUTH)} className="px-10 h-14 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all active:scale-95">
                Criar minha conta grátis
              </button>
            </div>
          </div>
        );

      case AppStage.INFO_WORKSHOPS:
        return (
          <div className="space-y-12 animate-fade-in pb-20">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-white">Oficinas Parceiras</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">Nossa rede é composta por estabelecimentos rigorosamente selecionados para garantir sua segurança.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Mecânica Premium', desc: 'Especialistas em veículos importados e motores de alta performance.', img: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1000' },
                { title: 'Estética Automotiva', desc: 'Detailing, polimento e proteção cerâmica de última geração.', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=1000' },
                { title: 'Funilaria e Pintura', desc: 'Laboratórios de cores e reparos estruturais com garantia.', img: 'https://images.unsplash.com/photo-1590611380053-1ec55968863a?q=80&w=1000' }
              ].map((w, i) => (
                <div key={i} className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden group hover:border-primary/50 transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{w.title}</h3>
                    <p className="text-text-secondary text-sm">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case AppStage.INFO_SERVICES:
        return (
          <div className="space-y-12 animate-fade-in pb-20">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-white">Serviços Disponíveis</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">Desde manutenções básicas até diagnósticos complexos, você encontra tudo aqui.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: 'oil_barrel', name: 'Troca de Óleo' },
                { icon: 'tire_repair', name: 'Pneus e Alinhamento' },
                { icon: 'ac_unit', name: 'Ar Condicionado' },
                { icon: 'bolt', name: 'Sistema Elétrico' },
                { icon: 'minor_crash', name: 'Funilaria e Pintura' },
                { icon: 'speed', name: 'Injeção Eletrônica' },
                { icon: 'car_repair', name: 'Suspensão e Freios' },
                { icon: 'cleaning_services', name: 'Higienização' }
              ].map((s, i) => (
                <div key={i} className="bg-surface-dark border border-border-dark p-6 rounded-2xl flex flex-col items-center gap-4 hover:bg-primary/5 transition-colors group">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">{s.icon}</span>
                  <span className="font-bold text-center text-sm">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case AppStage.INFO_PLANS:
        return (
          <div className="space-y-16 animate-fade-in pb-20">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Planos que cabem no <br/><span className="text-primary">seu momento</span></h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">Seja você um motorista cuidadoso ou um dono de oficina visionário, temos o plano ideal.</p>
            </div>

            {/* Planos para Oficinas */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">storefront</span>
                  <h3 className="text-2xl font-bold text-white">Para Oficinas</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Oficina Starter */}
                <div className="bg-surface-dark p-8 rounded-3xl border border-border-dark flex flex-col gap-6 hover:bg-surface-dark/80 transition-all">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Digital Starter</h4>
                    <p className="text-text-secondary text-xs uppercase tracking-widest font-bold">Comece agora</p>
                  </div>
                  <div className="text-4xl font-black text-white">Grátis</div>
                  <ul className="space-y-4 flex-1">
                    {[
                      { text: 'Perfil básico na busca', active: true },
                      { text: 'Até 5 agendamentos /mês', active: true },
                      { text: 'Catálogo de 10 serviços', active: true },
                      { text: 'Selo de verificação', active: false },
                      { text: 'Painel de faturamento', active: false }
                    ].map((item, i) => (
                      <li key={i} className={`flex items-center gap-3 text-sm ${item.active ? 'text-text-secondary' : 'text-text-secondary/30'}`}>
                        <span className={`material-symbols-outlined text-sm ${item.active ? 'text-primary' : 'text-text-secondary/30'}`}>
                          {item.active ? 'check_circle' : 'cancel'}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onNavigate(AppStage.AUTH)} className="w-full h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all">Começar Grátis</button>
                </div>

                {/* Oficina Profissional */}
                <div className="bg-primary/5 p-8 rounded-3xl border-2 border-primary flex flex-col gap-6 relative overflow-hidden scale-105 shadow-2xl shadow-primary/10">
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">RECOMENDADO</div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Oficina Pro</h4>
                    <p className="text-primary text-xs uppercase tracking-widest font-bold">Cresça seu negócio</p>
                  </div>
                  <div className="text-4xl font-black text-white">R$ 99,90<span className="text-sm text-text-secondary font-normal"> /mês</span></div>
                  <ul className="space-y-4 flex-1">
                    {[
                      { text: 'Agendamentos ilimitados', active: true },
                      { text: 'Selo de Oficina Verificada', active: true },
                      { text: 'Destaque nos resultados', active: true },
                      { text: 'Catálogo ilimitado', active: true },
                      { text: 'Gestão de equipe', active: true }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onNavigate(AppStage.AUTH)} className="w-full h-12 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-primary/20 transition-all">Assinar Agora</button>
                </div>

                {/* Oficina Enterprise */}
                <div className="bg-surface-dark p-8 rounded-3xl border border-border-dark flex flex-col gap-6 hover:bg-surface-dark/80 transition-all">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Premium Elite</h4>
                    <p className="text-text-secondary text-xs uppercase tracking-widest font-bold">Máximo controle</p>
                  </div>
                  <div className="text-4xl font-black text-white">R$ 199,90<span className="text-sm text-text-secondary font-normal"> /mês</span></div>
                  <ul className="space-y-4 flex-1">
                    {[
                      { text: 'Tudo do plano Pro', active: true },
                      { text: 'Analytics de faturamento', active: true },
                      { text: 'Aviso via WhatsApp p/ clientes', active: true },
                      { text: 'Marketing impulsionado', active: true },
                      { text: 'Suporte 24h prioritário', active: true }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onNavigate(AppStage.AUTH)} className="w-full h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all">Falar com Consultor</button>
                </div>
              </div>
            </div>

            {/* Planos para Motoristas */}
            <div className="space-y-8 pt-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">person</span>
                <h3 className="text-2xl font-bold text-white">Para Motoristas</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-surface-dark p-8 rounded-3xl border border-border-dark flex flex-col sm:flex-row gap-6 items-center">
                  <div className="flex-1 space-y-4 text-center sm:text-left">
                    <h4 className="text-xl font-bold">Free</h4>
                    <p className="text-text-secondary text-sm">Ideal para cuidar de um veículo e ter o histórico digital sempre à mão.</p>
                    <div className="text-3xl font-black">Grátis</div>
                  </div>
                  <button onClick={() => onNavigate(AppStage.AUTH)} className="px-8 h-12 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold border border-white/10">Cadastrar</button>
                </div>
                <div className="bg-emerald-500/10 p-8 rounded-3xl border-2 border-emerald-500/30 flex flex-col sm:flex-row gap-6 items-center">
                  <div className="flex-1 space-y-4 text-center sm:text-left">
                    <h4 className="text-xl font-bold text-emerald-400">Road Master</h4>
                    <p className="text-text-secondary text-sm">Veículos ilimitados e lembretes inteligentes de manutenção por KM.</p>
                    <div className="text-3xl font-black text-white">R$ 14,90 <span className="text-sm font-normal text-text-secondary">/mês</span></div>
                  </div>
                  <button onClick={() => onNavigate(AppStage.AUTH)} className="px-8 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20 transition-all">Aderir</button>
                </div>
              </div>
            </div>

            <div className="text-center text-text-secondary text-sm pt-8">
              <p>Dúvidas sobre qual plano escolher? <button onClick={() => onNavigate(AppStage.INFO_HELP)} className="text-primary font-bold hover:underline">Consulte nosso suporte</button></p>
            </div>
          </div>
        );

      case AppStage.INFO_HELP:
        return (
          <div className="space-y-16 animate-fade-in pb-20">
            {/* Hero Help Section */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white">Central de Ajuda</h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">Encontre respostas rápidas ou entre em contato com nosso time de suporte.</p>
              
              <div className="max-w-2xl mx-auto relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary transition-colors">search</span>
                <input 
                  type="text" 
                  placeholder="Como podemos ajudar você hoje?" 
                  className="w-full h-14 bg-surface-dark border border-border-dark rounded-2xl pl-12 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-secondary/50"
                />
              </div>
            </div>

            {/* Support Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'account_circle', title: 'Minha Conta', desc: 'Dados e segurança' },
                { icon: 'payments', title: 'Pagamentos', desc: 'Preços e faturas' },
                { icon: 'car_repair', title: 'Agendamentos', desc: 'Como marcar serviços' },
                { icon: 'security', title: 'Privacidade', desc: 'LGPD e Seus dados' }
              ].map((cat, i) => (
                <button key={i} className="bg-surface-dark border border-border-dark p-6 rounded-2xl hover:border-primary/50 transition-all text-center flex flex-col items-center gap-3 group">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-sm">{cat.title}</h4>
                    <p className="text-text-secondary text-[10px] uppercase tracking-wider">{cat.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Detailed FAQs */}
            <div className="space-y-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white text-center">Perguntas Frequentes</h3>
              <div className="space-y-4">
                {[
                  { q: 'Como faço para cadastrar meu carro?', a: 'Após fazer o login, acesse a aba "Minha Garagem" e clique no botão "Adicionar Veículo". Preencha os dados básicos como modelo, ano e placa para gerar seu histórico digital.' },
                  { q: 'O agendamento garante o preço exibido?', a: 'Os valores exibidos na plataforma são orçamentos estimados baseados na tabela de serviços da oficina. O preço final pode variar após a inspeção presencial do veículo, garantindo a transparência entre cliente e prestador.' },
                  { q: 'Como cancelar ou reagendar um serviço?', a: 'Vá em "Meus Agendamentos", selecione o serviço desejado e clique em "Cancelar" ou "Reagendar". Pedimos a gentileza de realizar alterações com pelo menos 2h de antecedência.' },
                  { q: 'É seguro cadastrar os dados do meu veículo?', a: 'Sim! Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD. Seus dados são utilizados exclusivamente para facilitar a gestão da manutenção do seu carro.' },
                  { q: 'Como minha oficina pode se tornar parceira?', a: 'Clique em "Para Oficinas" no cabeçalho, faça seu cadastro empresarial e envie a documentação necessária. Nosso time de curadoria entrará em contato em até 48 horas.' }
                ].map((item, i) => (
                  <details key={i} className="group bg-surface-dark border border-border-dark rounded-2xl p-6 cursor-pointer hover:bg-surface-dark/80 transition-all overflow-hidden">
                    <summary className="flex items-center justify-between font-bold text-white list-none">
                      <span className="flex-1 pr-4">{item.q}</span>
                      <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div className="mt-4 text-text-secondary text-sm leading-relaxed border-t border-border-dark pt-4 animate-slide-down">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Direct Support Channels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl flex flex-col items-center text-center gap-4">
                <span className="material-symbols-outlined text-4xl text-primary">chat_bubble</span>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Chat em Tempo Real</h4>
                  <p className="text-text-secondary text-sm">Fale com um de nossos especialistas agora mesmo para dúvidas urgentes.</p>
                </div>
                <button className="mt-4 px-8 h-12 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-primary/20">
                  Abrir Chat
                </button>
              </div>
              <div className="bg-surface-dark border border-border-dark p-8 rounded-3xl flex flex-col items-center text-center gap-4">
                <span className="material-symbols-outlined text-4xl text-white">mail</span>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Suporte via E-mail</h4>
                  <p className="text-text-secondary text-sm">Para questões complexas ou sugestões, envie um e-mail para nossa equipe.</p>
                </div>
                <a className="mt-4 flex items-center justify-center px-8 h-12 border border-border-dark text-white font-bold rounded-full hover:bg-surface-highlight transition-all" href="mailto:suporte@drdocarro.com">
                  Enviar Mensagem
                </a>
              </div>
            </div>

            <div className="text-center text-text-secondary text-sm flex flex-col items-center gap-2">
              <p>Atendimento de Segunda a Sexta, das 08:00 às 18:00</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white underline transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white underline transition-colors">Privacidade</a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 w-full bg-background-dark overflow-y-auto pt-[100px] pb-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <button 
          onClick={() => onNavigate(AppStage.AUTH)}
          className="flex items-center gap-2 text-primary hover:text-white transition-colors w-fit group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="font-bold">Voltar ao Início</span>
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default InfoPage;
