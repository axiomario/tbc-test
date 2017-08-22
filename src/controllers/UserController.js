import { extendObservable } from 'mobx';

class User {
    constructor(name, email, check) {
        this.name = name;
        this.email = email;
        this.check = check;
    }
}

class Controller {
    constructor() {
        this.requestUsers();

        extendObservable(this, {
            array: []
        });
    }

    requestUsers() {
        const self = this;

        fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
            .then((response) => { return response.json() })
            .then((data) => {
                data.forEach(function(row) {
                    self.array.push(new User(row.name, row.email, false));
                });

                self.array = self.array.sort(function(a, b) {
                    return a.name > b.name;
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

var users = new Controller();
export default users;