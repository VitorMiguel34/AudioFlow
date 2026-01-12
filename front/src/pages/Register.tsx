import { Link } from 'react-router-dom';
import { type ChangeEvent , useState} from 'react'
import {plans} from '../service/plans.ts'

interface UserData{
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export default function Register() {

    const [userData, setUserData] = useState<UserData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const plan = localStorage.getItem("plan")
    const planInfo = (plan === "Free") ? `Plano Gratuito (R$ ${plans.Free.price.toFixed(2)} )` : (plan === "Premium") ? 
        `Plano Premium (R$ ${plans.Premium.price.toFixed(2)})` : `Plano Família (R$ ${plans.Family.price.toFixed(2)})`

    function updateUserData(e: ChangeEvent<HTMLInputElement>){
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div className="mt-16 h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#020617] px-4">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        </div>

        <div 
            data-aos="zoom-in" 
            className="relative z-10 w-full max-w-sm bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl"
        >
            <div className="text-center mb-5">
                <h2 className="text-2xl font-black text-white mb-1 tracking-tight">Crie sua conta</h2>
                <p className="text-slate-400 text-xs">Entre para a nova era do áudio.</p>
            </div>

            <form className="space-y-3">
            
            <div>
                <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1 ml-1">Nome Completo</label>
                <input 
                type="text" 
                placeholder="Seu nome"
                name = "name"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600"
                value = {userData.name}
                onChange={(e) => updateUserData(e)}
                autoComplete="off"
                />
            </div>

            <div>
                <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1 ml-1">E-mail</label>
                <input 
                type="email" 
                placeholder="seu@email.com"
                name = "email"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600"
                value = {userData.email}
                onChange={(e) => updateUserData(e)}
                autoComplete="off"
                />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1 ml-1">Senha</label>
                    <input 
                    type="password" 
                    placeholder="..."
                    name = "password"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600"
                    value = {userData.password}
                    onChange = {(e) => updateUserData(e)}
                    autoComplete="off"
                    />
                </div>

                <div>
                    <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1 ml-1">Confirmar</label>
                    <input 
                    type="password" 
                    placeholder="..."
                    name = "confirmPassword"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600"
                    value = {userData.confirmPassword}
                    onChange = {(e) => updateUserData(e)}
                    autoComplete="off"
                    />
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1 ml-1">
                Plano Escolhido
                </label>
                <div className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-3 py-2 text-sm text-emerald-400 font-semibold cursor-default">
                {planInfo}
                </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1 mt-2">
                CRIAR CONTA
            </button>

            </form>

            <div className="mt-4 text-center border-t border-slate-800 pt-3">
            <p className="text-slate-500 text-xs">
                Já tem uma conta?{' '}
                <Link to="/login" className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors">
                Fazer Login
                </Link>
            </p>
            </div>

        </div>
        </div>
    );
}