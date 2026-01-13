
import React, { useState } from 'react';
import { AuthMode, AppStage } from '../types';
import { SocialButtons } from './SocialButtons';

interface AuthFormProps {
  onLogin: () => void;
  onNavigate?: (stage: AppStage) => void;
  onSwitchToBusiness?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onNavigate, onSwitchToBusiness }) => {
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.REGISTER);
  const [showPassword, setShowPassword] = useState(false);
  
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const toggleAuthMode = (mode: AuthMode) => {
    setAuthMode(mode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email && password) {
        onLogin();
    }
  };

  const isRegister = authMode === AuthMode.REGISTER;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 overflow-y-auto bg-background-dark">
      <div className="w-full max-w-[480px] flex flex-col gap-6">
        
        {/* Tabs Switcher */}
        <div className="bg-surface-dark p-1 rounded-xl flex gap-1 border border-border-dark">
          <button 
            onClick={() => toggleAuthMode(AuthMode.LOGIN)}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${!isRegister ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}
          >
            Entrar
          </button>
          <button 
            onClick={() => toggleAuthMode(AuthMode.REGISTER)}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${isRegister ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}
          >
            Criar Conta
          </button>
        </div>

        {/* Header */}
        <div className="text-center md:text-left mt-2">
          <h2 className="text-2xl font-bold text-white mb-2">
            {isRegister ? 'Crie sua conta de proprietário' : 'Bem-vindo de volta'}
          </h2>
          <p className="text-text-secondary text-sm">
            {isRegister 
              ? 'Preencha seus dados abaixo para começar a gerenciar seu veículo gratuitamente.'
              : 'Acesse sua conta para continuar gerenciando suas manutenções.'}
          </p>
        </div>

        {/* Registration/Login Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          {/* Name Input - Only for Register */}
          {isRegister && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-white flex items-center gap-2">
                Nome Completo
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors text-[20px]">person</span>
                </div>
                <input 
                  className="w-full h-12 bg-surface-dark border border-border-dark rounded-lg pl-10 pr-4 text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" 
                  placeholder="Ex: João da Silva" 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={isRegister}
                />
              </div>
            </div>
          )}

          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              E-mail
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors text-[20px]">mail</span>
              </div>
              <input 
                className="w-full h-12 bg-surface-dark border border-border-dark rounded-lg pl-10 pr-4 text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" 
                placeholder="seu@email.com" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Row */}
          <div className={`grid grid-cols-1 ${isRegister ? 'md:grid-cols-2' : ''} gap-5`}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Senha</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors text-[20px]">lock</span>
                </div>
                <input 
                  className="w-full h-12 bg-surface-dark border border-border-dark rounded-lg pl-10 pr-10 text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-white cursor-pointer" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
            </div>

            {/* Confirm Password - Only for Register */}
            {isRegister && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Confirmar Senha</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors text-[20px]">lock_reset</span>
                  </div>
                  <input 
                    className="w-full h-12 bg-surface-dark border border-border-dark rounded-lg pl-10 pr-4 text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" 
                    placeholder="••••••••" 
                    type="password"
                    required={isRegister}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Forgot Password Link - Only for Login */}
          {!isRegister && (
            <div className="flex justify-end">
              <a href="#" className="text-xs text-primary hover:text-blue-400 font-medium hover:underline">
                Esqueceu sua senha?
              </a>
            </div>
          )}

          {/* Terms Checkbox - Only for Register */}
          {isRegister && (
            <label className="flex items-start gap-3 mt-1 cursor-pointer group">
              <input className="mt-1 w-4 h-4 rounded border-border-dark bg-surface-dark text-primary focus:ring-offset-background-dark focus:ring-primary" type="checkbox" required />
              <p className="text-xs text-text-secondary leading-relaxed group-hover:text-white transition-colors">
                Ao criar uma conta, você concorda com nossos <a className="text-primary hover:text-blue-400 underline" href="#">Termos de Serviço</a> e <a className="text-primary hover:text-blue-400 underline" href="#">Política de Privacidade</a> do Dr. do Carro.
              </p>
            </label>
          )}

          {/* Submit Button */}
          <button className="w-full h-12 mt-2 bg-primary hover:bg-blue-600 text-white text-base font-bold rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
            <span>{isRegister ? 'Cadastrar Grátis' : 'Entrar na Conta'}</span>
            <span className="material-symbols-outlined text-[20px]">
              {isRegister ? 'arrow_forward' : 'login'}
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-border-dark"></div>
          <span className="flex-shrink-0 mx-4 text-text-secondary text-xs font-medium uppercase">ou continue com</span>
          <div className="flex-grow border-t border-border-dark"></div>
        </div>

        {/* Social Login */}
        <SocialButtons />

        {/* Toggle Mode Text */}
        <div className="mt-4 text-center flex flex-col gap-4">
          <p className="text-sm text-text-secondary">
            {isRegister ? 'Já possui uma conta?' : 'Não tem uma conta?'}
            <button 
              onClick={() => toggleAuthMode(isRegister ? AuthMode.LOGIN : AuthMode.REGISTER)}
              className="text-primary hover:text-blue-400 font-bold ml-1 hover:underline focus:outline-none"
            >
              {isRegister ? 'Fazer login' : 'Criar conta grátis'}
            </button>
          </p>

          {/* Switch to Business Link */}
          <button 
            onClick={onSwitchToBusiness}
            className="text-xs text-text-secondary/70 hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto"
          >
            <span className="material-symbols-outlined text-[14px]">storefront</span>
            Sou Oficina? Criar Conta Empresarial
          </button>
        </div>

        {/* Admin Link */}
        <div className="mt-4 text-center border-t border-border-dark pt-4">
          <button 
            onClick={() => onNavigate && onNavigate(AppStage.ADMIN_AUTH)}
            className="text-xs text-text-secondary/50 hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto"
          >
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Acesso Administrativo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
