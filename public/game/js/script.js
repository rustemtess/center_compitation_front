document.addEventListener('DOMContentLoaded', function() {
    window.toggleAccordion = function(header) {
        const content = header.nextElementSibling;
        const isVisible = content.style.display === 'block';

        // Закрыть все другие аккордеоны
        const allContents = document.querySelectorAll('.accordion-content');
        allContents.forEach(item => {
            item.style.display = 'none';
        });

        // Открыть или закрыть текущий аккордеон
        content.style.display = isVisible ? 'none' : 'block';
    };

    // Другие ваши инициализации
});
