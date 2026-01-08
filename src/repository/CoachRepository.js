class CoachRepository{
    #coaches

    constructor() {
        this.#coaches = []
    }

    save(coach) {
        this.#coaches.push(coach);
    }

    findAll() {
        return [...this.#coaches];
    }

    count() {
        return this.#coaches.length;
    }

    clear() {
        this.#coaches = [];
    }

    findNameAll() {
        return this.#coaches.map(v => v.getName);
    }
}

export default CoachRepository;