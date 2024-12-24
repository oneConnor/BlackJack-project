
/** 
 * Esta funcion pide una carta del deck
 * @param {Array<string>} deck es un arreglo de string 
 * @returns {string} retorna una carta del Deck
 */

 export const pedirCarta = (deck) => {

    if ( !deck || deck.lenght === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
