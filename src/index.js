const app = require('./app');

app.listen(3000, () => {   
    try{
        console.log('Server on port 3000, all right!');
    }catch(error){
        console.log(error);
    }
});