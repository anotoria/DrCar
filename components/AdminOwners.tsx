
import React from 'react';
import { AppStage } from '../types';

interface AdminOwnersProps {
  onLogout: () => void;
  onNavigate: (stage: AppStage) => void;
}

const AdminOwners: React.FC<AdminOwnersProps> = ({ onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d141b] dark:text-white min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-[#2a3642] px-10 py-3 bg-white dark:bg-[#1a2632]">
        <div className="flex items-center gap-4 text-[#0d141b] dark:text-white cursor-pointer" onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}>
          <div className="size-8 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">directions_car</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Admin AutoFix</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Dashboard</button>
            <button className="text-primary text-sm font-bold">Proprietários</button>
            <button onClick={() => onNavigate(AppStage.ADMIN_BUSINESSES)} className="text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Oficinas</button>
            <button onClick={() => onNavigate(AppStage.ADMIN_NOTIFICATIONS)} className="text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Notificações</button>
            <button onClick={() => onNavigate(AppStage.ADMIN_SETTINGS_ADMINS)} className="text-[#0d141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Configurações</button>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onLogout} className="flex items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
              <span className="truncate">Logout</span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary/20" data-alt="User profile avatar placeholder showing a professional silhouette" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmv0P3qrWh8ml4mTeSOf-2n5NAPxUPgjpHncQdUv5AHm0r-hZDcOOCPjb_cX38yUjBdY8INKpGmeVAVmd2eFQWz6G_pozMcWmgg7kr8DoZ67sUcq65Ph-MB3uNoLFL1zDc3ouXaTkmXdL26WDJCd8f4RYjve_6fp0IK__O6aV6gKzR8VvNwHB-7eUFZiRjRzZbdpJ8uJ3jXufEEpOi56nJZhPFITKsduZMKxIl1J_47PwJH4NoF-8Xf0kT1bqjYatoW4TtSTmt3mo")'}}></div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col px-6 md:px-10 py-6 md:py-8 max-w-[1440px] mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 pb-4">
          <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="text-[#4c739a] dark:text-slate-400 text-sm font-medium hover:underline">Início</button>
          <span className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">/</span>
          <button onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)} className="text-[#4c739a] dark:text-slate-400 text-sm font-medium hover:underline">Admin</button>
          <span className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">/</span>
          <span className="text-[#0d141b] dark:text-white text-sm font-medium">Proprietários</span>
        </div>

        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-[#0d141b] dark:text-white">Gerenciamento de Proprietários</h1>
            <p className="text-[#4c739a] dark:text-slate-400 text-base">Visualize, monitore e gerencie os usuários cadastrados na plataforma.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-[#2a3642] border border-[#cfdbe7] dark:border-[#3e4c5a] text-[#0d141b] dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-[#344250] transition-colors">
              <span className="material-symbols-outlined text-[20px]">file_download</span>
              <span className="truncate">Exportar CSV</span>
            </button>
            <button 
              onClick={() => onNavigate(AppStage.OWNER_ONBOARDING)}
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span className="truncate">Novo Usuário</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1a2632] border border-[#cfdbe7] dark:border-[#2a3642] shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">Total de Proprietários</p>
              <span className="material-symbols-outlined text-primary text-2xl">group</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#0d141b] dark:text-white text-2xl font-bold">1,240</p>
              <span className="text-[#078838] bg-[#078838]/10 px-1.5 py-0.5 rounded text-xs font-bold">+3.5%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1a2632] border border-[#cfdbe7] dark:border-[#2a3642] shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">Novos este mês</p>
              <span className="material-symbols-outlined text-primary text-2xl">person_add</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#0d141b] dark:text-white text-2xl font-bold">+45</p>
              <span className="text-[#078838] bg-[#078838]/10 px-1.5 py-0.5 rounded text-xs font-bold">+12%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1a2632] border border-[#cfdbe7] dark:border-[#2a3642] shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">Contas Ativas</p>
              <span className="material-symbols-outlined text-green-600 text-2xl">verified_user</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#0d141b] dark:text-white text-2xl font-bold">1,150</p>
              <span className="text-[#078838] bg-[#078838]/10 px-1.5 py-0.5 rounded text-xs font-bold">+2.1%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1a2632] border border-[#cfdbe7] dark:border-[#2a3642] shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium">Contas Suspensas</p>
              <span className="material-symbols-outlined text-red-600 text-2xl">block</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-[#0d141b] dark:text-white text-2xl font-bold">25</p>
              <span className="text-[#e73908] bg-[#e73908]/10 px-1.5 py-0.5 rounded text-xs font-bold">-5.0%</span>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-[#cfdbe7] dark:border-[#2a3642] shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#4c739a] text-[20px]">search</span>
              </div>
              <input className="block w-full pl-10 pr-3 py-2.5 border border-[#cfdbe7] dark:border-[#3e4c5a] rounded-lg leading-5 bg-[#f8fafc] dark:bg-[#2a3642] text-[#0d141b] dark:text-white placeholder-[#4c739a] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Buscar por nome, e-mail ou telefone" type="text"/>
            </div>
            <div className="flex gap-4">
              <select className="block w-full md:w-48 pl-3 pr-10 py-2.5 text-base focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg border border-[#cfdbe7] dark:border-[#3e4c5a] bg-white dark:bg-[#2a3642] text-[#0d141b] dark:text-white">
                <option>Status: Todos</option>
                <option>Ativo</option>
                <option>Pendente</option>
                <option>Suspenso</option>
              </select>
              <select className="hidden md:block w-48 pl-3 pr-10 py-2.5 text-base focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg border border-[#cfdbe7] dark:border-[#3e4c5a] bg-white dark:bg-[#2a3642] text-[#0d141b] dark:text-white">
                <option>Ordenar por: Mais Recentes</option>
                <option>Nome (A-Z)</option>
                <option>Nome (Z-A)</option>
                <option>Mais Antigos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#cfdbe7] dark:border-[#2a3642] shadow-sm overflow-hidden flex flex-col flex-1">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#e7edf3] dark:divide-[#2a3642]">
              <thead className="bg-[#f8fafc] dark:bg-[#1e2a36]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] uppercase tracking-wider" scope="col">Proprietário</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] uppercase tracking-wider" scope="col">Contato</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] uppercase tracking-wider" scope="col">Veículos</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] uppercase tracking-wider" scope="col">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] uppercase tracking-wider" scope="col">Cadastro</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-[#4c739a] uppercase tracking-wider" scope="col">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1a2632] divide-y divide-[#e7edf3] dark:divide-[#2a3642]">
                {/* Row 1 */}
                <tr className="hover:bg-[#f0f9ff] dark:hover:bg-[#202e3b] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Avatar of Carlos Mendes" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCy18pk_B7UF_OYIc-n9glC-Dy_Y4gE4EvWhwJtjELTyRLigIbdJHHjx-VtmHXMuuPXkQVj7lHTTZ4YN3FCv0LvRw_Eo1BxhlDYdajmT-CURcjJv-8JJcKoAzFIx3uRn5_TK1U8Vluhryd25Oxqc6ix5CVcjizVTpHZAAkLrhTd41df081n_bGiFU3mBW1DHdPYiht6qPaKjoaDpg4aFaajp6alS4WLzUjdp9yYRlXgBU7cC8LbKZYZf9NCIKKKVCCgUn5RD8Ct7-Y")'}}></div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-[#0d141b] dark:text-white">Carlos Mendes</div>
                        <div className="text-xs text-[#4c739a]">ID: #84392</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#0d141b] dark:text-gray-300">carlos.mendes@email.com</div>
                    <div className="text-xs text-[#4c739a]">(11) 99876-5432</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">2 Veículos</span>
                    </div>
                    <div className="text-xs text-[#4c739a] mt-1">Honda Civic, Ford Ka</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      Ativo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a]">
                    12 Jan 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[#4c739a] hover:text-primary transition-colors p-1" title="Editar">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-red-600 transition-colors p-1" title="Excluir">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-[#0d141b] transition-colors p-1" title="Mais opções">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-[#f0f9ff] dark:hover:bg-[#202e3b] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Avatar of Ana Souza" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0eb6OpeNFzOSREUUg4OIZczFiCmR8FBRmPiCCXf_mGcb7QvnaBPLISYqDjRjEFZUljti6czwMNiIg6XCNoPvsqluTdkxplsmJGmZFzLU1GY_8rmyDLNVR05SXCbXm8BOSSvwt49zsTp447nrff2b28RqmJzrqINxqxlGUzoQmVAopDVCBm8R0hYZ4VDZtHq7m6FFxBWSQAadPBOaDe4VRVpSyOcFkfFPxyyDGTx_rsHvt5nzL-6MHh2vDyBtF4EAbsyZ07g5SFFw")'}}></div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-[#0d141b] dark:text-white">Ana Souza</div>
                        <div className="text-xs text-[#4c739a]">ID: #84201</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#0d141b] dark:text-gray-300">ana.souza@webmail.com</div>
                    <div className="text-xs text-[#4c739a]">(21) 98877-1122</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">1 Veículo</span>
                    </div>
                    <div className="text-xs text-[#4c739a] mt-1">Toyota Corolla</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                      Pendente
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a]">
                    14 Fev 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[#4c739a] hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-red-600 transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-[#0d141b] transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-[#f0f9ff] dark:hover:bg-[#202e3b] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          RF
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-[#0d141b] dark:text-white">Roberto Ferreira</div>
                        <div className="text-xs text-[#4c739a]">ID: #83999</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#0d141b] dark:text-gray-300">roberto.ferr@provider.net</div>
                    <div className="text-xs text-[#4c739a]">(41) 91234-5678</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">0 Veículos</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                      Suspenso
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a]">
                    02 Mar 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[#4c739a] hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-red-600 transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-[#0d141b] transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-[#f0f9ff] dark:hover:bg-[#202e3b] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Avatar of Julia Santos" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBUJGrbMOQ4B7P9SDQEOd7f2A6R5HtnR6mLYcU3uSmpO1oIEvNTGVZSjbBHINSXOpck89IMsuop9NJ9oR9XCGT-CfsQHUAf89ByynynM0EmRod7gQdwMM7gpauEGJwO2OakyOc2Se5_NcefszvdibPNdjEu9aJ6hqwS3ri0SpAEzfEeM47Ls9e-7JxSmQe0gqHeJeTVxI6-KzQzMMfpSpL4xx2PbaADmfWnFvh0SdeCW64o8T1Qe8srPaY98EpkXBUzu4p_Qj5J_4")'}}></div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-[#0d141b] dark:text-white">Júlia Santos</div>
                        <div className="text-xs text-[#4c739a]">ID: #84410</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#0d141b] dark:text-gray-300">julia.santos@email.com</div>
                    <div className="text-xs text-[#4c739a]">(31) 99111-2233</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">1 Veículo</span>
                    </div>
                    <div className="text-xs text-[#4c739a] mt-1">Jeep Renegade</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      Ativo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a]">
                    20 Mar 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[#4c739a] hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-red-600 transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-[#0d141b] transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-[#f0f9ff] dark:hover:bg-[#202e3b] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          ML
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-[#0d141b] dark:text-white">Marcos Lima</div>
                        <div className="text-xs text-[#4c739a]">ID: #84501</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#0d141b] dark:text-gray-300">marcos.lima@example.com</div>
                    <div className="text-xs text-[#4c739a]">(51) 98888-0000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">3 Veículos</span>
                    </div>
                    <div className="text-xs text-[#4c739a] mt-1">Fiat Uno, VW Gol, Ford Ranger</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      Ativo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4c739a]">
                    22 Mar 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[#4c739a] hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-red-600 transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                      <button className="text-[#4c739a] hover:text-[#0d141b] transition-colors p-1">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-6 py-4 border-t border-[#e7edf3] dark:border-[#2a3642] flex items-center justify-between bg-white dark:bg-[#1a2632]">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-[#4c739a] dark:text-slate-400">
                  Mostrando <span className="font-medium">1</span> a <span className="font-medium">5</span> de <span className="font-medium">1240</span> resultados
                </p>
              </div>
              <div>
                <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-[#cfdbe7] dark:border-[#3e4c5a] bg-white dark:bg-[#2a3642] text-sm font-medium text-[#4c739a] hover:bg-slate-50 dark:hover:bg-[#344250]">
                    <span className="sr-only">Anterior</span>
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>
                  <button aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-bold">
                    1
                  </button>
                  <button className="bg-white dark:bg-[#2a3642] border-[#cfdbe7] dark:border-[#3e4c5a] text-[#4c739a] hover:bg-slate-50 dark:hover:bg-[#344250] relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </button>
                  <button className="bg-white dark:bg-[#2a3642] border-[#cfdbe7] dark:border-[#3e4c5a] text-[#4c739a] hover:bg-slate-50 dark:hover:bg-[#344250] hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    3
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-[#cfdbe7] dark:border-[#3e4c5a] bg-white dark:bg-[#2a3642] text-sm font-medium text-[#4c739a]">
                    ...
                  </span>
                  <button className="bg-white dark:bg-[#2a3642] border-[#cfdbe7] dark:border-[#3e4c5a] text-[#4c739a] hover:bg-slate-50 dark:hover:bg-[#344250] hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    8
                  </button>
                  <button className="bg-white dark:bg-[#2a3642] border-[#cfdbe7] dark:border-[#3e4c5a] text-[#4c739a] hover:bg-slate-50 dark:hover:bg-[#344250] relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    9
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-[#cfdbe7] dark:border-[#3e4c5a] bg-white dark:bg-[#2a3642] text-sm font-medium text-[#4c739a] hover:bg-slate-50 dark:hover:bg-[#344250]">
                    <span className="sr-only">Próximo</span>
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </nav>
              </div>
            </div>
            {/* Mobile Pagination */}
            <div className="flex items-center justify-between sm:hidden w-full">
              <button className="relative inline-flex items-center px-4 py-2 border border-[#cfdbe7] text-sm font-medium rounded-md text-[#4c739a] bg-white hover:bg-gray-50">
                Anterior
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-[#cfdbe7] text-sm font-medium rounded-md text-[#4c739a] bg-white hover:bg-gray-50">
                Próximo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminOwners;
