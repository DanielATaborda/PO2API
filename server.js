const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

const POE2_NINJA_API = 'https://poe.ninja/poe2/api/economy/exchange/current/overview';

app.get('/api/poe2/exchange', async (req, res) => {
    try {
        const { league, type } = req.query; // Pega ?league=...&type=... enviados pelo seu frontend

        console.log(`[Proxy] Buscando dados de PoE2 para League: ${league} | Type: ${type}`);

        const response = await axios.get(POE2_NINJA_API, {
            params: { league, type },
            headers: {
                // Essencial para o poe.ninja identificar a requisição e não bloquear por segurança
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        // Retorna o JSON limpo contendo as "lines" com os preços de mercado para o seu frontend
        res.json(response.data);
    } catch (error) {
        console.error('[Proxy Erro]:', error.message);
        res.status(error.response?.status || 500).json({
            error: 'Erro ao conectar com a API do poe.ninja',
            details: error.message
        });
    }
});

function iniciarServidor(){
    return new Promise((resolve, reject)=>{
        const servidor = app.listen(PORT, (erro)=>{
            if(erro) return reject(erro);
                console.log(`Proxy de PoE2 rodando em http://localhost:${PORT}`);
                console.log(`Teste no navegador: http://localhost:${PORT}/api/poe2/exchange?league=Standard&type=Currency`);
                resolve(servidor);
            });
    });
};

if(require.main === module){
    iniciarServidor().catch((erro)=>{
        console.error(erro.message);
        process.exit(1);
    })
}

module.exports = { iniciarServidor, PORT};