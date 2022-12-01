var pool = require('./bd');

async function getServicios() {
    var query = 'select * from servicios';
    var rows = await pool.query(query);
    return rows;
}

async function insertServicio(obj) {
    try {
        var query = "insert into servicios set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    } // cierra catch
} // cierra insert

//borrar:
async function deleteServiciosById(id) {
    var query = 'delete from servicios where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//trae el servicio por id
async function getServicioById(id) {
    var query = 'select * from servicios where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//actualización
async function modificarServicioById(obj, id) {
    try {
        var query = 'update servicios set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getServicios, insertServicio, deleteServiciosById, getServicioById, modificarServicioById }