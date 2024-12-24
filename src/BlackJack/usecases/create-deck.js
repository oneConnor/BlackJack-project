import _ from 'underscore'

/**
 * Esta funcion genera una nueva Baraja
 * @param {Array} tiposDeCarta ej: ['C','D','H','S'];
 * @param {Array} tiposEspeciales ej: ['A','J','Q','K'];
 * @returns {Array} retorna un nuevo deck
 */

// Esta función crea un nuevo deck
 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0)
         throw new Error ("Tipos de carta es obligatorio");

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error ("TiposEspeciales es obligatorio");


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
   
    deck = _.shuffle( deck );
    return deck;
}
