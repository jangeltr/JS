import { fromEvent } from "rxjs";

const onKeyDown$ = fromEvent(document, "keypress");

const observadorTeclado = {
    next: (event) => {
        const key = event.key
        console.log("Control = "+event.ctrlKey) //true si esta presionada la tecla Ctrl
        console.log("Alt = "+event.altKey)      //true si esta presionada la tecla Alt
        console.log("Shift = "+event.shiftKey)  //true si esta presionada la tecla Shift
        console.log(key)                        //tecla presionada
    },
};

onKeyDown$.subscribe(observadorTeclado);