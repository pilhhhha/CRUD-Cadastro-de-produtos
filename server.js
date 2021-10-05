const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use (bodyParser.json());
const porta = 3000;
app.set('port', porta);

let contador = 2;

const produtos = [
    {
    ProudId: 1,
    ProudNome: 'Joao',
    ProudUnidade: '',
    ProudValorUnidade: ''
    },
    {
    ProudId: 2,
    ProudNome: 'Cristina',
    ProudUnidade: '',
    ProudValorUnidade: ''
    }
    ]
    app.get('/produto', (req, res, next) => {
        res.json(produtos);
        });
    app.post('/produto', (req, res, next) => {
        const produtos = req.body;
        produtos.push({ProudId: contador += 1, ProudNome: produtos.ProudNome, ProudUnidade: produtos.ProudUnidade, ProudValorUnidade: produtos.ProudValorUnidade});
        console.log(produtos);
        res.end();
            });
    app.put("/produto/:id", (req,res,next)=>{
        const ProdutoComDadosNovos = req.body;
        const index = produtos.findIndex(c=>c.ProudId === parseInt(req.params.ProudId));
        const ProdutoParaAtualizar = Produtos[index];
                
        produtoParaAtualizar.ProudNome =  produtoComDadosNovos.ProudNome;
        produtoParaAtualizar.ProudUnidade = produtoComDadosNovos.ProudUnidade;
        produtoParaAtualizar.ProudValorUnidade = produtoComDadosNovos.ProudValorUnidade;
                
        res.status(204).send();
            
            });
    app.delete("/produto/:id", (req,res, next)=>{
        const ProudIdParam = req.params.ProudId;
        const index = produtos.findIndex(c=>c.ProudId === parseInt(ProudIdParam));
        produtos.splice(index,1)
        res.status(204).send();

    

    });
    
          
            
    
const server = http.createServer(app);
server.listen(3000);
