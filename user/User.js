 class  User {

    _name ;
    _gender;
    _age;

    constructor(name='Taras', gender, age) {
        this._name = name;
        this._gender = gender;
        this._age = age;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

}



module.exports= User