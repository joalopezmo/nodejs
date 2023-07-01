const {GoogleSpreadsheet} = require('google-spreadsheet');
const credentials = require('./json/credencials.json');

let googleId  = ""; //id de la hoja de calculo - recordar que el id debe ser publico

async function accessSpreadsheetOne(){
    const doc = new GoogleSpreadsheet(googleId); //instanciamos la hoja de calculo
    await doc.useServiceAccountAuth(credentials); //pasamos las credenciales
    await doc.loadInfo(); //cargamos la informacion de la hoja de calculo
    const sheet = doc.sheetsByIndex[0]; //obtenemos la primera hoja de calculo
    const rows = await sheet.getRows(); //obtenemos las filas
    // return rows; // retornamos las filas
    //retornamos la filas en json
    const res = rows.map(row => {
        return{
            headers: row._sheet.headerValues,
            numberRaw: row._rowNumber,
            rawData: row._rawData,
        }
    })
    return res;

}

async function accessSpreadsheetTwo(){
    const doc = new GoogleSpreadsheet(googleId); //instanciamos la hoja de calculo
    await doc.useServiceAccountAuth(credentials); //pasamos las credenciales
    await doc.loadInfo(); //cargamos la informacion de la hoja de calculo
    const sheet = doc.sheetsByIndex[1]; //obtenemos la primera hoja de calculo
    const rows = await sheet.getRows(); //obtenemos las filas
    // return rows; // retornamos las filas
    //retornamos la filas en json
    const res = rows.map(row => {
        return{
            headers: row._sheet.headerValues,
            numberRaw: row._rowNumber,
            rawData: row._rawData,
        }
    })
    return res;


}


module.exports= {
    accessSpreadsheetOne: accessSpreadsheetOne,
    accessSpreadsheetTwo: accessSpreadsheetTwo,
}