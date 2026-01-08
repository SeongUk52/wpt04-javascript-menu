class Coach {
    #menus;
    #canNotEat;
    #name;

    constructor(name) {
        this.#menus = [];
        this.#canNotEat = [];
        this.#name = name;
    }

    isEatable(menu) {
        return (!this.#canNotEat.includes(menu) && !this.#menus.includes(menu));
    }

    pushMenu(menu) {
        this.#menus.push(menu);
    }

    setCanNotEat(menus) {
        this.#menus = menus;
    }

    getName() {
        return this.#name;
    }
}

export default Coach;