import * as R from 'ramda'

const videos = [
  {
    id: 'video-1',
    title: 'vídeo 1',
    text: 'um exemplo de vídeo',
    youtube: 'https://www.youtube.com/watch?v=P0fVPrcOsq4'
  },
  {
    id: 'video-2',
    title: 'vídeo 2',
    text: 'um exemplo de vídeo',
    youtube: 'https://www.youtube.com/watch?v=cdZgeJ53xKk'
  },
  {
    id: 'video-3',
    title: 'vídeo 3',
    text: 'um exemplo de vídeo',
    youtube: 'https://www.youtube.com/watch?v=n8j7ubkXy2s'
  },
  {
    id: 'video-4',
    title: 'vídeo 4',
    text: 'um exemplo de vídeo',
    youtube: 'https://www.youtube.com/watch?v=-JPaHlzXwdw'
  },
  {
    id: 'video-5',
    title: 'vídeo 5',
    text: 'um exemplo de vídeo',
    youtube: 'https://www.youtube.com/watch?v=Qmqd6RxJ0QQ'
  }
]

export default {
  "404": {
    title: "Oooops...",
    fulltext: "Página não encontrada ou em construção"
  },
  oficinasderegencia: {
    title: "Oficinas de Regência",
    fulltext: `Aqui você encontra os vídeos das Oficinas de Regência do Projeto Um Novo Olhar.`,
    videos: R.clone(videos)
  },
  'repertorio-coral': {
    title: "Repertório Coral",
    fulltext: `Aqui você encontra os vídeos de Repertório Coral.`,
    videos: [
      {
        id: '20-rondas-infantis-baiao',
        title: 'Baião',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=1AdBBlnCf94'
      },
      {
        id: '20-rondas-infantis-bambalalao',
        title: 'Bambalalão',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=8cUSkgQ9_3g'
      },
      {
        id: '20-rondas-infantis-boa-noite',
        title: 'Boa noite',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=WrNxRl_t3OU'
      },
      {
        id: '20-rondas-infantis-bom-dia',
        title: 'Bom dia',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=kjWThUMxv80'
      },
      {
        id: '20-rondas-infantis-cantoria-dos-bichos',
        title: 'Cantoria dos bichos',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=RM88llI-Cn4'
      },
      {
        id: '20-rondas-infantis-capelinha-sao-joao',
        title: 'Capelinha de São João',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=b8Lasn6z6uE'
      },
      {
        id: '20-rondas-infantis-ciranda-das-flores',
        title: 'Ciranda das flores',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=5NwxOp3QLS8'
      },
      {
        id: '20-rondas-infantis-garibaldi-missa',
        title: 'Garibaldi não foi à missa',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=sjg0ONUXspE'
      },
      {
        id: '20-rondas-infantis-marcha-soldadinho',
        title: 'Marcha Soldadinho',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=8KoghOExOmg'
      },
      {
        id: '20-rondas-infantis-boi-mamao',
        title: 'O boi de mamão',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=Wnut3hg4-Cg'
      },
      {
        id: '20-rondas-infantis-o-cachorro',
        title: 'O cachorro',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=0Xti_DSJ_qA'
      },
      {
        id: '20-rondas-infantis-cavalinho-azalao',
        title: 'O cavalinho alazão',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=-RqBLUWH6iY'
      },
      {
        id: '20-rondas-infantis-o-elefante',
        title: 'O elefante',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=Kkgne6K8KYA'
      },
      {
        id: '20-rondas-infantis-o-galo',
        title: 'O galo',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=UKZqTDisOcY'
      },
      {
        id: '20-rondas-infantis-o-gatinho',
        title: 'O gatinho',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=pLkCNNZk9Gk'
      },
      {
        id: '20-rondas-infantis-o-macaco-simao',
        title: 'O macaco Simão',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=btESDa2F1iw'
      },
      {
        id: '20-rondas-infantis-o-pato-e-a-galinha',
        title: 'O pato e a galinha',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=n-H3iJ8do-w'
      },
      {
        id: '20-rondas-infantis-os-sinos-de-belem',
        title: 'Os sinos de Belém',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=y29fAROeF4Q'
      },
      {
        id: '20-rondas-infantis-um-dois',
        title: 'Um dois',
        text: '20 Rondas Infantis: Edino Krieger',
        youtube: 'https://www.youtube.com/watch?v=V2GsdgvhULU'
      }
    ]
  },
  apresentacoes: {
    title: "Apresentações",
    fulltext: `Aqui você encontra os vídeos de apresentações do Projeto Um Novo Olhar.`,
    videos: R.clone(videos)
  },
  palestras: {
    title: "Palestras",
    fulltext: `Aqui você encontra os vídeos das palestras do Projeto Um Novo Olhar.`,
    videos: [
      {
        id: 'concertos-acessiveis',
        title: 'Concertos Acessíveis, com Felipe Monteiro',
        text: '',
        youtube: 'https://www.youtube.com/watch?v=bVziVRg8bzk'
      },
      {
        id: 'em-busca-da-danca-acessivel',
        title: 'Em Busca da Dança Acessível, com Taís Vieira',
        text: '',
        youtube: 'https://www.youtube.com/watch?v=uds5cY4JDsE'
      }
    ]
  }
}