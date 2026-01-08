import Category from "../domain/Category";

class MenuService {
    #categoryRepository;

    constructor(sample, categoryRepository) {
        this.#categoryRepository = categoryRepository;
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

}

export default MenuService;