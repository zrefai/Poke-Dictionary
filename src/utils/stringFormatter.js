import capitalize from "./capitalize";

export default function stringFormatter(text) {
  const item_arr = text.split("-").map((item) => {
    return capitalize(item);
  });

  return item_arr.join(" ");
}
