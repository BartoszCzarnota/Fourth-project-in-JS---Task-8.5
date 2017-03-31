// plik scripts.js

var a = prompt('Wpisz liczbę parzystą a:');
var b = prompt('Wpisz liczbę nieparzystą b:');
var valueEquation = ( (a * a) + (2 * a * b) - (b * b) );
alert('Wynik działania ' + '(a * a) + (2 * a * b) - (b * b) ' + ' wynosi: ' + valueEquation);
console.log('Wynik działania ' + ( (a * a) + (2 * a * b) - (b * b) ) + ' wynosi: ' + valueEquation);

//var a = 0;
if (valueEquation > 0) {
    //liczba dodatnia
    alert('Liczba jest dodatnia')
    console.log('Liczba jest dodatnia');
}

//var b = 0;
if (valueEquation < 0) {
    //liczba ujemna
    alert('Liczba jest ujemna')
    console.log('Liczba jest ujemna');
}
