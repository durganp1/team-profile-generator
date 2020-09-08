

const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    
    const employee = new Employee('Pete', 1, 'pete@pete.com');

    expect(employee.name).toBe('Pete');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('pete@pete.com');
    
});

test("gets employee name", () => {
    const employee = new Employee('Pete');

    expect(employee.getName()).toBe('Pete');
});

test('gets employee id', () => {
    const employee = new Employee('P', 1);

    expect(employee.getId()).toEqual(1);
});

test('gets employee email', () => {
    const employee = new Employee('p', 1, 'pete@pete.com');

    expect(employee.getEmail()).toBe('pete@pete.com');
});

test('gets employee role', () => {
    const employee = new Employee('p', 1, 'a');
    const role = 'Employee';

    expect(employee.getRole()).toBe('Employee');

});