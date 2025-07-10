export default function getWinner(data) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (data[a] && data[a] === data[b] && data[a] === data[c]) {
      return data[a]; 
    }
  }
  return "";
}
