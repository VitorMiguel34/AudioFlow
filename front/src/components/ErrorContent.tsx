interface ErrorContentProps{
    message: string,
    onClose: () => void
}

export default function ErrorContent({message, onClose}: ErrorContentProps){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">  
            <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Ops! Algo deu errado</h3>
                <p className="text-zinc-400 text-sm mb-6">
                    {message}
                </p>

                <button onClick={onClose} className="w-full py-3 bg-zinc-100 hover:bg-white text-zinc-900 font-bold rounded-xl transition-all active:scale-95">
                    Tentar novamente
                </button>
                
                </div>
            </div>
        </div>
    )
}