
import React from 'react';
import { AppStage } from '../types';

interface BusinessServicesProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const BusinessServices: React.FC<BusinessServicesProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden flex h-screen w-full selection:bg-primary/30">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col bg-[#111a22] border-r border-[#233648] h-full shrink-0">
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-6">
            {/* Brand */}
            <div className="flex gap-3 px-2 cursor-pointer" onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)}>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-lg shadow-primary/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrjPAuZmyGeuM3reDbX9-ZnJhW2fhonY14BZbkFrEmx1VUhqIOixG5iPaMBZa0B3IRlDquqjDngLqQjfsDHME5AIPNItUjEwn-J3lSOPI1haRdVZ0MGbv1LoQ8vkl-483gLZHeBoovZimZdm1YeClIFhPNiLXo3qqenczz16UIs6B5IaIEAncP3aQXJ2h0cZ4qe39bRRuvdmnrYPzH9adkUSViocRQ4S-_MC4QSAeZ2NPUdoF1_VSPJSy2e08p8nLapg8jZkbbmrA")'}}></div>
              <div className="flex flex-col justify-center">
                <h1 className="text-white text-base font-bold leading-none mb-1">AutoFix <span className="text-primary">Pro</span></h1>
                <p className="text-[#92adc9] text-xs font-medium leading-none">Gestão de Empresa</p>
              </div>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col gap-2">
              <button onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#1a2632] hover:text-white transition-colors group w-full text-left">
                <span className="material-symbols-outlined text-[#92adc9] group-hover:text-white transition-colors">dashboard</span>
                <span className="text-sm font-medium leading-normal">Início</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 shadow-sm shadow-primary/5 w-full text-left">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
                <span className="text-sm font-bold leading-normal">Meus Serviços</span>
              </button>
              <button onClick={() => onNavigate(AppStage.BUSINESS_APPOINTMENTS)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#1a2632] hover:text-white transition-colors group w-full text-left">
                <span className="material-symbols-outlined text-[#92adc9] group-hover:text-white transition-colors">calendar_month</span>
                <span className="text-sm font-medium leading-normal">Agendamentos</span>
              </button>
              <button onClick={() => onNavigate(AppStage.BUSINESS_REVIEWS)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#1a2632] hover:text-white transition-colors group w-full text-left">
                <span className="material-symbols-outlined text-[#92adc9] group-hover:text-white transition-colors">star</span>
                <span className="text-sm font-medium leading-normal">Avaliações</span>
              </button>
              <button onClick={() => onNavigate(AppStage.BUSINESS_EDIT_PROFILE)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#92adc9] hover:bg-[#1a2632] hover:text-white transition-colors group w-full text-left">
                <span className="material-symbols-outlined text-[#92adc9] group-hover:text-white transition-colors">settings</span>
                <span className="text-sm font-medium leading-normal">Configurações</span>
              </button>
            </nav>
          </div>
          <button onClick={onLogout} className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative min-w-0 bg-background-light dark:bg-background-dark">
        {/* Top Navbar */}
        <header className="flex items-center justify-between border-b border-border-light dark:border-[#233648] px-6 py-3 bg-surface-light dark:bg-[#111a22] z-10 shrink-0">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="p-1 text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="font-bold text-slate-900 dark:text-white text-lg">AutoFix Pro</div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <button onClick={() => onNavigate(AppStage.BUSINESS_DASHBOARD)} className="text-slate-500 dark:text-[#92adc9] text-sm font-medium hover:text-primary transition-colors">Painel</button>
            <span className="text-slate-400 dark:text-[#586e82] text-sm">/</span>
            <span className="text-slate-900 dark:text-white text-sm font-bold">Serviços</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center rounded-lg size-10 hover:bg-slate-100 dark:hover:bg-[#233648] text-slate-600 dark:text-white transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-[#111a22]"></span>
            </button>
            <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-[#233648] text-slate-600 dark:text-white transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="max-w-[1400px] mx-auto p-4 lg:p-8 flex flex-col gap-6">
            {/* Page Heading & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Gerenciar Catálogo</h1>
                <p className="text-slate-500 dark:text-[#92adc9] text-base max-w-2xl">
                  Adicione, edite e organize os serviços oferecidos pela sua oficina para seus clientes.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="hidden md:flex items-center justify-center gap-2 px-4 h-10 rounded-lg border border-border-light dark:border-[#324d67] bg-white dark:bg-[#111a22] text-slate-700 dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-[#1a2632] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">file_upload</span>
                  <span>Importar</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-5 h-10 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Novo Serviço</span>
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1 p-5 rounded-xl border border-border-light dark:border-[#324d67] bg-surface-light dark:bg-[#16212b] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded bg-blue-500/10 text-blue-500">
                    <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                  </div>
                  <p className="text-slate-500 dark:text-[#92adc9] text-sm font-semibold uppercase tracking-wider">Total de Serviços</p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">24</p>
              </div>
              <div className="flex flex-col gap-1 p-5 rounded-xl border border-border-light dark:border-[#324d67] bg-surface-light dark:bg-[#16212b] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-500">
                    <span className="material-symbols-outlined text-[20px]">category</span>
                  </div>
                  <p className="text-slate-500 dark:text-[#92adc9] text-sm font-semibold uppercase tracking-wider">Categorias Ativas</p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">5</p>
              </div>
              <div className="flex flex-col gap-1 p-5 rounded-xl border border-border-light dark:border-[#324d67] bg-surface-light dark:bg-[#16212b] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded bg-amber-500/10 text-amber-500">
                    <span className="material-symbols-outlined text-[20px]">attach_money</span>
                  </div>
                  <p className="text-slate-500 dark:text-[#92adc9] text-sm font-semibold uppercase tracking-wider">Ticket Médio</p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">R$ 180</p>
              </div>
            </div>

            {/* Main Content Grid: List + Editor */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
              {/* Left Column: Service List */}
              <div className="xl:col-span-2 flex flex-col gap-4">
                {/* Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-3 p-1">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#586e82]">search</span>
                    <input className="w-full pl-10 pr-4 h-11 rounded-lg border-border-light dark:border-[#324d67] bg-surface-light dark:bg-[#16212b] text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-[#586e82] transition-all" placeholder="Buscar serviços..." type="text"/>
                  </div>
                  <div className="flex gap-3">
                    <select className="h-11 px-4 rounded-lg border-border-light dark:border-[#324d67] bg-surface-light dark:bg-[#16212b] text-slate-700 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary">
                      <option>Todas Categorias</option>
                      <option>Mecânica</option>
                      <option>Elétrica</option>
                      <option>Estética</option>
                    </select>
                    <button className="flex items-center justify-center size-11 rounded-lg border border-border-light dark:border-[#324d67] bg-surface-light dark:bg-[#16212b] text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-[#1a2632] transition-colors">
                      <span className="material-symbols-outlined">filter_list</span>
                    </button>
                  </div>
                </div>

                {/* List Container */}
                <div className="flex flex-col rounded-xl border border-border-light dark:border-[#324d67] bg-surface-light dark:bg-[#16212b] overflow-hidden shadow-sm">
                  {/* Table Header */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 dark:bg-[#1c2a38] border-b border-border-light dark:border-[#324d67] text-xs font-bold text-slate-500 dark:text-[#92adc9] uppercase tracking-wider">
                    <div className="col-span-5">Serviço</div>
                    <div className="col-span-2">Categoria</div>
                    <div className="col-span-3">Preço</div>
                    <div className="col-span-2 text-right">Ações</div>
                  </div>

                  {/* List Item 1 */}
                  <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center border-b border-border-light dark:border-[#233648] hover:bg-slate-50 dark:hover:bg-[#1a2632] transition-all cursor-pointer bg-primary/5 dark:bg-[#137fec]/10 border-l-4 border-l-primary">
                    <div className="col-span-12 md:col-span-5 flex items-center gap-4">
                      <div className="bg-center bg-cover rounded-lg size-12 shrink-0 bg-slate-200 dark:bg-[#233648]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7jQ2MpYsCjjrJcBqh1e9eCHWzGrc2D75Sm73jcg3Gn5byCLKdW88HlhjDcJ4ibxqgd7UDd7lcI5gNt638dwmlsYaBhp5C46PtLHwf24FLboHPh0pm7q-JpamSrWTgXWcbz-vcUukW58Lzf9_j-8v4wEfnDNYg7r02qLiRvX9U4nyOD0_LsY2mprRXI7EY9q6n3ePcF9HVM1-eZhbj74ARLOMXrcG3PABrgVksiMnV4UjnPGHHfP_1hy3EZVgFCvn6vRc9LLp2jNo")'}}></div>
                      <div>
                        <p className="text-slate-900 dark:text-white font-bold text-base">Troca de Óleo Completa</p>
                        <p className="text-slate-500 dark:text-[#92adc9] text-sm line-clamp-1">Inclui filtro de óleo e check-up de 15 itens.</p>
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Manutenção</span>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-bold">R$ 180,00</span>
                        <span className="text-xs text-slate-500 dark:text-[#92adc9]">Preço Fixo</span>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-2">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-10 h-5 bg-slate-300 dark:bg-[#324d67] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                      <button className="text-slate-400 hover:text-primary dark:hover:text-white p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </div>
                  </div>

                  {/* List Item 2 */}
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center border-b border-border-light dark:border-[#233648] hover:bg-slate-50 dark:hover:bg-[#1a2632] transition-all cursor-pointer">
                    <div className="col-span-12 md:col-span-5 flex items-center gap-4">
                      <div className="bg-center bg-cover rounded-lg size-12 shrink-0 bg-slate-200 dark:bg-[#233648]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAelWNXQEfvQtJ6LZ58MqEusH6rn4_vvXEw0A9e7UOsyKDfmzCi7G27PQBBVLewVOdzOhA4F5Ll7CM_U0d0xhfdZYvmtWk9NmSJ63pnvndCE-JOLuETapuixNEGGr_IiattmpRqtI7RHmMB0ZDeSh_0xzwoJ-UkRp-gd0iHBA55NUh7qFpgUvH0m4GaKE9-4fABjkQ-ihyId-DHlG1nm7OBKQsHO_U9yxDu2RG9sdKqd5I2PrBuBjTrL5IFprFACS432ETkoW-n5kw")'}}></div>
                      <div>
                        <p className="text-slate-900 dark:text-white font-bold text-base">Alinhamento 3D</p>
                        <p className="text-slate-500 dark:text-[#92adc9] text-sm line-clamp-1">Alinhamento computadorizado de alta precisão.</p>
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">Pneus & Rodas</span>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-bold">R$ 120,00</span>
                        <span className="text-xs text-slate-500 dark:text-[#92adc9]">A partir de</span>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-2">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-10 h-5 bg-slate-300 dark:bg-[#324d67] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                      <button className="text-slate-400 hover:text-primary dark:hover:text-white p-1">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </div>

                  {/* List Item 3 */}
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center border-b border-border-light dark:border-[#233648] hover:bg-slate-50 dark:hover:bg-[#1a2632] transition-all cursor-pointer">
                    <div className="col-span-12 md:col-span-5 flex items-center gap-4">
                      <div className="bg-center bg-cover rounded-lg size-12 shrink-0 bg-slate-200 dark:bg-[#233648]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5OnUGPNaCRywlinKe4wccYB3O4tjcIeO2j6RdmFbGHXAvojWJDw3oQclRoVhzBfFRGgdG5FyTsonGYr2_Wuq9iqYrSqJQO_3wv3K2zxqnVjX2Y5k_aI-YaOyRjfpRU_Da9O0D4tC4tTDRna30tRmPono2OiUqiqPxE8DNi6YkplKTp5IL_TW1HXWR5k8tQ_VcVIstwNULAdoiWbQ6wRmkcpRe6srFliuRz-hV0NQlK8AkU6mvDPTFu-liEKuPUyZhiXPW1clFqwM")'}}></div>
                      <div>
                        <p className="text-slate-900 dark:text-white font-bold text-base">Diagnóstico Motor</p>
                        <p className="text-slate-500 dark:text-[#92adc9] text-sm line-clamp-1">Avaliação completa com scanner.</p>
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Mecânica</span>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-bold italic">Sob Consulta</span>
                        <span className="text-xs text-slate-500 dark:text-[#92adc9]">Orçamento</span>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-2">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-10 h-5 bg-slate-300 dark:bg-[#324d67] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                      <button className="text-slate-400 hover:text-primary dark:hover:text-white p-1">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-auto py-2">
                  <p className="text-sm text-slate-500 dark:text-[#92adc9]">Mostrando 3 de 24 serviços</p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded border border-border-light dark:border-[#324d67] text-slate-500 dark:text-white disabled:opacity-50 text-sm">Anterior</button>
                    <button className="px-3 py-1 rounded border border-border-light dark:border-[#324d67] text-slate-500 dark:text-white text-sm hover:bg-slate-100 dark:hover:bg-[#324d67]">Próximo</button>
                  </div>
                </div>
              </div>

              {/* Right Column: Editor Panel */}
              <div className="xl:col-span-1">
                <div className="flex flex-col rounded-xl border border-border-light dark:border-[#324d67] bg-surface-light dark:bg-[#16212b] overflow-hidden shadow-lg h-full sticky top-0">
                  <div className="px-6 py-4 border-b border-border-light dark:border-[#324d67] bg-slate-50 dark:bg-[#1c2a38] flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Editar Serviço</h3>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                  <div className="p-6 flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-[#92adc9] uppercase tracking-wider">Nome do Serviço</label>
                      <input className="w-full h-11 px-4 rounded-lg bg-white dark:bg-[#111a22] border-border-light dark:border-[#324d67] text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="text" defaultValue="Troca de Óleo Completa"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-[#92adc9] uppercase tracking-wider">Categoria</label>
                      <div className="relative">
                        <select className="w-full h-11 px-4 rounded-lg bg-white dark:bg-[#111a22] border-border-light dark:border-[#324d67] text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary appearance-none transition-all">
                          <option>Manutenção Preventiva</option>
                          <option>Mecânica Geral</option>
                          <option>Estética</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-[#92adc9] uppercase tracking-wider">Descrição</label>
                      <textarea className="w-full p-4 rounded-lg bg-white dark:bg-[#111a22] border-border-light dark:border-[#324d67] text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary resize-none h-28 transition-all" defaultValue="Inclui filtro de óleo, anel de vedação e check-up de 15 itens de segurança básicos."></textarea>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-slate-500 dark:text-[#92adc9] uppercase tracking-wider">Modelo de Preço</label>
                      <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-3 p-3 rounded-lg border border-primary bg-primary/5 dark:bg-primary/10 cursor-pointer transition-all">
                          <input defaultChecked className="w-4 h-4 text-primary bg-transparent border-slate-400 focus:ring-primary focus:ring-2" name="pricing" type="radio"/>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">Preço Fixo</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-lg border border-border-light dark:border-[#324d67] bg-white dark:bg-[#111a22] hover:bg-slate-50 dark:hover:bg-[#1c2a38] cursor-pointer transition-all">
                          <input className="w-4 h-4 text-primary bg-transparent border-slate-400 focus:ring-primary focus:ring-2" name="pricing" type="radio"/>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">A partir de (Estimado)</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-lg border border-border-light dark:border-[#324d67] bg-white dark:bg-[#111a22] hover:bg-slate-50 dark:hover:bg-[#1c2a38] cursor-pointer transition-all">
                          <input className="w-4 h-4 text-primary bg-transparent border-slate-400 focus:ring-primary focus:ring-2" name="pricing" type="radio"/>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">Sob Consulta / Orçamento</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-[#92adc9] uppercase tracking-wider">Valor (R$)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">R$</span>
                        <input className="w-full h-11 pl-10 pr-4 rounded-lg bg-white dark:bg-[#111a22] border-border-light dark:border-[#324d67] text-slate-900 dark:text-white text-sm font-bold focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="number" defaultValue="180"/>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button className="flex-1 h-11 rounded-lg border border-border-light dark:border-[#324d67] text-slate-600 dark:text-white font-bold text-sm hover:bg-slate-100 dark:hover:bg-[#324d67] transition-colors">Cancelar</button>
                      <button className="flex-1 h-11 rounded-lg bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 hover:bg-blue-600 transition-colors">Salvar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessServices;
