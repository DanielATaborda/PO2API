const {app, BrowserWindow, dialog} = require('electron');
const {iniciarServidor, PORT} = require('../server')

let servidor;

async function criarJanela(){
    try{
        servidor = await iniciarServidor();
    }
    catch(erro){
        dialog.showErrorBox('Não foi possível iniciar o servidor',`${erro.message}\n\nA porta ${PORT} pode estar em uso. Feche outro "node server.js" aberto.`)
        app.quit();
        return;
    };
    const janela = new BrowserWindow({
        maxWidth:900,
        minWidth:900,
        maxHeight:1000,
        minHeight:1000,
        title:"PoE 2 Market",
        backgroundColor:"#000000",
        autoHideMenuBar:true,
        webPreferences:{
            contextIsolation:true,
            nodeIntegration:false
        }
    });
    janela.loadURL(`http://localhost:${PORT}`);
}

app.whenReady().then(criarJanela);

app.on('window-all-closed',()=>{
    if(servidor) servidor.close();
    app.quit();
});

