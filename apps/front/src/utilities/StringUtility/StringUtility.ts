export class StringUtility {
  // 全角から半角への変換マップ
  static conversions = new Map<string, string>([
    // 全角符号
    ['＠', '@'],
    ['．', '.'],
    ['！', '!'],
    ['＃', '#'],
    ['＄', '$'],
    ['％', '%'],
    ['＆', '&'],
    ['’', "'"],
    ['＊', '*'],
    ['＋', '+'],
    ['／', '/'],
    ['＝', '='],
    ['？', '?'],
    ['＾', '^'],
    ['＿', '_'],
    ['｀', '`'],
    ['｛', '{'],
    ['｜', '|'],
    ['｝', '}'],
    ['～', '~'],
    ['〜', '~'],
    ['－', '-'],
    ['ー', '-'],
    // 全角数字
    ['０', '0'],
    ['１', '1'],
    ['２', '2'],
    ['３', '3'],
    ['４', '4'],
    ['５', '5'],
    ['６', '6'],
    ['７', '7'],
    ['８', '8'],
    ['９', '9'],
    // 全角アルファベット
    ['Ａ', 'A'],
    ['Ｂ', 'B'],
    ['Ｃ', 'C'],
    ['Ｄ', 'D'],
    ['Ｅ', 'E'],
    ['Ｆ', 'F'],
    ['Ｇ', 'G'],
    ['Ｈ', 'H'],
    ['Ｉ', 'I'],
    ['Ｊ', 'J'],
    ['Ｋ', 'K'],
    ['Ｌ', 'L'],
    ['Ｍ', 'M'],
    ['Ｎ', 'N'],
    ['Ｏ', 'O'],
    ['Ｐ', 'P'],
    ['Ｑ', 'Q'],
    ['Ｒ', 'R'],
    ['Ｓ', 'S'],
    ['Ｔ', 'T'],
    ['Ｕ', 'U'],
    ['Ｖ', 'V'],
    ['Ｗ', 'W'],
    ['Ｘ', 'X'],
    ['Ｙ', 'Y'],
    ['Ｚ', 'Z'],
    ['ａ', 'a'],
    ['ｂ', 'b'],
    ['ｃ', 'c'],
    ['ｄ', 'd'],
    ['ｅ', 'e'],
    ['ｆ', 'f'],
    ['ｇ', 'g'],
    ['ｈ', 'h'],
    ['ｉ', 'i'],
    ['ｊ', 'j'],
    ['ｋ', 'k'],
    ['ｌ', 'l'],
    ['ｍ', 'm'],
    ['ｎ', 'n'],
    ['ｏ', 'o'],
    ['ｐ', 'p'],
    ['ｑ', 'q'],
    ['ｒ', 'r'],
    ['ｓ', 's'],
    ['ｔ', 't'],
    ['ｕ', 'u'],
    ['ｖ', 'v'],
    ['ｗ', 'w'],
    ['ｘ', 'x'],
    ['ｙ', 'y'],
    ['ｚ', 'z'],
  ]);

  static convertFullWidthToHalfWidth(str: string): string {
    let result = '';
    for (const char of str) {
      result += this.conversions.get(char) || char;
    }

    return result;
  }

  /**
   * 文字列をトリムする
   * @param str
   * @param removeAllSpaces
   * @returns
   */
  static trim(str: string, removeAllSpaces: boolean = false): string {
    if (removeAllSpaces) {
      // 文字列全体のすべての半角・全角空白を削除
      return str.replace(/\s+/g, '').replace(/\u3000+/g, '');
    } else {
      // 前後の半角・全角空白を削除
      return str.replace(/^\s+|\s+$/g, '').replace(/^\u3000+|\u3000+$/g, '');
    }
  }

  /**
   * 文字列かカナを抽出して返す
   * @param input - 入力文字列
   * @returns ひらがなとカタカナのみを含む文字列
   */
  static extractKana = (input: string): string => {
    // 正規表現パターンに合致する文字だけを抽出
    const kanaOnlyPattern = /[\u30A1-\u30FE\u3041-\u309E]+/g;
    // マッチした部分を結合して返却
    const matches = input.match(kanaOnlyPattern);
    return matches ? matches.join('') : '';
  };

  /**
   * ひらがなをカタカナに変換
   * @param input
   * @returns
   */
  static convertToKatakana(input: string): string {
    return input.replace(/[\u3041-\u3096]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) + 0x60);
    });
  }
}
