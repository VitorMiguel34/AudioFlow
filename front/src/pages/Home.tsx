import {useNavigate} from 'react-router-dom'
import Player from '../components/Player'

export default function HomePage() {

  const navigate = useNavigate();

  return (
    <>
    <div className="mt-16 min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-400 overflow-x-hidden">
    
    <section data-aos="fade-down" className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-emerald-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
              A nova era do streaming
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-[-0.05em] text-white leading-tight">
              A sua música em <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">alta fidelidade</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Áudio espacial, qualidade lossless e curadoria inteligente. 
              Onde a tecnologia encontra a alma do artista.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button onClick={() => {navigate("/plans")}} className="group relative px-12 py-4 rounded-full font-bold text-slate-300 overflow-hidden hover:scale-105 transition-all">
                <span className="relative z-10">Ver Planos</span>
                <div className="absolute inset-0 border border-slate-700 rounded-full group-hover:bg-slate-800 transition-all"></div>
              </button>
          </div>
        </div>
    </section>

    <section data-aos="fade-left" className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            
            <div className="relative group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col items-start">
                  <div className="text-emerald-500 mb-6 text-4xl block">✦</div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Som Imersivo</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Tecnologia de áudio 3D que coloca você no centro do palco, com clareza absoluta.</p>
              </div>
            </div>

            <div className="relative group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col items-start">
                  <div className="text-emerald-500 mb-6 text-4xl block">≋</div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Zero Compressão</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Ouça a música como ela foi masterizada. Formatos FLAC e Hi-Fi nativos.</p>
              </div>
            </div>

            <div className="relative group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col items-start">
                  <div className="text-emerald-500 mb-6 text-4xl block">⚲</div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Curadoria Humana</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Algoritmos treinados por especialistas para sugerir o que você ama.</p>
              </div>
            </div>

        </div>
    </section>

    <footer className="py-20 border-t border-slate-900 flex flex-col items-center gap-6">
        <div className="flex gap-8 text-slate-500 text-sm">
          <a href="#" className="hover:text-emerald-400 transition-colors">Termos</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
        </div>
        <p className="text-slate-700 text-[10px] tracking-widest uppercase">
          AudioFlow Master Series • 2026
        </p>
    </footer>
    </div>
    <Player song_id={1}/>
    </>
  );
}