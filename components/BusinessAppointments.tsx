
import React from 'react';
import { AppStage } from '../types';

interface BusinessAppointmentsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const BusinessAppointments: React.FC<BusinessAppointmentsProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white overflow-hidden h-screen flex w-full">
      {/* Sidebar */}
      <aside className="w-64 h-full flex flex-col bg-surface-dark border-r border-border-dark hidden md:flex shrink-0">
        <div className="flex items-center gap-3 p-6 cursor-pointer" onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}>
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-xl">build_circle</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-bold leading-normal">AutoFix <span className="text-primary">Pro</span></h1>
            <p className="text-[#92adc9] text-xs font-normal leading-normal">Gestão de Oficina</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 px-4 mt-4 flex-1">
          <button 
            onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors text-left"
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="text-sm font-medium leading-normal">Início</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-lg shadow-primary/20 text-left">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span className="text-sm font-medium leading-normal">Agendamentos</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors text-left">
            <span className="material-symbols-outlined text-[20px]">group</span>
            <span className="text-sm font-medium leading-normal">Clientes</span>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_SERVICES)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors text-left">
            <span className="material-symbols-outlined text-[20px]">car_repair</span>
            <span className="text-sm font-medium leading-normal">Serviços</span>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_REVIEWS)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors text-left">
            <span className="material-symbols-outlined text-[20px]">star</span>
            <span className="text-sm font-medium leading-normal">Avaliações</span>
          </button>
          <button onClick={() => onNavigate(AppStage.BUSINESS_EDIT_PROFILE)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors text-left">
            <span className="material-symbols-outlined text-[20px]">storefront</span>
            <span className="text-sm font-medium leading-normal">Perfil da Loja</span>
          </button>
        </nav>
        <div className="p-4 mt-auto border-t border-border-dark">
          <button onClick={() => onNavigate(AppStage.BUSINESS_EDIT_PROFILE)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors text-left">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="text-sm font-medium leading-normal">Configurações</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors text-left"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="text-sm font-medium leading-normal">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 h-full bg-background-dark">
        {/* Top Header */}
        <header className="h-16 border-b border-border-color bg-surface-dark px-6 py-3 flex items-center justify-between shrink-0 z-10">
          <div className="flex items-center gap-4 text-white md:hidden">
            <button className="text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div className="flex items-center gap-4 text-white max-md:hidden">
            <h2 className="text-white text-lg font-bold leading-tight">Agendamentos</h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 md:gap-8">
            <div className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#233648]">
                <div className="text-[#92adc9] flex items-center justify-center pl-3">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="w-full bg-transparent border-none text-white placeholder:text-[#92adc9] focus:ring-0 text-sm" placeholder="Buscar agendamento..."/>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="size-10 rounded-lg bg-[#233648] text-white hover:bg-[#324d67] transition-colors relative">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-[#233648]"></span>
              </button>
              <button className="size-10 rounded-lg bg-[#233648] text-white hover:bg-[#324d67] transition-colors">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </button>
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-[#324d67]">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-[#324d67]" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfhjXvpW66ROHZM4-1KhAPR3bXMMXmQfA-B0KFujHG32c4IRHLZTVmhnuqharxxonN_lbs-HBKZZ3MfRf-HYBDO2zMF6AIoyO7QaPwjoptCMo4CBb35p3cVpD6tW3k3jjOPqyjD8r3hB_pnL0wbP71medPQLy31bllIa_ZAl88OF1zZOovY-WTps2NUynFPQaFYXhlQT__3eAObyhWC6kTK8VDUhc5kNL_KVdRhrnzqutTizJguWsP9Tit_FhrBhqUt5BjKJxSXBg")' }}
              ></div>
              <div className="hidden lg:flex flex-col">
                <span className="text-sm font-bold text-white">Carlos M.</span>
                <span className="text-xs text-[#92adc9]">Gerente</span>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            {/* Page Heading & Actions */}
            <div className="flex flex-wrap justify-between items-end gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">Gerenciar Agendamentos</h1>
                <p className="text-[#92adc9] text-base font-normal leading-normal max-w-2xl">
                  Gerencie a agenda da oficina, confirme horários e comunique-se com os proprietários de veículos.
                </p>
              </div>
              <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Novo Agendamento
              </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#324d67] bg-surface-dark">
                <div className="flex items-center justify-between">
                  <p className="text-[#92adc9] text-sm font-medium">Hoje</p>
                  <span className="material-symbols-outlined text-primary text-[20px]">today</span>
                </div>
                <p className="text-white text-2xl font-bold">12</p>
                <p className="text-xs text-[#92adc9] flex items-center gap-1">
                  <span className="text-green-400 font-bold">+2</span> vs ontem
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#324d67] bg-surface-dark">
                <div className="flex items-center justify-between">
                  <p className="text-[#92adc9] text-sm font-medium">Pendentes</p>
                  <span className="material-symbols-outlined text-orange-400 text-[20px]">pending_actions</span>
                </div>
                <p className="text-white text-2xl font-bold">4</p>
                <p className="text-xs text-[#92adc9]">Aguardando confirmação</p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#324d67] bg-surface-dark">
                <div className="flex items-center justify-between">
                  <p className="text-[#92adc9] text-sm font-medium">Confirmados</p>
                  <span className="material-symbols-outlined text-green-400 text-[20px]">check_circle</span>
                </div>
                <p className="text-white text-2xl font-bold">7</p>
                <p className="text-xs text-[#92adc9]">Prontos para serviço</p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#324d67] bg-surface-dark">
                <div className="flex items-center justify-between">
                  <p className="text-[#92adc9] text-sm font-medium">Cancelados</p>
                  <span className="material-symbols-outlined text-red-400 text-[20px]">cancel</span>
                </div>
                <p className="text-white text-2xl font-bold">1</p>
                <p className="text-xs text-[#92adc9]">Esta semana</p>
              </div>
            </div>

            {/* Toolbar / Filters */}
            <div className="flex flex-col md:flex-row justify-between gap-4 p-1 rounded-xl">
              <div className="flex flex-wrap gap-3 items-center flex-1">
                <div className="relative min-w-[200px]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#92adc9]">
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  </div>
                  <input className="bg-[#233648] border-none text-white text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-1 focus:ring-primary placeholder-[#92adc9]" type="text" defaultValue="14 Out, 2023 - 20 Out, 2023"/>
                </div>
                <div className="relative min-w-[150px]">
                  <select className="bg-[#233648] border-none text-white text-sm rounded-lg focus:ring-1 focus:ring-primary block w-full p-2.5 appearance-none cursor-pointer">
                    <option>Todos Status</option>
                    <option>Pendentes</option>
                    <option>Confirmados</option>
                    <option>Cancelados</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#92adc9]">
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#233648] p-1 rounded-lg flex self-start">
                <label className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-dark text-white shadow-sm transition-all">
                  <input defaultChecked className="hidden" name="view" type="radio" value="list"/>
                  <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                  <span className="text-sm font-medium">Lista</span>
                </label>
                <label className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-md text-[#92adc9] hover:text-white transition-all">
                  <input className="hidden" name="view" type="radio" value="calendar"/>
                  <span className="material-symbols-outlined text-[18px]">calendar_view_month</span>
                  <span className="text-sm font-medium">Calendário</span>
                </label>
              </div>
            </div>

            {/* Appointments List */}
            <div className="flex flex-col gap-4">
              {/* Header Row */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-xs font-semibold text-[#92adc9] uppercase tracking-wider">
                <div className="col-span-4 lg:col-span-3">Cliente</div>
                <div className="col-span-3 lg:col-span-2">Veículo</div>
                <div className="col-span-3 lg:col-span-3">Serviço</div>
                <div className="col-span-2 lg:col-span-2">Data & Hora</div>
                <div className="col-span-2 lg:col-span-1 text-center">Status</div>
                <div className="col-span-12 lg:col-span-1 text-right">Ações</div>
              </div>

              {/* Pending Card */}
              <div className="bg-surface-dark border border-[#233648] rounded-xl p-4 md:px-6 md:py-4 hover:border-[#324d67] transition-all group shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-4 lg:col-span-3 flex items-center gap-3">
                    <div className="size-10 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOXf7-BRSV97bFBmInbaHAYhD997NtrULm1F6AnmelMltmTq3GrALGGAlBoqaO21v_LYVJEUGccImXNgK47E4C3XFpfXj0lR2AJrKWcigAiTiNh6k3DdmG8gGzxbnVgesE0cuUsCWIEOoBFw4kCdsjWDqI0yF9oTSu2IJ9MeNBhPEQHj7_sWpPgCSxocnsz2zH4f0bJwLds-R-BJrg6OZCu5k4wHzghW7BInwTuQFa2K2OVwVbDxdv0z6Si_krGWdZP1aT76woBB8")'}}></div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">Maria Oliveira</p>
                      <p className="text-[#92adc9] text-xs mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">call</span> (11) 98765-4321
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3 lg:col-span-2">
                    <p className="text-white text-sm font-medium">Toyota Corolla 2019</p>
                    <p className="text-[#92adc9] text-xs font-mono mt-0.5">XYZ-9876</p>
                  </div>
                  <div className="md:col-span-3 lg:col-span-3">
                    <p className="text-white text-sm">Revisão Completa 50k</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="bg-[#233648] text-[#92adc9] text-[10px] px-1.5 py-0.5 rounded">Mecânica</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-2">
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">Hoje, 14 Out</span>
                      <span className="text-[#92adc9] text-xs">14:00 - 16:00</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-1 flex md:justify-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      <span className="size-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                      Pendente
                    </span>
                  </div>
                  <div className="md:col-span-12 lg:col-span-1 flex justify-end gap-2 mt-2 md:mt-0 border-t md:border-t-0 border-[#233648] pt-3 md:pt-0">
                    <button className="size-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors" title="Confirmar">
                      <span className="material-symbols-outlined text-[18px]">check</span>
                    </button>
                    <button className="size-8 flex items-center justify-center rounded-lg bg-[#233648] text-white hover:bg-[#324d67] transition-colors" title="Detalhes">
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Confirmed Card */}
              <div className="bg-surface-dark border border-[#233648] rounded-xl p-4 md:px-6 md:py-4 hover:border-[#324d67] transition-all group shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-4 lg:col-span-3 flex items-center gap-3">
                    <div className="size-10 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_dMUEqstqTCDHY-exqDAuFj_Nz8Fk8ao5xXi64IvBKCBzjwhp450Xw1KfSBO1sjgo_QPUOkj4xIS_SKQXJ_vqYYrc3bpNt6s4Tnns0obw7EMXPTdHmis9bpFCwmj3lCWxehe7nhr3ZL3xnG2p3jqxiIAxbGEcDTlZPEIpN5dn0NuhgDIS6VeKFINppHXBQL60hk8ELLy0flsG8dJJI1EbyLgJkWwVyhW1VtrPQPK0Ne4Q8THT6uSDrPdoDrSGgYHbFDWtz8N4Cgc")'}}></div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">João Silva</p>
                      <p className="text-[#92adc9] text-xs mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">chat</span> Via WhatsApp
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3 lg:col-span-2">
                    <p className="text-white text-sm font-medium">Honda Civic 2020</p>
                    <p className="text-[#92adc9] text-xs font-mono mt-0.5">ABC-1234</p>
                  </div>
                  <div className="md:col-span-3 lg:col-span-3">
                    <p className="text-white text-sm">Troca de Óleo e Filtros</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="bg-[#233648] text-[#92adc9] text-[10px] px-1.5 py-0.5 rounded">Rápido</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-2">
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">Amanhã, 15 Out</span>
                      <span className="text-[#92adc9] text-xs">09:00 - 10:00</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 lg:col-span-1 flex md:justify-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                      Confirmado
                    </span>
                  </div>
                  <div className="md:col-span-12 lg:col-span-1 flex justify-end gap-2 mt-2 md:mt-0 border-t md:border-t-0 border-[#233648] pt-3 md:pt-0">
                    <button className="size-8 flex items-center justify-center rounded-lg bg-[#233648] text-white hover:bg-[#324d67] transition-colors" title="Editar">
                      <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
                    </button>
                    <button className="size-8 flex items-center justify-center rounded-lg bg-[#233648] text-white hover:bg-[#324d67] transition-colors" title="Mais">
                      <span className="material-symbols-outlined text-[18px]">more_vert</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white disabled:opacity-50">
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button className="size-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">1</button>
                <button className="size-8 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white text-sm font-medium transition-colors">2</button>
                <button className="size-8 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white text-sm font-medium transition-colors">3</button>
                <button className="p-2 rounded-lg text-[#92adc9] hover:bg-[#233648] hover:text-white">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessAppointments;
