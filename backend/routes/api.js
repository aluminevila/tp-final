var express = require('express');
var router = express.Router();
var administradorModel = require('./../models/administradorModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');


// cuando recibe administrador
router.get('/galeria', async function (req, res, next) {
    let servicios = await administradorModel.getServicios();

    servicios = servicios.map(servicio => {
        if (servicio.img_id) {
            const imagen = cloudinary.url(servicio.img_id, {
                width: 100,
                height: 100,
                crop: 'fill' 
            });
            return {
                ...servicio,
                img_id: imagen
            }
        } else {
            return {
                ...servicio,
                img_id: ''
            }
        }
    });

    res.json(servicios);
});

//contacto
router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'alumine.vk@gmail.com',
        subject: 'Contacto a través de la web',
        html: `${req.body.nombre} ${req.body.apellido} se contactó a través de la web y quiere más información a este correo: ${req.body.email}
        <br>Dejó el siguiente mensaje: ${req.body.mensaje}
        <br>Son ${req.body.cantidadpersonas} personas
        <br>Con fecha aproximada de ingreso: ${req.body.fechaingreso}
        <br>Su teléfono es: ${req.body.telefono}.`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
}); // cierra post/api

module.exports = router;