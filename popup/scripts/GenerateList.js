/**
 * Generates list
 * @param {string} title List title 
 * @param {string[]} data Data to render
 * @returns {HTMLUListElement}
 */
export function GenerateList(title, data) {
    // Holder
    const ul = document.createElement('ul');
    ul.className = 'list-group';

    // Title
    const tli = document.createElement('li');
    tli.className = 'list-group-item active';
    tli.innerText = title;
    ul.appendChild(tli);

    // Data
    data.forEach(val => {
        let dli = document.createElement('li');
        dli.className = 'list-group-item';
        dli.innerText = val;
        ul.appendChild(dli);
    })

    // Return statement
    return ul;
}