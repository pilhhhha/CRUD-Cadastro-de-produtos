const http = require('http');
const axios = require("axios");
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use (bodyParser.json());
const porta = 5000;
app.set('port', porta);

    const cliente = [
        {
            CliId: 1,
            CliNome: 'Pedro',
            CliSaldo: ''
        }
    ]

    app.get('pedido', (req, res, next) => {
        res.json(produtos);
        });
    app.post('pedido', (req, res, next) => {
        const NovoProduto = req.body;
        produtos.push({ProudId: contador += 1, ProudNome: NovoProduto.ProudNome, ProudUnidade: NovoProduto.ProudUnidade, ProudValorUnidade: NovoProduto.ProudValorUnidade});
        console.log(NovoProduto);
        res.end();
            });
    app.put("/produto/:id", (req,res,next)=>{
        const ProdutoComDadosNovos = req.body;
        const index = produtos.findIndex(c=>c.ProudId === parseInt(req.params.id));
        const ProdutoParaAtualizar = produtos[index];
                
        ProdutoParaAtualizar.ProudUnidade = ProdutoComDadosNovos.ProudUnidade;
        ProdutoParaAtualizar.ProudValorUnidade = ProdutoComDadosNovos.ProudValorUnidade;
                
        res.status(204).send();
            
            });
    app.delete("/produto/:id", (req,res, next)=>{
        const ProudIdParam = req.params.id;
        const index = produtos.findIndex(c=>c.ProudId === parseInt(ProudIdParam));
        produtos.splice(index,1)
        res.status(204).send();

    

    });
    
          
            
    
const server = http.createServer(app);
server.listen(5000);