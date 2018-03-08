class Voyage {

    constructor(capacity) {
        this.capacity = capacity;
        this.bookedCapacity = 0;
    }

    addCargo(cargo) {
        if (this.bookedCapacity + cargo.size > this.capacity * 1.1) {
            return false;
        }

        this.bookedCapacity += cargo.size;
    }

}

class Cargo {
    constructor(size) {
        this.size = size;
    }
}
