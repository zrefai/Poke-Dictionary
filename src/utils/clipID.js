export function clipID(url) {
  const splitArr = url.split("/");
  return splitArr[splitArr.length - 2];
}
