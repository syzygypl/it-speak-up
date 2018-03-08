class Container {
    constructor(features) {
        this.features = features;
    }
}

class Specification {

    constructor(feature) {

    }

    isSatisfiedBy(container) {

    }

    and(specification) {
        return new AndSpecification(this, specification);
    }

    or(specification) {
        return null;
    }

    not(){
        return null;
    }
}

class NotSpecification {

}

class OrSpecification {

}

class AndSpecification {
    constructor(spec1, spec2) {
        this.spec1 = spec1;
        this.spec2 = spec2;
    }

    isSatisfiedBy(container) {
        return this.spec1.isSatisfiedBy(container) || this.spec2.isSatisfiedBy(container);
    }
}

const VENTILATED = 'vent';
const ARMORED = 'armor';
const VENTILATED_PLUS = 'vent+';

const container = new Container([VENTILATED, ARMORED, VENTILATED_PLUS]);
const specification1 = new Specification(VENTILATED);
const specification2 = new Specification(ARMORED);

specification1.isSatisfiedBy(container);
specification1.and(specification2).isSatisfiedBy(container);
// specification1.isSatisfiedBy(container) || specification2.isSatisfiedBy(container);

const complexSpecification = specification1.and(specification2);

complexSpecification.isSatisfiedBy(container);

// don't forget static factory method
// Specification.of(VENTILATED).and(Specification.of(ARMORED)).isSatisfiedBy(container);
