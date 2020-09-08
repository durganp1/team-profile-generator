

const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('returns school name', () => {
    const intern = new Intern('Pete', 1, 'pete@pete.com', 'U of W');

    expect(intern.schoolName).toBe('U of W');
});

test('gets employees role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});