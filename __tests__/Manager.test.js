

const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test('gets office number for manager', () => {
    const manager = new Manager('p', 1, 'p', 5);

    expect(manager.officeNumber).toEqual(5);
});

test('gets employee role', () => {
    const manager = new Manager();
    const role = 'Manager';

    expect(manager.getRole()).toBe(role);

});

