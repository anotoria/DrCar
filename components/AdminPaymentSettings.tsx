
import React from 'react';
import { AppStage } from '../types';

interface AdminPaymentSettingsProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminPaymentSettings: React.FC<AdminPaymentSettingsProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200 h-screen w-full flex flex-col overflow-hidden">
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] hidden lg:flex flex-col">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              {/* User Profile */}
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Avatar do administrador" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAolhCW_ug22YSuMW8gdXxR1knD_GGI5tR_kKbHbg2LPnsL7ZiKxMSqAjQZzDVclak3f9m_VILAqS4E07MfNiRyoOJlZOyhqkBKTai-RoFL7ry1FQgKJ-AHhcRuFsbY4VFc0aYgPhoD-9mjOquTbMVmmiREStII2QlCObF2e6OSYiR9Bkus_VbbHih1fDRGZKu95U9224fvHCNWpfMRySVH3CKpFwdWv7g7YmHGzMX8ZIAHy4vIlEe-eJ49Ar3jopzfsueatWDW8v4")'}}></div>
                <div className="flex flex-col">
                  <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">AutoAdmin</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Super Admin</p>
                </div>
              </div>
              {/* Navigation Links */}
              <div className="flex flex-col gap-2">
                <div className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Principal</div>
                <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">dashboard</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Visão Geral</p>
                </button>
                <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">store</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Empresas</p>
                </button>
                <button onClick={() => onNavigate(AppStage.ADMIN_OWNERS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">person</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Proprietários</p>
                </button>
                
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">calendar_month</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Agendamentos</p>
                </button>
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">star</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Avaliações</p>
                </button>

                <div className="px-2 mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Gestão</div>

                <button onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">notifications</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Notificações</p>
                </button>
                <button onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">admin_panel_settings</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Administradores</p>
                </button>
                
                <button onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">payments</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Financeiro</p>
                </button>

                <button onClick={() => onNavigate(AppStage.ADMIN_PLANS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">sell</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Planos</p>
                </button>

                <button onClick={() => onNavigate(AppStage.ADMIN_REPORTS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">bar_chart</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Relatórios</p>
                </button>

                {/* Active Link */}
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors text-left">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
                  <p className="text-sm font-bold leading-normal">Configurações</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={onLogout} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group text-left">
                <span className="material-symbols-outlined text-red-500">logout</span>
                <p className="text-red-500 text-sm font-medium leading-normal">Sair</p>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
          <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
            <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-20">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm">
                <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Início</button>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer">Configurações</span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-slate-900 dark:text-white font-medium">Pagamentos</span>
              </div>
              
              {/* Page Header & Environment Toggle */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Configurações de Pagamento</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-base lg:text-lg">Gerencie gateways, taxas, moedas e preferências financeiras da plataforma.</p>
                </div>
                {/* Sandbox/Production Toggle */}
                <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-lg shrink-0">
                  <label className="cursor-pointer relative flex items-center justify-center px-4 py-2 rounded-md transition-all duration-200 bg-white dark:bg-[#151f2b] shadow-sm text-primary">
                    <input defaultChecked className="sr-only" name="env" type="radio" value="sandbox"/>
                    <span className="text-sm font-medium">Ambiente de Teste (Sandbox)</span>
                  </label>
                  <label className="cursor-pointer relative flex items-center justify-center px-4 py-2 rounded-md transition-all duration-200 hover:text-slate-900 dark:hover:text-white text-slate-500">
                    <input className="sr-only" name="env" type="radio" value="production"/>
                    <span className="text-sm font-medium">Produção (Live)</span>
                  </label>
                </div>
              </div>
              <hr className="border-slate-200 dark:border-slate-800"/>
              
              {/* Gateways Section */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">credit_card</span>
                    Provedores de Pagamento
                  </h2>
                  <button className="text-sm text-primary font-medium hover:underline">Adicionar novo</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Stripe Card (Active) */}
                  <div className="bg-white dark:bg-[#151f2b] rounded-xl border-2 border-primary/30 p-6 flex flex-col gap-4 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        Ativo
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#635BFF] to-[#635BFF] flex items-center justify-center text-white font-bold text-xl">S</div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Stripe</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Cartões e Pagamentos Internacionais</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-2">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block">Public Key</label>
                        <div className="relative">
                          <input className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono focus:ring-2 focus:ring-primary focus:border-transparent outline-none" type="text" defaultValue="pk_test_51Mz..."/>
                          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary">
                            <span className="material-symbols-outlined text-[18px]">content_copy</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block">Secret Key</label>
                        <div className="relative">
                          <input className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono focus:ring-2 focus:ring-primary focus:border-transparent outline-none" type="password" defaultValue="sk_test_4eC39HqLZ..."/>
                          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary">
                            <span className="material-symbols-outlined text-[18px]">visibility_off</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-2">
                      <button className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium">Configurações Avançadas</button>
                    </div>
                  </div>
                  
                  {/* PayPal Card (Inactive) */}
                  <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between gap-4 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#003087] to-[#009cde] flex items-center justify-center text-white font-bold text-xl">P</div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white">PayPal</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Carteira Digital Global</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="mt-2 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg text-center border border-dashed border-slate-300 dark:border-slate-700">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Ative para configurar credenciais de API</p>
                    </div>
                  </div>
                  
                  {/* Pagar.me Card (Inactive) */}
                  <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between gap-4 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#86c60e] to-[#6da500] flex items-center justify-center text-white font-bold text-xl">M</div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Pagar.me</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Processador Local (Brasil)</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="mt-2 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg text-center border border-dashed border-slate-300 dark:border-slate-700">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Ative para configurar credenciais de API</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <hr className="border-slate-200 dark:border-slate-800"/>
              
              {/* Business Rules & Fees */}
              <section className="flex flex-col gap-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">percent</span>
                  Regras de Negócio e Taxas
                </h2>
                <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Commission */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Comissão da Plataforma (%)</label>
                      <div className="relative">
                        <input className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg pl-4 pr-10 py-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-medium" step="0.5" type="number" defaultValue="15.00"/>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium">%</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Porcentagem retida de cada serviço agendado.</p>
                    </div>
                    {/* Fixed Fee */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Taxa Fixa por Transação</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium">R$</span>
                        <input className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-medium" step="0.10" type="number" defaultValue="0.99"/>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Valor fixo cobrado para cobrir custos bancários.</p>
                    </div>
                    {/* Installments */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Parcelamento Máximo</label>
                      <div className="relative">
                        <select className="w-full appearance-none bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-medium cursor-pointer">
                          <option value="1">1x (À vista)</option>
                          <option value="3">3x Sem Juros</option>
                          <option value="6">6x Sem Juros</option>
                          <option selected value="10">10x Com Juros</option>
                          <option value="12">12x Com Juros</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Limite de parcelas oferecidas ao cliente final.</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <hr className="border-slate-200 dark:border-slate-800"/>
              
              {/* Preferences */}
              <section className="flex flex-col gap-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">tune</span>
                  Preferências Gerais
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* General Settings Panel */}
                  <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col gap-5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Métodos Aceitos</h3>
                    <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">photos</span>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Pagamento via Pix</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Aprovação instantânea</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">credit_card</span>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Cartão de Crédito</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Visa, Mastercard, Elo</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">receipt_long</span>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Boleto Bancário</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Compensação em até 3 dias úteis</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox"/>
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  {/* Notifications Panel */}
                  <div className="bg-white dark:bg-[#151f2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col gap-5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Automação &amp; Segurança</h3>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 items-center">
                        <input defaultChecked className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary dark:bg-slate-800" id="nf-auto" name="nf-auto" type="checkbox"/>
                      </div>
                      <div className="text-sm">
                        <label className="font-medium text-slate-900 dark:text-white block" htmlFor="nf-auto">Emissão Automática de Nota Fiscal</label>
                        <p className="text-slate-500 dark:text-slate-400">Emitir NF-e para a oficina assim que o pagamento for confirmado.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 items-center">
                        <input defaultChecked className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary dark:bg-slate-800" id="3ds" name="3ds" type="checkbox"/>
                      </div>
                      <div className="text-sm">
                        <label className="font-medium text-slate-900 dark:text-white block" htmlFor="3ds">Exigir 3D Secure (SCA)</label>
                        <p className="text-slate-500 dark:text-slate-400">Obrigatório para transações acima de R$ 500,00 para reduzir fraudes.</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 block">Notificar sobre pagamentos:</label>
                      <div className="flex gap-4">
                        <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary">
                          <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                          Admin
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary">
                          <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                          Oficina
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary">
                          <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                          Cliente
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          
          {/* Sticky Bottom Action Bar */}
          <div className="bg-white dark:bg-[#151f2b] border-t border-slate-200 dark:border-slate-800 p-4 lg:px-10 z-10">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">Última alteração feita por Admin em 23/10/2023</p>
              <div className="flex gap-4 ml-auto">
                <button className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  Cancelar
                </button>
                <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">save</span>
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPaymentSettings;
