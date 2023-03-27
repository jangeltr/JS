class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});           //Esta linea es para encapsular y que los estilos de afuera no afecten el interior del componente
    }
    static get observedAttributes() {               //Lista de atributos del componente
        return ["title", "parrafo", "img"];
    }
    attributeChangedCallback(attr, oldValue, newValue){ //Funcion que toma el valor del atributo y lo coloca en la variable
        if (attr === "title") {
            this.title = newValue;
        }
        if (attr === "parrafo") {
            this.parrafo = newValue;
        }
        if (attr === "img") {
            this.img = newValue;
        }
    }
    getTemplate() {                                     //Funcion con todo el contenido del elemento
        const template = document.createElement("template");    //Se crea un elemento Template
        template.innerHTML = `
            <section>
            <h2>Hola mundo!</h2>
            <div>
                <slot name="title1"></slot>             //esta etiqueta pondra el contenido de <my-element> <span slot="title1">
            </div>
            <div>
                <p>
                    <slot name="title2"></slot>         //esta etiqueta pondra el contenido de <my-element> <span slot="title2">
                </p>
            </div>
            <h3>${this.title}</h3>
            <img src="${this.img}">
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
            :host{                                      //pseduclase para poner estilos al componente completo y no a sus elementos
                display: inline-block;
            }
            :host(.blue){                               //<my-element class="blue">
                background: blue;                       //Si nuestro componente HTML tiene especificada la clase blue le aplica este estilo
            }
            :host[chido]{                               //<my-element chido>
                background: yellow;                     //Si el elemento tiene el atributo chido definido
            }
            :host[chido] h1{                            //Si el elemento tiene el atributo chido a los elemento h1 internos led define un estilo
                color: yellow;
            }
            ::slotted(span) {                           //pseudoelemento -- <my-element> <span slot="title1">
                font-size: 30px;
                color: red;
            }
            ::slotted(.text) {                          //pseudoelemento -- <my-element> <span slot="title1" class="text">
                color: blue;
            }
            h2 {                                        //Estilos al elemento h2 dentro de nuestro componente
                color: red;
            }
            </style>
        `;
    }

    connectedCallback() {                           //Funcion que agrega el elemento al DOM y ya se ve en la pagina web
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));    //Necesita ser clonado porque mi elemento es un Template
                                                                                    //Y shadowRoot es para encapsular el componente sin que se afecte por los estilos externos
        //this.appendChild(this.getTemplate().content.cloneNode(true));             //Se puede aplicar asi pero se veria afectado por los estilos externos
        //this.appendChild(this.getTemplate());                                     //si no es template solo se agrega con appendChild
    }                                                                             

    disconnectedCallback() {                        //Esta funcion se autoejecuta cuando removemos el elemento del DOM
        console.log("Adios del DOM");
    }
}
customElements.define("my-element", myElement);