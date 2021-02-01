const pool = require('../app/database');

class UserService {
    async create(user) {
        const {name, password} = user;
        const statement = `
            INSERT INTO users (name, password) VALUES (?, ?)
        `;
        const result = await pool.execute(statement, [name, password]);
        return result[0];
    }
    async findUserByName(name) {
        const statement = `
            SELECT * FROM users WHERE name = ?;
        `;
        const result = await pool.execute(statement, [name]);
        return result[0];
    }
}

module.exports = new UserService;