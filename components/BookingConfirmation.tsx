
import React, { useState } from 'react';
import { AppStage } from '../types';

interface BookingConfirmationProps {
  onNavigate: (stage: AppStage) => void;
  onLogout: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ onNavigate, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased transition-colors duration-200 min-h-screen flex overflow-hidden">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
         <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111a22] z-40 shrink-0">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate(AppStage.SEARCH)} className="text-sm font-medium text-slate-600 dark:text-white hover:text-primary transition-colors">Voltar</button>
            <button onClick={() => onNavigate(AppStage.USER_NOTIFICATIONS)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[800px] flex-1 gap-8">
                {/* Success Header */}
                <div className="flex flex-col items-center justify-center text-center gap-4 pt-4">
                <div className="flex items-center justify-center size-24 rounded-full bg-green-500/10 dark:bg-green-500/20 mb-2 ring-1 ring-green-500/20">
                    <span className="material-symbols-outlined text-6xl text-green-600 dark:text-green-400">check_circle</span>
                </div>
                <div className="space-y-2">
                    <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4">Solicitação Enviada!</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal max-w-lg mx-auto">
                    A oficina <strong className="text-slate-900 dark:text-white">Auto Center Silva</strong> recebeu seu pedido e irá confirmar a disponibilidade em breve.
                    </p>
                </div>
                </div>

                {/* Status Alert */}
                <div className="mx-4 md:mx-0">
                <div className="flex items-start gap-4 rounded-xl bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 p-4 shadow-sm">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 mt-0.5">hourglass_top</span>
                    <div className="flex flex-col gap-1">
                    <h3 className="text-amber-900 dark:text-amber-100 font-bold text-sm">Status: Aguardando Confirmação</h3>
                    <p className="text-amber-700 dark:text-amber-200/70 text-sm">A oficina tem até 24 horas para responder. Enviaremos uma notificação assim que houver uma atualização.</p>
                    </div>
                </div>
                </div>

                {/* Appointment Summary Card */}
                <div className="mx-4 md:mx-0 bg-white dark:bg-[#192633] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-none overflow-hidden border border-gray-100 dark:border-[#233648]">
                {/* Card Header */}
                <div className="px-6 py-4 border-b border-gray-100 dark:border-[#233648] flex justify-between items-center">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Resumo do Agendamento</h3>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#233648] px-3 py-1 rounded-full">#AGD-8823</span>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Workshop & Car */}
                    <div className="flex flex-col gap-6">
                    {/* Workshop Info */}
                    <div className="flex gap-4">
                        <div className="size-16 rounded-lg bg-center bg-cover bg-no-repeat shadow-sm" data-alt="Logotipo da oficina" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArL-2InXiQaRIT4yQ85yDMy9K3x57bp0G15UpGGEoWXTnuv1wYM5hdmPkRumWufJEqUDqf2YngPxn34EK96Ytr57OSEzFOYIhFmmZPRh1Bl1XUCio0hznyOIn8BDYwBYqPKLKUzq6relj0-uCpkIvMKepby_GzMAvwpRvxft9YhkbypAuKBJthxrdiszchO-gMrGDf93jGFNPE6U1opkAFAMfz5uRbbGRFa5gXt_419v-5HlEZdXRCfQpYoONpL2TGklLTUrqaTYI")' }}></div>
                        <div className="flex flex-col justify-center">
                        <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">Auto Center Silva</p>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-sm text-slate-400">location_on</span>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Rua das Flores, 123 - Centro</p>
                        </div>
                        </div>
                    </div>
                    <hr className="border-gray-100 dark:border-[#233648]"/>
                    {/* Vehicle Info */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Veículo</label>
                        <div className="flex items-center gap-3 bg-slate-50 dark:bg-[#233648]/50 p-3 rounded-lg border border-slate-100 dark:border-[#233648]">
                        <div className="p-2 bg-white dark:bg-[#111a22] rounded-md shadow-sm text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined">directions_car</span>
                        </div>
                        <div>
                            <p className="text-slate-900 dark:text-white text-sm font-bold">Chevrolet Onix</p>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">Placa: ABC-1234 • Prata</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Right Column: Service Details */}
                    <div className="flex flex-col gap-6 relative md:border-l md:border-gray-100 md:dark:border-[#233648] md:pl-8">
                    <div className="flex flex-col gap-4">
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Detalhes</label>
                        <div className="flex gap-3">
                        <span className="material-symbols-outlined text-primary">build_circle</span>
                        <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white text-sm font-bold">Troca de Óleo e Filtro</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">Inclui revisão básica de 20 itens</span>
                        </div>
                        </div>
                        <div className="flex gap-3">
                        <span className="material-symbols-outlined text-primary">calendar_month</span>
                        <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white text-sm font-bold">15 de Outubro, 2023</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">Terça-feira</span>
                        </div>
                        </div>
                        <div className="flex gap-3">
                        <span className="material-symbols-outlined text-primary">schedule</span>
                        <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white text-sm font-bold">10:00 - 10:45</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">Duração est.: 45m</span>
                        </div>
                        </div>
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Estimado</span>
                        <span className="text-xl font-bold text-primary dark:text-blue-400">R$ 150,00</span>
                    </div>
                    </div>
                </div>
                </div>

                {/* Next Steps */}
                <div className="mx-4 md:mx-0 flex flex-col gap-4">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold px-1">Próximos Passos</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Step 1 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white dark:bg-[#192633] border border-gray-100 dark:border-[#233648]">
                    <div className="size-7 rounded-full bg-slate-100 dark:bg-[#233648] flex items-center justify-center text-slate-700 dark:text-white font-bold text-xs ring-1 ring-slate-200 dark:ring-transparent">1</div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">Análise da Oficina</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">A equipe da oficina verificará a agenda para confirmar seu horário.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white dark:bg-[#192633] border border-gray-100 dark:border-[#233648]">
                    <div className="size-7 rounded-full bg-slate-100 dark:bg-[#233648] flex items-center justify-center text-slate-700 dark:text-white font-bold text-xs ring-1 ring-slate-200 dark:ring-transparent">2</div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">Notificação</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Você receberá um e-mail e notificação assim que o pedido for aceito.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white dark:bg-[#192633] border border-gray-100 dark:border-[#233648]">
                    <div className="size-7 rounded-full bg-slate-100 dark:bg-[#233648] flex items-center justify-center text-slate-700 dark:text-white font-bold text-xs ring-1 ring-slate-200 dark:ring-transparent">3</div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">Serviço</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Compareça no dia agendado. O pagamento é feito após o serviço.</p>
                    </div>
                </div>
                </div>

                {/* Actions Footer */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 pb-12 mx-4 md:mx-0">
                <button 
                    onClick={() => onNavigate(AppStage.APPOINTMENTS)}
                    className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal transition-all shadow-lg shadow-blue-500/20"
                >
                    <span className="truncate">Ver Meus Agendamentos</span>
                </button>
                <button 
                    onClick={() => onNavigate(AppStage.DASHBOARD)}
                    className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-transparent hover:bg-slate-100 dark:hover:bg-[#233648] border border-slate-200 dark:border-[#233648] text-slate-700 dark:text-white text-base font-bold leading-normal transition-all"
                >
                    <span className="truncate">Voltar ao Início</span>
                </button>
                </div>
            </div>
            </div>
        </div>
      </main>

       {/* Overlay for mobile sidebar */}
       {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden animate-fade-in" />
      )}
    </div>
  );
};

export default BookingConfirmation;
