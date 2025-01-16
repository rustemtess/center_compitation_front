document.addEventListener("DOMContentLoaded", function () {
  function addElements(asideId, elements) {
    const aside = document.getElementById(asideId);

    if (!aside) {
      console.error(`Element with id "${asideId}" not found.`);
      return;
    }

    for (const [id, count] of Object.entries(elements)) {
      for (let i = 0; i < count; i++) {
        const newElement = document.createElement("div");
        newElement.id = id + "_" + i; // Уникальный id для каждого элемента
        newElement.className = "element"; // Класс для стилизации
        aside.appendChild(newElement);
      }
    }

    // Применяем стили ко всем элементам после их создания
    const allElements = aside.querySelectorAll(".element");
    allElements.forEach((element) => {
      applyStyles(element);
      if (element.classList.contains("target")) {
        applyTargetStyles(element);
      }
    });
  }

  function applyStyles(element) {
    const id = element.id;
    const secondChar = id.charAt(1);
    const multiplier = secondChar === "0" ? 10 : parseInt(secondChar, 10);

    if (id.startsWith("v")) {
      element.style.backgroundImage = `url(elements/${id.slice(0, 2)}.svg)`;
      element.style.height = 50 * multiplier + "px";
      element.style.width = "50px";
    }

    if (id.startsWith("g")) {
      element.style.backgroundImage = `url(elements/${id.slice(0, 2)}.svg)`;
      element.style.width = 50 * multiplier + "px";
      element.style.height = "50px";
    }

    if (id.startsWith("m")) {
      element.style.backgroundImage = `url(elements/${id.slice(0, 2)}.svg)`;
      element.style.height = "100px";
      element.style.width = "100px";
    }

    if (id.startsWith("a")) {
      element.style.backgroundImage = `url(elements/${id.slice(0, 4)}.svg)`;
      element.style.height = "100px";
      element.style.width = "100px";
    }

    if (id.startsWith("p")) {
      element.style.backgroundImage = `url(elements/${id.slice(0, 2)}.svg)`;
      element.style.height = "100px";
      element.style.width = "100px";
    }

    // Добавляем стили для элементов с классом .felement
    if (element.classList.contains("felement")) {
      element.style.backgroundImage = `url(elements/${id.slice(0, 2)}.svg)`;
      element.style.width = "100px";
      element.style.height = "100px";
    }
  }

  // Экспортируем функцию для использования в других файлах
  window.addElements = addElements;
});
