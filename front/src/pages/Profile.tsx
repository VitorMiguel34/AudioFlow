import { type UserData } from '../service/api.ts'

interface ProfilePageProps {
  userData: UserData,
  setUserData: (value: UserData) => void, 
  setLoggedIn: (value: boolean) => void,
}

export default function ProfilePage({ userData, setUserData, setLoggedIn }: ProfilePageProps) {

  function encerrarSessao(){
      setLoggedIn(false)
      localStorage.clear()
      setUserData({name:"",email:"",plan:"",password:"",confirmPassword:""})
  }

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <div className="text-2xl font-bold tracking-tighter">
          AUDIO<span className="text-[#4ade80]">FLOW</span>
        </div>
        <button className="text-sm border border-gray-700 px-4 py-2 rounded-full hover:bg-gray-800 transition">
          Voltar ao Início
        </button>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-4">
        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#4ade80] to-[#2dd4bf] p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold uppercase">
                  {userData.name.substring(0, 2)}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
            <p className="text-gray-400 mb-4">Membro {userData.plan} • Desde Jan 2026</p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="text-center">
                <p className="text-xl font-bold">128</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Playlists</p>
              </div>
              <div className="w-px h-10 bg-gray-800"></div>
              <div className="text-center">
                <p className="text-xl font-bold">2.4k</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Seguidores</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0c0f14] border border-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            <div className="border-b border-gray-800 pb-2">
              <p className="text-xs text-gray-500 uppercase mb-1">Nome Completo</p>
              <p className="text-lg font-medium">{userData.name}</p>
            </div>
            
            <div className="border-b border-gray-800 pb-2">
              <p className="text-xs text-gray-500 uppercase mb-1">E-mail</p>
              <p className="text-lg font-medium">{userData.email}</p>
            </div>

            <div className="border-b border-gray-800 pb-2">
              <p className="text-xs text-gray-500 uppercase mb-1">Plano Atual</p>
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium text-[#4ade80]">{userData.plan}</p>
                <span className="text-[10px] bg-[#4ade80]/10 text-[#4ade80] px-2 py-0.5 rounded-full border border-[#4ade80]/20">
                  ATIVO
                </span>
              </div>
            </div> 
          </div>
        </section>

        <div className="mt-12 flex justify-center">
            <button 
                onClick={encerrarSessao} 
                className="group flex items-center gap-2 px-6 py-3 border border-red-900/30 bg-red-950/10 text-red-500/70 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-300 rounded-full text-sm font-medium tracking-wide"
            >
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sair da conta
            </button>
        </div>
      </main>
    </div>
  );
}