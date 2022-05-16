const mysql = require('mysql')

const openConnection = () => {
    const connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'manager123',
        database: 'tiffin_db',
    })
    connection.connect()
    return connection
}

module.exports = {
    openConnection,
}