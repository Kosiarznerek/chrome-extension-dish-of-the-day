// Imports
import {
    GetMenu
} from "./GetMenu.js";

import {
    GenerateList
} from "./GenerateList.js";

import {
    GenerateDate
} from "./GenerateDate.js";

// Update data
(async () => {
    // Getting data
    const data = await GetMenu();

    // Clear
    const cont = document.getElementById('container');
    cont.innerHTML = '';

    // Adding date
    const date = GenerateDate(data.date);
    date.className = 'dateParagraph';
    cont.appendChild(date);

    // Adding courses
    cont.appendChild(GenerateList('Zupy', data.soups))
    cont.appendChild(GenerateList('Drugie danie', data.secondCourses))
    cont.appendChild(GenerateList('Sałatki', data.salads))
})()