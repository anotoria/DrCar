
import React, { useState } from 'react';
import { AppStage } from '../types';

interface AdminSpecificNotificationProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminSpecificNotification: React.FC<AdminSpecificNotificationProps> = ({ onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'owners' | 'workshops'>('owners');
  const [title, setTitle] = useState("Não esqueça sua revisão!");
  const [message, setMessage] = useState("Olá! Percebemos que seu veículo está próximo de completar 10.000km desde a última revisão. Agende agora com nossos parceiros e ganhe 5% de desconto.");

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex overflow-hidden font-display text-[#0d141b] dark:text-white transition-colors duration-200">
      {/* Side Navigation */}
      <aside className="w-64 bg-slate-50 dark:bg-[#151f2b] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between h-screen sticky top-0 flex-shrink-0 z-20 hidden lg:flex">
        <div className="flex flex-col gap-4 p-4">
          {/* User Profile */}
          <div className="flex gap-3 items-center mb-6">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 shrink-0 shadow-sm" data-alt="Admin profile picture" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsUj91kX2LwXPuf0bE_QKwHhXkjFEn5aNsmGL5FnivORIweTvtkoRzR5fz3EqzGI2EahhHGAi7BsgzS_reuyUsFjcsBoHKUeP1nF8B0-HYgj1lQ8sNFDa4KB-9iSmf9-kOCdJ0SFfw8uYZCHO8ebrHoo2YJ9-vSzorrrWFZwqw773JdKEiyf86ozl8hsMJrA46BbfrIpv-cBnM2ganOfYtwbAg8l63HWMLzU6K5RFNnikzon0pscKfC8dxYBRoeRlmviT1QDpMzX8")'}}></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-slate-900 dark:text-white text-sm font-bold leading-tight truncate">AutoAdmin</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal truncate">Gestão Geral</p>
            </div>
          </div>
          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            <div className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Principal</div>
            <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">dashboard</span>
              <p className="text-sm font-medium leading-normal">Visão Geral</p>
            </button>
            <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">store</span>
              <p className="text-sm font-medium leading-normal">Empresas</p>
            </button>
            <button onClick={() => onNavigate(AppStage.ADMIN_OWNERS)} className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">person</span>
              <p className="text-sm font-medium leading-normal">Proprietários</p>
            </button>
            
            <div className="px-2 mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Gestão</div>
            {/* Active Link */}
            <button onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)} className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:text-primary">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>notifications</span>
              <p className="text-sm font-bold leading-normal">Notificações</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)}
              className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">admin_panel_settings</span>
              <p className="text-sm font-medium leading-normal">Administradores</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_FINANCIAL)}
              className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">payments</span>
              <p className="text-sm font-medium leading-normal">Financeiro</p>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.ADMIN_REPORTS)}
              className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">bar_chart</span>
              <p className="text-sm font-medium leading-normal">Relatórios</p>
            </button>
            <button className="flex w-full text-left items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary dark:text-slate-400">settings</span>
              <p className="text-sm font-medium leading-normal">Configurações</p>
            </button>
          </div>
        </div>
        {/* Footer / Logout */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Sair</p>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative scroll-smooth">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151f2b] z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button className="text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Criar Notificação</h2>
          </div>
        </header>

        <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="text-[#4c739a] dark:text-gray-400 text-sm font-medium leading-normal hover:underline">Home</button>
            <span className="text-[#4c739a] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
            <button onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)} className="text-[#4c739a] dark:text-gray-400 text-sm font-medium leading-normal hover:underline">Notificações</button>
            <span className="text-[#4c739a] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
            <span className="text-[#0d141b] dark:text-white text-sm font-medium leading-normal">Criar Nova</span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Criar Notificação Específica</h1>
              <p className="text-[#4c739a] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                Envie alertas personalizados, promoções ou avisos técnicos para usuários ou parceiros da plataforma.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">
            {/* LEFT COLUMN: Form Inputs */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
              
              {/* Step 1: Recipients */}
              <section className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#0d141b] dark:text-white flex items-center gap-2">
                    <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">1</span>
                    Selecionar Destinatários
                  </h3>
                  <span className="text-sm font-medium text-[#4c739a] bg-[#e7edf3] dark:bg-gray-700 px-3 py-1 rounded-full">3 selecionados</span>
                </div>
                
                {/* Tabs */}
                <div className="flex border-b border-[#cfdbe7] dark:border-gray-700 gap-8 mb-6">
                  <button 
                    onClick={() => setActiveTab('owners')}
                    className={`group flex flex-col items-center justify-center border-b-[3px] pb-3 outline-none transition-colors ${activeTab === 'owners' ? 'border-b-primary' : 'border-b-transparent hover:border-b-gray-300'}`}
                  >
                    <p className={`${activeTab === 'owners' ? 'text-primary' : 'text-[#4c739a] dark:text-gray-400 group-hover:text-[#0d141b] dark:group-hover:text-gray-200'} text-sm font-bold leading-normal tracking-[0.015em]`}>
                      Proprietários
                    </p>
                  </button>
                  <button 
                    onClick={() => setActiveTab('workshops')}
                    className={`group flex flex-col items-center justify-center border-b-[3px] pb-3 outline-none transition-colors ${activeTab === 'workshops' ? 'border-b-primary' : 'border-b-transparent hover:border-b-gray-300'}`}
                  >
                    <p className={`${activeTab === 'workshops' ? 'text-primary' : 'text-[#4c739a] dark:text-gray-400 group-hover:text-[#0d141b] dark:group-hover:text-gray-200'} text-sm font-bold leading-normal tracking-[0.015em]`}>
                      Oficinas Parceiras
                    </p>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                  <label className="flex flex-col w-full">
                    <div className="flex w-full items-stretch rounded-lg h-12 bg-[#e7edf3] dark:bg-gray-800 border-none focus-within:ring-2 ring-primary/50 transition-all">
                      <div className="text-[#4c739a] dark:text-gray-400 flex items-center justify-center pl-4 pr-2">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input className="flex w-full bg-transparent border-none text-[#0d141b] dark:text-white placeholder:text-[#4c739a] dark:placeholder:text-gray-500 focus:ring-0 px-2 h-full text-base" placeholder="Buscar por nome, placa ou documento (CPF/CNPJ)..."/>
                    </div>
                  </label>
                </div>

                {/* Recipient List */}
                <div className="flex flex-col gap-2 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                  {/* Item 1 (Selected) */}
                  <label className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 dark:bg-primary/10 border border-primary/20 cursor-pointer hover:bg-primary/10 transition-colors">
                    <input defaultChecked className="size-5 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
                    <div className="size-10 rounded-full bg-cover bg-center flex-shrink-0" data-alt="Portrait of Ana Silva" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCz4dQ8xmD8TAUmpDLclto9EPACKZyXFDBtX53W__0vS0tyEsQoiIl6pN1cri_MoTE34lorZ9uTYQaLKEJH8FTlTVMJpweZirTpZx231biPigN_da2k4DanHz8a8dQ1iFkVj1QHriqgh_jjVPwiqCu6rdT_7z3-AhDtYTh8ZYOM5nMT-p-0h9ROoHXhWb8QWgKLAPVVkOF-pAJoswu4oGbov6UB8lsE3U_fQfRV5BUEwlQtcXoa6MFv-_W3bEc17nty2_42n5Te_6s")'}}></div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[#0d141b] dark:text-white font-bold text-sm">Ana Silva</span>
                      <span className="text-[#4c739a] dark:text-gray-400 text-xs">Honda Civic • Placa KJS-2938</span>
                    </div>
                    <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs font-semibold text-gray-500 border border-gray-100 dark:border-gray-600">São Paulo, SP</span>
                  </label>
                  {/* Item 2 (Selected) */}
                  <label className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 dark:bg-primary/10 border border-primary/20 cursor-pointer hover:bg-primary/10 transition-colors">
                    <input defaultChecked className="size-5 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
                    <div className="size-10 rounded-full bg-cover bg-center flex-shrink-0" data-alt="Portrait of Carlos Mendez" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9Nif4ZYI31-qyaaLuQ9SApGV9rNkmyssESs3qfrl9IcGQwT1z637ix5GPpAQtg3KgEY9HeSZns6S327gvIn38wURLnXXBMnVqoKmDcP9R4aOOLFcen1UQ6RnPe972RYwTiYHUn4HfEYqm1C_NcLKerNXHVWfv0m93OlMAlo6vFFydKrIlrjQ01LBJBIZmKc_8054Jk1fvQgs_525nFrXr2n74xk_HSWR1OSbq_N8amlOAdMGg_d-pKChben-Bj1A9fG4TqXyJ6ZE")'}}></div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[#0d141b] dark:text-white font-bold text-sm">Carlos Mendez</span>
                      <span className="text-[#4c739a] dark:text-gray-400 text-xs">Toyota Corolla • Placa FGH-9012</span>
                    </div>
                    <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs font-semibold text-gray-500 border border-gray-100 dark:border-gray-600">Rio de Janeiro, RJ</span>
                  </label>
                  {/* Item 3 (Unselected) */}
                  <label className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                    <input className="size-5 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
                    <div className="size-10 rounded-full bg-cover bg-center flex-shrink-0" data-alt="Portrait of Julia Roberts" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4d4xUakdzwuxN_VywdFeyxcvQxgzhxDjg_iQZzS0FmoFdynE1MBzplhWVJEIvPM-MvTJ_CyqFQiHCqKk2vqflQKGMtwL79DnjFT5Hdo5ctC52h-GsE-WE9aaUmHmnM4dZzx1KmzZA34KzaHkbiT6BBSf8mTi2OUP0sP_dxBe5hveGtfDSctDpZhICI7VWtDQZ5oqUQiDCLfvlkzYBnJ0ulyYoNKWyJV_lSDapkwZiDRtzG8aoGqO38ChcxOI3xJcBOw5o0ZpvtlU")'}}></div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[#0d141b] dark:text-white font-bold text-sm">Julia Santos</span>
                      <span className="text-[#4c739a] dark:text-gray-400 text-xs">Jeep Renegade • Placa QWE-4567</span>
                    </div>
                    <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs font-semibold text-gray-500 border border-gray-100 dark:border-gray-600">Belo Horizonte, MG</span>
                  </label>
                  {/* Item 4 (Selected) */}
                  <label className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 dark:bg-primary/10 border border-primary/20 cursor-pointer hover:bg-primary/10 transition-colors">
                    <input defaultChecked className="size-5 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
                    <div className="size-10 rounded-full bg-cover bg-center flex-shrink-0 flex items-center justify-center bg-purple-100 text-purple-600 font-bold" data-alt="Default User Avatar">
                        MP
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[#0d141b] dark:text-white font-bold text-sm">Marcos Pereira</span>
                      <span className="text-[#4c739a] dark:text-gray-400 text-xs">Fiat Toro • Placa ABC-1234</span>
                    </div>
                    <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs font-semibold text-gray-500 border border-gray-100 dark:border-gray-600">Curitiba, PR</span>
                  </label>
                </div>
              </section>

              {/* Step 2: Content */}
              <section className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#0d141b] dark:text-white flex items-center gap-2">
                    <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">2</span>
                    Conteúdo da Mensagem
                  </h3>
                </div>
                <div className="grid gap-6">
                  {/* Title Input */}
                  <div>
                    <label className="block text-sm font-bold text-[#0d141b] dark:text-white mb-2">Título da Notificação</label>
                    <input 
                      className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#0d141b] dark:text-white focus:border-primary focus:ring-primary" 
                      placeholder="Ex: Manutenção Preventiva em Oferta!" 
                      type="text" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <p className="text-right text-xs text-[#4c739a] mt-1">{title.length}/60 caracteres</p>
                  </div>
                  {/* Type & Priority */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#0d141b] dark:text-white mb-2">Tipo de Notificação</label>
                      <select className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#0d141b] dark:text-white focus:border-primary focus:ring-primary">
                        <option>Informativo</option>
                        <option>Promocional</option>
                        <option>Alerta de Segurança</option>
                        <option>Financeiro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0d141b] dark:text-white mb-2">Prioridade</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input defaultChecked className="text-primary focus:ring-primary border-gray-300" name="priority" type="radio"/>
                          <span className="text-sm dark:text-gray-300">Normal</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input className="text-red-500 focus:ring-red-500 border-gray-300" name="priority" type="radio"/>
                          <span className="text-sm dark:text-gray-300">Alta</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Message Body */}
                  <div>
                    <label className="block text-sm font-bold text-[#0d141b] dark:text-white mb-2">Mensagem</label>
                    <textarea 
                      className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#0d141b] dark:text-white focus:border-primary focus:ring-primary resize-none" 
                      placeholder="Digite o conteúdo da notificação aqui..." 
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <p className="text-right text-xs text-[#4c739a] mt-1">{message.length}/240 caracteres</p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: Preview & Actions */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 sticky top-24">
              {/* Preview Card */}
              <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                  <h3 className="text-sm font-bold text-[#4c739a] uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">visibility</span>
                    Pré-visualização
                  </h3>
                </div>
                <div className="p-8 flex justify-center bg-gray-100 dark:bg-gray-900">
                  {/* Mockup Phone/Card */}
                  <div className="w-full max-w-[320px] bg-white dark:bg-black rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
                    {/* Status Bar Mock */}
                    <div className="h-6 bg-black flex justify-between px-4 items-center">
                      <span className="text-[10px] text-white font-bold">9:41</span>
                      <div className="flex gap-1">
                        <div className="size-2 bg-white rounded-full"></div>
                        <div className="size-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* App Header Mock */}
                    <div className="h-12 bg-background-light dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 justify-between">
                      <span className="material-symbols-outlined text-gray-500 text-sm">menu</span>
                      <span className="text-xs font-bold dark:text-white">Meu Carro</span>
                      <span className="material-symbols-outlined text-gray-500 text-sm">account_circle</span>
                    </div>
                    {/* Notification Item */}
                    <div className="p-4 bg-background-light dark:bg-gray-900 min-h-[300px]">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border-l-4 border-l-primary flex gap-3 relative animate-pulse-slow">
                        <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-primary">
                          <span className="material-symbols-outlined text-base">notifications_active</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-bold text-[#0d141b] dark:text-white leading-tight">{title}</h4>
                            <span className="text-[10px] text-gray-400">Agora</span>
                          </div>
                          <p className="text-xs text-[#4c739a] dark:text-gray-400 leading-snug break-words">
                            {message}
                          </p>
                        </div>
                      </div>
                      {/* Fake background content */}
                      <div className="mt-4 space-y-3 opacity-30 pointer-events-none select-none">
                        <div className="h-20 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"></div>
                        <div className="h-20 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 border-t border-yellow-100 dark:border-yellow-900/30">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500">info</span>
                    <p className="text-xs text-yellow-800 dark:text-yellow-200 leading-relaxed">
                      <strong>Nota:</strong> A aparência final pode variar dependendo do dispositivo do usuário (Android/iOS).
                    </p>
                  </div>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)}
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-base transition-all shadow-md hover:shadow-lg"
                >
                  <span className="material-symbols-outlined">send</span>
                  Enviar Notificação (3)
                </button>
                <button 
                  onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)}
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#4c739a] dark:text-gray-300 font-bold text-base transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminSpecificNotification;
