
import React from 'react';
import { AppStage } from '../types';

interface BusinessProfileProps {
  onNavigate: (stage: AppStage) => void;
  onLogout: () => void;
}

const BusinessProfile: React.FC<BusinessProfileProps> = ({ onNavigate, onLogout }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark bg-white dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 lg:px-10">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" onClick={() => onNavigate(AppStage.DASHBOARD)}>
            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Dr. do Carro</h2>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-4 lg:gap-8">
          <div className="hidden md:flex items-center gap-6 lg:gap-9">
            <button className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary transition-colors" onClick={() => onNavigate(AppStage.SEARCH)}>Oficinas</button>
            <button className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary transition-colors" onClick={() => onNavigate(AppStage.DASHBOARD)}>Minha Conta</button>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate(AppStage.SEARCH)} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 border border-gray-200 dark:border-border-dark hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-slate-900 dark:text-white text-sm font-bold leading-normal">
              Voltar
            </button>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20 cursor-pointer" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHjmjQd-jHwWUgh6CoOx8tSQdaqCHHO0459ReMg8d5qfWc3_T2XMPl9ny7Hudq55i-rsfY_JGq2iDGgb6h80nwKPWLliFupz_iBQTKQ2OC9h0aTPPNdwzhiBumHR7YIWpp05U9o_Ng2TMUOE9hYuSQhKymvp2bELkMMGriIsgu-e914yU9ploa6DEwOTlM9_yX76QovkB73FzifPZaaX1LUA0fkI80jJ_gYxp2fBLyfW1TAVXQSTbkMp-Hjkvc1CuHqHy2xH2reGE")' }}
              onClick={onLogout}
            ></div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center py-6 px-4 md:px-8 lg:px-20 xl:px-40">
        <div className="flex flex-col max-w-[1200px] w-full flex-1 gap-6">
          <div className="relative w-full h-[240px] md:h-[320px] rounded-xl overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVD4UbtXKpXZzbfuSfvjs7AhYZjE11z55kQdt2sPlRbHXz_y2hPJpt3HeUImw23dTRu0vKjNX0MmlSsEAAuEuHP9wcEvNcYVFnIhdt6fydhCYvmXXM5ekpl2SUzDBA8wQhlarzC7C7vklWBnbTLa3zu7YQ3uT4L4a7zDUXmjhAimQcb8u_fLji78RdIZ-m-XSzyd6gWRkc2ZntpBZqldpOunjW3vANFlKH_WET3iPzuyAs1zUv5FkMAQhMi36gOlh1WBKMDZimazo")' }}></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between border-b border-gray-200 dark:border-border-dark pb-6">
            <div className="flex gap-5">
              <div className="size-24 md:size-32 rounded-xl bg-surface-dark border-4 border-white dark:border-background-dark shadow-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdyeYSUtX3Os_2hO0AtVoRKaVrOybGVactP7Kq8gCfdcHSw2jbc-xdVkohc6ICSfIt7doP7YaHHI-3ogS4jHs7Z63EE_u7DfvLV9tfmblWJQygbDFmIa8RWioUVpeWLzzIzyYQwaWyf7fkyEjF43FsOBYVPcFrLN8P0jK8sypx0yChx-4PmTkorLt5tI7-vIMQ1558pj2qB5_QWkiZxlkJ7J-_A6A7HnzVedwSRCrQDy58UM7Y7jEz5X1yCdM7kdCG7dLnMpAVXI4")' }}></div>
              <div className="flex flex-col gap-1 pt-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold">Centro Automotivo Silva</h1>
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <p className="text-slate-500 dark:text-text-secondary text-sm md:text-base">Especialista em Importados • Motor e Suspensão</p>
                <div className="flex items-center gap-4 mt-1 text-yellow-400 font-bold">
                  <span>4.8 <span className="material-symbols-outlined text-[18px] fill-current">star</span></span>
                  <span className="text-slate-500 text-sm font-normal">(124 avaliações)</span>
                </div>
              </div>
            </div>
            <button onClick={() => onNavigate(AppStage.SCHEDULING)} className="md:w-48 h-12 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">calendar_month</span> Agendar Agora
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-xl font-bold mb-4">Sobre a Oficina</h3>
                <p className="text-slate-600 dark:text-text-secondary leading-relaxed">Referência em manutenção de veículos desde 1998, com foco em qualidade e transparência.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-4">Serviços Populares</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div onClick={() => onNavigate(AppStage.SCHEDULING)} className="bg-white dark:bg-surface-dark border border-border-dark p-4 rounded-xl cursor-pointer hover:border-primary transition-all">
                    <h4 className="font-bold">Troca de Óleo</h4>
                    <p className="text-sm text-text-secondary">A partir de R$ 180,00</p>
                  </div>
                </div>
              </section>
            </div>
            <aside className="space-y-6">
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-dark p-5 shadow-sm">
                <h4 className="font-bold mb-4">Informações de Contato</h4>
                <div className="space-y-3 text-sm">
                  <p className="flex gap-2"><span className="material-symbols-outlined text-primary">location_on</span> Rua das Oficinas, 123</p>
                  <p className="flex gap-2"><span className="material-symbols-outlined text-primary">call</span> (11) 99999-9999</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessProfile;
