export class Names {
  //http://www.peiraeuspubliclibrary.com/names/asia/china.html
  MALEFIRSTNAMES: string[] = [
    'Ao',
    'Bang',
    'Buwei',
    'Changdong',
    'Chao',
    'Fuling',
    'Gao',
    'Guang',
    'He',
    'Hu Hai',
    'Jizi',
    'Ju',
    'Kang',
    'Long',
    'Lun',
    'Mang',
    'Qi',
    'Qian',
    'Qing',
    'She',
    'Sheng',
    'Si',
    'Tian',
    'Wan',
    'Xian',
    'Xie',
    'Xin',
    'Xing',
    'Yang',
    'Ying',
    'Yu',
    'Yuan',
    'Yun',
    'Zhao',
    'Zheng',
    'Zhuang Xiang',
    'Zhuo',
    'Ziying'
  ];


  MONTHS: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];




  getRandomName(): string {
     const maxVal = Math.floor(this.MALEFIRSTNAMES.length);
     return this.MALEFIRSTNAMES[Math.floor(Math.random() * (maxVal))];
  }

  getName(i: number): string {
    return this.MALEFIRSTNAMES[i];
  }

  getMonths(): string[] {
    return this.MONTHS;
  }
}
