export class YearUtility {
  static convertToJapaneseYear = (year: number): string => {
    if (year <= 1926) return `大正 ${year - 1911}年`;
    if (year <= 1989) return `昭和 ${year - 1925}年`;
    if (year <= 2019) return `平成 ${year - 1988}年`;
    return `令和 ${year - 2018}年`;
  };

  static makeFullYearTextByYear = (year: number): string => {
    switch (year) {
      case 9999:
        return '正確に覚えていない';
      case 1925:
        return `1925年以前(${this.convertToJapaneseYear(1925)}以前)`;
      default:
        return `${year}年(${this.convertToJapaneseYear(year)})`;
    }
  };

  static getBuildAgeSelectOptions = () => {
    const options = [];

    const currentYear = new Date().getFullYear();
    for (let year = 1925; year <= currentYear; year++) {
      options.push({
        value: `${year}`,
        text: this.makeFullYearTextByYear(year),
      });
      if (year === 1999) {
        options.push({
          value: '9999',
          text: this.makeFullYearTextByYear(9999),
        });
        options.push({
          value: '',
          text: '選択してください',
        });
      }
    }

    return options;
  };
}
