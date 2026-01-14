export interface Plan{
    price: number,
    period: string,
    advantages: Array<string>,
    emphasis: boolean,
}

export interface PlanInList extends Plan{
    name: "Free"|"Premium"|"Family",
}

export const plans: Record<string,Plan> = {
    Free:{
        price: 0,
        period: "/mês",
        advantages: ["Músicas com anúncios", "Qualidade padrão", "Apenas modo online"],
        emphasis: false,
    },
    Premium:{
        price: 22.90,
        period: "/mês",
        advantages: ["Sem interrupções", "Áudio Hi-Fi (Lossless)", "Ouça offline"],
        emphasis: true,
    },
    Family:{
        price: 34.90,
        period: "/mês",
        advantages: ["Até 6 contas individuais", "Bloqueio de conteúdo explícito", "SoundFlow Kids"],
        emphasis: false,
    }
}

export const plansList: Array<PlanInList> = [
    {
        name: "Free",
        price: plans.Free.price,
        period: plans.Free.period,
        advantages: plans.Free.advantages,
        emphasis: plans.Free.emphasis,
    },
    {
        name: "Premium",
        price: plans.Premium.price,
        period: plans.Premium.period,
        advantages: plans.Premium.advantages,
        emphasis: plans.Premium.emphasis,
    },
    {
        name: "Family",
        price: plans.Family.price,
        period: plans.Family.period,
        advantages: plans.Family.advantages,
        emphasis: plans.Family.emphasis,
    }
]