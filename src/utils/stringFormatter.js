import capitalize from "./capitalize";

export default function stringFormatter(text, delimiter, isUnown) {
  const item_arr = text.split(delimiter).map((item) => {
    return capitalize(item, isUnown);
  });

  return item_arr.join(" ");
}
