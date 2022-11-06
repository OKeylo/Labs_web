function checkNumber() {
  let number = parseInt(prompt("Введите число"));
  if (isNaN(number)) {
    alert("Возможно вы допустили ошибку при вводе числа\nПопробуйте еще раз");
    checkNumber();
    return false;
  } else {
    let cnt = 0;
    for(let i = 1; i < number; i++) {
      if (number % i == 0) {
        cnt += i;
      }
    }
    if (number == cnt) {
      alert(`Число ${number} является совершенным`)
    } else {
      alert(`Число ${number} не является совершенным`)
    }
    return true;
  }
}
checkNumber();