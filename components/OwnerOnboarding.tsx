
import React, { useState } from 'react';
import { AppStage } from '../types';
import { useApp } from '../AppContext';

interface OwnerOnboardingProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const OwnerOnboarding: React.FC<OwnerOnboardingProps> = ({ onLogout, onNavigate }) => {
  const { addVehicle, setAppStage } = useApp();
  
  // Form State
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');

  const handleSave = () => {
    if (brand && model) {
      addVehicle({
        brand,
        model,
        plate: plate || 'AAA-0000',
        year: '2023', // Default for onboarding
        status: 'ok',
        mileage: 0
      });
      // Redirect to Garage to see the new car
      setAppStage(AppStage.GARAGE);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#0d141b] dark:text-slate-100 flex flex-col">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-slate-800 px-10 py-3 bg-white dark:bg-[#1a2632]">
          <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={() => onNavigate(AppStage.DASHBOARD)}>
            <div className="size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-[#0d141b] dark:text-white">Dr. do Carro</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Ajuda</a>
              <button onClick={onLogout} className="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-red-500 transition-colors">Sair</button>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Avatar do usuário proprietário" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDZZx5dvqHzsWfD4kfO4gGJ0VycyNq43Q1TFogy4kt85oprqkP8CcRifQxOxAP9OJ7jS-S_EGGmNSyTG0hy0dP9f5Kxbxw3rJ5qF21h-rU-X0xFUi_JhBSU1Gd8YnAlBlbBc_u6R1LZML-wrnk6yjf7C-fIt7XyOmP8TWUazepItEyL-0k1j1fgXBj0JXOC7o1cZjP3g_ptv6ADmQGATMaVrLLAluZMznfX8t0FqdCdqg0PKdXlIGRXpZ3mr71NVZgb5aUDV2uOHA")'}}></div>
          </div>
        </header>

        <main className="flex-1 flex justify-center py-10 px-4">
          <div className="max-w-[800px] w-full flex flex-col gap-8">
            {/* Progress Bar Component */}
            <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col gap-3">
                <div className="flex gap-6 justify-between items-end">
                  <div>
                    <h3 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Onboarding do Proprietário</h3>
                    <p className="text-[#4c739a] dark:text-slate-400 text-sm">Etapa 2 de 3: Cadastro do Veículo</p>
                  </div>
                  <p className="text-primary text-sm font-bold">66%</p>
                </div>
                <div className="rounded-full bg-[#cfdbe7] dark:bg-slate-700 h-2.5 w-full overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{width: '66%'}}></div>
                </div>
              </div>
            </div>

            {/* Main Content Step 2: Vehicle Registration */}
            <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden">
              {/* Headline Section */}
              <div className="pt-10 pb-4 px-8">
                <h1 className="text-[#0d141b] dark:text-white tracking-tight text-[32px] font-extrabold leading-tight text-center">
                  Vamos cadastrar seu primeiro veículo
                </h1>
                <p className="text-[#4c739a] dark:text-slate-400 text-lg font-normal leading-normal mt-2 text-center">
                  Insira os detalhes abaixo para que possamos monitorar a saúde do seu carro.
                </p>
              </div>
              
              {/* Form */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Form Column */}
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-[#0d141b] dark:text-slate-200">Marca do Veículo</label>
                      <div className="relative">
                        <select 
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          className="w-full h-12 rounded-lg border-[#cfdbe7] dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-primary appearance-none px-4"
                        >
                          <option value="">Selecione a marca</option>
                          <option value="Volkswagen">Volkswagen</option>
                          <option value="Toyota">Toyota</option>
                          <option value="Chevrolet">Chevrolet</option>
                          <option value="Fiat">Fiat</option>
                          <option value="Hyundai">Hyundai</option>
                          <option value="Ford">Ford</option>
                          <option value="Honda">Honda</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">expand_more</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-[#0d141b] dark:text-slate-200">Modelo</label>
                      <input 
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full h-12 rounded-lg border-[#cfdbe7] dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-primary px-4" 
                        placeholder="Ex: Golf, Corolla, Onix" 
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-[#0d141b] dark:text-slate-200">Placa (Opcional)</label>
                      <input 
                        value={plate}
                        onChange={(e) => setPlate(e.target.value)}
                        className="w-full h-12 rounded-lg border-[#cfdbe7] dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-primary focus:ring-primary uppercase px-4" 
                        placeholder="AAA-0000" 
                        type="text"
                      />
                      <p className="text-xs text-[#4c739a] dark:text-slate-500">Usamos a placa para buscar o histórico de revisões automaticamente.</p>
                    </div>
                  </div>
                  {/* Illustration/Image Column */}
                  <div className="hidden md:flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-dashed border-slate-200 dark:border-slate-700">
                    <div className="w-full aspect-video bg-center bg-no-repeat bg-contain mb-4" data-alt="Ilustração de um carro moderno vista lateral" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqXmYqLwNBY_rQcJf0nh47R3QyVYS5qqDtUgcFytgf83j-PHc1nUkZUfWJdKfU1RgYvJ-ufDPCoVjJjutcLav1Z4RRb4IHH6DOUCR4qYoIWBS0q6CS8WXufJ7G0sOq6Mg1oFAW-1PYaCn6weN_r8vphHKpJH9P_OONpKWg4T5mI7eh6pcstBCQjyS8F5dXLUQ_Gck58KxIBO9hvMe3VYZHx3jn1VyJpDMX-uh8wbfo6CHxU13YPlbwAEDAgi7ZsL5_hXPmKtnC0OE")'}}></div>
                    <p className="text-sm text-center text-[#4c739a] dark:text-slate-400 font-medium">Seu carro será exibido aqui no painel principal.</p>
                  </div>
                </div>
              </div>

              {/* Step 3 Preview: Maintenance Reminders */}
              <div className="bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 p-8">
                <h2 className="text-[#0d141b] dark:text-white text-xl font-bold mb-6">Próximo Passo: Configure seus lembretes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Reminder Card 1 */}
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 opacity-60">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <span className="material-symbols-outlined">oil_barrel</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Troca de Óleo</p>
                      <p className="text-xs text-[#4c739a] dark:text-slate-500">A cada 10.000km</p>
                    </div>
                  </div>
                  {/* Reminder Card 2 */}
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 opacity-60">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <span className="material-symbols-outlined">build</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Revisão Geral</p>
                      <p className="text-xs text-[#4c739a] dark:text-slate-500">A cada 12 meses</p>
                    </div>
                  </div>
                  {/* Reminder Card 3 */}
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 opacity-60">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <span className="material-symbols-outlined">tire_repair</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Calibragem</p>
                      <p className="text-xs text-[#4c739a] dark:text-slate-500">Mensalmente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-8 flex justify-between items-center bg-white dark:bg-[#1a2632]">
                <button 
                  onClick={() => onNavigate(AppStage.DASHBOARD)}
                  className="px-6 py-3 text-sm font-bold text-[#4c739a] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  Voltar
                </button>
                <button 
                  onClick={handleSave}
                  className={`bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-lg font-bold transition-all shadow-md shadow-primary/20 flex items-center gap-2 ${(!brand || !model) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!brand || !model}
                >
                  Continuar
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Footer Info */}
            <div className="flex justify-center gap-10 pb-8">
              <div className="flex items-center gap-2 text-[#4c739a] dark:text-slate-500">
                <span className="material-symbols-outlined text-lg">verified_user</span>
                <span className="text-xs font-medium">Dados 100% seguros</span>
              </div>
              <div className="flex items-center gap-2 text-[#4c739a] dark:text-slate-500">
                <span className="material-symbols-outlined text-lg">support_agent</span>
                <span className="text-xs font-medium">Suporte especializado</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OwnerOnboarding;
