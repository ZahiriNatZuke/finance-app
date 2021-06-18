export interface InvestmentHistoryDto {
  resume_investment_history: ResumeInvestmentHistory,
  closed_investment_history: ClosedInvestmentHistory[]
}

export interface ClosedInvestmentHistory {
  order?: number,
  logo: string,
  company_name: string,
  investment: number,
  obj_profitability: number,
  accrued_profit: number,
  kind_operation: string,
  start_date: string,
  end_date: string
}

interface ResumeInvestmentHistory {
  date: string,
  accrued_interest: number,
  media_profitability: number
}
