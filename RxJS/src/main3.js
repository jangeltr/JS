/**
 * Observables: Subject
 * https://rxjs.dev/guide/subject
 */
import { Observable, Subject } from "rxjs";

const numbers$ = new Observable((subscriber) => {
  subscriber.next(Math.round(Math.random() * 100)); //Con el observable normal enviara valores distintos a cada observador
});                                                 //porque se ejecuta ese codigo por cada observador

const numbersRandom$ = new Subject();               //Este es un observador/observable intermedio que se suscribe al observable

const observador1 = {
    next: (number) => {
        console.log(number);
    },
};

const observador2 = {
    next: (number) => {
        console.log(number);
    },
};


numbersRandom$.subscribe(observador1);              //suscribimos a los observadores al observer intermedio
numbersRandom$.subscribe(observador2);

numbers$.subscribe(numbersRandom$);                 //susbribimos al observador intermedio al observable y asi todos los observadores
                                                    //recibiran el mismo valor random