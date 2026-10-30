export function splitBill(total, people, tipPercent = 10) {
    if (people <= 0) throw new Error("people must be at least 1");
    const withTip = total * (1 + tipPercent / 100);
    return Math.round((withTip / people) * 100) / 100;
  }