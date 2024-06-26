export class ArrayUtility {
  /**
   * 配列をシャッフルする
   * @param items
   * @param size
   * @returns
   */
  public static shuffle<T>(items: T[]): T[] {
    const shuffled = items.slice();

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }
}
