export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    budgetIncome: income,
    budgetGdp: gdp,
    budgetCapita: capita,
  };

  return budget;
}
