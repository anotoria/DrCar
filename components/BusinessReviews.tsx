
import React, { useState } from 'react';
import { AppStage } from '../types';

interface BusinessReviewsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const BusinessReviews: React.FC<BusinessReviewsProps> = ({ onLogout, onNavigate }) => {
  const [filter, setFilter] = useState('Todas');

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-hidden flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-20 lg:w-72 bg-surface-dark border-r border-border-color flex-col hidden md:flex transition-all duration-300 shrink-0 h-full">
        <div className="h-16 flex items-center px-4 lg:px-6 border-b border-border-color gap-3 cursor-pointer" onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}>
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-xl">build_circle</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight hidden lg:block text-white">AutoFix <span className="text-primary">Pro</span></h1>
        </div>
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 px-3">
          <button 
            onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left"
          >
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
            <p className="text-sm font-medium hidden lg:block">Início</p>
          </button>
          <button 
            onClick={() => onNavigate(AppStage.BUSINESS_APPOINTMENTS)}
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left"
          >
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
            <p className="text-sm font-medium hidden lg:block">Agendamentos</p>
          </button>
          <button className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">payments</span>
            <p className="text-sm font-medium hidden lg:block">Financeiro</p>
          </button>
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-surface-highlight text-white w-full">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <p className="text-sm font-medium hidden lg:block">Avaliações</p>
          </div>
          <button className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">storefront</span>
            <p className="text-sm font-medium hidden lg:block">Perfil da Loja</p>
          </button>
          <div className="mt-auto pt-4 border-t border-border-color">
            <button className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-text-secondary hover:text-white transition-colors group w-full text-left">
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">settings</span>
              <p className="text-sm font-medium hidden lg:block">Configurações</p>
            </button>
            <button 
              onClick={onLogout}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-highlight text-red-400 hover:text-red-300 transition-colors group w-full text-left"
            >
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium hidden lg:block">Sair</p>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto bg-[#111a22]">
        <div className="layout-content-container flex flex-col max-w-[960px] mx-auto pb-12">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-8 pb-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight">Avaliações dos Clientes</p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">Visualize e responda ao feedback dos proprietários de veículos para manter uma boa reputação.</p>
            </div>
          </div>

          {/* Rating Summary */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 px-8 py-4 border-b border-[#233648]">
            <div className="flex flex-col gap-2">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">4.6</p>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map(i => (
                  <span key={i} className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                <span className="material-symbols-outlined text-primary text-[20px]">star_half</span>
              </div>
              <p className="text-white text-base font-normal leading-normal">128 reviews</p>
            </div>
            <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
              {[
                { star: 5, weight: 60 },
                { star: 4, weight: 25 },
                { star: 3, weight: 8 },
                { star: 2, weight: 2 },
                { star: 1, weight: 5 }
              ].map(row => (
                <React.Fragment key={row.star}>
                  <p className="text-white text-sm font-normal leading-normal">{row.star}</p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#324d67]">
                    <div className="rounded-full bg-primary" style={{ width: `${row.weight}%` }}></div>
                  </div>
                  <p className="text-[#92adc9] text-sm font-normal leading-normal text-right">{row.weight}%</p>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Toolbar (Filters & Sort) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-6 gap-4">
            <div className="flex gap-2 flex-wrap">
              {['Todas', 'Não Respondidas', 'Respondidas', 'Críticas (1-3★)'].map((btnLabel) => (
                <button 
                  key={btnLabel}
                  onClick={() => setFilter(btnLabel)}
                  className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-all ${filter === btnLabel ? 'bg-primary text-white' : 'bg-[#233648] text-white hover:bg-[#324d67] cursor-pointer'}`}
                >
                  <p className="text-sm font-medium leading-normal">{btnLabel}</p>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label className="text-[#92adc9] text-sm font-medium whitespace-nowrap">Ordenar por:</label>
              <div className="relative">
                <select className="appearance-none bg-[#192633] border border-[#324d67] text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-40 p-2.5 pr-8 cursor-pointer">
                  <option>Mais recentes</option>
                  <option>Mais antigas</option>
                  <option>Menor nota</option>
                  <option>Maior nota</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Feed */}
          <div className="px-8 flex flex-col gap-6">
            {/* Review Card 1: Unanswered */}
            <div className="flex flex-col p-6 rounded-xl bg-[#192633] border-l-4 border-primary shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiu0gcB52qeHLyHUc57S-crMEPPNHBz7U6BPu9oPuyM6aqmldOUVHj1I5ZT8nQ7oKLFXUgiyf2xev48NcP5ATQ7slh8DWOevU9TO1oomH56x-X4TwuP53zZ89ixsBhf_jpYT4qX6eTqz-mv8rcZj1kT6-QdImkZ0Iqwsx39KMZG3xK7_ZP87fTorGfo7ikpM-FuMW0nt9VM2rMsxOIMcsgpo65QShwvDEv37g1Llyj1WGOM7fSWS-vsaSQOWQ7F2IncPj5ZsqaUos")' }}
                  ></div>
                  <div>
                    <h3 className="text-white text-lg font-bold">Carlos Oliveira</h3>
                    <p className="text-[#92adc9] text-sm">Proprietário de Honda Civic 2018</p>
                  </div>
                </div>
                <span className="text-[#92adc9] text-sm">Há 2 dias</span>
              </div>
              <div className="flex items-center gap-1 mb-3 text-primary">
                {[1, 2, 3].map(i => <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                {[1, 2].map(i => <span key={i} className="material-symbols-outlined text-[#324d67] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              </div>
              <p className="text-white text-base leading-relaxed mb-6">
                O serviço de troca de óleo foi rápido, mas achei que faltou um pouco de atenção na limpeza final do carro. Havia marcas de mão no volante. No geral, bom, mas pode melhorar.
              </p>
              <div className="flex flex-col gap-3 bg-[#111a22] p-4 rounded-lg border border-[#324d67]">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-sm font-medium">Sua Resposta</span>
                  <span className="text-[#92adc9] text-xs">Pública • Visível para todos</span>
                </div>
                <textarea className="w-full bg-[#192633] text-white border border-[#324d67] rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none" placeholder="Escreva uma resposta profissional e amigável..." rows={3}></textarea>
                <div className="flex justify-end gap-3 pt-2">
                  <button className="text-[#92adc9] text-sm font-medium hover:text-white transition-colors">Cancelar</button>
                  <button className="bg-primary hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">send</span>
                    Enviar Resposta
                  </button>
                </div>
              </div>
            </div>

            {/* Review Card 2: Answered */}
            <div className="flex flex-col p-6 rounded-xl bg-[#192633] border border-[#233648]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlVMvrtHBhfSmZjKpFZnBqwFwEj6f5aoYzFpq9UYZjbpKYQ4SmhbHDZ9WQBj7aZnzxlp4850MmE9YXAk34ysWbzeAmh8cAuHEoBzuBDa44-4MgjE_I9sQtzMpzY74hc3vyK0r02noKG1qtF8dPm-WOlSluEsTl-1aBX9FMl8TXOjo17Yqg0TjH7hhUtCeJA7siTRMUJziySDo_JpKexfT-HN6s7mEBNZLJn79QpkKsvlBN87R0WVnbPabrLosgkRGWI3pqqiyCTzs")' }}
                  ></div>
                  <div>
                    <h3 className="text-white text-lg font-bold">Mariana Costa</h3>
                    <p className="text-[#92adc9] text-sm">Proprietária de VW T-Cross</p>
                  </div>
                </div>
                <span className="text-[#92adc9] text-sm">Há 1 semana</span>
              </div>
              <div className="flex items-center gap-1 mb-3 text-primary">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              </div>
              <p className="text-white text-base leading-relaxed mb-6">
                Atendimento excepcional! O mecânico explicou tudo com detalhes e o preço foi super justo. Com certeza voltarei para as próximas revisões.
              </p>
              <div className="relative ml-4 pl-4 border-l-2 border-[#324d67]">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm font-bold">AutoCenter Silva</span>
                    <span className="text-[#92adc9] text-xs">• Respondido há 6 dias</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-[#92adc9] hover:text-white p-1 rounded hover:bg-[#233648] transition-colors" title="Editar resposta">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button className="text-[#92adc9] hover:text-red-400 p-1 rounded hover:bg-[#233648] transition-colors" title="Excluir resposta">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
                <p className="text-[#d1dbe8] text-sm leading-relaxed">
                  Olá Mariana, ficamos muito felizes com seu feedback! Nossa prioridade é sempre a transparência e a qualidade. Até a próxima!
                </p>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-[#324d67] text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors disabled:opacity-50">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-[#324d67] text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-[#324d67] text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors">3</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-[#324d67] text-[#92adc9] hover:bg-[#233648] hover:text-white transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessReviews;
