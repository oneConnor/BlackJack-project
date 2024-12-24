import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCartaHTML } from "./crear-carta-html";

/**
 * Turno de la computadora
 * @param {number} puntosMinimos Puntos minimos que necesita la computadora para ganar
 * @param {array<string>} deck 
 * @param {HTMLElement}  puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement}  divCartasComputadora elemento HTML para mostrar las cartas
 */



 export const turnoComputadora = ( puntosMinimos, deck = [], puntosHTML,  divCartasComputadora ) => {
    
     if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
        if (!puntosHTML) throw new Error("puntosHTML es necesario");
        let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
