var express = require('express');
var router = express.Router();
var administradorModel = require('../../models/administradorModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


//lista
router.get('/', async function(req, res, next) {

  var administrador = await administradorModel.getFotos();

  administrador = administrador.map(foto => {
    if (foto.img_id) {
      const imagen = cloudinary.image(foto.img_id, {
        width: 25,
        height: 25,
        crop: 'fill'
      });
      return {
        ...foto,
        imagen
      }
    } else {
      return {
        ...foto,
        imagen: ''
      }
    }
  });

  res.render('admin/administrador', { //login.hbs
    layout: 'admin/layout', //layout.hbs
    persona: req.session.nombre,
    administrador
  });
});

//agregar
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});


router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';
    // console.log(req.files.imagen);
    if (req.files && Object.keys(req.files).length > 0) {
      foto = req.files.foto;
      img_id = (await uploader(foto.tempFilePath)).public_id;
    }
    if (req.body.img_id != ""){
      await administradorModel.insertFoto({
        ...req.body,
        img_id
      });
      res.redirect('/admin/administrador')
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se ha podido agregar la imagen'
    })
  }
})

//eliminar
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let foto = await administradorModel.getFotoById(id);
  if (foto.img_id) {
    await (destroy(foto.img_id));
  }

  await administradorModel.deleteFotoById(id);
  res.redirect('/admin/administrador');
});

//modificar
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var foto = await administradorModel.getFotoById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    foto
  })
});

//actualizar

router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      img_id
    }
    // console.log(obj)

    await administradorModel.modificarFotoById(obj, req.body.id);
    res.redirect('/admin/administrador');
  }
  catch (error) {
    // console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se ha podido modificar la novedad'
    })
  }
})

module.exports = router;