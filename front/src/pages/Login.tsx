import { Link } from 'react-router-dom';
import {useState, type ChangeEvent} from 'react'
import ErrorContent  from '../components/ErrorContent.tsx';
import {getUser, type UserData} from '../service/api.ts'

interface loginData{
  email: string,
  password: string,
}

interface LoginPageProps{
  setLoggedIn: (value: boolean) => void,
  setUserData: (value: UserData) => void,
}

export default function LoginPage({setLoggedIn, setUserData}: LoginPageProps) {

  const [loginData, setLoginData] = useState<loginData>({email: "",password: ""})
  const [loginError, setLoginError] = useState<boolean>(false)
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>('')

  function updateLoginData(e: ChangeEvent<HTMLInputElement>){
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  async function loginUser(e: any){
    e.preventDefault()
    setLoginError(false)
    try{
      const response = await getUser(loginData.email, loginData.password)
      if(response.error){
        setLoginError(true)
        setLoginErrorMessage(response.data.error)
        return 
      }
      const token = response.tokens.access
      localStorage.setItem("token",token)
      setUserData(response.user)
      localStorage.setItem("userData",JSON.stringify(response.user))
      setLoggedIn(true)
      localStorage.setItem("loggedIn","true")
      
      localStorage.removeItem("plan")
      setLoginData({email: "",password: "",})
      alert("Login concluido!")
    }
    catch(error){
      console.error(error)
      setLoginError(true)
      setLoginErrorMessage(String(error))
    }
  }

  return (
    <div className="h-screen w-full bg-[#020617] text-slate-200 flex items-center justify-center px-4 overflow-hidden">
      {loginError? <ErrorContent onClose={() => setLoginError(false)} message={loginErrorMessage}/>: null}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div 
        data-aos="zoom-in"
        className="relative w-full max-w-sm bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm shadow-xl"
      >
        <div className="text-center mb-6"> 
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter"> 
            Audio<span className="text-emerald-500">Flow</span>
          </h1>
          <p className="text-slate-400 text-xs mt-1">Entre na sua conta para continuar</p>
        </div>

        <form className="space-y-4"> 
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">E-mail</label>
            <input 
              type="email" 
              name="email"
              value={loginData.email}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder="seu@email.com"
              onChange={(e) => updateLoginData(e)}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Senha</label>
            <input 
              type="password" 
              name="password"
              value={loginData.password}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder="..."
              onChange={(e) => updateLoginData(e)}
              autoComplete="off"
            />
          </div>

          <button onClick={loginUser} className="w-full bg-emerald-500 text-slate-950 font-black uppercase text-[10px] tracking-[0.2em] py-3 rounded-lg hover:bg-emerald-400 transition-all active:scale-[0.98] mt-2">
            Entrar
          </button>
        </form>

        <div className="mt-5 text-center border-t border-slate-800 pt-4">
          <p className="text-slate-500 text-xs">
            Não tem uma conta?{' '}
            <Link to="/plans" className="text-emerald-500 hover:text-emerald-400 font-bold transition-colors">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}