import {Random as Randoms} from "@woowacourse/mission-utils/src";

class Category {
    #name;
    #menus;

    constructor(name, menus) {
        this.#name = name;
        this.#menus = menus;
    }

    shuffleMenu() {
        return Randoms.shuffle(this.#menus)[0];
    }

    getName() {
        return this.#name;
    }
}

export default Category;