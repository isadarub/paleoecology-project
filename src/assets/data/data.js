import img1 from '../img/1_fossil.png';
import img2 from '../img/2_fossil.png';
import img3 from '../img/3_fossil.png';
import img4 from '../img/4_fossil.png';
import img5 from '../img/5_fossil.png';
import img6 from '../img/6_fossil.png';
import img7 from '../img/7_fossil.png';
import img8 from '../img/8_fossil.png';
import img9 from '../img/9_fossil.png';
import img10 from '../img/10_fossil.png';
import rec1 from '../img/1_reconstrucao.png';
import rec2 from '../img/2_reconstrucao.png';
import rec3 from '../img/3_reconstrucao.png';
import rec4 from '../img/4_reconstrucao.png';
import rec5 from '../img/5_reconstrucao.png';
import rec6 from '../img/6_reconstrucao.png';
import rec7 from '../img/7_reconstrucao.png';
import rec8 from '../img/8_reconstrucao.png';
import rec9 from '../img/9_reconstrucao.png';
import rec10 from '../img/10_reconstrucao.png';

export const data = [
  {
    title: 'Paleozoico',
    description:
      'O Paleozoico iniciou há cerca de 541 milhões de anos atrás. É subdividido em seis períodos e se inicia com a vida restrita ao ambiente aquático, sendo que boa parte dos filos de invertebrados é encontrado em registros fósseis no primeiro período. O clima era predominantemente quente, úmido e pouco diferenciado, não sendo dividido em estações ou em faixas de temperatura.',
    fossils: [
      {
        fossilTitle: 'Ovo de trilobita (Ordoviciano Superior 450 - 440 Ma)',
        collectedIn:
          'Formação do Golfo de Whetstone (grupo Lorraine), norte do estado de Nova York (EUA).',
        image: img1,
        details: {
          taxonomicDescription: [
            'Filo: Arthropoda; ',
            'Classe: Trilobita; ',
            'Espécie: Triarthrus eatoni.',
          ],
          reconstruction: rec1,
          fossilizationMode: 'Piritização',
          longDescription:
            'Primeiro estudo que trata da ocorrência de ovos preservados in situ pertencentes ao trilobita desse grupo Lorraine no estado de Nova York (USA), onde existem espécimes extremamente bem preservados. Através do estudo desse registro é possível inferir sobre a reprodução dos trilobitas que ainda não é conhecida em sua totalidade.',
        },
      },
      {
        fossilTitle:
          'Ovo e embrião de peixe Actinistia (Carbonífero 359 - 299 Ma)',
        collectedIn: 'Fauna Mazon Creek, Illinois, USA',
        image: img2,
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Classe: Sarcopterygii; ',
            'Espécie: Rhabdoderma exiguum.',
          ],
          fossilizationMode: 'Encontrados preservados em concreções de ferro.',
          reconstruction: rec2,
          longDescription:
            'Esses fósseis contribuem para as pesquisas relacionadas com a biologia do desenvolvimento dos peixes do passado. O estudo dos fósseis de animais em diferentes estágios de sua vida, ou seja, de sua ontogenia tem o potencial de revelar informações sobre a evolução dos padrões de desenvolvimento dos peixes do passado até os grupos de peixes atuais.',
        },
      },
    ],
  },
  {
    title: 'Mesozoico',
    description:
      'O Mesozoico ou Era Mesozoica compreende o intervalo entre 251,9 e 66 milhões de anos antes do presente. Durante esse período, iniciou-se a fragmentação do supercontinente Pangeia, que gerou a abertura de novos oceanos, acarretando no aumento da biodiversidade marinha e, além disso, o nível do mar era maior em relação ao atual, com clima quente e variações de umidade.',
    fossils: [
      {
        fossilTitle:
          'Mussaurus egg (Triássico superior/ Jurássico Inferior 237 - 174 Ma)',
        collectedIn: '',
        image: img3,
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Clado: Dinosauria; ',
            'Espécie: Mussaurus patagonicus.',
          ],
          reconstruction: rec3,
          fossilizationMode: 'Mineralização',
          longDescription:
            'Esse, assim como o fóssil de ovo de Protoceratops descrito na sequência contribuíram para o estudo que apontou que os primeiros ovos de dinossauros tinham casca mole, ao contrário da casca de ovo dura que é atribuída aos dinossauros não próximos das aves. No trabalho que foi realizado com esse fóssil os pesquisadores mostraram através das características mineralógicas evidência de que os ovos dos dinossauros Protoceratops e Mussasaurus possuíam casca mole.',
        },
      },
      {
        fossilTitle:
          'Protoceratops Fóssil de ovo de dinossauro mole (Cretáceo Superior Campaniano 84 - 72 Ma)',
        collectedIn: 'Formação Djadochta, localidade Ukhaa Tolgod na Mongólia',
        image: img4,
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Clado: Dinosauria; ',
            'Espécie: Protoceratops andrewsi.',
          ],
          reconstruction: rec4,
          fossilizationMode: 'Mineralização',
          longDescription:
            'Esse fóssil de Protoceratops em questão foi e continua sendo objeto de estudo de trabalhos que envolvem a embriologia, biologia do desenvolvimento, história de vida e evolução de dinossauros não-aves. As aves atuais são dinossauros vivos e muitas de suas características presentes são assumidas para outros grupos de dinossauros. Portando trabalhos como este ainda podem trazer sobre características ainda desconhecidas de dinossauros do passado.',
        },
      },
      {
        fossilTitle:
          'Archaeopteryx Ave (Jurássico Superior (Titoniano) 150.8–148.5 Ma',
        collectedIn: 'Pedreira Blumenberg perto de Eichstätt, Alemanha',
        image: img5,
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Clado: Dinosauria; ',
            'Espécie: Archaeopteryx siemensii.',
          ],
          fossilizationMode: 'Mineralização',
          reconstruction: rec5,
          longDescription:
            'A Primeira ave, o Archaeopteryx,  é sem dúvida um dos fósseis mais conhecidos no mundo pois mostra a evidência de que dinossauros possuíam penas, representando a transição entre os dinossauros do passado e as aves modernas.   Seu nome significa "antiga pena". Esse espécime em questão é o conhecido "Espécime de Berlim" é o espécime mais completo e o primeiro que com uma cabeça intacta. Encontrado primeiramente por um fazendeiro local, foi vendido por ele para comprar uma vaca de um taverneiro. Está hoje no Museu de História Natural de Berlim.',
        },
      },
      {
        fossilTitle:
          'Ovo de oviraptorosauro (Baby Yingliang) (Cretáceo Superior Maastrichtiano 72 - 66 Ma (1))',
        image: img6,
        collectedIn: 'Formação Hekou no sul da China',
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Clado: Dinosauria; ',
            'Clado: Oviraptorosauria.',
          ],
          fossilizationMode: 'Mineralização (Possível incrustação)',
          reconstruction: rec6,
          longDescription:
            'Esse é reconhecido por alguns pesquisadores como o melhor embrião de dinossauro encontrado na história. O embrião aparenta estar num estágio inicial do processo de sair do ovo o primeiro estágio da mudança de posicionamento para se preparar para romper a casca que é similar ao das aves modernas. Ele foi o primeiro exemplo dessa característica do desenvolvimento embriológico encontrado nos dinossauros.',
        },
      },
      {
        fossilTitle:
          'Oviraptorosauro incubando ovos no ninho (Maastrichtiano 72.1 - 66 Ma)',
        image: img7,
        collectedIn:
          'Nanxiong Formation, cidade de Ganzhou, província de Jiangxi, China',
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Clado: Dinosauria; ',
            'Clado: Oviraptorosauria.',
          ],
          fossilizationMode: 'Mineralização',
          reconstruction: rec7,
          longDescription:
            'Esse é o primeiro fóssil de dinossauro não-ave preservado sobre o seu conjunto de ovos enquanto o incubava. Esses ovos também contêm restos de embriões que apresentam diferentes estágios de desenvolvimento que revelam incubação assíncrona, uma característica derivada mesmo em aves, agora observado num dinossauro não-ave. Os estudos relacionados com esse registro único demonstram que a evolução da biologia reprodutiva das aves não foi linear.',
        },
      },
      {
        fossilTitle:
          '"Primeira galinha", um dos primeiros Neornithes (Aves modernas) (Cretáceo Superior Maastrichtiano 72 - 66 Ma)',
        image: img10,
        collectedIn:
          'Formação Maastricht, pedreira Eben-Emael, Liège, Bélgica.',
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Classe: Aves; ',
            'Espécie: Asteriornis maastrichtensis.',
          ],
          fossilizationMode: 'Conservação de parte dura',
          reconstruction: rec10,
          longDescription:
            'Fóssil do provável primeiro ancestral de galinhas e também de patos, é um espécime único e bem preservado do final do Cretáceo, logo antes do grande evento de extinção em massa há 66 milhões de anos atrás. Um dos principais motivos de sua importância é que é praticamente o único crânio completo de uma ave moderna (Neornithine), contemporânea aos demais dinossauros. Esse registro representa um dos únicos que suportam bem o grupo coroa de aves na era Mesozóica.',
        },
      },
    ],
  },
  {
    title: 'Cenozoico',
    description:
      'A Era Cenozoica abrange o intervalo dos últimos 66 milhões de anos, tendo destaque para os 3 eventos: 1) Índia e a África colidindo com o sul da Eurásia provocando elevação do Himalaia e os Alpes, 2) Abertura do Atlântico separando os continentes americanos, Europa e África, 3) Grandes zonas de subducção formaram um “Anel de Fogo” ao redor da Orla do Pacífico, consumindo a crosta oceânica e produzindo muitos vulcões e terremotos. O clima da Terra passou de condições de estufa do Cretáceo e início do Eoceno, para os primeiros registros de geleiras na Antártica no início do Oligoceno, iniciando as condições de “casa do gelo”.',
    fossils: [
      {
        fossilTitle:
          'Llallawavis scagliai (Ave do terror) (Cenozoico Plioceno de 5.3 - 3.6 Ma)',
        image: img8,
        collectedIn:
          'Formação Playa Los Lobos Allo, Mar del Plata, província de Buenos Aires, Argentina.',
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Classe: Aves; ',
            'Espécie: Llallawavis scagliai.',
          ],
          fossilizationMode: 'Conservação de parte dura',
          reconstruction: rec8,
          longDescription:
            'Esse fóssil de ave do terror é o mais completo articulado esqueleto já encontrado para o grupo. Um achado que contribui para o conhecimento da diversidade, anatomia e filogenia desses animais. As aves do terror são consideradas um dos grupos mais proeminentes da avifauna da América do Sul. Considerados predadores do topo (Apex predator) suas habilidades para a caça foram recentemente examinadas e muito de sua diversidade está sendo revelada aos poucos.',
        },
      },
      {
        fossilTitle:
          'Ovo de ave do quaternário (Cenozoico Quaternário Pleistoceno 2.6 - 0.012 Ma)',
        image: img9,
        collectedIn:
          'Ravinas nas margens do Río de la Plata, perto da cidade de Colonia.',
        details: {
          taxonomicDescription: [
            'Filo: Chordata; ',
            'Classe: Aves; ',
            'Família: Tinamidae.',
          ],
          reconstruction: rec9,
          fossilizationMode: 'Conservação de parte dura',
          longDescription:
            'Esse fóssil representa o primeiro fóssil de ovo completo de uma ave do Quaternário da América do Sul, apresentando uma preservação excepcional. O fóssil é um caso raro de completa preservação de ovos do Cenozoico e em seu estudo os pesquisadores conseguiram, através de análise micro e macroestrutural, identificar a família de aves a qual esse ovo poderia pertencer, a família Tinamidae.',
        },
      },
    ],
  },
];
