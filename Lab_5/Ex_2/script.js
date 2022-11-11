function checkTriangle() {
  let side_1 = parseFloat(document.getElementById('side1').value);
  let side_2 = parseFloat(document.getElementById('side2').value);
  let side_3 = parseFloat(document.getElementById('side3').value);
  if ( isNaN(side_1) || isNaN(side_2) || isNaN(side_3) ) {
    alert('Такого треугольника не существует\nХотите проверить данные?');
    return false;
  } else if (side_1 + side_2 <= side_3 || side_1 + side_3 <= side_2 || side_2 + side_3 <= side_1){
    alert('Такого треугольника не существует\nХотите проверить данные?');
    return false;
  }
  let p = parseFloat((side_1 + side_2 + side_3) / 2);
  let s = parseFloat( Math.sqrt(p * (p - side_1) * (p - side_2) * (p - side_3)) );
  alert('Такой треугольник существует\nЕго площадь ' + s);
  return true;
}