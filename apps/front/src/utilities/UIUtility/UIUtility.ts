export class UIUtility {
  /**
   * 指定位置までスクロール
   * @param topDistance
   */
  static scrollToByTopDistance = (topDistance: number): void => {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: topDistance,
    });
  };

  /**
   * スクロールを画面トップまで戻る
   */
  static scrollToTop = (): void => {
    window.scrollTo({
      behavior: 'instant',
      left: 0,
      top: 0,
    });
  };
}
