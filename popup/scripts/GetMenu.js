/**
 * Gets menu
 * @returns {{soups: string[], secondCourses: string[], salads: string[], date: Date}}} Menu
 */
export async function GetMenu(params) {
    // Getting page content
    const doc = await fetch(`https://cors-escape.herokuapp.com/http://www.kuchniatradycyjna.pl/`)
        .then(r => r.text())
        .then(r => new DOMParser().parseFromString(r, "text/html"))

    // Getting text
    const text = doc.getElementById('pwebbox_article_99').innerText.toLocaleLowerCase();

    // Getting soups
    const soups = text
        .substring(
            text.indexOf("zupa dnia") + "zupa dnia".length,
            text.indexOf("danie dnia")
        )
        .replace(/(\r\n\t|\n|\r\t)/gm, "")
        .split('-')
        .filter(v => v.trim() !== '' && !v.includes(':') && !v.includes(';'))
        .map(v => v.trim())

    // Getting second cource
    const secondCourses = text
        .substring(
            text.indexOf("danie dnia") + "danie dnia".length,
            text.indexOf("sałatka dnia")
        )
        .replace(/(\r\n\t|\n|\r\t)/gm, "")
        .split('-')
        .filter(v => v.trim() !== '' && !v.includes(':') && !v.includes(';'))
        .map(v => v.trim())

    // Getting salads
    const salads = text
        .substring(
            text.indexOf("sałatka dnia") + "sałatka dnia".length
        )
        .replace(/(\r\n\t|\n|\r\t)/gm, "")
        .split('-')
        .filter(v => v.trim() !== '' && !v.includes(':') && !v.includes(';'))
        .map(v => v.trim())

    // Return statement
    return {
        soups,
        secondCourses,
        salads,
        date: new Date()
    };
}