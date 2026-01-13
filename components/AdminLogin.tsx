
import React, { useState } from 'react';
import { AppStage } from '../types';
import { useApp } from '../AppContext';

interface AdminLoginProps {
  onNavigate: (stage: AppStage) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onNavigate }) => {
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Using specific Admin Primary color from the provided HTML (#1466b8) 
  // instead of global primary to distinguish the environments.
  const adminPrimary = "text-[#1466b8]";
  const adminBgPrimary = "bg-[#1466b8]";
  const adminBorderPrimary = "border-[#1466b8]";
  const adminRingPrimary = "focus:ring-[#1466b8]/50";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, verify credentials here.
    // For prototype, we just call login context with 'admin' type.
    login(email, 'admin');
  };

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111921] font-display antialiased min-h-screen flex flex-col text-slate-900 dark:text-white">
      {/* Main Container */}
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Navbar / Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#243647] px-6 lg:px-10 py-4 bg-white dark:bg-[#111a22] z-10">
          <div className="flex items-center gap-4 text-[#111a22] dark:text-white cursor-pointer" onClick={() => onNavigate(AppStage.AUTH)}>
            <div className={`size-8 flex items-center justify-center ${adminPrimary}`}>
              <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#111a22] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Admin Portal</h2>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">Dr. Consulta Auto</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <a className={`text-sm font-medium text-slate-600 dark:text-slate-400 hover:${adminPrimary} transition-colors`} href="#">Precisa de ajuda?</a>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow flex items-center justify-center p-4 sm:p-8 relative">
          {/* Abstract Background Pattern */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1466b8]/20 via-transparent to-transparent opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#1466b8]/10 via-transparent to-transparent opacity-30"></div>
          </div>

          <div className="layout-content-container flex flex-col max-w-[480px] w-full z-10">
            {/* Login Card */}
            <div className="bg-white dark:bg-[#1e293b] shadow-2xl rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Header Section inside Card */}
              <div className="px-8 pt-8 pb-4 text-center">
                <div className={`mx-auto w-16 h-16 rounded-full bg-[#1466b8]/10 flex items-center justify-center mb-4 ${adminPrimary}`}>
                  <span className="material-symbols-outlined text-4xl">lock</span>
                </div>
                <h1 className="text-[#111a22] dark:text-white tracking-tight text-2xl font-bold leading-tight mb-2">Bem-vindo de volta</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Insira suas credenciais de administrador.</p>
              </div>

              {/* Form Section */}
              <div className="px-8 pb-8 pt-2">
                <form className="flex flex-col gap-5" onSubmit={handleLogin}>
                  {/* Email Input */}
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[#111a22] dark:text-white text-sm font-medium leading-normal">E-mail ou Usuário</span>
                    <div className="relative flex items-center">
                      <input 
                        className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111a22] dark:text-white focus:outline-0 focus:ring-2 ${adminRingPrimary} focus:${adminBorderPrimary} border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-[#243647] h-12 pl-4 pr-10 text-base font-normal leading-normal placeholder:text-slate-400 dark:placeholder:text-[#93adc8] transition-all`} 
                        placeholder="admin@plataforma.com.br" 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="absolute right-3 text-slate-400 dark:text-[#93adc8] flex items-center justify-center pointer-events-none">
                        <span className="material-symbols-outlined text-[20px]">person</span>
                      </div>
                    </div>
                  </label>

                  {/* Password Input */}
                  <label className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[#111a22] dark:text-white text-sm font-medium leading-normal">Senha</span>
                      <a className={`text-sm font-medium ${adminPrimary} hover:text-[#1466b8]/80 transition-colors`} href="#" tabIndex={-1}>Esqueceu a senha?</a>
                    </div>
                    <div className="relative flex items-center">
                      <input 
                        className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111a22] dark:text-white focus:outline-0 focus:ring-2 ${adminRingPrimary} focus:${adminBorderPrimary} border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-[#243647] h-12 pl-4 pr-10 text-base font-normal leading-normal placeholder:text-slate-400 dark:placeholder:text-[#93adc8] transition-all`} 
                        placeholder="••••••••" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button className={`absolute right-3 text-slate-400 dark:text-[#93adc8] flex items-center justify-center hover:${adminPrimary} transition-colors focus:outline-none`} type="button">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </div>
                  </label>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button type="submit" className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 ${adminBgPrimary} text-white text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-[#1466b8]/90 active:scale-[0.98] transition-all shadow-lg shadow-[#1466b8]/20`}>
                      <span className="truncate">Acessar Painel</span>
                      <span className="material-symbols-outlined ml-2 text-lg">login</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Footer Note */}
              <div className="px-8 py-4 bg-slate-50 dark:bg-[#15202b] border-t border-slate-200 dark:border-slate-700 text-center">
                <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">security</span>
                  Área Restrita. Acesso monitorado por IP.
                </p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Não é um administrador? <button onClick={() => onNavigate(AppStage.AUTH)} className={`text-[#1466b8] hover:underline font-medium`}>Voltar para a home</button>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLogin;
