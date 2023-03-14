const PromptText = document.querySelector('.changing_text');

PromptText.addEventListener('click', (event) => {
    PromptText.textContent = prompt('Введите текст для смены информации на странице, например, напишите имя Вариса)');
    event.preventDefault();
});
