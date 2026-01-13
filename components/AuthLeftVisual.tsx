import React from 'react';

const AuthLeftVisual: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-1 relative bg-surface-dark items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay" 
          data-alt="Modern clean car mechanic workshop interior with soft lighting" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbZJBPfdCPJGcOzYYGtUc3K72NUT4dugcpw9nIFs644Ev7uOtRrrrS_pvL1ErDw8pKvJlZjxTBjFbY0VIQ7Nz2PjsJJB8pGLuuj2UVuN8cNvAjTHRmqnteC1WSDicwANMSmmjAnK5mnjDroLYzWQtpATsUtB2Nef1AglUmF8bPCwC5ahR9EP17Rs1p0lqxHcSe3P3fZ2hmf3GSMsZopPXH25wIh8hyGOeW8SHJ3GG30nqPFvENBQDXqqDknRK4p2xAKznja_GeY3k')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-lg px-10 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit">
          <span className="material-symbols-outlined text-primary text-sm">verified</span>
          <span className="text-primary text-xs font-bold uppercase tracking-wide">Plataforma Verificada</span>
        </div>
        <h1 className="text-4xl xl:text-5xl font-black leading-[1.1] tracking-tight text-white">
          O "Dr. Consulta"<br/>do seu carro.
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          Gerencie manutenções, encontre as melhores oficinas avaliadas e mantenha o histórico do seu veículo em dia. Tudo em um só lugar.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex -space-x-3">
            <img alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0B3IiTLIpsKLepp87aMkDAgUtCJbPiHt6lmxrnahF6jbc_VztNLyzDRtBHglZWkJWyVgCs6UPcPsstzBaSiMtkcykudLLXXL4TJPkA4nzTFH66Bc7Nu_cKlK3uXkbPa8RlDxzPvj9pXwZrtixyrjP6FBD7wprioGK65fvQ4GSwADf-zRVDe7X51rA990kME6E1SCd6UVcsRv5JPoaE6Ghu6bau3USt3yezqt7zki4JTOJna866euTY0eJHqnpHpppZ1BdKe0ZfA8"/>
            <img alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nksQCvYl7CNQOpklyPusC1HwbSsgkxPSxXJCPkYFkJTKx557gZHiDq4QGI9KVuZdee3WNOELlJKIcnO8EYmcuRO-scAw3ZTFHelXcss8l3CcZnTRS53j81aBg8VqXiTDtSLGW6r3zisXlnvmEW_f4gDNQ7fbaE0FisviVMS_ss7NSnFGUaN4qjjhhj_mGxoab_ALu4gFYZcg6atG8u-fH0UgJ0J_72dKzyy6Z66-RSbmtW66wPh8oHSMlEKkuI9Cwc-OkO5_IMM"/>
            <img alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMURTqbZZ3WPyFxT26uDPVcWnUz3Ajc0CWUyB1Eg0LLZ9TkSw4XgJ3mVmPc2jwKJ1M750zR2haYd-9fyC7kU70myrcg01D3k3C_yIQ56r2a2R1_ipwDnNJkcZm4ALxtjpne4p9-7VachxRSOz6VKgeZ6UgTFf69uLPEfhAYBUnZBVMjCHNd5jyM79M_O5OTd61JC2u6mPw0B-2A2o3aab36ULKgqsdcAxs7BMQl6KR-elTIMKqzOoPmUVohTU3g_u-XTM2IHlQPZY"/>
            <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-surface-dark flex items-center justify-center text-xs font-bold text-white">
              +2k
            </div>
          </div>
          <span className="text-sm font-medium text-white">proprietários confiam</span>
        </div>
      </div>
    </div>
  );
};

export default AuthLeftVisual;