export class KhongDau {
  khongDau(str: string, rules?: string[]) {
    rules = rules ?? ["chuyen"];

    for (let i = 0; i < rules.length; i++)
      switch (rules[i]) {
        case "chuyen":
          str = this.c(str.trim());
          break;
        case "url":
          str = this.cURI(str.trim());
          break;
      }

    return str;
  }

  private c(str: string) {
    str = str.replace(/(á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ)/g, "a");
    str = str.replace(/(A|Á|À|Ả|Ã|Ạ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ)/g, "A");
    str = str.replace(/đ/g, "d");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/(é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ)/g, "e");
    str = str.replace(/(É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ)/g, "E");
    str = str.replace(/(í|ì|ỉ|ĩ|ị)/g, "i");
    str = str.replace(/(Í|Ì|Ỉ|Ĩ|Ị)/g, "I");
    str = str.replace(/(ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ)/g, "o");
    str = str.replace(/(Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ)/g, "O");
    str = str.replace(/(ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự)/g, "u");
    str = str.replace(/(Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự)/g, "U");
    str = str.replace(/(ý|ỳ|ỷ|ỹ|ỵ)/g, "y");
    str = str.replace(/(Ý|Ỳ|Ỷ|Ỹ|Ỵ)/g, "Y");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

    return str;
  }

  private cLowerCase(str: string) {
    return this.c(str).toLowerCase();
  }

  private cUpperCase(str: string) {
    return this.c(str).toUpperCase();
  }

  private cURI(str: string) {
    str = str.replace(/[^a-zA-Z0-9_-]/g, "-");
    while (str.length > 0 && /--/g.test(str)) {
      str = str.replace(/--/g, "-");
    }
    return str;
  }

  private cFriendlyURI(str: string) {
    str = this.cLowerCase(str);
    str = this.cURI(str).toLowerCase();
    return str;
  }
}
