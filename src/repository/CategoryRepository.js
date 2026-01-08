class CategoryRepository {
    #templates

    constructor() {
        this.#templates = []
    }

    save(template) {
        this.#templates.push(template);
    }

    findAll() {
        return [...this.#templates];
    }

    count() {
        return this.#templates.length;
    }

    clear() {
        this.#templates = [];
    }
}

export default CategoryRepository;