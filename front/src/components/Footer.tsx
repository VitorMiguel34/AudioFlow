export default function Footer(){
    return(
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
    )
}