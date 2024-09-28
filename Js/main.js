
function printEvenNumbers() {
    const a = parseInt(prompt("Введите начало диапазона (a):", "0"));
    const b = parseInt(prompt("Введите конец диапазона (b):", "10"));
    
    if (isNaN(a) || isNaN(b) || a > b) {
        alert("Неверный ввод.");
        return;
    }

    let result = "Чётные числа: ";
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }
    alert(result);
}


function whileLoopExample() {
    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++;
    }
}


function promptNumberGreaterThanTen() {
    let num;
    do {
        num = prompt("Введите число больше 10:", "");
        if (num === null) {
            alert("Отменено.");
            return;
        }
    } while (num <= 10 && num !== null);
    
    alert("Спасибо!");
}


function showMinFunction() {
    const a = parseFloat(prompt("Введите первое число (a):"));
    const b = parseFloat(prompt("Введите второе число (b):"));
    if (isNaN(a) || isNaN(b)) {
        alert("Неверный ввод.");
        return;
    }
    const result = min(a, b);
    alert(`Меньшее число: ${result}`);
}

function min(a, b) {
    return a < b ? a : b;
}


const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

function runAskFunction() {
    ask(
        "Вы согласны?",
        () => alert("Вы согласились."),
        () => alert("Вы отменили выполнение.")
    );
}


const checkAge = (age) => age > 18 || confirm('Родители разрешили?');

function checkUserAge() {
    const age = prompt("Введите ваш возраст:", "18");
    const result = checkAge(age);
    if (result) {
        alert("Доступ разрешён.");
    } else {
        alert("Доступ запрещён.");
    }
}
