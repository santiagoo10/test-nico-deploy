const hexaDecimalsCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getCharacter(i) {
  return hexaDecimalsCharacters[i];
}

export function useRandomColor() {
  let randomColorCode = "#";

  for (let i = 0; i < 6; i++) {
    const randomPosition = Math.floor(
      Math.random() * hexaDecimalsCharacters.length
    );

    randomColorCode += getCharacter(randomPosition);
  }

  return randomColorCode;
}
