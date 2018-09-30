/**
 * Formats date
 * @param {Date} date
 * @returns {string} 
 */
export function BeautifyDate(date) {
    // Getting data
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Return statement
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

/**
 * Generates date
 * @param {Date} date Date to format
 * @returns {HTMLParagraphElement} 
 */
export function GenerateDate(date) {
    // Creating container
    const container = document.createElement('p');

    // Creating clock icon
    const clockIcon = document.createElement('i');
    clockIcon.className = 'fa fa-clock-o fa-2x';
    container.appendChild(clockIcon);

    // Adding date
    const span = document.createElement('span');
    span.innerHTML = BeautifyDate(date);
    container.appendChild(span);

    // Return statement
    return container;
}