import { UIUtility } from './UIUtility';

beforeEach(() => {
  Object.defineProperty(window, 'scrollTo', {
    value: () => true,
    writable: true,
  });
});

describe('UIUtility', () => {
  describe('scrollToByTopDistance', () => {
    describe('指定位置までスクロール', () => {
      it('スクロール後のスクロール位置は指定値と同じこと', () => {
        UIUtility.scrollToByTopDistance(99);
        setTimeout(() => {
          expect(window.scrollY).toBe(99);
        }, 300);
      });
    });
  });

  describe('scrollTo', () => {
    describe('画面トップまでスクロール', () => {
      it('スクロール後のスクロール位置は0になっていること', () => {
        UIUtility.scrollToTop();
        setTimeout(() => {
          expect(window.scrollY).toBe(0);
        }, 300);
      });
    });
  });
});
