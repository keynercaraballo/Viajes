import {Viaje} from '../model/Viaje.js';
import { Testimonial } from '../model/Testimoniales.js';

const paginaInicio = async(req, res) =>{

    //consultar 3 viajes del modelo viaje 
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limite: 3}));
    promiseDB.push(Testimonial.findAll({ limite: 3}))
    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio',{
            pagina:  'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
        
    } catch (error) {
        console.log(error);
    }
    
}

const paginaNosotros =  (req, res) =>{
   
    res.render('nosotros', {
        pagina:  'Nosotros'
    })
};

const paginaViajes = async (req, res) =>{
    //consultar BD
    const viajes = await Viaje.findAll();
   
    res.render('viajes', {
        pagina:  'Proximos Viajes',
        viajes,
    })
};

//muestra un viaje por su slug 
const paginaDetalleViaje = async (req, res) =>{
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where : {slug }});
        res.render('viaje',{
            pagina: 'Informacion de Viaje',
            
        })
        
    } catch (error) {
        console.log(error);
        
    }

}

const paginaTestimoniales = async(req, res) =>{
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina:  'Testimoniales',
            testimoniales
        })
        
    } catch (error) {
        console.log(error);
    }
   
    
};



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}