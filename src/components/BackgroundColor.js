let lastIndex;
export default function BackgroundColor() {
  const colors = [
    "#885A89c2",
    "#8AA8A1c2",
    "#CBCBD4c2",
    "#D1B490c2",
    "#EE7B30c2",
    "#006BA6c2",
    "#FFBC42c2",
    "#214F4Bc2",
    "#E4572Ec2",
  ];
  const randomNumber = (max, prev) => {
    const random = Math.floor(Math.random() * max);
    if (random === prev) {
      return randomNumber(max, prev);
    } else {
      lastIndex = random;
      return random;
    }
  };

  const root = window.document.documentElement;
  const buttonBar = document.querySelector(".button-bar").childNodes;
  let color = colors[randomNumber(colors.length, lastIndex)];
  root.style.background = color;
  buttonBar.forEach((btn) => (btn.style.background = color));
}
