const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Nova conexão WebSocket estabelecida.');

  function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  const eventosAleatorios = () => {


    const data = {

      idEvento: generateUniqueId(),

      //evento
      type: 'evento',
      data: getDataAleatoria(),
      descricao: getdescricaoAleatoria(),
      status: getNumeroAleatorio(100, 999),
      codificador: getNumeroAleatorio(100000, 999999),
      cliente: getNomeAleatorio(),
      com: getNumeroAleatorio(1, 100),
      ctx: getNumeroAleatorio(1, 100),
      endereco: getEnderecoAleatorio(),
      cidade: getCidadeAleatoria(),


    };

    return data;
  };

  const OcorrenciasAleatorios = () => {
    const dataOcorrencia = {

      id: generateUniqueId(),
      //card Ocorrencia
      type: 'ocorrencia',
      cidadeOcorrencia: getCidadeAleatoria(),
      bairroOcorrencia: getBairroAleatorio(),
      dataDaOcorrencia: getDataAleatoria(),
      horaOcorrencia: getTempoAleatorio(),
      descricaoDaOcorrencia: getLocalAleatorio(),
      referenciaOcorrencia: getReferenciaAleatoria(),
      nomeOcorrencia: getNomeAleatorio(),
      enderecoOcorrencia: getEnderecoAleatorio(),
      gravidade: getGravidadeOcorrencia(),
      //viagem
      dataSaidaViagem: getDataAleatoria(),
      dataVoltaViagem: getDataAleatoria(),
      procedimentoViagem: 'entrar e verificar',
      observacoesViagem: 'chave debaixo do tapete',


      //setores
      codificadorSetor: getNumeroAleatorio(100000, 999999),
      central: getNumeroAleatorio(100000, 999999),
      observacoesSetores: 'chave debaixo do tapete',
      localInstalacao: getLocalAleatorio(),
      setor: getNumeroAleatorio(100000, 999999),

      //contato
      senha: getSenha(),
      contraSenha: getContraSenha(),
      numeroContato: "99 9999-9999",
      nomeContato: getNomeAleatorio(),



    };

    return dataOcorrencia;
  };

  const getDataAleatoria = () => {
    const dia = getNumeroAleatorio(1, 28);
    const mes = getNumeroAleatorio(1, 12);
    const ano = getNumeroAleatorio(2022, 2023);
    if (dia < 10) {
      return `${'0' + dia}/${mes}/${ano}`
    } else if (mes < 10) {
      return `${dia}/${'0' + mes}/${ano}`
    } else {
      return `${dia}/${mes}/${ano}`;
    }
  };

  const getdescricaoAleatoria = () => {
    const descricao = ['arrombamento', 'roubo', 'acidente', 'incidente', 'outro'];
    const indexAleatorio = getNumeroAleatorio(0, descricao.length - 1);
    return descricao[indexAleatorio];
  };

  const getLocalAleatorio = () => {
    const descricao = ['quarto casal', 'cozinha', 'garagem', 'sala', 'quarta dos fundos'];
    const indexAleatorio = getNumeroAleatorio(0, descricao.length - 1);
    return descricao[indexAleatorio];
  };

  const getGravidadeOcorrencia = () => {
    const descricao = ['normal', 'moderada', 'grave'];
    const indexAleatorio = getNumeroAleatorio(0, descricao.length - 1);
    return descricao[indexAleatorio];
  };


  const getSenha = () => {
    const descricao = ['arroz', 'escola', 'praça', 'chocolate', 'cadeira'];
    const indexAleatorio = getNumeroAleatorio(0, descricao.length - 1);
    return descricao[indexAleatorio];
  };

  const getContraSenha = () => {
    const descricao = ['feijao', 'aluno', 'centro', 'belga', 'mesa'];
    const indexAleatorio = getNumeroAleatorio(0, descricao.length - 1);
    return descricao[indexAleatorio];
  };

  const getNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getNomeAleatorio = () => {
    const nomes = ['João da Silva Oliveira', 'Maria da Silva Nazaré', 'José Antônio Magalhães', 'Ana Carla dos Santos Rosa', 'Carlos Peixoto Corrêa', 'Cristina Bittencourt de Souza'];
    const indexAleatorio = getNumeroAleatorio(0, nomes.length - 1);
    return nomes[indexAleatorio];
  };

  const getEnderecoAleatorio = () => {
    const endereco = ['Estrada Geral de Laranjeiras, Pescaria Brava', 'Avenida Marcolino Martins Cabral, Tubarão', 'Vila Vitória, Laguna', 'Porto dos Açores, Laguna', 'Campo do Chris, Capivari de Baixo'];
    const indexAleatorio = getNumeroAleatorio(0, endereco.length - 1);
    return endereco[indexAleatorio];
  };

  const getCidadeAleatoria = () => {
    const cidades = ['Laguna', 'Pescaria Brava', 'Tubarão', 'Porto Alegre', 'Capivari de Baixo'];
    const indexAleatorio = getNumeroAleatorio(0, cidades.length - 1);
    return cidades[indexAleatorio];
  };

  const getBairroAleatorio = () => {
    const bairro = ['Barreiros', 'Portinho', 'Vila Vitória', 'Laranjeiras', 'Bananal'];
    const indexAleatorio = getNumeroAleatorio(0, bairro.length - 1);
    return bairro[indexAleatorio];
  };

  const getTempoAleatorio = () => {
    const hour = getNumeroAleatorio(0, 23).toString().padStart(2, '0');
    const minute = getNumeroAleatorio(0, 59).toString().padStart(2, '0');
    const second = getNumeroAleatorio(0, 59).toString().padStart(2, '0');
    return `${hour}:${minute}:${second}`;
  };

  const getReferenciaAleatoria = () => {
    const references = ['Próximo à escola, na rua de cima, casa amarela', 'Perto do  mercado do alemão, do lado da farmácia', 'Ao lado da igreja Asembléia de Deus do fogo santo', 'Em frente à praça da Bandeira'];
    const indexAleatorio = getNumeroAleatorio(0, references.length - 1);
    return references[indexAleatorio];
  };

  // Envie dados JSON aleatórios em intervalos regulares
  const enviaJsonEventos = () => {
    ws.send(JSON.stringify(eventosAleatorios()));
  };

  // Inicie o envio
  enviaJsonEventos();

  setInterval(enviaJsonEventos, 50000);


  const enviaJsonOcorrencias = () => {
    ws.send(JSON.stringify(OcorrenciasAleatorios()));
  };

  // Inicie o envio
  enviaJsonOcorrencias();

  setInterval(enviaJsonOcorrencias, 100000);


})

server.listen(8080, () => {
  console.log('Servidor WebSocket está ouvindo na porta 8080.');
});
