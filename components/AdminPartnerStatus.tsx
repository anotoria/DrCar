
import React from 'react';
import { AppStage } from '../types';

interface AdminPartnerStatusProps {
  onNavigate: (stage: AppStage) => void;
}

const AdminPartnerStatus: React.FC<AdminPartnerStatusProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200 min-h-screen flex flex-col">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Top Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] px-6 py-3 lg:px-10">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate(AppStage.ADMIN_DASHBOARD)}>
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Dr. Carro Empresas</h2>
          </div>
          <div className="flex flex-1 justify-end gap-6">
            <button className="flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors p-2">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" data-alt="User profile placeholder avatar showing a generic silhouette" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBod3zpgmQhxQ5Jz_c_ZYqI2bpvktUtpT2fjgjgzk1ta-iccdJKgSCJ7PUpYrffqvhQ0nyLX1ngcLm3OtGIUy_K_6eG0tlO3MdH26uFJtNbmEhsAfQVWlAZJAGOn2_ikH_kqijcIqGueMA2oj0C4zFYq_CmqjF_uHLCrFARnld-fb7lqaWGvoBIWyfWwFmWCSVv-dFn1MOYp7wKx-6SbBRuX3v6uroo1vrKEnumdI43pqZ6giwmOBK1GMDouO3gH8BdAaoc2s8HjR4")'}}></div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl space-y-12">
            {/* SCENARIO 1: APPROVED */}
            <div className="w-full">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Cenário: Aprovado</span>
                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></div>
              </div>
              <div className="bg-white dark:bg-[#1a2632] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 flex flex-col items-center text-center max-w-[640px] mx-auto">
                <div className="size-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-green-500 text-[48px]">check_circle</span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight mb-4">Cadastro Aprovado!</h1>
                <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed max-w-md mb-8">
                  Seja bem-vindo à rede Dr. Carro! Sua oficina foi analisada e agora está visível para milhares de proprietários. Você já pode receber solicitações de serviço.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg">
                    <span>Acessar Painel</span>
                  </button>
                  <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-base font-bold leading-normal transition-all">
                    <span>Completar Perfil</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SCENARIO 2: REJECTED */}
            <div className="w-full">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Cenário: Rejeitado (Com Feedback)</span>
                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></div>
              </div>
              <div className="bg-white dark:bg-[#1a2632] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 flex flex-col items-center text-center max-w-[640px] mx-auto">
                <div className="size-20 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-red-500 text-[48px]">error</span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight mb-4">Atualização sobre seu cadastro</h1>
                <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed max-w-lg mb-8">
                  Infelizmente, não pudemos aprovar seu cadastro neste momento devido a inconsistências nos documentos enviados.
                </p>
                {/* Admin Feedback Block */}
                <div className="w-full bg-slate-50 dark:bg-[#131b24] rounded-xl p-5 mb-8 text-left border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-start gap-4">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 border border-slate-200 dark:border-slate-600" data-alt="Avatar of the support team member" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAC-pFu-WS-bmJd2zoSh14L6i4J_wrxQtexVB64ZXmFVChKpOLZPa8xD9ZiB45h0LTIqxZpgr901BvGbKrChEiNqy8E7JGxFQn1PV2gCYHS6gafB034qTgf5acAyL12dNtsoMcx_gp3baeASyi30bOOWuhLCTfAiHf4eSkp_M0kPcuHxHtyT_7bFgdwz3QAmipgYpbBEwOB_SdUIqfOudnTI1IuwcufLlyg-qGHLvfAASzDLdFAscy_XGag-3kePKqw9swIQOLbd_M")'}}></div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <p className="text-slate-900 dark:text-white text-sm font-bold">Equipe de Análise</p>
                        <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Admin</span>
                      </div>
                      <div className="relative mt-1 p-3 bg-white dark:bg-slate-800 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm leading-relaxed shadow-sm">
                        <p>O comprovante de endereço (CNPJ) enviado está ilegível e parece estar vencido (data superior a 3 meses). Por favor, envie uma nova foto ou PDF com data recente.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg">
                    <span className="material-symbols-outlined mr-2 text-[20px]">upload_file</span>
                    <span>Reenviar Documentos</span>
                  </button>
                  <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-transparent text-primary hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-base font-bold leading-normal transition-all">
                    <span>Falar com Suporte</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPartnerStatus;
