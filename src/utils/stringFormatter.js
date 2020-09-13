import capitalize from "./capitalize";

export default function stringFormatter(text, delimiter) {
  const item_arr = text.split(delimiter).map((item) => {
    return capitalize(item);
  });

  return item_arr.join(" ");
}
