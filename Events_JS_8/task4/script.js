function showTooltip(buttonId, tooltipId) {
    // Данные кнопки и подсказки
    const button = document.getElementById(buttonId);
    const tooltip = document.getElementById(tooltipId);

    button.addEventListener('mouseenter', function() {
        // Кординаты кнопки и подсказки
        const buttonRect = button.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        let top = buttonRect.top - tooltipRect.height - 10;
        let left = buttonRect.left + (buttonRect.width / 2) - (tooltipRect.width / 2);

        // если не хвотает места
        if (top < 0) {
            top = buttonRect.bottom + 10;
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        tooltip.classList.add('show');

    });

    button.addEventListener('mouseleave', function() {
        tooltip.classList.remove('show');
    });



}

showTooltip('tooltip1', 'tooltiptext1');
showTooltip('tooltip2', 'tooltiptext2');