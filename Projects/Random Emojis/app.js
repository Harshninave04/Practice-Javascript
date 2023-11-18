const emoji = document.querySelector("#emoji");

const emojis = [
  "😎",
  "😂",
  "😊",
  "😁",
  "😮‍💨",
  "🥲",
  "☹️",
  "🧐",
  "🤓",
  "🤧",
  "🥺",
  "😰",
  "😱",
  "🥵",
  "🥶",
  "😳",
  "😠",
  "🥴",
  "❤️",
  "🔥",
  "😈",
  "🤭",
  "🤫",
  "🤥",
  "😇",
  "🥳",
  "🥸",
  "🤠",
  "🤮",
  "🤢",
  "🤕",
  "🤒",
  "😷",
  "🤪",
  "😵",
  "😵‍💫",
];

emoji.addEventListener("mouseover", () => {
  //   emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  let randomEmojiIndex = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.innerHTML = randomEmojiIndex;
});
