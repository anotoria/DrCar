
import React from 'react';

const BusinessLeftVisual: React.FC = () => {
  return (
    <div className="relative hidden lg:flex lg:w-5/12 xl:w-1/2 flex-col justify-between p-10 xl:p-16 bg-surface-dark border-r border-border-dark">
      {/* Decorative Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" 
        data-alt="Abstract blurry background of a modern car workshop"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2549&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background-dark to-transparent"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wide mb-6">
          <span className="material-symbols-outlined text-sm">verified</span>
          Parceiro Oficial
        </div>
        <h1 className="text-4xl xl:text-5xl font-black text-white leading-[1.15] mb-6">
          Gerencie sua oficina e multiplique seus clientes.
        </h1>
        <p className="text-lg text-text-secondary max-w-md leading-relaxed">
          Conectamos proprietários de veículos aos melhores serviços automotivos da região. Cadastre-se e comece a receber agendamentos hoje mesmo.
        </p>
      </div>

      <div className="relative z-10 mt-12 space-y-8">
        <div className="flex gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">+15k</span>
            {/* Fix: changed class to className */}
            <span className="text-sm text-text-secondary">Oficinas Parceiras</span>
          </div>
          <div className="w-px h-12 bg-border-dark"></div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">98%</span>
            {/* Fix: changed class to className */}
            <span className="text-sm text-text-secondary">Satisfação</span>
          </div>
          <div className="w-px h-12 bg-border-dark"></div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">24h</span>
            {/* Fix: changed class to className */}
            <span className="text-sm text-text-secondary">Suporte Dedicado</span>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-background-dark/80 backdrop-blur-md border border-border-dark rounded-xl p-5 shadow-xl max-w-sm">
          <div className="flex gap-1 text-yellow-500 mb-3">
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">star</span>
          </div>
          <p className="text-sm text-gray-200 mb-4">"Desde que cadastrei minha auto-elétrica, o fluxo de novos clientes aumentou 40% em apenas 3 meses. A plataforma é intuitiva e segura."</p>
          <div className="flex items-center gap-3">
            <div 
              className="h-10 w-10 rounded-full bg-gray-600 bg-cover bg-center" 
              data-alt="Portrait of a happy mechanic shop owner" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfRvK3XDjQukHW3WExKCFXw26MXWL2Ny6Hy0kgcxcuiqWfOpVEWfU_Wtc3F0s020ue7vYcZ4Y8IkLLWeLHyoF2sedJSiwyFWVTVN6ev5eFs7aN5RxfUL02srGIMDiOPFTQN6ytaPYlk8lniXikHNrO88TqlXlg1WqhBEzIZhnulo6cWFbbp6zVfszYeEgwtLZ-QnTMlDdNqoccxR-RtZsR7q4eVPyranjFuB8CTjB57drm6hOpTALGOWh36saMOIMJMYlsJAqKKoA')" }}
            ></div>
            <div>
              <p className="text-xs font-bold text-white">Carlos Mendes</p>
              <p className="text-[10px] text-text-secondary">Auto Elétrica Mendes, SP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLeftVisual;
