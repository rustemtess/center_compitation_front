// ГЕНЕРАЦИЯ НИЧЕГО НЕ МЕНЯТЬ
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.element');
    const targets = document.querySelectorAll('.target');
    const contentContainers = document.querySelectorAll('.content'); // Добавляем выбор всех контейнеров элементов

    let draggedElement = null;
    let initialPosition = null;
    let startPosition = null;
    let initialTransformRotate = {}; // Объект для хранения изначальных значений углов поворота
    let reachedTargetElements = {}; // Объект для отслеживания элементов, достигших цели

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

    // Устанавливаем случайные координаты и вращение для каждого элемента внутри своего контейнера
    elements.forEach(element => {
        const parentContainer = element.parentElement;
        const containerRect = parentContainer.getBoundingClientRect(); // Получаем размеры контейнера
        const elementRect = element.getBoundingClientRect(); // Получаем размеры элемента

        const randomPosition = getRandomPosition(containerRect, elementRect); // Генерируем случайные координаты
        // Устанавливаем случайные координаты для элемента
        element.style.left = `${randomPosition.x}px`;
        element.style.top = `${randomPosition.y}px`;

        // Генерируем случайный угол поворота и устанавливаем его
        const randomRotation = getRandomRotation();
        element.style.transform = `rotate(${randomRotation}deg)`;

        // Сохраняем изначальное значение угла поворота для каждого элемента
        initialTransformRotate[element.id] = randomRotation;
    });
}); // Закрывающая скобка для второго document.addEventListener
