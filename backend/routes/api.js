var express = require('express');
var router = express.Router();
var administradorModel = require('./../models/administradorModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');


// cuando recibe administrador
router.get('/fotos', async function (req, res, next) { //galeria o administrador?
    let fotos = await administradorModel.getFotos();

    fotos = fotos.map(fotos => {
        if (fotos.img_id) {
            const imagen = cloudinary.url(fotos.img_id, {
                width: 200,
                height: 200,
                crop: 'fill'
            });
            return {
                ...fotos,
                imagen
            }
        } else {
            return {
                ...fotos,
                img_id: ''
            }
        }
    });

    res.json(fotos);
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