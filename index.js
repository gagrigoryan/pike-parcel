class MyComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "My component, Hello";
    }
}

customElements.define("my-component", MyComponent);
