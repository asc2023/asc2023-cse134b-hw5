class ButtonCount extends HTMLElement {
constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        button.textContent = "Times Clicked: 0";
        let count = 0;
        button.addEventListener("click", () => {
            count++;
            button.textContent = "Times Clicked: "+ count.toString();
        });

        shadow.appendChild(button);
    }
}

  window.customElements.define("button-counter", ButtonCount);
  export default ButtonCount;