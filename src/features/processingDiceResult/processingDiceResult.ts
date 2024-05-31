interface IProcessing {
  bet: number[];
  setIsPlay: Function;
  setWinValue: Function;
  setScore: Function;
  moneyBet: number;
  setStatePanel: Function;
}

export function processingDiceResult({
  bet,
  setIsPlay,
  setWinValue,
  setScore,
  moneyBet,
  setStatePanel,
}: IProcessing): void {
  setIsPlay(true);

  const random = Math.round(Math.random() * 5) + 1;
  setWinValue(random);

  setTimeout(() => {
    setIsPlay(false);
    if (bet.length === 1 && random === bet[0]) {
      setScore(moneyBet * 3);
      setStatePanel({
        title: `Результат броска кубика: ${random}`,
        text: `Вы выиграли ${moneyBet * 3} TND!`,
      });
    } else if (bet.length > 1 && bet.includes(random)) {
      setScore(moneyBet * 2);
      setStatePanel({
        title: `Результат броска кубика: ${random}`,
        text: `Вы выиграли ${moneyBet * 2} TND!`,
      });
    } else {
      setScore(-moneyBet);
      setStatePanel({
        title: `Результат броска кубика: ${random}`,
        text: `Повезет в следующий раз!`,
      });
    }
  }, 2000);
}
