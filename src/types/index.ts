/**
 * Interface representing user holdings data.
 */
export interface UserHoldings {
  /**
   * Array of user holding items.
   */
  userHolding: UserHolding[];
}

/**
 * Interface representing a single user holding item.
 */
export interface UserHolding {
  /**
   * Symbol of the holding.
   */
  symbol: string;
  /**
   * Quantity of the holding.
   */
  quantity: number;
  /**
   * Last traded price of the holding.
   */
  ltp: number;
  /**
   * Average price of the holding.
   */
  avgPrice: number;
  /**
   * Close price of the holding.
   */
  close: number;
}

/**
 * Interface representing portfolio summary data.
 */
export interface PortfolioSummaryData {
  /**
   * Current value of the portfolio.
   */
  currentValue: string | number;
  /**
   * Total investment in the portfolio.
   */
  totalInvestment: string | number;
  /**
   * Profit or loss made today.
   */
  todaysPl: string | number;
  /**
   * Total profit or loss in the portfolio.
   */
  pl: string | number;
}
