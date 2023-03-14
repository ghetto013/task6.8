alert('пример диалогового окна alert с информацией для пользователя');

console.log('про меня тоже не забыли)');

const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('служит для вывода информации в консоль')
});

const Aalert = document.querySelector('#alert');

Aalert.addEventListener('click', () => {
    alert('служит для отображения информации пользователям, показывает диалоговое окно с сообщением и кнопкой ОК')
});

const Pprompt = document.querySelector('#prompt');

Pprompt.addEventListener('click', () => {
    const VarisCity = prompt('Как вы думаете, в каком городе живёт Василий Варис?');
    console.log(VarisCity);
});