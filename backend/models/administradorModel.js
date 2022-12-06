var pool = require('./bd');


//lista
async function getFotos() {
    var query = 'select * from galeria';
    var rows = await pool.query(query);
    return rows;
}

//trae una foto por id
async function getFotoById(id) {
    var query = 'select * from galeria where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//agregar
async function insertFoto(obj) {
    try {
        var query = "insert into galeria set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    } 
}

//eliminar
async function deleteFotoById(id) {
    var query = 'delete from galeria where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//modificar
async function modificarFotoById(obj, id) {
    try {
        var query = 'update galeria set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getFotos, getFotoById, insertFoto, deleteFotoById, modificarFotoById }