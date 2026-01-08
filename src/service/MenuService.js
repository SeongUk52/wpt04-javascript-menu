import Category from "../domain/Category";

class MenuService {
    #categoryRepository;
    #coachRepository;
    #weekOfTheDayCategory;

    constructor(sample, categoryRepository, coachRepository, weekOfTheDayCategory) {
        this.#categoryRepository = categoryRepository;
        this.#coachRepository = coachRepository;
        this.#weekOfTheDayCategory = weekOfTheDayCategory;
        this.#initialize(sample);
    }

    #initialize(sample) {
        Object.entries(sample).forEach(([name, menus]) => {
            const menuList = menus
                .split(',')
                .map(menu => menu.trim());

            const category = new Category(name, menuList);
            this.#categoryRepository.save(category);
        });
    }

    run() {
        for (let i = 0; i < 5; i++) {
            this.play();
        }
    }

    play() {
        this.#weekOfTheDayCategory.setCategory();
        const todayCategory = this.#categoryRepository.findByName(this.#weekOfTheDayCategory.lastCategory());
        this.#coachRepository.findAll().forEach(v => {
            while (true) {
                const todayMenu = todayCategory.shuffleMenu();
                if (v.isEatable(todayMenu)) {
                    v.pushMenu(todayMenu);
                    break;
                }
            }
        })
    }

}

export default MenuService;