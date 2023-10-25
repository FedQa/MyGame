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
let word = pickWord();
let guessArray = createGuessArray(word);

//Кол-во оставшихся букв
let remainingLetters = word.length;
//Кол-во попыток
let remainingTries = word.length * 3;

function pickWord()
{
    return words[Math.floor(Math.random() * words.length)];
}

function createGuessArray(word)
{
    return new Array(word.length).fill("_");
}

function getGuess()
{
    return prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
}

function showPlayerProgress()
{
    //Показываем состояние игры
    alert(guessArray.join(" "));
}

function updateGameState(guess, word, guessArray)
{
    guess = guess.toLowerCase();
    if(guessArray.includes(guess))
    {
        alert("Вы уже называли эту букву");
        return;
    }
    let correctGuess = false;
    for (let i=0; i<word.length; i++)
    {
        if (word[i] === guess)
        {
            guessArray[i] = guess;
            correctGuess = true;
        }
    }
    return correctGuess;
}

function showAnswerAndCongratulatePlayer(remainingLetters, remainingTries)
{
    if (remainingLetters === 0)
    {
        return alert("Отлично! Было загадано слово " + word);
    }
    else if (remainingTries === 0) {
        return alert("Количество попыток закончилось, вы проиграли :( \n Было загадано слово " + word);
    }
}


while (remainingLetters > 0 && remainingTries > 0) {
    showPlayerProgress();
    let guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста введите 1 букву.");
    } else {
       let correctGuess = updateGameState(guess, word, guessArray);
       if (correctGuess)
       {
           remainingLetters--;
       }
       else {
           remainingTries--;
       }
    }
}
showAnswerAndCongratulatePlayer(remainingLetters, remainingTries);
