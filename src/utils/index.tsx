import {PortfolioSummaryData, UserHolding} from '../types';

/**
 * Formats a numeric value as a currency string with commas.
 *
 * @param {number | string} amount The numeric value to format.
 * @returns {string} The formatted currency string with commas.
 */
export const formatCurrencyWithCommas = (amount: number | string) => {
  // Check if the value is numeric
  if (isNaN(amount) || amount === null) return '0';

  // Format the currency value with commas in Indian format
  const fixedAmount = Number(amount).toFixed(2);
  return fixedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Calculates the profit or loss based on user holding data.
 *
 * @param {UserHolding} data The user holding data.
 * @returns {number} The profit or loss amount.
 */
export const getProfitLoss = (data: UserHolding) => {
  const {ltp, quantity, avgPrice} = data;
  return ltp * quantity - avgPrice * quantity;
};

/**
 * Calculates the summary of the user's portfolio based on the provided holdings data.
 *
 * @param {UserHolding[]} data An array of user holding data.
 * @returns {PortfolioSummaryData} An object containing the portfolio summary data.
 */
export const getPortfolioSummary = (
  data: UserHolding[],
): PortfolioSummaryData => {
  let currentValue = 0,
    totalInvestment = 0,
    totalClose = 0;

  data?.forEach((holding: UserHolding) => {
    const {ltp, quantity, avgPrice, close} = holding;
    currentValue += ltp * quantity;
    totalInvestment += avgPrice * quantity;
    totalClose += close * quantity;
  });

  return {
    currentValue,
    totalInvestment,
    todaysPl: totalClose - currentValue,
    pl: currentValue - totalInvestment,
  };
};
