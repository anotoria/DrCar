
import React from 'react';
import { AppStage } from '../types';

interface AdminApprovePartnerProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminApprovePartner: React.FC<AdminApprovePartnerProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-hidden h-screen flex transition-colors duration-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#1e2936] border-r border-slate-200 dark:border-slate-700 flex-shrink-0 flex flex-col justify-between hidden md:flex transition-colors">
        <div className="p-6 flex flex-col gap-8">
          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm shrink-0" data-alt="Profile picture of the admin user" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8GZtyI0q0xBpPpfJSu4QdVJyWZBosfmGS1g067DOs6EfhCbq2a10f4IHIf8IddVb7zUPPPEPwFSuMfhRi-Y1T021aXZ8rsEGjdEnd-hf-9zoA3QWhgkZGWx-BDmSNTSymc_6XJdMWVmNsSVorXyELWUPSzneTGX6F-DA5K1JO3yTPmn49M4Pnw74-jiKiQd4QAPer1RH4tVDORUWfu3lUSsEpA6wJbu7n7Q5e-KBhS3zbFAegUOqKj-oEGw7JoBfStxQ_8Fgp4v8")'}}>
            </div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight truncate">Admin Panel</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-normal truncate">Super Admin</p>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">dashboard</span>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-primary transition-colors">Dashboard</span>
            </button>
            <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary text-left">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
              <span className="text-sm font-bold">Cadastros</span>
            </button>
            <button onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">payments</span>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-primary transition-colors">Financeiro</span>
            </button>
            <button onClick={() => onNavigate(AppStage.ADMIN_PAYMENT_SETTINGS)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group text-left">
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">settings</span>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-primary transition-colors">Configurações</span>
            </button>
          </nav>
        </div>
        <div className="p-6">
          <button onClick={onLogout} className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group text-left">
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-red-500 transition-colors">logout</span>
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-red-500 transition-colors">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-16 shrink-0 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-background-dark flex items-center px-6 justify-between">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 lg:hidden mb-2">
               <button className="text-slate-500 dark:text-slate-400">
                 <span className="material-symbols-outlined">menu</span>
               </button>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Análise de Cadastros</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="size-10 rounded-full flex items-center justify-center bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-[#1e2936]"></span>
            </button>
          </div>
        </header>

        {/* Workspace (Two Columns) */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden p-4 md:p-6 gap-6">
          {/* Left Column: List */}
          <div className="w-full md:w-[380px] shrink-0 flex flex-col bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e2936]">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                <input className="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-100 dark:bg-[#2A3645] border-none text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50" placeholder="Buscar por nome ou CNPJ..." type="text"/>
              </div>
            </div>
            {/* Filters / Stats */}
            <div className="px-4 py-2 bg-slate-50 dark:bg-[#15202B] border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pendentes (3)</span>
              <button className="text-primary text-xs font-semibold hover:underline">Filtrar</button>
            </div>
            {/* List Items */}
            <div className="flex-1 overflow-y-auto">
              {/* Item 1 (Active) */}
              <div className="cursor-pointer border-l-4 border-primary bg-primary/5 dark:bg-primary/10 p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-center bg-no-repeat bg-cover rounded-lg size-12 shrink-0 bg-slate-200" data-alt="Logo of Oficina do Zé" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbbuzPw2JDauW2A5_ptFZdHDdyNqZPMcXyraQtOQ9HUL1ZEdjao3yPgs6LgZiZb4u9SvO3yEoWwtLABA460OY4RsIVNbUZblCmlrqs_bfo8NQi4r9wlKI-vlkqIv5lFqvDOVgDdXhX-RzkzU5PxzXsaaBduF6wFbfJIxLCWvoiCCNBftUHcA4RJlNT7iJJOuplFi9Zg4i9dQKO2xc8k8dYqgO8AQpOoZLM-_2fobcLv6mESHq0Kq3G_KXu4miF-NU3yIHxSgPBGSI")'}}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">Oficina do Zé</h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 font-medium">Novo</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">CNPJ: 12.345.678/0001-90</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      Enviado há 2 horas
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="cursor-pointer border-l-4 border-transparent p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-center bg-no-repeat bg-cover rounded-lg size-12 shrink-0 bg-slate-200" data-alt="Logo of Auto Center Silva" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAX00YTxlwgK1lrWnTZ4T0LSAK4-394C5uFJR8rPK2-4lsZ6bGtNSeejlM000stAemP2oskZCwHQu_5fHgqioNbD186BIQjBhSSTCS7UEg_5gF18_zsnsu-zhncBl6z8d5oS6g1uSJwltqYuF8SowTgzMe24SVlPyZjvWPIQ3RBoQzOw4eSiMtEVTQ1WbyBCPJQ_4CD3pYFpPAd3x39EDN1KFxkOhjH4cvovOH9wQUhJeUitj-5wrJ1dZrR1dhmipIkBGC2L_4l8aE")'}}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">Auto Center Silva</h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">CNPJ: 98.765.432/0001-12</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      Enviado há 1 dia
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="cursor-pointer border-l-4 border-transparent p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-center bg-no-repeat bg-cover rounded-lg size-12 shrink-0 bg-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold" data-alt="Default placeholder for Mecânica Rápida">
                    MR
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">Mecânica Rápida</h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">CNPJ: 45.123.789/0001-55</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      Enviado há 3 dias
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detail View */}
          <div className="flex-1 flex flex-col bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative">
            {/* Detail Header */}
            <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e2936]">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="bg-center bg-no-repeat bg-cover rounded-xl size-20 shadow-sm border border-slate-100 dark:border-slate-700" data-alt="Large logo of Oficina do Zé" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqluvAme5ojkc6aaqk4PgNSsYMun_w8LGLj1yXi7Igv263PhAecsNlp1-MZDLXJyPZiYTFbWmZ2YxoNxeGTxEw-1bzR4c-R9tr-Df0OFwtNoXRZPpyjgUggRUOFzEV8qWxDUR7iO4zYXLmvQq2WYvA0dmgUdwE0zXTAS6zqZ2c96OWsZru6Bj9Vw2-JHufj4v_tA-tXC0rxb0nElzdhmtnnQAVQaTstXSNDfgm9_O3PnCPa92IjTjCilVOtolfxqcVmB7Hepg33Ck")'}}></div>
                  <div>
                    <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Oficina do Zé</h1>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        Documentação Pendente
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">ID: #49230</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">José Almeida Silva</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">contato@oficinadoze.com.br</p>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex items-center gap-6 mt-8 border-b border-slate-200 dark:border-slate-700 -mb-8 md:-mb-8">
                <button className="pb-3 px-1 border-b-2 border-primary text-primary font-semibold text-sm">Dados Gerais</button>
                <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-medium text-sm transition-colors">Serviços Oferecidos</button>
                <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-medium text-sm transition-colors">Documentos <span className="ml-1 px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-slate-300">3</span></button>
              </div>
            </div>
            {/* Detail Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/50 dark:bg-[#15202B]/50">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Section: Info */}
                <section className="bg-white dark:bg-[#1e2936] rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">store</span>
                    Informações da Empresa
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Razão Social</label>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">Oficina do Zé Serviços Automotivos LTDA</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">CNPJ</label>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">12.345.678/0001-90</p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Descrição</label>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Especializada em reparos mecânicos gerais para veículos leves e médios. Atuamos há mais de 15 anos no mercado com foco em qualidade e transparência.</p>
                    </div>
                  </div>
                </section>
                {/* Section: Location */}
                <section className="bg-white dark:bg-[#1e2936] rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    Localização
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Endereço Completo</label>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">Rua das Flores, 123 - Jardim Primavera, São Paulo - SP</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">CEP</label>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">01234-567</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Telefone Comercial</label>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">(11) 98765-4321</p>
                    </div>
                    {/* Map Preview */}
                    <div className="md:col-span-2 mt-2">
                      <div className="h-32 w-full rounded-lg bg-slate-100 dark:bg-slate-800 bg-cover bg-center flex items-center justify-center relative overflow-hidden group cursor-pointer" data-alt="Map view showing the location in Sao Paulo" data-location="São Paulo" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnQCv-6qbUX80REaeaiJp2ivhE8VVMCfpWFUTXtH7NRcAoCRCZ8uZkhEmBY25vFK1qkQ9kmu06cBkzjM6E7Sb269VtOep8n4GGnDbhg4TqnvFOs9o7OjcBN2KjiQjItNjIMsBRbUQfWgtDJcAlm4lAp6_iLaEviOczJFBySydIP-RNkBAdpVDwypax0lM2rzMl8VJkEZkOkfaLOy_dqh7I77XpTlbCD5GAfzRpjAjwcXBA3OIC-5-vIHvVfdNyN_0cYM0jZVPRTno")'}}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <button className="bg-white text-slate-900 px-3 py-1.5 rounded-md shadow-md text-xs font-bold flex items-center gap-2 hover:bg-slate-50">
                          <span className="material-symbols-outlined text-[16px]">open_in_new</span> Ver no Mapa
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Documents Preview (Mini) */}
                <section className="bg-white dark:bg-[#1e2936] rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">folder</span>
                    Documentos Anexados
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Doc 1 */}
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
                      <div className="size-10 rounded bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-primary">Contrato Social.pdf</p>
                        <p className="text-xs text-slate-500">2.4 MB • 12/10/2023</p>
                      </div>
                    </div>
                    {/* Doc 2 */}
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
                      <div className="size-10 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">image</span>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-primary">Fachada_Loja.jpg</p>
                        <p className="text-xs text-slate-500">1.2 MB • 12/10/2023</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* Sticky Footer Actions */}
            <div className="p-4 md:p-6 bg-white dark:bg-[#1e2936] border-t border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0 z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Status atual:</span>
                <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded-full">Em Análise</span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => onNavigate(AppStage.ADMIN_PARTNER_STATUS)}
                  className="px-5 py-2.5 rounded-lg border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                  Rejeitar
                </button>
                <button 
                  onClick={() => onNavigate(AppStage.ADMIN_PARTNER_STATUS)}
                  className="px-5 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  Aprovar Cadastro
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminApprovePartner;
