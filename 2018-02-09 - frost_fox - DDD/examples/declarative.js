class Container{
    constructor(features){
        this.features = features;
    }
}

class Specification {

    constructor(feature){
        this.feature = feature;
    }

    isSatisfiedBy(container) {
        return container.features.contains(this.feature);
    }

}

const container = new Container(['one', 'two', 'three']);
const specification1 = new Specification('one');
const specification2 = new Specification('two');

specification1.isSatisfiedBy(container);

