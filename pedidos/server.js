const http = require('http');
const axios = require("axios");
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use (bodyParser.json());
const porta = 4000;
app.set('port', porta);

    const pedidos = [
        {
            PedId: 1,
            PedNome: '',
            ObservacoesDoPed: ''
    }
    ]

    app.get('pedido', (req, res, next) => {
        res.json(pedidos);
        });
    app.post('pedido', (req, res, next) => {
        const NovoPedido = req.body;
        produtos.push({PedId: contador += 1, PedNome: NovoPedido.ProudNome, ObservacoesDoPed: NovoPedido.ObservacoesDoPed});
        console.log(NovoPedido);
        res.end();
            });
    app.put("/produto/:id", (req,res,next)=>{
        const PedidoComDadosNovos = req.body;
        const index = pedidos.findIndex(c=>c.PedId === parseInt(req.params.id));
        const PedidoParaAtualizar = pedidos [index];
                
        PedidoParaAtualizar.PedNome = PedidoComDadosNovos.PedNome;
        PedidoParaAtualizar.ObservacoesDoPed = PedidoComDadosNovos.ObservacoesDoPed;
                
        res.status(204).send();
            
            });
    app.delete("/produto/:id", (req,res, next)=>{
        const PedIdParam = req.params.id;
        const index = pedidos.findIndex(c=>c.PedId === parseInt(PedIdParam));
        produtos.splice(index,1)
        res.status(204).send();

    

    });
    
          
            
    
const server = http.createServer(app);
server.listen(4000);