import * as Font from "expo-font";

export function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}
