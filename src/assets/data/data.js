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

export const data = [
  {
    title: 'Paleozoico',
    description:
      'O Paleozoico iniciou há cerca de 541 milhões de anos atrás. É subdividido em seis períodos e se inicia com a vida restrita ao ambiente aquático, sendo que boa parte dos filos de invertebrados é encontrado em registros fósseis no primeiro período.',
    fossils: [
      {
        fossilTitle: 'Ovo de trilobita (Ordoviciano Superior 450 - 440 Ma)',
        collectedIn:
          'Formação do Golfo de Whetstone (grupo Lorraine), norte do estado de Nova York (EUA).',
        image: img1,
        details: {
          taxonomicDescription: {
            Filo: 'Arthropoda',
            Classe: 'Trilobita',
            Espécie: 'Triarthrus eatoni',
          },
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
          taxonomicDescription: {
            Filo: 'Chordata',
            Classe: 'Sarcopterygii',
            Espécie: 'Rhabdoderma exiguum',
          },
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
          taxonomicDescription: {
            Filo: 'Chordata',
            Clado: 'Dinosauria',
            Espécie: 'Mussaurus patagonicus',
          },
          longDescription:
            'Esse, assim como o fóssil de ovo de Protoceratops descrito na sequência contribuíram para o estudo que apontou que os primeiros ovos de dinossauros tinham casca mole, ao contrário da casca de ovo dura que é atribuída aos dinossauros não próximos das aves. No trabalho que foi realizado com esse fóssil os pesquisadores mostraram através das características mineralógicas evidência de que os ovos dos dinossauros Protoceratops e Mussasaurus possuíam casca mole.',
        },
      },
      {
        fossilTitle:
          'Protoceratops Fóssil de ovo de dinossauro mole (Cretáceo Superior Campaniano 84 - 72 Ma)',
        image: img4,
        shortDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        details: {
          longDescription:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolore a aperiam illo soluta ullam quaerat incidunt, deleniti doloremque laborum eveniet similique tempora itaque veniam consequuntur. Totam atque impedit molestias!',
        },
      },
      {
        fossilTitle:
          'Archaeopteryx Ave (Jurássico Superior (Titoniano) 150.8–148.5 Ma',
        image: img5,
        shortDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        details: {
          longDescription:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolore a aperiam illo soluta ullam quaerat incidunt, deleniti doloremque laborum eveniet similique tempora itaque veniam consequuntur. Totam atque impedit molestias!',
        },
      },
      {
        fossilTitle:
          'Oviraptorosauro incubando ovos no ninho (Cretáceo Superior Maastrichtiano 72 - 66 Ma)',
        image: img6,
        shortDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        details: {
          longDescription:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolore a aperiam illo soluta ullam quaerat incidunt, deleniti doloremque laborum eveniet similique tempora itaque veniam consequuntur. Totam atque impedit molestias!',
        },
      },
      {
        fossilTitle:
          'Oviraptorosauro incubando ovos no ninho (Cretáceo Superior Maastrichtiano 72 - 66 Ma)',
        image: img10,
        shortDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        details: {
          longDescription:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolore a aperiam illo soluta ullam quaerat incidunt, deleniti doloremque laborum eveniet similique tempora itaque veniam consequuntur. Totam atque impedit molestias!',
        },
      },
    ],
  },
  {
    title: 'Cenozoico',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minus inventore earum id quae veritatis accusamus dolores perferendis ducimus totam laboriosam a officia dicta pariatur eius! Neque quibusdam dolor ad.',
    fossils: [
      {
        fossilTitle:
          'Llallawavis scagliai (Ave do terror) (Cenozoico Plioceno de 5.3 - 3.6 Ma)',
        image: img8,
        shortDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        details: {
          longDescription:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolore a aperiam illo soluta ullam quaerat incidunt, deleniti doloremque laborum eveniet similique tempora itaque veniam consequuntur. Totam atque impedit molestias!',
        },
      },
      {
        fossilTitle:
          'Ovo de ave do quaternário (Cenozoico Quaternário Pleistoceno 2.6 - 0.012 Ma)',
        image: img9,
        shortDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        details: {
          longDescription:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolore a aperiam illo soluta ullam quaerat incidunt, deleniti doloremque laborum eveniet similique tempora itaque veniam consequuntur. Totam atque impedit molestias!',
        },
      },
    ],
  },
];
