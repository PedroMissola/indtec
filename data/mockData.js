export const WHATSAPP_NUMBER = '5519953243237';
export const WHATSAPP_DEFAULT_MSG = 'Olá IND TEC! Quero solicitar um orçamento.';

// Novas constantes de mídia
export const LAB_IMAGE_URL = 'https://placehold.co/1200x675';
export const LAB_VIDEO_URL = 'https://www.w3schools.com/html/mov_bbb.mp4';

export const COMPANY_INFO = {
  name: 'IND TEC',
  subtitle: 'Assistência técnica e eletrônicos',
  address: 'Av. Jorge Tibiriçá, 1050',
  neighborhood: 'Jardim dos Oliveiras — Campinas/SP',
  phone: '(19) 95324-3237',
  hoursWeekday: 'Segunda a sexta das 09h às 18h',
  hoursSaturday: 'Sábado das 09h às 13h',
  googleRating: '5,0',
  googleReviewCount: 83
};

export const SERVICES_DATA = [
  {
    id: 'celulares',
    title: 'Celulares',
    icon: 'smartphone',
    description: 'Tela, bateria, conector, placa e manutenção.',
  },
  {
    id: 'notebooks',
    title: 'Notebooks',
    icon: 'laptop',
    description: 'Tela, SSD, memória, limpeza e diagnóstico.',
  },
  {
    id: 'computadores',
    title: 'Computadores',
    icon: 'monitor',
    description: 'Manutenção, upgrades, montagem e diagnóstico.',
  },
  {
    id: 'consoles',
    title: 'Consoles',
    icon: 'gamepad-2',
    description: 'Manutenção e diagnóstico de videogames.',
  },
  {
    id: 'seminovos',
    title: 'Seminovos',
    icon: 'sparkles',
    description: 'Venda de aparelhos com procedência e garantia.',
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: '1',
    author: 'Marcos Silva',
    text: 'Essa loja tá de parabéns, atendimento firmeza demais, resolveu tudo certo e ainda com preço justo. Hoje em dia achar lugar assim é raro.',
    rating: 5,
  },
  {
    id: '2',
    author: 'Aline Costa',
    text: 'Loja Top, tem de tudo para celulares, manutenção de celulares e computadores com preço justo e imediato. Muito atenciosos.',
    rating: 5,
  },
  {
    id: '3',
    author: 'Rafael Mendes',
    text: 'Excelente atendimento, ambiente e qualidade dos produtos. Na ocasião em que fui até a loja, o produto que precisava não se encontrava em estoque, mas no mesmo dia foi solicitado ao fornecedor e consegui voltar para efetuar a compra. Recomendo.',
    rating: 5,
  },
  {
    id: '4',
    author: 'Juliana Fagundes',
    text: 'Adorei o atendimento muito bom! Conserto super rápido os meninos super receptivos trabalho ótimo a tela que trocaram foi de muita qualidade bem diferente do que eu estava usando.',
    rating: 5,
  },
  {
    id: '5',
    author: 'Bruno Albuquerque',
    text: 'O atendimento foi excelente, precisei trocar a bateria de um celular e além da troca rápida o valor foi justo! Com toda certeza voltarei sempre que precisar e indico a todos que tem eletrônicos (notebook, celular, vídeo game) precisando de reparo.',
    rating: 5,
  }
];

export const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'Fazem manutenção em celulares?',
    answer: 'Claro, me informe o modelo e o problema que seu aparelho está apresentando.'
  },
  {
    id: 'faq-2',
    question: 'Fazem montagem de computadores?',
    answer: 'Fazemos sim, você já tem as peças ou gostaria de um orçamento de um novo!'
  }
];

export const IMAGE = [
  {
    ID: 'img-1'
  }
];

export const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'Carlos Eduardo',
    role: 'Técnico Especialista em Microeletrônica',
    bio: 'Especialista em reparo de placas de celulares e notebooks, com certificação em solda BGA e diagnóstico avançado.',
    photoUrl: null, // ou URL da foto
    specialties: ['Solda BGA', 'Diagnóstico de placas', 'Reparo de celulares'],
    experience: '10+ anos de experiência',
    socials: {
      linkedin: 'https://linkedin.com/in/carloseduardo',
      instagram: 'https://instagram.com/carloseduardo',
      twitter: '',
      github: '',
    },
  },
  {
    id: '2',
    name: 'Mariana Alves',
    role: 'Técnica em Consoles e Videogames',
    bio: 'Apaixonada por games e especializada em manutenção de consoles, desde limpeza interna até troca de componentes.',
    photoUrl: null,
    specialties: ['Consoles PlayStation', 'Consoles Xbox', 'Limpeza e prevenção'],
    experience: '7 anos de experiência',
    socials: {
      linkedin: 'https://linkedin.com/in/marianaalves',
      instagram: 'https://instagram.com/marianaalves',
      twitter: 'https://twitter.com/marianaalves',
      github: '',
    },
  },
  {
    id: '3',
    name: 'Rafael Santos',
    role: 'Técnico em Computadores e Notebooks',
    bio: 'Montagem, upgrades e manutenção de desktops e notebooks. Certificado em hardware e redes.',
    photoUrl: null,
    specialties: ['Montagem de PCs', 'Upgrade de SSD/RAM', 'Manutenção preventiva'],
    experience: '8 anos de experiência',
    socials: {
      linkedin: 'https://linkedin.com/in/rafaelsantos',
      instagram: 'https://instagram.com/rafaelsantos',
      twitter: '',
      github: 'https://github.com/rafaelsantos',
    },
  },
  {
    id: '4',
    name: 'Juliana Ferreira',
    role: 'Especialista em Seminovos e Qualidade',
    bio: 'Responsável pela avaliação e garantia de aparelhos seminovos, assegurando procedência e funcionamento.',
    photoUrl: null,
    specialties: ['Avaliação técnica', 'Controle de qualidade', 'Garantia estendida'],
    experience: '6 anos de experiência',
    socials: {
      linkedin: 'https://linkedin.com/in/julianaferreira',
      instagram: 'https://instagram.com/julianaferreira',
      twitter: '',
      github: '',
    },
  },
  {
    id: '5',
    name: 'Bruno Oliveira',
    role: 'Técnico em Celulares e Tablets',
    bio: 'Especialista em troca de telas, baterias e conectores, com atendimento rápido e foco na satisfação do cliente.',
    photoUrl: null,
    specialties: ['Troca de telas', 'Baterias', 'Conectores de carga'],
    experience: '5 anos de experiência',
    socials: {
      linkedin: 'https://linkedin.com/in/brunooliveira',
      instagram: 'https://instagram.com/brunooliveira',
      twitter: '',
      github: '',
    },
  },
];

export const LAB_GALLERY_IMAGES = [
  '/imagens-laboratorio/foto-1.jpg',
  '/imagens-laboratorio/foto-2.jpg',
  '/imagens-laboratorio/foto-3.jpg',
];