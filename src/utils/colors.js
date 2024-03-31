import { generate, getRgbStr } from "@arco-design/color";
import { getConfig } from "./config";

const colors = [
  {
    name: "Red",
    valueLight: "#F53F3F",
    valueDark: "#F76965",
  },
  {
    name: "Orange",
    valueLight: "#F77234",
    valueDark: "#F9925A",
  },
  {
    name: "Gold",
    valueLight: "#F7BA1E",
    valueDark: "#F9CC44",
  },
  {
    name: "Green",
    valueLight: "#00B42A",
    valueDark: "#27C346",
  },
  {
    name: "Cyan",
    valueLight: "#14C9C9",
    valueDark: "#3FD4CF",
  },
  {
    name: "Blue",
    valueLight: "#165DFF",
    valueDark: "#3C7EFF",
  },
  {
    name: "Purple",
    valueLight: "#722ED1",
    valueDark: "#8E51DA",
  },
  {
    name: "Magenta",
    valueLight: "#F5319D",
    valueDark: "#F756A9",
  },
];

function getColorValue(colorName) {
  // 查找匹配颜色名称的对象
  const selectedColor = colors.find((color) => color.name === colorName);
  const isSysDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = getConfig("theme") || "light";
  const isDarkMode = theme === "system" ? isSysDarkMode : theme === "dark";
  if (selectedColor) {
    return isDarkMode ? selectedColor.valueDark : selectedColor.valueLight;
  } else {
    return "#165DFF";
  }
}

function applyColor(colorName) {
  const list = generate(getColorValue(colorName), {
    list: true,
  }).map((x) => getRgbStr(x));
  list.forEach((x, i) => {
    document.body.style.setProperty("--primary-" + (i + 1), x);
  });
}

export { colors, getColorValue, applyColor };