const colors = [
  {
    id: 'orange',
    name: 'Accent Orange',
    hex: '# F54D1C',
  },
  {
    id: 'black',
    name: 'Black',
    hex: '# 000000',
  },
  {
    id: 'grey',
    name: 'Grey',
    hex: '# F5F2EC',
  },
];

const styleguideNav = {
  colorsTitle: 'Colors',
  buttonsLinksTitle: 'Buttons / Links',
  buttonsLinksName: 'Link',
  textStylesTitle: 'Text styles',
  size: 'Size',
  lineHeight: 'Line Height',
  letterSpacing: 'Letter Spacing',
};

const worklogNav = {
  time: 'Time',
  feature: 'Feature',
  problems: 'Difficulties for the team',
};

const tasksData = {
  tasksTitle: 'Maximum points - 280',
  selfScore: 'Total - 240',
  problems:['Working with git in a team project.', 'Choosing the right animations.', 'Problems with the implementation of the gallery.', 'Difficulties with uploading a project to hosting'],
  tasks: [
    'Main page + page with a list of authors + author’s page - 10',
    'Page with team members + page with worklog - 10',
    'Page with list of authors contains search widget - 10',
    'Portal has two languages - 20',
    'Portal has page with styleguide - 20',
    'Mobile version is okey - 10',
    'Ipad/tablet version is okey - 10',
    'Author’s page contains timeline - 10',
    'Author’s page contains video overlay - 10',
    'Author’s page contains photo gallery - 20',
    'Author’s page contains map - 10',
    'Design - 20',
    'Material-ui is used - 20',
    'Portal has third language - 10',
    'Animations - 20',
    'Outstanding design - 20',
    'Confidence of the project presentation - 10',
    'Project is made using gatsbyjs - 10',
    'Contentful / netlify cms is used for content management - 10',
    'React styleguide tool usage for the page with styles - 20',
  ],
};

const developersFeatures = [
  {
    name: 'Ekaterina',
    time: ['10h','3h'],
    tasks: ['Created page of a director','Implemented timeline block']
  },
  {
    name: 'Vladimir',
    time: ['10h','5h','4h'],
    tasks: ['Created header with navigation, page with a list of directors','Implemented a website translation into three languages','Implemented directors search']
  },
  {
    name: 'Ekaterina',
    time: ['2h','7h','10h'],
    tasks: ['Created base structure of the project','Created main page','Implemented map']
  },
  {
    name: 'Anton',
    time: ['8h','2h','9h'],
    tasks: ['Created page with team members','Created data files','Implemented video overlay']
  },
  {
    name: 'Kirill',
    time: ['23h','18h'],
    tasks: ['Created the project design','Created pages with worklog and styleguide']
  },
  {
    name: 'Roman',
    time: ['13h', '5h'],
    tasks: ['Implemented photo gallery', 'Implemented a website animation']
  },
]

const developers = [
  {
    id: 'D0',
    name: 'Ekaterina Rudenko',
    github: 'https://github.com/Rekaterina',
    telegram: 'https://t.me/rekaterina',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/rudenko.jpg',
    contribution: [
      'Created page of a director.',
      'Implemented timeline block.'
    ],
  },
  {
    id: 'D1',
    name: 'Vladimir Serko',
    github: 'https://github.com/Vir45',
    telegram: 'https://t.me/Vova_Serko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/serko.jpg',
    contribution: [
      'Created header with navigation, page with a list of directors.',
      'Implemented a website translation into three languages.',
      'Implemented directors search.'
    ],
  },
  {
    id: 'D2',
    name: 'Ekaterina Yakubouskaya',
    github: 'https://github.com/Katsiaryna31',
    telegram: 'https://t.me/KatsiarynaYa',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yakubovskaya.jpg',
    contribution: [
      'Created base structure of the project.',
      'Created main page.',
      'Implemented map.'
  ],
  },
  {
    id: 'D3',
    name: 'Anton Yasko',
    github: 'https://github.com/antonyasko',
    telegram: 'https://t.me/anton_yasko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yasko.jpg',
    contribution: [
      'Created page with team members.',
      'Created data files.',
      'Implemented video overlay.'
    ],
  },
  {
    id: 'D4',
    name: 'Kirill Leogky',
    github: 'https://github.com/kirillleogky',
    telegram: 'https://t.me/KirillLeogky',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/leogky.jpg',
    contribution: [
      'Created the project design.',
      'Created pages with worklog and styleguide.'
    ],
  },
  {
    id: 'D5',
    name: 'Roman Goncharov',
    github: 'https://github.com/RomaSRS',
    telegram: 'https://t.me/RomanSRS',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/goncharov.jpg',
    contribution: [
      'Implemented photo gallery.',
      'Implemented a website animation.'
    ],
  },
];

const directors = [
  {
    id: '0',
    name: 'Evstigney Mirovich',
    born: '10 August 1878',
    deceased: '16 February 1952',
    description: 'Belarusian playwright and theater director.',
		image: 'https://boom.ms/wp-content/uploads/f/foto-babushek-i-dedushek-v-molodosti/6.jpg',
    placeOfBirth: 'St. Petersburg',
    shortBiography : 'Russian and Belarusian playwright, artist, director and teacher. One of the founders of the Belarusian national Soviet theater. Books about S.A. Petrovich “People\'s Artist of the BSSR E. A. Mirovich” (1963) and “Evstigney Mirovich” (1978) were published about the actor and director; the pedagogical activity of E. A. Mirovich is the subject of a chapter in the book of his student A. I. Butakov, “My teachers” (2004); chapters have been written about his life in encyclopedias; the memoirs of contemporaries in periodicals and the Internet are published. A postage stamp for the 100th anniversary of E. A. Mirovich and a postcard with the original stamp for his 125th anniversary were issued. On the creative fate of E. A. Mirovich, the Belarusfilm film studio shot the documentary Throughout Life (1978). A memorial plaque in honor of the outstanding theater figure Yevstigney Afinogenovich Mirovich was opened on the building of the Belarusian Academy of Arts.',
    timeline: [
      {date: '1900', text: 'He began to work in St. Petersburg theaters as an actor, then as a director.'},
      {date: '1906', text: 'He became a full member of the St. Petersburg Union of Drama and Music Writers.'},
      {date: '1919', text: 'Started working in theaters of Belarus'},
      {date: '1921 — 1931', text: 'Works as artistic director in theaters of Belarus.'},
      {date: '1932 — 1935', text: 'Artistic Director of the Gomel Theater of Working Youth.'},
      {date: '1937 — 1940', text: 'Artistic Director of the Belarusian Theater of Young Spectators by N. Krupskaya.'},
      {date: '1941 — 1945', text: 'Works as a director of the Belarusian Theater by Y. Kupala (BST-1).'},
    ],
    project: [
      {date: '1923', text: '«Kastus Kalinovsky»'},
      {date: '1927', text: '«Rebellion» by D. Furmanov'},
      {date: '1929', text: '«Bridge» by E. Romanovich'},
      {date: '1930', text: '«Guta» by Kobets'},
      {date: '1937', text: '«How steel was tempered» by N. Ostrovsky'},
      {date: '1939', text: '«Wonderful pipe» by Volsky'},
    ],
    video: 'https://www.youtube.com/embed/Yunms45xnog',
    mapData: {
      center: [53.9226577, 27.6010486],
      place: 'Belarusian Academy of Arts',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%B0%D0%BA%D1%82%D1%91%D1%80%D0%B0_%D0%95%D0%B2%D1%81%D1%82%D0%B8%D0%B3%D0%BD%D0%B5%D1%8F_%D0%9C%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B0.JPG'
      },
      {
        num: 1,
        src: 'https://img.tyt.by/n/obshchestvo/0b/4/08_mirovich-1952_620.jpg'
      },
      {
        num: 2,
        src: 'https://img.tyt.by/n/obshchestvo/06/0/09_mirovich_doska_620.jpg'
      },
      {
      num: 3,
      src: 'https://img.tyt.by/n/kultura/0c/8/06_mirovich.png'
      },
    ],
  },
  {
    id: '1',
    name: 'Vladislav Golubok',
    born: '15 May 1882',
    deceased: '28 September 1937',
    description: 'Belarusian playwright, prose writer, director, actor, artist.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Edward_Pep%C5%82owski.jpg',
    placeOfBirth: 'St. Lesnaya, Novogrudok district, Minsk province',
    shortBiography : 'Belorussian actor, director, writer, artist, decorator, first national artist of the Belarusian SSR (1928), one of the founders of the Belarusian national theater, artistic director and director of the Belarusian State Theater. According to the memoirs of contemporaries, there was no such region in the BSSR that the Dove Theater would not have visited. In 1920, he came with a performance to Slutsk at a time when the Paparazzi Kvetka association was operating on Sluchin. It is precisely the purpose of the activity of which was the study and promotion of the Belarusian language, culture and art, familiarization with the cultural values ​​of a wide range of people through the creation and support of branches, stationary and mobile libraries, lectures and concerts.',
    timeline: [
      {date: '1896', text: 'First visited the theater.'},
      {date: '1906', text: 'On the pages of «Nasha Niva" appeared his first poems and stories.'},
      {date: '1913', text: 'The first book «Stories» was published in Petersburg.'},
      {date: '1917', text: 'The First «Belarusian Drama and Comedy Society» was revived, previously banned by the authorities of the Russian Empire. The Golubok enters into society with his wife and children and makes his first attempts at drama. For the fall of 1917 alone, Golubok wrote three plays, which immediately puts his corpse.'},
      {date: '1920', text: 'Headed the Drama section of the cultural and educational organization «Fern Flower» in Slutsk.'},
      {date: '1924', text: 'An order was issued by the People’s Commissariat of Education on transforming the corpses of the Golubok into the Belarusian State Troupe.'},
      {date: '1928', text: 'Awarded the title of People\'s Artist of the Republic. Golubok became the first Belarusian national artist.'},
      {date: '1931', text: 'The Theater by Golubok is being reorganized, it is called BGT-3 (Belarusian Third State Theater) and is “prescribed” in Gomel. Tours in the districts, however, continued.'},
      {date: '1933', text: 'BST-3 plays the play "White Weapon". The play tells of the wrecking activity of "enemies of the people" at one of the plants.'},
      {date: '1935', text: 'The 15th anniversary of the Vladislav Golubok Theater was widely celebrated, many actors received honorary titles, Golubok was awarded a car and a creative trip to Moscow and Leningrad.'},
    ],
    project: [
      {date: '1917', text: '«Last meeting»'},
      {date: '1920', text: '«Court»'},
      {date: '1921', text: '«White wreath»'},
      {date: '1927', text: '«Crab»'},
      {date: '1933', text: '«White Weapon»'},
    ],
    video: 'https://www.youtube.com/embed/FQ054q0969g',
    mapData: {
      center: [52.431906, 31.0122417],
      place: 'Belarusian third State Theater',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/%D0%A3%D0%BB%D0%B0%D0%B4%D1%8B%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA.jpg'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Haluboktheatre4.jpg'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA._%D0%A4%D0%BE%D1%82%D0%B0.jpg'
      },
      {
        num: 3,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/%D0%A3._%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D0%B7%D1%8E_%D0%A1%D0%BC%D0%BE%D0%BB%D1%96%D1%87%D1%83.jpg'
      },
    ],
  },
  {
    id: '2',
    name: 'Ignat Buinitsky',
    born: '22 August 1861',
    deceased: '22 September 1917',
    description: 'Belarusian actor, director, theater figure, creator of the national professional theater, participant in literary life.',
    image: 'https://seanmcdonorg.files.wordpress.com/2018/08/2018-06-23_ent_41837548_i1.jpg',
    placeOfBirth: 'Polivachi, Gluboksky district, Vitebsk region',
    shortBiography : 'Belarusian actor, director, theater figure, founder of the first professional national Belarusian theater. He was called the father of the Belarusian theater. Ignatiy Buinitsky first brought the “peasant” dance to the stage as a performer and director, showing the inexhaustible possibilities and beauty of Belarusian folk dances. As a dramatic actor, he performed mainly in characteristic roles, skillfully revealing humor and subtle irony. In Prozoroki, in the high school building, the museum of the founder of the Belarusian theater was created, where posters of performances, photos of the troupe, letters of Zoska Veras and Zygmunt Abramovich, memoirs of prozorok old residents are presented. In the square is the grave of Ignatius Buinitsky and a monument to him',
    timeline: [
      {date: '1907', text: 'Founded a theater in Palivachi, where his relatives first participated.'},
      {date: '1910', text: 'On February 12, in Vilna, the Buynichsky Theater, at a special invitation from the editorial board of "Nasha Niva", took part in a performance that went down in history under the title “The First Belarusian Party in Vilna.'},
      {date: '1910 — 1913', text: 'The theater toured Belarus (Minsk, Slutsk, Polotsk, Disna, Sventsyany, Pastavy, Nesvizh, Lyakhovichi), performed twice in St. Petersburg (1911, 1912), as well as in Warsaw (1913).'},
      {date: '1913', text: 'Due to material difficulties and pressure from the tsarist authorities, the activities of the troupe were discontinued.'},
      {date: '1914', text: 'Tried to create a new troupe, however, the 1st World War prevented the implementation of this plan.'},
      {date: '1917', text: 'During the First World War he went to the Western Front, was in military service in Molodechno.'},
    ],
    project: [
      {date: '1910', text: '«On revision» by M. Krapivnitsky'},
      {date: '1910', text: '«Sewing fools» by M. Krapivnitsky'},
      {date: '1910', text: '«Ham» by E. Orzeszko'},
      {date: '1910', text: '«On a winter evening» by E. Orzeszko'},
      {date: '1910', text: '«Fashionable nobleman» by K. Kaganets'},
    ],
    video: 'https://www.youtube.com/embed/ACDGr4TUkvs',
    mapData: {
      center: [55.2899866, 28.220279],
      place: 'Theater in home',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Buinicki.jpg'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bujnicki2.jpg'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/%D0%9F%D1%80%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%BA%D1%96._%D0%9F%D0%BE%D0%BC%D0%BD%D1%96%D0%BA_%D0%86%D0%B3%D0%BD%D0%B0%D1%82%D1%83_%D0%91%D1%83%D0%B9%D0%BD%D1%96%D1%86%D0%BA%D0%B0%D0%BC%D1%83.jpg'
      },
      {
        num: 3,
        src: 'https://places.by/wp-content/uploads/2017/08/147143910580708-i0.jpeg'
      },
    ],
  },
  {
    id: '3',
    name: 'Nikolai Pinigin',
    born: '6 August 1957',
    deceased: 'our days',
    description: 'Belarusian director, Honored Artist of the Republic of Belarus.',
    image: 'https://s9.stc.all.kpcdn.net/share/i/4/1432456/inx960x1380.jpg',
    placeOfBirth: 'Izum, Kharkov region, USSR',
    shortBiography : 'Belarusian director, Honored Artist of the Republic of Belarus. Being a very popular director, N.N. Pinigin tries and invariably succeeds in various types of theatrical art, whether it be a drama theater, a musical theater, or a puppet theater. Laureate of the State Prize of the Republic of Belarus. Recognized as the “Person of the Year in Belarus” in the nomination “Scene”. Laureate of the BSTD Prize named after E. Mirovich in the nomination "For the best direction". Diploma-holder at international festivals in Krakow (Poland), Moscow (Russia), Kharkov (Ukraine), Bratislava (Slovakia), Tallinn (Estonia), Vilnius (Lithuania).',
    timeline: [
      {date: '1979', text: 'Graduated from the directing department of the Belarusian Theater and Art Institute.'},
      {date: '1980 — 1982', text: 'Worked at the Russian Drama Theater. M. Gorky (Minsk).'},
      {date: '1985', text: 'Director of the National Academic Theater by Yanka Kupala.'},
      {date: '1985 — 1987', text: 'Lecturer at the Department of Actor and Directing Skills at the Belarusian Academy of Arts.'},
      {date: '1998', text: 'Director of the Bolshoi Drama Theater. G. A. Tovstonogov (St. Petersburg)'},
      {date: '2008', text: 'Became the main director of the National Academic Theater by Yanka Kupala.'},
    ],
    project: [
      {date: '1979', text: '«Night stagecoach»'},
      {date: '1984', text: '«Woman from the sea»'},
      {date: '1990', text: '«Local» by Yanka Kupala'},
      {date: '1997', text: '«The whims of Marianne» by A. Musset'},
      {date: '1999', text: '«California suite» by Neil Simon'},
      {date: '2000', text: '«Lying on long legs» by E. de Filippo'},
      {date: '2001', text: '«Talents and fans» by A. Ostrovsky'},
    ],
    video: 'https://www.youtube.com/embed/lexVZsR-GF0',
    mapData: {
      center: [59.927614, 30.330527],
      place: 'Tovstonogov Bolshoi Drama Theater',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://s14.stc.all.kpcdn.net/share/i/4/1435121/inx960x1439.jpg'
      },
      {
        num: 1,
        src: 'https://cdn12.img.sputnik.by/images/102328/96/1023289681.jpg'
      },
      {
        num: 2,
        src: 'https://s13.stc.all.kpcdn.net/share/i/12/11199960/inx960x640.jpg'
      },
      {
        num: 3,
        src: 'https://www.nv-online.info/images/cms-image-000152301.jpg'
      },
    ],
  },
  {
    id: '4',
    name: 'Larisa Alexandrovskaya',
    born: '15 February 1904',
    deceased: '23 May 1980',
    description: 'Belarusian opera singer (soprano), theater director, director and public figure.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/%C5%81arysa_Aleksandro%C5%ADskaja._%D0%9B%D0%B0%D1%80%D1%8B%D1%81%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D1%9E%D1%81%D0%BA%D0%B0%D1%8F_%281937%29.jpg',
    placeOfBirth: 'Minsk',
    shortBiography : 'Belarusian opera singer (soprano), theater director, director and public figure. Extraordinarily beautiful voice, inner pressure and energy. She was the first Belarusian artist in 1940 to be awarded the title of People\'s Artist of the Soviet Union. A year later, the Stalin Prize was awarded. Alexandrovskaya had everything to be considered a star of the first magnitude in the state. Indeed, the Belarusian opera house reigned supreme for several decades, because it was not just a part of the Belarusian musical culture, but one of its founders. All the leading Belarusian composers were guided by Aleksandrovskaya, creating their operas in the mid-1930s and the post-war years. At this time, Aleksandrovskaya became a symbol of Belarusian art and Belarus in general.',
    timeline: [
      {date: '1919 — 1924', text: 'Member of the troupe at the political department of the Western Front.'},
      {date: '1927', text: 'Performs Belarusian folk songs at the International Music Exhibition in Frankfurt.'},
      {date: '1933', text: 'Artist of the Belarusian Opera and Ballet Theater.'},
      {date: '1946', text: 'Became the chairman of the Belarusian Theater Association.'},
      {date: '1951 — 1960', text: 'The main director of the Belarusian Opera and Ballet Theater.'},
      {date: '1976', text: 'Appointed Honorary Chairman of the Belarusian Theater Association.'},
    ],
    project: [
      {date: '1951', text: '«Zaporozhets beyond the Danube» by S. Gulak-Artemovsky'},
      {date: '1952', text: '«Scary yard» by S. Monyushko'},
      {date: '1953', text: '«Aida» by Giuseppe Verdi'},
      {date: '1954', text: '«Boris Godunov» by M. Mussorgsky'},
      {date: '1957', text: '«Mikhas Podgorny» by E. Tikotsky'},
      {date: '1960', text: '«The Queen of Spades» by P. Tchaikovsky'},
    ],
    video: 'https://www.youtube.com/embed/eDYuC8m5wsw',
    mapData: {
      center: [53.9103046, 27.5615253],
      place: 'The National Academic Grand Opera and Ballet Theatre',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/6/62/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%BF%D0%B5%D0%B2%D0%B8%D1%86%D1%8B_%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D1%8B_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9.JPG'
      },
      {
        num: 1,
        src: 'https://minsknews.by/wp-content/uploads/2018/03/4-9.jpg'
      },
      {
        num: 2,
        src: 'https://www.sb.by/upload/medialibrary/377/3775af02273a590150a1e89012960225.jpg'
      },
      {
        num: 3,
        src: 'https://hb.bizmrg.com/ex-press/images/content/original/alex-1-cd4966e62fedf6ed9f7203ea9133fdd044fe2785.jpg'
      },
    ],
  },
  {
    id: '5',
    name: 'Boris Lutsenko',
    born: '16 September 1937',
    deceased: '5 February 2020',
    description: 'Belarusian theater director, People\'s Artist of Belarus.',
    image: 'https://www.rustheatre.by/images/stories/administration/lutsenko_black.jpg',
    placeOfBirth: 'Maykop, Adygeisk Autonomous Oblast, USSR',
    shortBiography : 'Belarusian director of theater and cinema. People\'s Artist of the Republic of Belarus. Honored Artist of the Belarusian SSR. The creativity of B. Lutsenko is characterized by a desire for stage metaphor, psychological certainty in the characteristics of the characters, the search for expressive plastic solutions. He has his own vision of the world and the role of man in it, believes that the magic ramp, if it does not heal, then at least console and slightly help, if not all, but at least a few. He is one of the leading and famous directors of Belarus. He has staged over a hundred performances on the stages of the country and abroad.',
    timeline: [
      {date: '1962 — 1967', text: 'Studied at the Belarusian Theater and Art Institute.'},
      {date: '1967', text: 'Admitted to the Belarusian Theater by Y. Kupala.'},
      {date: '1970', text: 'Began to teach at the Belarusian Academy of Arts.'},
      {date: '1973 — 1981', text: 'Chief director of the State Russian Drama Theater by M. Gorky.'},
      {date: '1981 — 1982', text: 'Director of the Kupalovsky Theater.'},
      {date: '1982 — 1991', text: 'The main director of the Studio Theater of the film actor.'},
      {date: '1991 — 2007', text: 'Artistic Director of the National Academic Drama Theater by M. Gorky.'},
    ],
    project: [
      {date: '1970', text: '«Memory of the heart» by Alexandra Korneichuk'},
      {date: '1976', text: '«Three-Penny Opera» by Bertold Brecht'},
      {date: '1979', text: '«Human tragedy» by Imre Madacha'},
      {date: '1985', text: '«Not Afraid of Virginia Woolf» by bEdward Albee'},
      {date: '1990', text: '«Generals in skirts» by Zhana Anuya'},
    ],
    video: 'https://www.youtube.com/embed/C3TMCDZA2rY',
    mapData: {
      center: [53.898314, 27.5507955],
      place: 'Theater by M. Gorky',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG/1643px-Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG',
        text: 'Portrait of Boris Lutsenko by Belarusian artist Alexei Kuzmich, 2001.'
      },
      {
        num: 1,
        src: 'http://images.aif.by/007/667/03b8ec457923e6c67efae3f6275f67cd.JPG'
      },
      {
        num: 2,
        src: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2020-02/TASS_18992976%20copy.jpg?itok=LmXoBDLI'
      },
      {
        num: 3,
        src: 'https://i1.wp.com/www.mlyn.by/wp-content/uploads/2020/02/206005-12-copy.jpg?w=900&ssl=1'
      },
    ],
  },
  {
    id: '6',
    name: 'Evgeny Kryzhanovsky',
    born: '6 June 1955',
    deceased: 'our days',
    description: 'Belarusian actor and chief director of the Minsk Theater of Satire and Humor «Christopher», Honored Artist of the Republic of Belarus.',
    image: 'http://st.oede.by/st/files/new%20year%202014/zvezda/zvezda_6.jpg',
    placeOfBirth: 'Nikolaev, Nikolaev region, USSR, USSR',
    shortBiography : 'Belarusian comedian, actor and chief director of the Minsk Theater of Satire and Humor "Christopher". Artistic director of the television project "Humorinka". Artistic Director of the Cinema Center Evgeny Kryzhanovsky. Honored Artist of the Republic of Belarus.',
    timeline: [
      {date: '1972', text: 'Studied at a school in Kozelsk (RSFSR).'},
      {date: '1973', text: 'Entered the Belarusian Theater and Art Institute in the acting department.'},
      {date: '1977', text: 'Accepted into the troupe of the Yanka Kupala Academic Theater.'},
      {date: '1986', text: 'Created the theater of satire and humor «Christopher». He played more than 30 major and major roles.'},
    ],
    project: [
      {date: '1987', text: '«Who is who?»'},
      {date: '1987', text: '«Good night, kids»'},
      {date: '1992', text: '«Well sitting!»'},
      {date: '1996', text: '«Yesterday, Today, Tomorrow»'},
      {date: '2000', text: '«Just stand, just fall»'},
    ],
    video: 'https://www.youtube.com/embed/2q_HkfBF3AY',
    mapData: {
      center: [53.9008774, 27.5626722],
      place: 'National Academic Theater by Y. Kupala',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Jaugen_Kryzhanouski_and_his_daughter_-_on_an_International_book_exhibition_in_Minsk_city_-_14_February_2015_AD_-_1.JPG'
      },
      {
        num: 1,
        src: 'https://www.intex-press.by/images/cms-image-000035009.JPG'
      },
      {
        num: 2,
        src: 'http://zviazda.by/sites/default/files/field/image/14-6_kopiya_4.jpg'
      },
      {
        num: 3,
        src: 'http://mediapsart.ru/sites/default/files/imagecache/actor_gallery_full/actor_gallery/3-41.jpg'
      },
    ],
  },
];

const mainText = 'The profession of theater director in the form in which we are accustomed to seeing her, developed in the second half of the XIX century. But the concept of directing appeared much earlier - in 1742. The director of the theater defines the general idea, which will be revealed during the performance. This creative worker combines the efforts of everyone else - decorators and actors, composers and make-up artists. It is he who must unite all the theater workers, make them imbued with meaning, put their soul into the production. For this, the director needs to be a good psychologist, while being able to control himself. Theater director - a difficult profession. To become one, one must possess assertiveness, seriousness, literacy, intelligence and originality. This person interprets the plays - of course, according to his vision, so that they sound in a new way, interest the audience.';
const addText = 'Since the mid-18th century, serf theaters began to spread in Belarus - the Radziwills, Sapieha, Oginsky and other magnates competed with each other, including in the field of art. Therefore, they did not spare money on the training of serf artists and invited the most qualified European choreographers: Austrians, French, Italians, Czechs. Closer to the 19th century, ballet from an “accidental” dance gradually turns into high art, with harmonious choreographic compositions and special music. At this time, the Belarusian ballet schools of Postavy, Slonim, Shklov, Vitebsk became famous. The professionalism of Belarusians was repeatedly noted by theatrical critics of that time, saying that other performances in their splendor exceeded even the Moscow ballet. The Belarusian theater school developed in parallel with the European theater. Belorussian school and serf theaters, folk battles were known. The beginning of the Belarusian professional theater can be considered the staging of the play "Selyanka" on the libretto by V. Dunin-Martinkevich and music by S. Manyushko. It happened almost 155 years ago - February 9, 1852. Today in Belarus there are 29 professional state theaters. Among them, the most dramatic (19). There are also 7 puppet theaters in the republic (in each region and capital) and 3 musical theaters. In this variety of theaters, many directors have devoted themselves to work in these institutions. And in this project, we want to talk about the most famous theater directors in Belarus.';

const firstQuote = {
  author: 'Jarko Petan',
  text:"\"In the theater, the director is God, but the actors, alas, are atheists.\"",
}

const secondQuote = {
  author: 'George Bernard Shaw',
  text: "\"Director's work is incompatible with acting: the actor will fail if he will critically look at his partners.\"",
}

const directorOfTheDay = 'Director of the day';

const directorPageTitles = {
  timeline: 'Timeline',
  work: 'Work',
  dateOfCreation: 'Date of creation',
  map: 'Map',
  gallery: 'Gallery'
}

export default {
  developersFeatures,
  worklogNav,
  tasksData,
  styleguideNav,
  colors,
  developers,
  directors,
  directorsLink: 'List of directors',
  developersLink: 'Team members',
  homePageLink: 'Home',
  worklogLink: 'Worklog',
  styleguideLink: 'Styleguide',
  close: 'Close',
  otherInfo: {
    title: 'Theater directors of Belarus'
  },
  mainText,
  addText,
  firstQuote,
  secondQuote,
  directorOfTheDay,
  directorPageTitles
}
