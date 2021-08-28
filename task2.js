class MyString {
  constructor(string) {
    this.string = string;
  }
  reverse(string) {
    //this.string = string;
    let splitString = string.split("");
    let reversArray = splitString.reverse();
    let joinArray = reversArray.join("");
    return joinArray;

  }
  ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  ucWords(string) {
    let splitString2 = string.toLowerCase().split(" ");
    let upperCase = [];
    for (let i = 0; i < splitString2.length; i++) {

      upperCase.push(splitString2[i].charAt(0).toUpperCase() + splitString2[i].slice(1));
      string = upperCase.join(" ");
    }
    return string;
  }
}

const str = new MyString();
console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'