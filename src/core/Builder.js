export class Builder {
  constructor(data, ...components) {
    this.components = components.map((component) => new component());
    this.root = document.querySelector("#root");
    this.render(data);
    this.components.forEach((component) =>
      component.init(data[component.constructor.name]),
    );
  }

  render(data) {
    this.root.innerHTML = this.components
      .map((component) => component.render(data[component.constructor.name]))
      .join("");
    const { sansSerif, serif } = data.fonts;
    document.body.style.fontFamily = sansSerif;
    document.querySelectorAll(".serif-font").forEach((el) => {
      el.style.fontFamily = serif;
    });
  }
}
