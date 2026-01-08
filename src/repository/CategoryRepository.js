class CategoryRepository {
    #categorys

    constructor() {
        this.#categorys = []
    }

    save(template) {
        this.#categorys.push(template);
    }

    findByName(name) {
        return this.#categorys.find(v => v.getName === name);
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