interface Bet {
    id: number
    date: string
    home: Team
    away: Team
    initialOddHome?: string
    initialOddAway?: string
    competition?: Competition
    market?: Market
    method?: Method
    stake?: number
    profitLoss?: number
    odd?: number
    type?: 'Back' | 'Lay'
    comments?: string
}

interface Team {
    id: number
    name: string
}

interface Competition {
    id: number
    name: string
}

interface Market {
    id: number
    name: string
}

interface Method {
    id: number
    name: string
    description: string
}
