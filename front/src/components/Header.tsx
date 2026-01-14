import { Link } from 'react-router-dom';

interface HeaderProps{
  loggedIn: boolean,
}

export default function Header({loggedIn}: HeaderProps) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800/50" data-aos="fade-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link
          to={loggedIn? "/user":"/"}
          onClick={scrollToTop}
          className="group cursor-pointer text-left outline-none block"
        >
          <h1 className="text-white text-2xl font-black tracking-tighter uppercase transition-transform active:scale-95">
            Audio<span className="text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)] group-hover:text-emerald-400">Flow</span>
          </h1>
          <div className="h-[1.5px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full opacity-80"></div>
        </Link>

        <div className="flex items-center gap-4">
          
          <Link 
            to="/plans" 
            className="relative overflow-hidden group px-6 py-2 rounded-full border border-emerald-500/20 hover:border-emerald-500/50 transition-all block"
          >
            <span className="relative z-10 text-emerald-500 group-hover:text-white font-bold text-[10px] tracking-widest uppercase transition-colors duration-500">
              Planos
            </span>
            <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>

          <Link 
            to={loggedIn? "/profile":"/login"}
            className="relative overflow-hidden group px-6 py-2 rounded-full border border-emerald-500/20 hover:border-emerald-500/50 transition-all block"
          >
            <span className="relative z-10 text-emerald-500 group-hover:text-white font-bold text-[10px] tracking-widest uppercase transition-colors duration-500">
              {loggedIn? "Perfil":"Conecte-se"}
            </span>
            <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>

        </div>

      </div>
    </header>
  );
}