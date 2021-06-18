export interface GlobalPositionDto {
  position_global: PositionGlobal,
  active_investments: ActiveInvestment[]
}

export interface ActiveInvestment {
  order?: number,
  logo: string,
  company_name: string,
  investment: number,
  obj_profitability: number,
  accrued_profit: number,
  history_detail: HistoryDetail[],
  start_date: string,
  end_date: string
}

interface HistoryDetail {
  kind_operation: string,
  start_date: string,
  end_date: string
}

interface PositionGlobal {
  date: string,
  capital_investment: number,
  profit: number,
  media_profit: number
}
