const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/api/contatos',(req,res)=>{
    const contatos = [
        {
            nome:"João",
            email:"joao@teste.com.br",
            tipo:"Família"
        },
        {
            nome:"Maria",
            email:"maria@teste.com.br",
            tipo:"Família"
        },
        {
            nome:"Ana",
            email:"ana@teste.com.br",
            tipo:"Trabalho"
        },
    ]
    res.json({contatos})
})


app.listen(3000,()=>console.log('Servidor Web rodando no endereço http://localhost:3000'));