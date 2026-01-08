class Coach {
    #menus;
    #canNotEat;

    constructor() {
        this.#menus = [];
        this.#canNotEat = [];
    }

    isEatable(menu) {
        return (!this.#canNotEat.includes(menu) && !this.#menus.includes(menu));
    }

    pushMenu(menu) {
        this.#menus.push(menu);
    }
}

export default Coach;