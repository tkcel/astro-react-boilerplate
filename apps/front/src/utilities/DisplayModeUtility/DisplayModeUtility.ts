export class DisplayModeUtility {
  static isSm(windowWidth: number): boolean {
    return windowWidth < 769;
  }

  static isLg(windowWidth: number): boolean {
    return windowWidth > 768;
  }

  static isIOS(): boolean {
    return /iPhone|iPad/.test(window.navigator.userAgent);
  }
}
