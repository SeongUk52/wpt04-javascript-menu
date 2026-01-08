class CoachRepository{
    #Coaches

    constructor() {
        this.#Coaches = []
    }

    save(coach) {
        this.#Coaches.push(coach);
    }

    findAll() {
        return [...this.#Coaches];
    }

    count() {
        return this.#Coaches.length;
    }

    clear() {
        this.#Coaches = [];
    }
}

export default CoachRepository;