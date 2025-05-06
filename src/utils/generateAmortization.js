const generateAmortization = (P, R, N) => {
    const monthlyRate = R / 12 / 100;
    const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) / (Math.pow(1 + monthlyRate, N) - 1);
  
    const schedule = [];
    let remaining = P;
  
    for (let i = 1; i <= N; i++) {
      const interest = remaining * monthlyRate;
      const principal = emi - interest;
      remaining -= principal;
  
      schedule.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        total: emi.toFixed(2),
        balance: remaining > 0 ? remaining.toFixed(2) : "0.00",
      });
    }
  
    return schedule;
  };
  
  export default generateAmortization;
  