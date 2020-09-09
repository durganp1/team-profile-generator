

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('returns github user name', () => {
    const engineer = new Engineer('Pete', 1, "pete@pete.com", 'durganp1');

    expect(engineer.githubUsername).toBe('durganp1');
});

test('gets employees role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});

