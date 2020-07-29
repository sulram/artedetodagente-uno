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
  coral: {
    title: "Coral",
    fulltext: `Aqui você encontra os vídeos sobre Corais do Projeto Um Novo Olhar.`,
    videos: R.clone(videos)
  },
  apresentacoes: {
    title: "Apresentações",
    fulltext: `Aqui você encontra os vídeos de apresentações do Projeto Um Novo Olhar.`,
    videos: R.clone(videos)
  },
  palestras: {
    title: "Palestras",
    fulltext: `Aqui você encontra os vídeos das palestras do Projeto Um Novo Olhar.`,
    videos: R.clone(videos)
  }
}