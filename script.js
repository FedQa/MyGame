let words = [
    "программа",
    "монитор",
    "бумажник",
    "телефон",
    "прекрасный",
    "блокнот",
    "погода",
    "кухня",
    "температура",
    "стол",
    "окно",
    "книга",
    "дом",
    "собака",
    "кошка",
    "цветок",
    "лето",
    "зима",
    "осень",
    "весна",
    "молоко",
    "яблоко",
    "апельсин",
    "компьютер",
    "интернет",
    "машина",
    "велосипед",
    "футбол",
    "баскетбол",
    "школа",
    "учитель",
    "ученик",
    "семья",
    "друзья",
    "игра",
    "музыка",
    "кино",
    "театр",
    "парк",
    "ресторан",
    "кафе",
    "зонт",
    "дождь",
    "солнце",
    "луна",
    "звезда",
    "пляж",
    "гора",
    "река",
    "океан",
    "путешествие",
    "каникулы",
    "забава",
    "работа",
    "отпуск",
    "подарок",
    "вечеринка",
    "праздник",
    "пицца"
];
//Выборка случайного слова
let word = words[Math.floor(Math.random() * words.length)];
//Создаем итоговой массив
let finalArray = [];
for (let i=0; i < word.length; i++)
{
    finalArray[i] = "_";
}
//Кол-во оставшихся букв
let remainingLetters = word.length;
//Кол-во попыток
let remainingTries = word.length * 3;
while (remainingLetters > 0 && remainingTries > 0)
{
    //Показываем состояние игры
    alert(finalArray.join(" "));
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null)
    {
        break;
    }
    else if (guess.length !== 1) {
        alert("Пожалуйста введите 1 букву.");
    }
    else {
        //Обновляем состояние игры
        if (guess.toUpperCase()) guess = guess.toLowerCase();
        for (let j=0; j < word.length; j++)
        {
            if (finalArray[j] === guess) {
                alert("Вы уже называли эту букву");
                break;
            }
            else if(word[j] === guess)
            {
                finalArray[j] = guess;
                remainingLetters--;
            }
        }
        //fixed the bug with remainingLetters
        if (!finalArray.includes(guess)) remainingTries--;
    }
    if (remainingLetters === 0)
    {
        alert("Отлично! Было загадано слово " + word);
    }
    else if (remainingTries === 0) {
        alert("Количество попыток закончилось, вы проиграли :( \n Было загадано слово " + word);
    }
}