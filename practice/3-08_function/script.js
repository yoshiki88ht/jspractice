'use strict';

function total(price) {
    const tax = 0.1;
    return price + price * tax;
}

console.log('コーヒーメーカーの値段は' + total(8000) + '円(税込)です。');
document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円(税込)です。';
document.getElementById('output2').textContent = 'コーヒーフィルターの値段は' + total(200) + '円(税込)です。';
document.getElementById('output3').textContent = 'コーヒー豆の値段は' + total(1000) + '円(税込)です。';