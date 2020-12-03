

const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.githubUsername;
    }
}

module.exports = Engineer;