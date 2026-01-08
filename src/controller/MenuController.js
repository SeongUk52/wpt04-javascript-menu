import MenuView from "../view/MenuView.js";
import MenuService from "../service/MenuService.js";

class MenuController {
  #service;
  #view;

  constructor(service = new MenuService(), view = MenuView, sample) {
    this.#service = service;
    this.#view = view;
  }
/*
  async run() {
    try {
      const namesInput = await this.#view.inputNames();
      const names = validateNames(namesInput);

      const gameResult = this.#service.playGame(names);

      this.#view.printGameResults(gameResult.gameResults);
      this.#view.printWinners(gameResult.winners);
    } catch (error) {
      this.#view.printError(error.message);
      throw error;
    }
  }
*/
}

export default MenuController;
