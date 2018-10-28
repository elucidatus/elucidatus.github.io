class App {
  constructor() {
    const menu = document.querySelectorAll('.menu-item');
    const startpage = "about-me";
    this.openPage(startpage);

    for (let menu_item of menu) {
      menu_item.addEventListener("mouseover", () => {
        menu_item.classList.add('hover');
        menu_item.classList.remove('unhover');
      });
      menu_item.addEventListener("mouseout", () => {
        menu_item.classList.remove('hover');
        menu_item.classList.add('unhover');
      });
      menu_item.addEventListener("click", () => {
        for (let item of menu) {
          item.classList.add('unselected');
          item.classList.remove('selected');
        }
        menu_item.classList.add('selected');
        menu_item.classList.remove('unselected');
        this.openPage(menu_item.id);
      });
    }
  }
  openPage(id) {
    // TODO: put the selected and unselected here.
    const content = document.querySelector('#content');
    const title = pages[id][0];
    content.querySelector('h1').innerHTML = title;
    content.querySelector('span').innerHTML = pages[id][1];
  }
}

const app = new App();
