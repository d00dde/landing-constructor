import "./experiment.scss";
export class Experiment {
  render(data) {
    return `
      <section class="experiment">
        <div class="outer">
          <div class="inner">${data.title}</div>
        </div>
      </section>
    `;
  }
  init(data) {
    console.log("Experiment init!");
  }
}
