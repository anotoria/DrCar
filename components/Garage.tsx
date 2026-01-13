
import React, { useState } from 'react';
import { AppStage } from '../types';
import { useApp } from '../AppContext';

interface GarageProps {
  onNavigate: (stage: AppStage) => void;
  onLogout: () => void;
}

const Garage: React.FC<GarageProps> = ({ onNavigate, onLogout }) => {
  const { vehicles, addVehicle, setAppStage } = useApp();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);

  const handleAddVehicle = () => {
    setAppStage(AppStage.OWNER_ONBOARDING);
  };

  const selectedVehicle = vehicles.find(v => v.id === selectedVehicleId);

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
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white min-h-screen flex overflow-hidden">
       {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-card-light dark:bg-[#111a22] border-r border-slate-200 dark:border-slate-800 transform transition-all duration-300 
        lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64 flex flex-col`}
      >
        <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
           <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(AppStage.DASHBOARD)}>
            <div className="bg-primary/10 p-2 rounded-xl text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl">local_taxi</span>
            </div>
            {!isCollapsed && (
              <div className="transition-opacity duration-300">
                <h1 className="text-xl font-bold leading-none tracking-tight">Dr. do Carro</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Gestão Automotiva</p>
              </div>
            )}
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Desktop Toggle */}
        <div className="hidden lg:flex justify-end px-4 mb-2">
            <button 
                onClick={() => setIsCollapsed(!isCollapsed)} 
                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
            >
                <span className="material-symbols-outlined text-xl">
                    {isCollapsed ? 'chevron_right' : 'chevron_left'}
                </span>
            </button>
        </div>

        <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => (
            <button 
              key={item.stage}
              onClick={() => { onNavigate(item.stage); setIsSidebarOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all whitespace-nowrap group relative
                 ${item.stage === AppStage.GARAGE ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
                 ${isCollapsed ? 'justify-center' : ''}
              `}
              title={isCollapsed ? item.label : ''}
            >
              <span className="material-symbols-outlined shrink-0">{item.icon}</span>
              {!isCollapsed && <span className="font-semibold text-sm">{item.label}</span>}
              {item.badge && (
                 <span className={`
                    ${isCollapsed ? 'absolute top-2 right-2 size-2 p-0' : 'ml-auto px-1.5 py-0.5'} 
                    bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center
                `}>
                    {!isCollapsed && item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
            <button 
                onClick={onLogout} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors w-full ${isCollapsed ? 'justify-center' : 'text-left'}`}
                title={isCollapsed ? 'Sair' : ''}
            >
              <span className="material-symbols-outlined shrink-0">logout</span>
              {!isCollapsed && <span className="font-medium text-sm">Sair</span>}
            </button>
            <div 
                className={`flex items-center gap-3 px-2 cursor-pointer ${isCollapsed ? 'justify-center' : ''}`} 
                onClick={() => onNavigate(AppStage.USER_PROFILE)}
            >
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-slate-200 dark:ring-slate-800 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac")' }}></div>
              {!isCollapsed && (
                  <div className="flex flex-col overflow-hidden">
                     <h1 className="text-sm font-bold text-slate-900 dark:text-white truncate">Roberto Silva</h1>
                     <p className="text-slate-500 dark:text-slate-400 text-xs truncate">Proprietário</p>
                  </div>
              )}
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
            <span className="font-bold text-lg lg:hidden">Meus Veículos</span>
             <div className="hidden lg:flex relative w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Buscar veículo..."/>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate(AppStage.USER_NOTIFICATIONS)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-10">
            <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 pb-10">
              
              {/* Page Heading & Actions */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Minha Garagem</h1>
                  <p className="text-gray-500 dark:text-[#92adc9] text-base font-normal">Gerencie seus veículos, histórico e lembretes de manutenção.</p>
                </div>
                <button 
                  onClick={handleAddVehicle}
                  className="flex items-center gap-2 cursor-pointer overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold shadow-lg hover:bg-blue-600 transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  <span className="truncate">Adicionar Veículo</span>
                </button>
              </div>

              {/* Vehicle Selection Grid */}
              <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">Seus Veículos</h3>
                  <a className="text-primary text-sm font-bold hover:underline" href="#">Ver todos</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Dynamic Vehicle Cards */}
                  {vehicles.map((v) => (
                    <div 
                        key={v.id} 
                        onClick={() => setSelectedVehicleId(v.id)}
                        className={`group relative flex flex-col gap-3 p-3 rounded-xl bg-white dark:bg-[#1a2632] shadow-lg cursor-pointer transition-all border-2 
                        ${selectedVehicleId === v.id ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
                    >
                      <div className={`absolute top-3 right-3 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10 ${v.status === 'ok' ? 'bg-emerald-500' : 'bg-amber-500'}`}>
                        {v.status === 'ok' ? 'EM DIA' : 'REVISÃO'}
                      </div>
                      <div 
                        className="w-full h-32 bg-center bg-no-repeat bg-cover rounded-lg relative overflow-hidden group-hover:opacity-90 transition-opacity" 
                        data-alt={`${v.brand} ${v.model}`} 
                        style={{ backgroundImage: v.id === '1' ? 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8iS_TsY8mzMRSPuc49wXFdFZ77wOkReW16x3OugdLosTezrQFMMW6QKBzF6fES53lD3JgbgHrJcpRQxyhAi7gDrJwbbsCdkSDAWQ35GUI00SrDZsXAjpibLnkDpdBRt6iuEI9MrazNBCCR8b3fjcxy-i2XJ3MUEzHBMNgeBf2J5WWGEBQ3di3U1F_w_3F3FhAkBfWKNl8I3YF0H1S4ADgcQUPA8YVey-wnyEvjRSuTrT19zMuv47LCbWtQWoE7CkQSepyJdqFN-g")' : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWJU1Mz4av6glo2O___R3safeihjLlv9Q6Un9Y0SYkruyAzKWGhP5ZXzYDLPTortahdvdVeCU0PZOALFeEAmxVCX3hC-N5qDwDdI7sLA3EBs9Ok0w4SqFrlxS1rcw1fgnkRHI5KGBZLdnwJmkvuFl6LwBg7oeiNJ3HsaTb5Sm_KB5FHBpnNymkwVAoM9Ecy2K-Wztb86drRReRyzBPvLchd2QU5qgFuebhkqt17h3cfJ8ND2eJnNPmZpz6F9YRsxFmrKEFNpI1UOA")' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="px-1">
                        <p className="text-gray-900 dark:text-white text-base font-bold leading-normal truncate">{v.brand} {v.model} {v.year}</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-gray-500 dark:text-[#92adc9] text-xs font-medium">{v.plate}</p>
                          <span className={`flex items-center gap-1 text-xs font-bold ${v.status === 'ok' ? 'text-emerald-500' : 'text-amber-500'}`}>
                            <span className="material-symbols-outlined text-[14px]">{v.status === 'ok' ? 'check_circle' : 'warning'}</span>
                            {v.status === 'ok' ? 'Em dia' : 'Revisão'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Add New Card Placeholder */}
                  <div onClick={handleAddVehicle} className="flex flex-col items-center justify-center gap-3 p-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-[#1a2632]/50 cursor-pointer transition-all min-h-[200px]">
                    <div className="size-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined">add</span>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-900 dark:text-white text-sm font-bold leading-normal">Novo Veículo</p>
                      <p className="text-gray-500 dark:text-[#92adc9] text-xs">Cadastre outro carro</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Details Section - Dynamic based on selection */}
              <section className="bg-surface-light dark:bg-[#1a2632] rounded-2xl border border-gray-200 dark:border-[#233648] shadow-sm overflow-hidden min-h-[400px]">
                 {selectedVehicle ? (
                     <div className="flex flex-col">
                        {/* Vehicle Header */}
                        <div className="p-6 md:p-8 border-b border-gray-200 dark:border-[#233648] bg-slate-50 dark:bg-[#151f2b]/50 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
                            <div className="flex items-center gap-4">
                                <div className="size-14 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-3xl">directions_car</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedVehicle.brand} {selectedVehicle.model} {selectedVehicle.year}</h2>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-[#92adc9] mt-1">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">speed</span> {selectedVehicle.mileage.toLocaleString()} km</span>
                                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">pin</span> Placa: {selectedVehicle.plate}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 w-full md:w-auto">
                                <button className="flex-1 md:flex-none px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    Editar
                                </button>
                                <button className="flex-1 md:flex-none px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">add_task</span>
                                    Registrar Serviço
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 dark:border-[#233648] px-6">
                             {['Histórico', 'Lembretes', 'Documentos', 'Custos'].map((tab, idx) => (
                                 <button key={tab} className={`px-4 py-4 text-sm font-bold border-b-2 transition-colors ${idx === 0 ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'}`}>
                                     {tab} {tab === 'Lembretes' && <span className="ml-1 bg-amber-500 text-white text-[10px] px-1.5 rounded-full">1</span>}
                                 </button>
                             ))}
                        </div>

                        {/* Details Content */}
                        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left: Timeline */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Últimas Manutenções</h3>
                                    <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">filter_list</span> Filtrar
                                    </button>
                                </div>

                                <div className="relative pl-4 border-l border-gray-200 dark:border-[#233648] space-y-8">
                                    {/* Item 1 */}
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1.5 size-3.5 bg-primary rounded-full border-2 border-white dark:border-[#1a2632]"></div>
                                        <div className="bg-gray-50 dark:bg-[#151f2b]/50 border border-gray-200 dark:border-[#233648] rounded-xl p-5 hover:border-primary/30 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-base text-gray-900 dark:text-white">Troca de Óleo e Filtros</h4>
                                                    <p className="text-xs text-gray-500 dark:text-[#92adc9]">Oficina do Zé • Mecânico Responsável: Carlos</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-gray-900 dark:text-white">R$ 350,00</p>
                                                    <p className="text-xs text-gray-500">15 Out 2023</p>
                                                </div>
                                            </div>
                                            <div className="bg-white dark:bg-[#1e2936] p-3 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-[#2a3845] mb-3">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Notas</span>
                                                Realizada troca do óleo 5W30 sintético e filtro de ar. Pastilhas de freio verificadas e em bom estado.
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Óleo</span>
                                                <span className="text-[10px] font-bold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Preventiva</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                     <div className="relative">
                                        <div className="absolute -left-[21px] top-1.5 size-3.5 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-[#1a2632]"></div>
                                        <div className="bg-gray-50 dark:bg-[#151f2b]/50 border border-gray-200 dark:border-[#233648] rounded-xl p-5 hover:border-primary/30 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-base text-gray-900 dark:text-white">Alinhamento e Balanceamento</h4>
                                                    <p className="text-xs text-gray-500 dark:text-[#92adc9]">AutoCenter Premium</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-gray-900 dark:text-white">R$ 180,00</p>
                                                    <p className="text-xs text-gray-500">02 Ago 2023</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-3">
                                                <span className="text-[10px] font-bold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Pneus</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Sidebar Cards */}
                            <div className="space-y-6">
                                {/* Next Tasks */}
                                <div className="bg-gray-50 dark:bg-[#151f2b]/30 rounded-xl border border-gray-200 dark:border-[#233648] overflow-hidden">
                                    <div className="px-5 py-3 border-b border-gray-200 dark:border-[#233648] flex justify-between items-center bg-gray-100 dark:bg-[#1a242f]">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-[#92adc9]">Próximas Tarefas</h4>
                                        <button className="text-primary hover:text-white"><span className="material-symbols-outlined text-sm">add</span></button>
                                    </div>
                                    <div className="p-4 flex flex-col gap-3">
                                        <div className="flex gap-3 bg-white dark:bg-[#1e2936] p-3 rounded-lg border border-gray-100 dark:border-[#2a3845] hover:border-amber-500/50 transition-colors cursor-pointer group">
                                            <div className="text-amber-500 bg-amber-500/10 p-2 rounded h-fit">
                                                <span className="material-symbols-outlined text-lg">warning</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Revisão de Freios</p>
                                                    <span className="material-symbols-outlined text-gray-300 group-hover:text-primary text-sm">check_circle</span>
                                                </div>
                                                <p className="text-xs text-gray-500">Vence em: 15 Dias</p>
                                            </div>
                                        </div>
                                         <div className="flex gap-3 bg-white dark:bg-[#1e2936] p-3 rounded-lg border border-gray-100 dark:border-[#2a3845] opacity-60">
                                            <div className="text-gray-400 bg-gray-100 dark:bg-gray-700 p-2 rounded h-fit">
                                                <span className="material-symbols-outlined text-lg">oil_barrel</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-gray-900 dark:text-white">Troca de Óleo</p>
                                                <p className="text-xs text-gray-500">Em 5.000 km</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Costs Summary */}
                                <div className="bg-blue-50 dark:bg-[#112233] rounded-xl border border-blue-100 dark:border-[#1a3a5a] p-5">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-2">Resumo de Gastos (2023)</h4>
                                    <p className="text-3xl font-black text-gray-900 dark:text-white">R$ 530,00</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4">Total investido em manutenções preventivas e corretivas este ano.</p>
                                    
                                    {/* Mock Chart Bar */}
                                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex">
                                        <div className="h-full bg-primary w-[30%]"></div>
                                        <div className="h-full bg-amber-500 w-[15%]"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-mono uppercase">
                                        <span>Jan</span>
                                        <span>Dez</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center p-12 text-center">
                        <div className="size-20 bg-gray-100 dark:bg-[#151f2b] rounded-full flex items-center justify-center text-gray-400 mb-4">
                            <span className="material-symbols-outlined text-4xl">directions_car</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nenhum veículo selecionado</h3>
                        <p className="text-gray-500 dark:text-slate-400 max-w-sm mt-2">Clique em um dos veículos acima para visualizar o histórico completo, documentos e próximas revisões.</p>
                    </div>
                 )}
              </section>
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

export default Garage;
