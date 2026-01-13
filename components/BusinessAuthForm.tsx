
import React, { useState } from 'react';
import { AuthMode } from '../types';

interface BusinessAuthFormProps {
  onLogin: () => void;
  onSwitchToUser?: () => void;
}

const BusinessAuthForm: React.FC<BusinessAuthFormProps> = ({ onLogin, onSwitchToUser }) => {
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.REGISTER);

  const isRegister = authMode === AuthMode.REGISTER;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-4 py-12 md:p-12 bg-background-dark overflow-y-auto">
      <div className="w-full max-w-[600px] flex flex-col gap-8">
        {/* Tabs Navigation */}
        <div className="flex flex-col items-center">
          <div className="flex w-full bg-surface-dark p-1 rounded-xl border border-border-dark mb-2">
            <button 
              onClick={() => setAuthMode(AuthMode.LOGIN)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${!isRegister ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
            >
              Fazer Login
            </button>
            <button 
              onClick={() => setAuthMode(AuthMode.REGISTER)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${isRegister ? 'bg-primary text-white shadow-lg' : 'text-text-secondary hover:text-white'}`}
            >
              Criar Conta Empresarial
            </button>
          </div>
          <p className="text-text-secondary text-sm mt-2">
            {isRegister ? 'Preencha os dados da sua empresa para começar.' : 'Acesse o painel da sua oficina.'}
          </p>
        </div>

        {/* Form Container */}
        <form className="flex flex-col gap-5 animate-fade-in" onSubmit={handleSubmit}>
          
          {isRegister ? (
            <>
              {/* Section: Dados da Empresa */}
              <div className="space-y-4">
                <h3 className="text-white text-sm font-bold uppercase tracking-wider border-b border-border-dark pb-2 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">storefront</span>
                  Dados da Empresa
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5 md:col-span-2">
                    <span className="text-white text-sm font-medium">Nome Fantasia</span>
                    <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-secondary/50" placeholder="Ex: Oficina Mecânica Silva" type="text" />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-white text-sm font-medium">CNPJ</span>
                    <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-secondary/50" placeholder="00.000.000/0000-00" type="text" />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-white text-sm font-medium">Tipo de Serviço</span>
                    <div className="relative">
                      <select className="w-full h-12 appearance-none rounded-lg bg-surface-dark border border-border-dark text-white px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all cursor-pointer">
                        <option disabled selected value="">Selecione uma categoria</option>
                        <option value="mecanica">Mecânica Geral</option>
                        <option value="funilaria">Funilaria e Pintura</option>
                        <option value="eletrica">Auto Elétrica</option>
                        <option value="estetica">Estética Automotiva</option>
                        <option value="pecas">Loja de Peças</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Section: Localização */}
              <div className="space-y-4 pt-2">
                <h3 className="text-white text-sm font-bold uppercase tracking-wider border-b border-border-dark pb-2 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                  Localização
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <label className="flex flex-col gap-1.5 md:col-span-1">
                    <span className="text-white text-sm font-medium">CEP</span>
                    <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="00000-000" type="text" />
                  </label>
                  <label className="flex flex-col gap-1.5 md:col-span-3">
                    <span className="text-white text-sm font-medium">Endereço</span>
                    <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Rua, Avenida, etc." type="text" />
                  </label>
                  <label className="flex flex-col gap-1.5 md:col-span-2">
                    <span className="text-white text-sm font-medium">Número</span>
                    <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="123" type="text" />
                  </label>
                  <label className="flex flex-col gap-1.5 md:col-span-2">
                    <span className="text-white text-sm font-medium">Cidade/UF</span>
                    <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="São Paulo - SP" type="text" />
                  </label>
                </div>
              </div>

              {/* Section: Acesso */}
              <div className="space-y-4 pt-2">
                <h3 className="text-white text-sm font-bold uppercase tracking-wider border-b border-border-dark pb-2 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">lock</span>
                  Dados de Acesso
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5 md:col-span-2">
                    <span className="text-white text-sm font-medium">E-mail Corporativo</span>
                    <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="contato@suaempresa.com.br" type="email" />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-white text-sm font-medium">Senha</span>
                    <div className="relative">
                      <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="••••••••" type="password" />
                      <button className="absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary hover:text-white transition-colors" type="button">
                        <span className="material-symbols-outlined text-xl">visibility_off</span>
                      </button>
                    </div>
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-white text-sm font-medium">Confirmar Senha</span>
                    <div className="relative">
                      <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="••••••••" type="password" />
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <div className="flex h-6 items-center">
                  <input className="h-5 w-5 rounded border-border-dark bg-surface-dark text-primary focus:ring-2 focus:ring-primary focus:ring-offset-background-dark" id="terms" type="checkbox" />
                </div>
                <label className="text-sm leading-6 text-text-secondary" htmlFor="terms">
                  Declaro que li e concordo com os <a className="font-semibold text-primary hover:text-primary/80 hover:underline" href="#">Termos de Uso</a> e <a className="font-semibold text-primary hover:text-primary/80 hover:underline" href="#">Política de Privacidade</a> do Dr. do Carro.
                </label>
              </div>
            </>
          ) : (
            // Simple Login View for Business
            <div className="space-y-4 pt-2">
              <h3 className="text-white text-sm font-bold uppercase tracking-wider border-b border-border-dark pb-2 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">lock</span>
                Acesso à Conta
              </h3>
              <div className="space-y-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-white text-sm font-medium">E-mail Corporativo</span>
                  <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="contato@suaempresa.com.br" type="email" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-white text-sm font-medium">Senha</span>
                  <div className="relative">
                    <input className="w-full h-12 rounded-lg bg-surface-dark border border-border-dark text-white px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="••••••••" type="password" />
                    <button className="absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary hover:text-white transition-colors" type="button">
                      <span className="material-symbols-outlined text-xl">visibility_off</span>
                    </button>
                  </div>
                </label>
                <div className="flex justify-end">
                   <a href="#" className="text-xs text-primary hover:text-blue-400 font-medium hover:underline">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary py-4 px-8 text-base font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all transform active:scale-[0.98]" type="submit">
            {isRegister ? 'Cadastrar Oficina' : 'Entrar na Plataforma'}
          </button>
        </form>

        {/* Footer Help & Switch */}
        <div className="text-center pt-6 border-t border-border-dark flex flex-col gap-4">
          <p className="text-sm text-text-secondary">
            {isRegister ? 'Já possui cadastro? ' : 'Ainda não é parceiro? '}
            <button 
              onClick={() => setAuthMode(isRegister ? AuthMode.LOGIN : AuthMode.REGISTER)}
              className="font-bold text-white hover:text-primary transition-colors"
            >
              {isRegister ? 'Faça Login' : 'Cadastre sua Oficina'}
            </button>
          </p>
          
          {/* Link to switch to Driver view */}
          <button 
            onClick={onSwitchToUser}
            className="text-xs text-text-secondary/70 hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto"
          >
            <span className="material-symbols-outlined text-[14px]">directions_car</span>
            Sou motorista? Criar Conta Pessoal
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessAuthForm;
