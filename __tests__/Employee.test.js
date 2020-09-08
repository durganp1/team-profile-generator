

const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee;

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toBe(expect.stringContaining('@'));

});