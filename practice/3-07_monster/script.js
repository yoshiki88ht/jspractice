'use strict';

let enemy = 100;
let count = 0;

window.alert('戦闘スタート');

while (enemy > 0) {
    const attack = Math.floor(Math.random() * 30) + 1;
    console.log('モンスターに' + attack + 'のダメージ!');
    enemy -= attack;
    count += 1;
}

console.log(count + '回でモンスターを倒した!');