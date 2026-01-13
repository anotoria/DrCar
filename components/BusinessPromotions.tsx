
import React, { useState } from 'react';
import { AppStage } from '../types';

interface BusinessPromotionsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const BusinessPromotions: React.FC<BusinessPromotionsProps> = ({ onLogout, onNavigate }) => {
  const [filter, setFilter] = useState('Todas');

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased transition-colors duration-200 min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#2d3b4a] bg-white dark:bg-[#1a2632] px-6 py-3 shadow-sm">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}>
          <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>car_repair</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Dr. Consulta Auto <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded ml-2">Empresas</span></h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <button onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)} className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors">Início</button>
            <button onClick={() => onNavigate(AppStage.BUSINESS_APPOINTMENTS)} className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors">Agendamentos</button>
            <button className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors">Clientes</button>
            <button className="text-primary text-sm font-bold leading-normal">Promoções</button>
            <button className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors">Financeiro</button>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-[#2d3b4a]">
            <button onClick={() => onNavigate(AppStage.BUSINESS_NOTIFICATIONS)} className="relative p-2 text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border border-white dark:border-[#1a2632]"></span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-primary/20" data-alt="Profile picture of the shop manager" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc1wf5ucRUe2uiknaD7j9n4uKpdB5AYIO9rLZaNbvQjlL2Uejao3DvBhz0IKIulwtRhblnysxL-NM5uqCv49ee9G2nkaSrIP_SpwKDh8t_8awglQN7-ZNfx8zyiRkuEA__UZPbCKDgkF3CtInySwjSmSFt9YFh4pT35ZpsnWH_lvECZRSCKy4tH1Z8FXzfxls0yQnFOZXQ30lJ9RvLnHu2RfyxkADciBVZ3QN7NsuIiuJbCdkcec-ryDQn_dUQAocxkH-Zgmrr2sk")'}}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 py-6 w-full max-w-[1440px] mx-auto">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)} className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium">Início</button>
          <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">/</span>
          <span className="text-slate-900 dark:text-white text-sm font-medium">Gestão de Promoções</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Campanhas e Ofertas</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">Crie ofertas para atrair mais clientes e gerencie o desempenho das ativas.</p>
          </div>
          <button className="hidden md:flex h-10 px-5 bg-primary hover:bg-blue-600 text-white text-sm font-bold items-center justify-center rounded-lg shadow-lg shadow-primary/30 transition-all gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Nova Promoção</span>
          </button>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Promotions List & Filters (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Filters Toolbar */}
            <div className="bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm border border-slate-200 dark:border-[#2d3b4a] flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-auto flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">search</span>
                <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-[#2d3b4a] rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Buscar promoção..." type="text"/>
              </div>
              <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                {['Todas', 'Ativas', 'Agendadas', 'Expiradas'].map((label) => (
                  <button 
                    key={label}
                    onClick={() => setFilter(label)}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${filter === label 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-[#2d3b4a]'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* List Items */}
            <div className="space-y-4">
              {/* Item 1: Active */}
              <div className="group bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-[#2d3b4a] p-5 shadow-sm hover:shadow-md transition-all hover:border-primary/30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wide">Ativa</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Expira em 12 dias</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Revisão de Férias</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">Desconto especial para alinhamento, balanceamento e troca de óleo.</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-slate-900 dark:text-white font-medium">
                        <span className="material-symbols-outlined text-primary text-[18px]">percent</span>
                        15% OFF
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-900 dark:text-white font-medium">
                        <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_activity</span>
                        42 Resgates
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-[#2d3b4a] pt-4 sm:pt-0 sm:pl-4 mt-2 sm:mt-0">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Performance</p>
                      <p className="text-green-600 font-bold text-sm">+12% vs. anterior</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" title="Editar">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" title="Pausar">
                        <span className="material-symbols-outlined text-[20px]">pause</span>
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" title="Mais opções">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2: Scheduled */}
              <div className="group bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-[#2d3b4a] p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">Agendada</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Inicia em 01/11/2023</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Black Friday Automotiva</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">Ofertas agressivas em pneus e serviços de freio.</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-slate-900 dark:text-white font-medium">
                        <span className="material-symbols-outlined text-primary text-[18px]">attach_money</span>
                        R$ 100,00 OFF
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium opacity-60">
                        <span className="material-symbols-outlined text-[18px]">local_activity</span>
                        0 Resgates
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-[#2d3b4a] pt-4 sm:pt-0 sm:pl-4 mt-2 sm:mt-0">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3: Inactive */}
              <div className="group bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-[#2d3b4a] p-5 shadow-sm hover:shadow-md transition-all opacity-80 hover:opacity-100 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400"></div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold uppercase tracking-wide">Expirada</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Finalizada em 15/09/2023</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Mês do Cliente</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">Brinde exclusivo na realização de serviços acima de R$ 300.</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-slate-900 dark:text-white font-medium">
                        <span className="material-symbols-outlined text-primary text-[18px]">redeem</span>
                        Brinde
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-900 dark:text-white font-medium">
                        <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_activity</span>
                        89 Resgates
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-[#2d3b4a] pt-4 sm:pt-0 sm:pl-4 mt-2 sm:mt-0">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" title="Duplicar">
                        <span className="material-symbols-outlined text-[20px]">content_copy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <button className="p-2 rounded-lg hover:bg-white dark:hover:bg-[#1a2632] text-slate-500 dark:text-slate-400 border border-transparent hover:border-slate-200 dark:hover:border-[#2d3b4a]">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <span className="text-sm font-medium text-slate-900 dark:text-white">Página 1 de 3</span>
              <button className="p-2 rounded-lg hover:bg-white dark:hover:bg-[#1a2632] text-slate-500 dark:text-slate-400 border border-transparent hover:border-slate-200 dark:hover:border-[#2d3b4a]">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Right Column: Create/Edit Form (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#1a2632] rounded-2xl border border-slate-200 dark:border-[#2d3b4a] shadow-lg sticky top-24 overflow-hidden">
              {/* Form Header */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-[#2d3b4a] flex justify-between items-center bg-slate-50/50 dark:bg-white/5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Criar Nova Promoção</h3>
                <button className="text-slate-500 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              {/* Form Content */}
              <div className="p-6 space-y-5 max-h-[calc(100vh-200px)] overflow-y-auto">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-900 dark:text-white">Nome da Promoção</label>
                  <input className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-[#2d3b4a] bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm" placeholder="Ex: Troca de Óleo de Verão" type="text"/>
                </div>
                {/* Services Selection (Chips) */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900 dark:text-white">Serviços Aplicáveis</label>
                  <div className="flex flex-wrap gap-2">
                    <label className="cursor-pointer">
                      <input defaultChecked className="peer sr-only" type="checkbox"/>
                      <span className="px-3 py-1 rounded-full border border-primary bg-primary/10 text-primary text-xs font-bold peer-checked:bg-primary peer-checked:text-white transition-all">Óleo e Filtros</span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" type="checkbox"/>
                      <span className="px-3 py-1 rounded-full border border-slate-200 dark:border-[#2d3b4a] text-slate-500 dark:text-slate-400 text-xs font-medium peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">Freios</span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" type="checkbox"/>
                      <span className="px-3 py-1 rounded-full border border-slate-200 dark:border-[#2d3b4a] text-slate-500 dark:text-slate-400 text-xs font-medium peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">Suspensão</span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" type="checkbox"/>
                      <span className="px-3 py-1 rounded-full border border-slate-200 dark:border-[#2d3b4a] text-slate-500 dark:text-slate-400 text-xs font-medium peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">Pneus</span>
                    </label>
                    <button className="px-2 py-1 rounded-full border border-dashed border-slate-400 text-slate-500 dark:text-slate-400 text-xs flex items-center hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span className="material-symbols-outlined text-[14px] mr-1">add</span> Outro
                    </button>
                  </div>
                </div>
                {/* Discount Logic */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-900 dark:text-white">Tipo de Desconto</label>
                    <div className="flex p-1 bg-slate-100 dark:bg-background-dark rounded-lg border border-slate-200 dark:border-[#2d3b4a]">
                      <button className="flex-1 py-1.5 text-xs font-bold rounded bg-white dark:bg-[#1a2632] text-primary shadow-sm text-center">Percentual (%)</button>
                      <button className="flex-1 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 text-center hover:text-primary transition-colors">Valor Fixo (R$)</button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-900 dark:text-white">Valor</label>
                    <div className="relative">
                      <input className="w-full h-10 px-3 pr-8 rounded-lg border border-slate-200 dark:border-[#2d3b4a] bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm font-bold" type="number" defaultValue="10"/>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">%</span>
                    </div>
                  </div>
                </div>
                {/* Date Range */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-900 dark:text-white">Início</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">calendar_today</span>
                      <input className="w-full h-10 pl-10 pr-3 rounded-lg border border-slate-200 dark:border-[#2d3b4a] bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm" type="text" defaultValue="24/10/2023"/>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-900 dark:text-white">Fim</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">event</span>
                      <input className="w-full h-10 pl-10 pr-3 rounded-lg border border-slate-200 dark:border-[#2d3b4a] bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm" placeholder="dd/mm/aaaa" type="text"/>
                    </div>
                  </div>
                </div>
                {/* Description */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-900 dark:text-white">Descrição Pública</label>
                  <textarea className="w-full p-3 rounded-lg border border-slate-200 dark:border-[#2d3b4a] bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm resize-none" placeholder="Descreva os detalhes da oferta que o cliente verá..." rows={3}></textarea>
                </div>
                {/* Terms */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-slate-900 dark:text-white">Termos de Uso</label>
                    <button className="text-xs text-primary font-bold hover:underline">Usar modelo padrão</button>
                  </div>
                  <textarea className="w-full p-3 rounded-lg border border-slate-200 dark:border-[#2d3b4a] bg-slate-50 dark:bg-background-dark text-slate-500 dark:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-xs resize-none" rows={3} defaultValue="Válido apenas para veículos de passeio. Não cumulativo com outras promoções. Sujeito a disponibilidade de horário."></textarea>
                </div>
              </div>
              {/* Form Footer */}
              <div className="p-6 pt-4 border-t border-slate-200 dark:border-[#2d3b4a] bg-slate-50/50 dark:bg-white/5 flex gap-3">
                <button className="flex-1 h-10 rounded-lg border border-slate-200 dark:border-[#2d3b4a] bg-white dark:bg-[#1a2632] text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Salvar Rascunho</button>
                <button className="flex-1 h-10 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all">Publicar Promoção</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessPromotions;
