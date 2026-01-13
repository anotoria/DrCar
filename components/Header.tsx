
import React, { useState } from 'react';
import { ViewMode, AppStage } from '../types';

interface HeaderProps {
  viewMode: ViewMode;
  onSwitchView: (mode: ViewMode) => void;
  onNavigate: (stage: AppStage) => void;
}

const Header: React.FC<HeaderProps> = ({ viewMode, onSwitchView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isBusiness = viewMode === ViewMode.BUSINESS;

  const handleNavigate = (stage: AppStage) => {
    onNavigate(stage);
    setIsMenuOpen(false);
  };

  const containerClasses = isBusiness
    ? "flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-dark bg-background-dark px-6 py-4 lg:px-10 z-50 fixed top-0 w-full h-[72px]"
    : "flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-6 py-4 lg:px-10 bg-background-dark/95 backdrop-blur-sm z-50 fixed top-0 w-full h-[72px]";

  return (
    <>
      <header className={containerClasses}>
        <div className="flex items-center gap-3 text-white cursor-pointer" onClick={() => handleNavigate(AppStage.AUTH)}>
          <div className={`flex items-center justify-center rounded ${isBusiness ? 'h-10 w-10 rounded-lg' : 'size-8 rounded'} bg-primary/10 text-primary`}>
            <span className={`material-symbols-outlined ${isBusiness ? 'text-2xl' : 'text-[24px]'}`}>car_repair</span>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
            Dr. do Carro {isBusiness && <span className="text-primary ml-1 hidden sm:inline">Empresas</span>}
          </h2>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            {isBusiness ? (
              <>
                <button 
                  onClick={() => onSwitchView(ViewMode.USER)}
                  className="text-text-secondary hover:text-white text-sm font-medium transition-colors"
                >
                  Para Motoristas
                </button>
                <button onClick={() => handleNavigate(AppStage.INFO_PLANS)} className="text-text-secondary hover:text-white text-sm font-medium transition-colors">Planos</button>
                <button onClick={() => handleNavigate(AppStage.INFO_HELP)} className="text-text-secondary hover:text-white text-sm font-medium transition-colors">Ajuda</button>
              </>
            ) : (
              <>
                <button onClick={() => handleNavigate(AppStage.INFO_WORKSHOPS)} className="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal">Oficinas</button>
                <button onClick={() => handleNavigate(AppStage.INFO_SERVICES)} className="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal">Serviços</button>
                <button onClick={() => handleNavigate(AppStage.INFO_HOW_IT_WORKS)} className="text-text-secondary hover:text-white transition-colors text-sm font-medium leading-normal">Como Funciona</button>
              </>
            )}
          </div>
          
          {isBusiness ? (
            <button onClick={() => handleNavigate(AppStage.AUTH)} className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-surface-dark border border-border-dark text-white text-sm font-bold hover:bg-border-dark transition-colors">
              Fazer Login
            </button>
          ) : (
            <button 
              onClick={() => onSwitchView(ViewMode.BUSINESS)}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-surface-dark border border-border-dark hover:border-primary/50 text-white text-sm font-bold leading-normal transition-all"
            >
              Para Oficinas
            </button>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background-dark/95 animate-fade-in md:hidden">
          <div className="flex flex-col h-full p-8 pt-24 gap-8">
            <div className="flex flex-col gap-6">
              {isBusiness ? (
                <>
                  <button onClick={() => handleNavigate(AppStage.INFO_PLANS)} className="text-white text-2xl font-bold text-left">Planos</button>
                  <button onClick={() => handleNavigate(AppStage.INFO_HELP)} className="text-white text-2xl font-bold text-left">Ajuda</button>
                  <button onClick={() => { onSwitchView(ViewMode.USER); setIsMenuOpen(false); }} className="text-primary text-lg font-bold text-left">Para Motoristas</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleNavigate(AppStage.INFO_WORKSHOPS)} className="text-white text-2xl font-bold text-left">Oficinas</button>
                  <button onClick={() => handleNavigate(AppStage.INFO_SERVICES)} className="text-white text-2xl font-bold text-left">Serviços</button>
                  <button onClick={() => handleNavigate(AppStage.INFO_HOW_IT_WORKS)} className="text-white text-2xl font-bold text-left">Como Funciona</button>
                  <button onClick={() => { onSwitchView(ViewMode.BUSINESS); setIsMenuOpen(false); }} className="text-primary text-lg font-bold text-left">Para Oficinas</button>
                </>
              )}
            </div>
            <div className="mt-auto flex flex-col gap-4">
               <button onClick={() => handleNavigate(AppStage.AUTH)} className="w-full h-14 bg-primary text-white font-bold rounded-xl text-lg">
                Começar Agora
              </button>
              <button onClick={() => setIsMenuOpen(false)} className="w-full h-14 bg-surface-dark text-white font-bold rounded-xl text-lg border border-border-dark">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
