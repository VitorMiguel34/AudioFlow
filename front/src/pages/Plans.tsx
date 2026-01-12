import { useNavigate } from 'react-router-dom'; 
import {plansList} from '../service/plans.ts'

export default function PlansPage() {
  const navigate = useNavigate(); 

  return (
    <div data-aos="fade-down" className="mt-8 min-h-screen bg-[#020617] text-slate-200 pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Escolha seu <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">ritmo</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Planos flexíveis para quem ama música. Cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansList.map((plan) => (
            <div 
              key={plan.name}
              className={`relative group p-10 rounded-[2.5rem] bg-slate-900/40 border transition-all duration-500 ease-out 
                hover:scale-105 hover:-translate-y-2 
                ${plan.emphasis ? 'border-emerald-500 shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]' : 'border-slate-800 hover:border-emerald-500/50'}`}
            >
              {plan.emphasis && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-widest">
                  Mais Popular
                </span>
              )}

              <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">
                {plan.name}
              </h3>

              <ul className="space-y-5 mb-12">
                {plan.advantages.map((advantage) => (
                  <li key={advantage} className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="text-emerald-500 text-lg">✦</span>
                    {advantage}
                  </li>
                ))}
              </ul>

              <div className="mt-auto p-6 rounded-3xl bg-slate-950/60 border border-white/5 flex flex-col items-center">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white">R$ {plan.price.toFixed(2)}</span>
                  <span className="text-slate-500 text-xs">{plan.period}</span>
                </div>
                
                <button 
                  onClick={() => {
                    localStorage.setItem("plan",plan.name);
                    navigate('/register');
                  }} 
                  className={`mt-4 w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all
                  ${plan.emphasis 
                    ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' 
                    : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                  Assinar agora
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}