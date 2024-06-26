import { ArrayUtility } from './index';

describe('ArrayUtility', () => {
  describe('.shuffle', () => {
    it('配列の中身がシャッフルされること', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = ArrayUtility.shuffle(array);

      expect(actual).not.toBe(array);
      expect(actual.length).toBe(array.length);
      array.forEach((value) => {
        array.includes(value);
      });
    });
  });
});
