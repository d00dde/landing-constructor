import "./navbar.scss";

export class Navbar {
  render(data) {
    return `
      <section class="navbar">
          <div class="logo"></div>
          <ul class="menu">
            ${this.createMenuList(data.menuItems)}
          </ul>
      </section>
    `;
  }

  init() {
    console.log("Navbar init!");
  }

  createMenuList(menuItems) {
    return menuItems
      .map((item) => {
        return `
        <li class="menu-item">
          <a href="${item.href}">${item.title}</a>
        </li>
      `;
      })
      .join("");
  }
}
