class HumanLike {
    static birthSpace = "earth";
    public readonly sex: string;
    private _name: string;
    protected race: string;
    constructor(sex: string, race: string) {
        this.sex = sex;
        this.race = race;
    }
    fuck() {
        console.log(this.sex === "female" ? "|_|" : "_|_");
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        if (this.name === undefined) {
            this._name = name;
        } else {
            console.log("don`t name a people twice.");
        }
    }
}

class Asian extends HumanLike {
    public character: string;
    constructor(sex: string, character: string) {
        super(sex, "asian");
        this.character = character;
    }
}

let foo: HumanLike = new HumanLike("female", "asian");

let bar: Asian = new Asian("male", "doctor");

let xcc: HumanLike;
console.log(xcc);

foo = bar;
bar.fuck();

foo.name = "wang";
console.log(HumanLike.birthSpace);
console.log(foo.name);
