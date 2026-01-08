class CategoryRepository {
    #categorys

    constructor() {
        this.#categorys = []
    }

    save(template) {
        this.#categorys.push(template);
    }

    findAll() {
        return [...this.#categorys];
    }

    count() {
        return this.#categorys.length;
    }

    clear() {
        this.#categorys = [];
    }
}

export default CategoryRepository;