// Переменные для хранения состояния перетаскивания
let draggedElement = null;
let initialPosition = null;
let startPosition = null;
let initialTransformRotate = {};
let reachedTargetElements = {};

// Создаем элемент audio для воспроизведения звука
const audio = new Audio('sound/good.mp3');

// Функция для получения случайных координат в пределах контейнера
function getRandomPosition(containerRect, elementRect) {
    const maxX = containerRect.width - elementRect.width;
    const maxY = containerRect.height - elementRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
}

// Функция для генерации случайного угла в диапазоне [-10, 10]
function getRandomRotation() {
    return Math.random() < 0.5 ? Math.random() * 10 : -Math.random() * 10;
}

// Инициализация элементов
function initializeElements() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        const parentContainer = element.parentElement;
        const containerRect = parentContainer.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        const randomPosition = getRandomPosition(containerRect, elementRect);
        element.style.left = `${randomPosition.x}px`;
        element.style.top = `${randomPosition.y}px`;

        const randomRotation = getRandomRotation();
        element.style.transform = `rotate(${randomRotation}deg)`;
        initialTransformRotate[element.id] = randomRotation;

        element.addEventListener('mousedown', onMouseDown);
        element.addEventListener('mouseup', onMouseUp);
    });

    document.addEventListener('mousemove', onMouseMove);
}

// Обработчик события mouse down
function onMouseDown(event) {
    draggedElement = this;
    initialPosition = { x: event.clientX - draggedElement.offsetLeft, y: event.clientY - draggedElement.offsetTop };
    startPosition = { x: draggedElement.offsetLeft, y: draggedElement.offsetTop };
    draggedElement.style.zIndex = 99;
    draggedElement.style.transform = `rotate(0deg)`;
}

// Обработчик события mouse move
function onMouseMove(event) {
    if (draggedElement) {
        const newX = event.clientX - initialPosition.x;
        const newY = event.clientY - initialPosition.y;

        draggedElement.style.left = `${newX}px`;
        draggedElement.style.top = `${newY}px`;

        const targets = document.querySelectorAll('.target');
        targets.forEach(target => {
            const targetRect = target.getBoundingClientRect();
            const elementRect = draggedElement.getBoundingClientRect();

            const isInTargetBoundary = (
                elementRect.right > targetRect.left &&
                elementRect.left < targetRect.right &&
                elementRect.bottom > targetRect.top &&
                elementRect.top < targetRect.bottom
            );

            if (isInTargetBoundary) {
                target.style.borderColor = 'green';
            } else {
                target.style.borderColor = '';
            }
        });
    }
}

// Обработчик события mouse up
function onMouseUp() {
    if (draggedElement) {
        const targets = document.querySelectorAll('.target');
        let reachedTarget = false;

        targets.forEach(target => {
            const existingElement = target.querySelector('.element');

            if (!existingElement && (draggedElement.id.startsWith(target.id.substring(0, 2)) || target.id === 'unit')) {
                const targetRect = target.getBoundingClientRect();
                const elementRect = draggedElement.getBoundingClientRect();

                if (elementRect.right > targetRect.left &&
                    elementRect.left < targetRect.right &&
                    elementRect.bottom > targetRect.top &&
                    elementRect.top < targetRect.bottom) {
                    target.appendChild(draggedElement);
                    draggedElement.style.position = 'static';
                    draggedElement.style.display = 'block';
                    reachedTarget = true;
                    reachedTargetElements[draggedElement.id] = true;

                    audio.currentTime = 0;
                    audio.play();
                }
            }
        });

        // Проверяем, остался ли элемент в пределах aside, если он не достиг цели
        const aside = document.querySelector('aside');
        const asideRect = aside.getBoundingClientRect();
        const elementRect = draggedElement.getBoundingClientRect();

        const isInsideAside = (
            elementRect.left >= asideRect.left &&
            elementRect.right <= asideRect.right &&
            elementRect.top >= asideRect.top &&
            elementRect.bottom <= asideRect.bottom
        );

        if (!reachedTarget && isInsideAside) {
            // Оставляем элемент на новых координатах внутри aside
            draggedElement.style.position = 'absolute'; // Устанавливаем position absolute
        } else if (!reachedTarget) {
            // Возвращаем элемент на исходные координаты, если он не в aside
            draggedElement.style.left = `${startPosition.x}px`;
            draggedElement.style.top = `${startPosition.y}px`;
            const initialRotate = initialTransformRotate[draggedElement.id];
            draggedElement.style.transform = `rotate(${initialRotate}deg)`;
        }

        checkUnitsInAnswer7();

        draggedElement = null;
    }
}


function getRandomPositionInAside(asideRect, elementRect) {
    const maxX = asideRect.width - elementRect.width;
    const maxY = asideRect.height - elementRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
}

function checkUnitsInAnswer7() {
    const questions = document.querySelectorAll('.question'); // Находим все элементы с классом question

    questions.forEach(answer => {
        const units = answer.querySelectorAll('.target#unit'); // Находим все таргеты внутри текущей question

        let sumOfSecondCharacters = 0; // Переменная для хранения суммы вторых символов
        let allUnitsFilled = true; // Флаг для проверки заполненности всех таргетов

        units.forEach(unit => {
            const element = unit.querySelector('.element');
            if (element) {
                if (element.id.length > 1) {
                    const secondChar = element.id[1];
                    const secondCharValue = parseInt(secondChar, 10); // Преобразуем второй символ в число
                    if (!isNaN(secondCharValue)) {
                        sumOfSecondCharacters += secondCharValue; // Добавляем значение к сумме
                    }
                }
            } else {
                allUnitsFilled = false; // Если хотя бы одна таргет пуст, устанавливаем флаг в false
            }
        });

        // Получаем числовое значение ID родительского контейнера
        const answerIdNumber = parseInt(answer.id.replace('answer', ''), 10); // Извлекаем число из ID

        // Проверяем, заполнены ли все таргеты и соответствует ли сумма
        if (allUnitsFilled && sumOfSecondCharacters !== answerIdNumber) {
            // Перемещаем элементы в aside
            const aside = document.querySelector('aside');
            const asideRect = aside.getBoundingClientRect(); // Получаем размеры aside

            units.forEach(unit => {
                const element = unit.querySelector('.element');
                if (element) {
                    const randomPosition = getRandomPositionInAside(asideRect, element.getBoundingClientRect());
                    aside.appendChild(element); // Перемещаем элемент в aside
                    element.style.position = 'absolute'; // Устанавливаем position absolute
                    element.style.left = `${randomPosition.x}px`; // Устанавливаем случайную координату X
                    element.style.top = `${randomPosition.y}px`; // Устанавливаем случайную координату Y
                    unit.innerHTML = ''; // Очищаем таргет
                }
            });
            console.log(`Все элементы перемещены в aside для question с ID: ${answer.id}. Сумма вторых символов: ${sumOfSecondCharacters}`);
        } else {
            console.log(`Сумма вторых символов ID элементов для question с ID: ${answer.id}: ${sumOfSecondCharacters}`);
        }
    });
}

const pageSequence = [
    'build-1.html',
    'build-2.html',
    'build-3.html',
    'build-4.html',
    'build-5.html',
    'build-6.html',
    'build-7.html',
    'build-8.html',
    'build-9.html',
    'match-1.html',
    'match-2.html',
    'match-3.html',
    'match-4.html',
    'match-a-1.html',
    'match-a-2.html',
    'match-a-3.html',
    'match-a-4.html',
    'match-a-5.html',
    'match-a-6.html',
    'ret-1.html',
    'ret-2.html',
    'ret-3.html',
    'dom-1.html',
    'dom-2.html',
    'dom-3.html',
    'dom-4.html'
];

function getNextPage() {
    const currentPage = window.location.href.split('/').pop(); // Получаем имя текущей страницы
    const currentIndex = pageSequence.indexOf(currentPage); // Находим индекс текущей страницы

    if (currentIndex !== -1 && currentIndex < pageSequence.length - 1) {
        return pageSequence[currentIndex + 1]; // Возвращаем следующую страницу
    }

    return null; // Возвращаем null, если следующей страницы нет
}

const endAudio = new Audio('sound/gameend.mp3');

function checkElements(event) {
    const targets = document.querySelectorAll('.target');
    let allFilled = true;

    targets.forEach(target => {
        const element = target.querySelector('.element');
        if (!element) {
            allFilled = false;
        }
    });

    if (allFilled) {
        endAudio.currentTime = 0; // Сбрасываем время воспроизведения
        endAudio.play(); // Воспроизводим звук

        const nextPage = getNextPage();
        if (nextPage) {
            location.href = nextPage; // Переход на следующую страницу
        } else {
            alert('Это последняя страница!');
        }
    } else {
        alert('Пожалуйста, заполните все элементы!');
    }
}




// Запуск инициализации после загрузки DOM
document.addEventListener("DOMContentLoaded", initializeElements);
