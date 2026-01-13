
import React from 'react';
import { AppStage } from '../types';

interface AdminRegisterPartnerProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminRegisterPartner: React.FC<AdminRegisterPartnerProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display transition-colors duration-200 h-screen w-full flex flex-col overflow-hidden">
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
                <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors group text-left">
                  <span className="material-symbols-outlined text-primary">store</span>
                  <p className="text-primary text-sm font-bold leading-normal">Empresas</p>
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

                <button onClick={() => onNavigate(AppStage.ADMIN_PAYMENT_SETTINGS)} className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">settings</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal group-hover:text-slate-900 dark:group-hover:text-white">Configurações</p>
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
          <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b]">
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="flex items-center text-sm breadcrumbs text-slate-500">
                <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="hover:text-primary cursor-pointer transition-colors">Home</button>
                <span className="mx-2 text-slate-300">/</span>
                <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="hover:text-primary cursor-pointer transition-colors">Empresas</button>
                <span className="mx-2 text-slate-300">/</span>
                <span className="text-slate-900 dark:text-white font-medium">Novo Cadastro</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#151f2b]"></span>
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
            <div className="relative">
              {/* Hero Section Background */}
              <div className="absolute inset-0 h-[400px] w-full bg-gradient-to-b from-primary/5 to-transparent -z-10 rounded-xl" data-alt="Soft blue gradient background"></div>
              
              <div className="mx-auto max-w-5xl">
                {/* Header & Title */}
                <div className="mb-10 text-center sm:text-left">
                  <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-2">Cadastro de Oficina</h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                    Preencha os dados da empresa para registrar um novo parceiro na rede.
                  </p>
                </div>

                {/* Stepper */}
                <div className="mb-12">
                  <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-slate-200 dark:after:bg-slate-700">
                    <ol className="relative z-10 flex justify-between text-sm font-medium text-slate-500 dark:text-slate-400">
                      <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-4 ring-background-light dark:ring-background-dark">
                          <span className="material-symbols-outlined text-sm">check</span>
                        </span>
                        <span className="hidden sm:block text-primary font-bold">Dados Básicos</span>
                      </li>
                      <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-4 ring-background-light dark:ring-background-dark">
                          <span className="text-xs">2</span>
                        </span>
                        <span className="hidden sm:block text-primary font-bold">Endereço</span>
                      </li>
                      <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 ring-4 ring-background-light dark:ring-background-dark">
                          <span className="text-xs">3</span>
                        </span>
                        <span className="hidden sm:block">Serviços e Horários</span>
                      </li>
                      <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 ring-4 ring-background-light dark:ring-background-dark">
                          <span className="text-xs">4</span>
                        </span>
                        <span className="hidden sm:block">Documentos</span>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Main Form Card */}
                <form className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden" onSubmit={(e) => { e.preventDefault(); onNavigate(AppStage.ADMIN_PARTNER_SUCCESS); }}>
                  {/* Section 1: Basic Info */}
                  <div className="p-8 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                        <span className="material-symbols-outlined">storefront</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Dados da Empresa</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="cnpj">CNPJ</label>
                        <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="cnpj" placeholder="00.000.000/0000-00" type="text"/>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="razao_social">Razão Social</label>
                        <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="razao_social" placeholder="Nome jurídico da empresa" type="text"/>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="nome_fantasia">Nome Fantasia (Como aparece no App)</label>
                        <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="nome_fantasia" placeholder="Ex: Auto Center Silva" type="text"/>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">E-mail Comercial</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">mail</span>
                          </span>
                          <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm pl-10 h-12" id="email" placeholder="contato@empresa.com.br" type="email"/>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="telefone">Telefone / WhatsApp</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">call</span>
                          </span>
                          <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm pl-10 h-12" id="telefone" placeholder="(11) 99999-9999" type="tel"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Address */}
                  <div className="p-8 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Endereço da Oficina</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                      <div className="space-y-1 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="cep">CEP</label>
                        <div className="flex gap-2">
                          <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="cep" placeholder="00000-000" type="text"/>
                          <button className="inline-flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none transition-colors" type="button">
                            <span className="material-symbols-outlined">search</span>
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1 md:col-span-4">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="logradouro">Logradouro</label>
                        <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="logradouro" placeholder="Rua, Avenida, etc." type="text"/>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="numero">Número</label>
                        <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="numero" type="text"/>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="complemento">Complemento</label>
                        <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="complemento" placeholder="Galpão B, Sala 2" type="text"/>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="bairro">Bairro</label>
                        <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="bairro" type="text"/>
                      </div>
                      <div className="space-y-1 md:col-span-4">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="cidade">Cidade</label>
                        <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="cidade" type="text"/>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="estado">Estado</label>
                        <select className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4" id="estado">
                          <option>Selecione</option>
                          <option value="SP">São Paulo</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="MG">Minas Gerais</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Services */}
                  <div className="p-8 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                        <span className="material-symbols-outlined">construction</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Serviços Oferecidos</h2>
                        <p className="text-sm text-slate-500">Selecione todas as categorias que se aplicam.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {/* Service Card Checked */}
                      <label className="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary/5 p-4 text-center transition-all hover:bg-primary/10">
                        <input defaultChecked className="peer sr-only" type="checkbox"/>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-primary shadow-sm">
                          <span className="material-symbols-outlined">car_repair</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">Mecânica Geral</span>
                        <div className="absolute right-2 top-2 text-primary">
                          <span className="material-symbols-outlined text-lg">check_circle</span>
                        </div>
                      </label>
                      {/* Service Card Unchecked */}
                      <label className="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 p-4 text-center transition-all hover:border-slate-300 dark:hover:border-slate-600 ring-1 ring-slate-200 dark:ring-slate-700">
                        <input className="peer sr-only" type="checkbox"/>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 shadow-sm">
                          <span className="material-symbols-outlined">bolt</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Elétrica</span>
                      </label>
                      {/* Service Card Unchecked */}
                      <label className="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 p-4 text-center transition-all hover:border-slate-300 dark:hover:border-slate-600 ring-1 ring-slate-200 dark:ring-slate-700">
                        <input className="peer sr-only" type="checkbox"/>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 shadow-sm">
                          <span className="material-symbols-outlined">format_paint</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Funilaria</span>
                      </label>
                      {/* Service Card Checked */}
                      <label className="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary/5 p-4 text-center transition-all hover:bg-primary/10">
                        <input defaultChecked className="peer sr-only" type="checkbox"/>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-primary shadow-sm">
                          <span className="material-symbols-outlined">oil_barrel</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">Troca de Óleo</span>
                        <div className="absolute right-2 top-2 text-primary">
                          <span className="material-symbols-outlined text-lg">check_circle</span>
                        </div>
                      </label>
                      {/* Service Card Unchecked */}
                      <label className="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 p-4 text-center transition-all hover:border-slate-300 dark:hover:border-slate-600 ring-1 ring-slate-200 dark:ring-slate-700">
                        <input className="peer sr-only" type="checkbox"/>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 shadow-sm">
                          <span className="material-symbols-outlined">ac_unit</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Ar Condicionado</span>
                      </label>
                      {/* Service Card Unchecked */}
                      <label className="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 p-4 text-center transition-all hover:border-slate-300 dark:hover:border-slate-600 ring-1 ring-slate-200 dark:ring-slate-700">
                        <input className="peer sr-only" type="checkbox"/>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 shadow-sm">
                          <span className="material-symbols-outlined">tire_repair</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Pneus</span>
                      </label>
                    </div>

                    {/* Hours Section */}
                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700">
                      <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Horário de Funcionamento</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <span className="font-medium text-slate-700 dark:text-slate-200">Segunda a Sexta</span>
                            <div className="flex gap-2 items-center">
                              <input className="rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm p-1" type="time" defaultValue="08:00"/>
                              <span className="text-slate-400">até</span>
                              <input className="rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm p-1" type="time" defaultValue="18:00"/>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <span className="font-medium text-slate-700 dark:text-slate-200">Sábado</span>
                            <div className="flex gap-2 items-center">
                              <input className="rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm p-1" type="time" defaultValue="08:00"/>
                              <span className="text-slate-400">até</span>
                              <input className="rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm p-1" type="time" defaultValue="12:00"/>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="flex items-center gap-2 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <input className="form-checkbox text-primary rounded border-slate-300" type="checkbox"/>
                            <span className="text-sm text-slate-700 dark:text-slate-300">Oferece serviço de guincho 24h?</span>
                          </label>
                          <label className="flex items-center gap-2 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <input className="form-checkbox text-primary rounded border-slate-300" type="checkbox"/>
                            <span className="text-sm text-slate-700 dark:text-slate-300">Possui sala de espera climatizada?</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Documents */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                          <span className="material-symbols-outlined">folder_open</span>
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Documentos para Validação</h2>
                          <p className="text-sm text-slate-500">Formatos aceitos: PDF, JPG, PNG.</p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                          <span className="material-symbols-outlined text-sm">lock</span>
                          Dados criptografados
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Upload Box 1 */}
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                        <div className="h-12 w-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary mb-3 transition-colors">
                          <span className="material-symbols-outlined text-2xl">upload_file</span>
                        </div>
                        <h4 className="font-medium text-slate-900 dark:text-white">Alvará de Funcionamento</h4>
                        <p className="text-xs text-slate-500 mt-1">Arraste ou clique para selecionar</p>
                      </div>
                      {/* Upload Box 2 (Simulating Uploaded State) */}
                      <div className="border-2 border-solid border-green-500/30 bg-green-50/30 dark:bg-green-900/10 rounded-xl p-6 flex items-center gap-4 relative">
                        <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                          <span className="material-symbols-outlined">description</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-slate-900 dark:text-white truncate">Contrato_Social_2024.pdf</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-full rounded-full"></div>
                            </div>
                            <span className="text-xs text-green-600 font-medium">100%</span>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-red-500 transition-colors" type="button">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-700">
                    <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="text-slate-600 dark:text-slate-400 font-medium text-sm hover:text-slate-900 dark:hover:text-white flex items-center gap-2" type="button">
                      <span className="material-symbols-outlined text-lg">arrow_back</span>
                      Cancelar e Voltar
                    </button>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-white dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-colors" type="button">
                        Salvar Rascunho
                      </button>
                      <button 
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                      >
                        Enviar Cadastro
                        <span className="material-symbols-outlined text-lg">send</span>
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-center text-slate-500 text-sm mt-8 mb-12">
                  Ao enviar este formulário, você confirma que os dados da empresa são verídicos.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminRegisterPartner;
