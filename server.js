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
server.listen(3000);
