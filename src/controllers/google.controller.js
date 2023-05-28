const googleSheet= require('../spreadsheet');

const obtenerDatosOne = async (req, res) => {
    const datos = await googleSheet.accessSpreadsheetOne();
    try{
        res.json(datos);
    }catch(error){
        console.log(error);
    }
};

const obtenerDatosTwo = async (req, res) => {
    const datos = await googleSheet.accessSpreadsheetTwo();
    try{
        res.json(datos);
    }catch(error){
        console.log(error);
    }
};




module.exports = {
    obtenerDatosOne: obtenerDatosOne,
    obtenerDatosTwo: obtenerDatosTwo,
};