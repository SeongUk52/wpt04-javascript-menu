import Category from "./Category";
import {Random as Randoms} from "@woowacourse/mission-utils/src";

class WeekOfTheDayCategory {
    static CATEGORY = {1: '일식', 2: '한식', 3: '중식', 4: '아시안', 5: '양식'};

    #categoryOrder;

    constructor() {
        this.#categoryOrder = [];
    }

    setCategory() {
        const newCategory = WeekOfTheDayCategory.CATEGORY[Randoms.pickNumberInRange(1, 5)];
        if(this.#categoryOrder
            .filter(v => v === newCategory)
            .length < 2) {
            this.#categoryOrder.push(newCategory);
            return;
        }
        this.setCategory();
    }

    lastCategory() {
        return this.#categoryOrder[-1];
    }
}

export default WeekOfTheDayCategory;