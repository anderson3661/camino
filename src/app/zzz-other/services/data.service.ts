import { CaminoStatModel, CaminoStatsModel } from './../interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    public startDate: Date;

    constructor() {
        this.startDate = new Date('24 May 2017');
    }

    public caminoStats: CaminoStatsModel = [
        {
            day: 1,
            daySummary: 'England to Bayonne, France',
            distance: 0,
            accommodationName: 'Citodel Cote Basque',
            accommodationType: 'Hotel',
            accommodationComments: 'Niceish hotel.  There were twin beds in the room as you walked in, and then you walked into a hallway which had the bathroom and toilet off it and also the other bedroom which we stayed in.  Hotel was ok.  Reception was a in a tiny dark corridor.  The 2 of us had a nice pizza meal at a pizza place alongside the river in Bayonne.',
            accommodationURL: 'http://hotel-cotebasque.fr/en/',
            // youtubeURL: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/cM19LzLAoZM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>',
            youtubeURL: 'cM19LzLAoZM',
            blog: 'Flew from Stansted to Biarritz with Ryanair. Caught bus to Bayonne. Had lovely meal by the riverside.'
        }, {
            day: 2,
            daySummary: 'Saint-Jean-Pied-de-Port',
            distance: 0,
            accommodationName: 'Gite Izaxulo',
            accommodationType: 'Albergue',
            accommodationComments: '',
            accommodationURL: 'http://www.gite-izaxulo.com/english/legite.html',
            youtubeURL: 'cM19LzLAoZM',
            blog: 'Because of the strike in France trains weren\'t running so we had to share a taxi with 2 others to St Jean Pied de Port. Had a fabulous \'Pilgrims\' meal there for only 14 euros each.'
        }, {
            day: 3,
            daySummary: 'Roncesvalles',
            distance: 25.1,
            accommodationName: 'Albergue de Roncesvalles',
            accommodationType: 'Albergue',
            accommodationComments: 'Huge albergue set in blocks of 4.  Very clean.  Had meal at one of the 2 restaurants associated with the place.  Sat with Karen, Kerry (little girl from US/Canada), Lauren & Nate, and another older couple.  Good, fun meal.',
            accommodationURL: 'http://www.alberguederoncesvalles.com/',
            youtubeURL: '7MvPdGex8w4',
            blog: 'Walked from St Jean to Roncesvalles, 25.1 kms taking about 8 hours. <br>Meant to be one of the hardest days as the first 20 kms is all uphill over the Pyrenees, and it was tough, but compensated by the spectacular scenery. Had our first experience of staying in an albergue!'
        }, {
            day: 4,
            daySummary: 'Zubiri',
            distance: 21.9,
            accommodationName: 'El Palo de Avellano',
            accommodationType: 'Albergue',
            accommodationComments: 'Upstairs with nice area downstairs.  Shared with Barbara, Janice & Sarah and UK army guy and several others - about 14 beds in our room.  Barbara was there and had problems with her leg.',
            accommodationURL: 'http://elpalodeavellano.com/en/home/',
            youtubeURL: 'tDMzH6cZWAE',
            blog: 'Last 3 kms particularly difficult as very steep downhill. Shoulders aching from carrying backpacks for 2 days. My first blister starting to form on my big toe.'
        }, {
            day: 5,
            daySummary: 'Pamplona',
            distance: 20.9,
            accommodationName: 'Casa Paderborn',
            accommodationType: 'Albergue',
            accommodationComments: 'Small albergue run by German ladies.  Shared a room with Maya (slept on the floor) and Kirsten and also Lothar - just 5 in our room.  Christian was in another room as was the Austrian lady who had lost her husband earlier in the year.  Big group met in Pamplona, went for drinks and tapas at a bar, and then a small group went out for a pilgrims menu at a restaurant (Karen, Lothar, Christine and her husband who were really funny).  Unexpectedly good fun meal.',
            accommodationURL: 'http://jakobusfreunde-paderborn.com/unser-verein-2/casa-paderborn/',
            youtubeURL: 'ghHBlzI1GSo',
            blog: 'A little strange to be in a big city again. Saturday night, a fiesta/festival in Pamplona and the city was really buzzing.'
        }, {
            day: 6,
            daySummary: 'Puente La Reina',
            distance: 23.8,
            accommodationName: 'Puente',
            accommodationType: 'Albergue',
            accommodationComments: 'Sat outside on the terrace for a while, but it was very hot.  Went for a meal in the evening and sat on our own, and later a big group with Christian, Brittany, Maria, Angelo, Jojo etc arrived and it was very noisy.  At another table was the grandfather with the 2 girls (the friendlier one Raphael was from Canada).',
            accommodationURL: 'http://alberguepuente.com/es_ES/',
            youtubeURL: 'GL8xk61h6DQ',
            blog: 'Last 5 kms tough as were both very tired. Managed to get the last 2 (upper) bunks at an albergue but turned out Andrea was the only women with 9 middle aged men. She wasn\'t overly happy and the 2 beneath us were snorers from hell.'
        }, {
            day: 7,
            daySummary: 'Estella',
            distance: 21.9,
            accommodationName: 'Los Amigos del Camino',
            accommodationType: '',
            accommodationComments: '',
            accommodationURL: 'http://www.caminodesantiagoestella.org/',
            youtubeURL: '9v-JF0TnVDI',
            blog: 'Estella was quite a big place but it was a Monday and was very difficult to find somewhere to eat in the evening. Ended up having baguette, Brie and strawberries. Second blister on little toe started; Andrea has none!'
        }, {
            day: 8,
            daySummary: 'Torres Del Río',
            distance: 29.3,
            accommodationName: 'Rural San Andres',
            accommodationType: 'Hostal',
            accommodationComments: 'Tried other albergues and ended up with this one.  The room with the bunk beds didn\'t look great, but girl on reception said there was a room upstairs for 30 euros, and the room was fantastic.  We had drinks up the road at a nice café, sitting outside in the sun.  Can\'t remember where we ate.',
            accommodationURL: 'http://sanandreshostal.com/',
            youtubeURL: 'tDKY3JhKQGU',
            blog: 'The weather was good and so we decided to go on from the recommended stopping point and do an extra 10 kms. Made it a long tiring day. The albergue we wanted to stay at was closed, so we went to another. The woman showed us the dorm and then said there was a double room for 40 euros if we were interested; she showed it to us and it was probably the quickest decision we have ever made; it was just like a really plush hotel room.'
        }, {
            day: 9,
            daySummary: 'Logroño',
            distance: 20,
            accommodationName: '',
            accommodationType: '',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'Lv5Wdo2f15o',
            blog: 'Oh no - with only 3 tee-shirts and 3 shorts/trousers, had to wear a combination today that had previously been worn ! <br>Some days we seem to walk alone together for long periods, which is fine; other days, like today, we walked with other people nearly all day, which certainly makes the walk pass by quicker. The social interaction is fascinating, trying to judge when people are happy in their own space, and when wanting to communicate.'
        }, {
            day: 10,
            daySummary: 'Nájera',
            distance: 28.9,
            accommodationName: '',
            accommodationType: '',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'w-qucKJxwiI',
            blog: 'Long, long walk which meant we didn\'t finish until mid afternoon. As the sun was out nearly all day, the last 10 kms was very hot. As we are walking across Northern Spain the sun is predominately to our left and just behind us. Therefore it was very funny to see people later with sunburn mainly down the left side of their exposed limbs.'
        }, {
            day: 11,
            daySummary: 'Santo Domingo de la Calzada',
            distance: 21.3,
            accommodationName: 'Parador',
            accommodationType: 'Hotel',
            accommodationComments: '',
            accommodationURL: 'http://www.parador.es/en/paradores/parador-de-santo-domingo-de-la-calzada',
            youtubeURL: 'ICh0Bj2j1h8',
            blog: 'My birthday so we stayed at the Parador de Santo Domingo - very luxurious compared with what had gone before - we even had a bath !!!'
        }, {
            day: 12,
            daySummary: 'Belorado',
            distance: 22.4,
            accommodationName: 'Cuatro Cantones',
            accommodationType: 'Albergue',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'bt_dPwCQXGg',
            blog: 'Tough day - for some reason the walk seemed longer and harder than usual - perhaps because of the accumulated tiredness of all the walking. <br>Met some people today who do the Camino by staying in hotels and having their bag forwarded by car to the next hotel each day. Cheats (he says enviously)!'
        }, {
            day: 13,
            daySummary: 'Agés',
            distance: 27.8,
            accommodationName: 'San Rafael',
            accommodationType: 'Albergue',
            accommodationComments: 'Albergue just as you enter the village.  Had our own room with bathroom on first floor just opposite the main bunks room.  No hot water so cold showers.',
            accommodationURL: 'http://www.actiweb.es/alberguesanrafael2010/',
            youtubeURL: 'lqXR8yj_ahw',
            blog: 'Another long tiring day but a nicer walk than yesterday with a lot of wooded areas and pretty small villages.'
        }, {
            day: 14,
            daySummary: 'Burgos',
            distance: 22.5,
            accommodationName: 'Lar',
            accommodationType: 'Hostel',
            accommodationComments: 'Own room and own bathroom in a place booked by Maria.',            
            accommodationURL: 'http://www.hostallar.es/en/',
            youtubeURL: 'T9cuVUfUv6c',
            blog: 'Arrived yesterday (Day 11) at the Albergue to be told there was no hot water. When you are only paying 7-10 euros each for a bed for the night it\'s hard to complain and it is all part of the Camino experience; having said that, it was blinking cold. <br>It was a long walk into the big city of Burgos today, taking nearly 2 hours to get from the outskirts to the centre. We stopped for lunch at McDonalds; I have always liked McDs, but equally have always hated myself for liking McDs, and especially today as it felt wrong. <br>We experienced our first sad moment of the Camino, having to bid farewell to Brittany, a lovely woman born in America but who has lived in Jerusalem for the last 12 years, and whom we had shared a taxi with before the walk began.'
        }, {
            day: 15,
            daySummary: 'Burgos - Rest Day',
            distance: 0,
            accommodationName: 'Lar',
            accommodationType: 'Hostel',
            accommodationComments: 'Own room and own bathroom in a place booked by Maria.',
            accommodationURL: 'http://www.hostallar.es/en/',
            youtubeURL: 'OhPF1lCXr18',
            blog: 'Our first rest day, and nice not to have to get up at 6 and get our backpacks ready. Did some touristy sight-seeing stuff; Burgos is a very nice city and the grandeur of its cathedral is very impressive. We had chocolate con churros which were also very impressive.'
        }, {
            day: 16,
            daySummary: 'Hornillos del Camino',
            distance: 21,
            accommodationName: 'Al Elfar',
            accommodationType: 'Albergue',
            accommodationComments: 'Stayed in a room upstairs for 6.  Kent & Debs also stayed.  There was a bathroom upstairs and one down.  Had a communal meal in the evening which was Paella.  When we arrived we got a litre of beer and sat in the small garden outside.  At one end of the table was some French people; I sat next to the funny French woman.',
            accommodationURL: 'http://elalfardehornillos.es',
            youtubeURL: '7Z1GEJ7p76E',
            blog: 'After a day off it was nice to get walking again although it felt a little strange, as did carrying the backpack. <br>Today we enter the Meseta, which will involve days of flat featureless walking on earth tracks through endless crop fields, with little or no shade (or cafes); should be fun!<br>In the evening we had a bottle of Rosé with our meal which made a pleasant change from red (being in the La Rioja region).'
        }, {
            day: 17,
            daySummary: 'Castrojeriz',
            distance: 20.1,
            accommodationName: 'San Anton',
            accommodationType: '',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'MzcAw7lTzv8',
            blog: 'More and more people are starting earlier (quite a lot at 5am) to get the majority of the walk done before the sun really takes hold; we\'ll stick to 6am. The sun is really piercing after about 11am, especially during the last few days when it has been in the mid-high 20s; it has even managed to pierce the thick brown hair on top of my head! <br>More farewells today, Christian (Berlin) and Nathan (Australia), both who have had to go back to work. There are quite a lot of people who are only walking part of the Camino and who will return in the future to continue from the point they stopped at.'
        }, {
            day: 18,
            daySummary: 'Boadilla del Camino',
            distance: 19.1,
            accommodationName: 'Rosalia',
            accommodationType: 'Albergue',
            accommodationComments: 'Nice albergue.  Stayed in room for 5 with Maya and Kirsten and another guy who had had to stay another day because of injury.  Internet on PCs upstairs.  Sat in the outside bit at the end of the day talking with Nathan and the other girls and Kent & Debs.  Christian was also there and had come back from where he had walked to as it was his last day and we said goodbye.',
            accommodationURL: 'http://alberguerosalia.com/en/',
            youtubeURL: 'LaAjPdyjO7M',
            blog: 'Walked for quite a long time with Daniel, a 33 year old from Teddington. Daniel has cerebral palsey and is walking (with considerable difficulty) with the aid of crutches. He hopes to complete the walk in just under 3 months and is doing it to give him time to decide what he wants to do with the rest of his life. Loads of respect for him and a very humbling experience. <br>We have also already met a few other people who are doing the Camino because they have recently lost someone very close to them.'
        }, {
            day: 19,
            daySummary: 'Carrión de los Condes',
            distance: 25.1,
            accommodationName: 'El Camino',
            accommodationType: 'Albergue',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'P-jmMNFo708',
            blog: 'Stopped for a coffee break after 10 km and bumped into the lovely Daisy (from London), and we were very excited to see each other. We had shared the taxi on the day before the walk started and hadn\'t seen each other for about 14 days. <br>In the evening we went to the special pilgrim\'s mass at the church, which was a surprisingly emotional event; the church was about three quarters full at 8pm on a Saturday night. The quantity and quality of churches along the Camino is unbelievable, with the majority of small or medium sized sleepy villages having one or more very impressive churches.'
        }, {
            day: 20,
            daySummary: 'Ledigos',
            distance: 23.4,
            accommodationName: 'La Morena',
            accommodationType: 'Albergue',
            accommodationComments: 'Place where the Italian lady thought she had lost her valuables and Eugene had food poisoning.  Had a nice meal in the restaurant with Patricia and the Italian lady, although they didn\'t serve wine with the pilgrim\'s menu.',
            accommodationURL: 'http://www.alberguelamorena.com/en',
            youtubeURL: 'bhs2LzQ-Rv0',
            blog: 'Andrea has had a cold for the last few days and is suffering today (ironic considering the temperature has been in the mid-high 20s); thankfully it is not affecting her ability to walk too much. Really hope I don\'t catch it otherwise we might have to have a few rest days!<br>Missed the match last night, but very sad to have just read about the trouble in Marseille and also Florida.'
        }, {
            day: 21,
            daySummary: 'Bercianos del Real Camino',
            distance: 26.9,
            accommodationName: 'Santa Clara',
            accommodationType: 'Albergue',
            accommodationComments: 'Little place.  Had our own room upstairs.  Rick and Starr were also staying there and we ate with them later at the bar not far from the albergue.  There was a central garden area where we sat for a bit.  We tried the main albergue but it was full and they only had a room with mats.',
            accommodationURL: '',
            youtubeURL: '8wlFKpO7Jv8',
            blog: 'Woke at 6 as usual but Andrea was still full of cold so we had a bit of a lie-in until 6:30. There was a bit of drama before we started walking; firstly we saw Nadia, an Italian lady who we had walked with yesterday, who said she had lost her purse, including all money, cards and passport. We helped her search her room and luckily she had only misplaced it, rather than it having been stolen as had happened a few days ago to a young American girl. We then saw Eugene, a great guy from Australia, who had collapsed on the trail yesterday with suspected food poisoning. He was planning to go to hospital this morning to get himself checked out. As it turned out it was a really long walk and Andrea did really well to complete it (due to her cold). <br>It\'s funny how we bump into a lot of people we know and the first topic of conversation is about blisters, knees, tendonitus, shin splints, sore feet, Achilles injuries.'
        }, {
            day: 22,
            daySummary: 'Mansilla de las Mulas',
            distance: 26.7,
            accommodationName: 'Gaia',
            accommodationType: 'Albergue',
            accommodationComments: 'Lovely albergue run by couple who had done numerous caminos.  About 12 in room including Mauro and Barbie and her dad and also the American girl',
            accommodationURL: 'https://alberguegaia.com/',
            youtubeURL: 'GBAOv-LwbuQ',
            blog: 'A second successive long walk and we were really tired by the end. We stayed in a small albergue in a small room with 5 other people, but the facilities were excellent, very modern and clean. The female hospiteralo had walked one of the caminos on 10 previous occasions and the male 8 times so they knew exactly what pilgrims were looking for. All this for only 5 euros each! We then went with 8 other pilgrims to a restaurant and had had a really fun meal; a memorable evening. During the afternoon, after we had finished walking, it poured with rain for only the first time since our first day. Luckily we were able to take shelter.'
        }, {
            day: 23,
            daySummary: 'León',
            distance: 18.1,
            accommodationName: 'Marella',
            accommodationType: 'Albergue',
            accommodationComments: 'Nice place not far from the cathedral.  We had our own room with toilet/showers in rooms just outside.',
            accommodationURL: 'http://www.booking.com/hotel/es/abergue-muralla-leonesa.en-gb.html',
            youtubeURL: 'ziYSTLDQtyU',
            blog: 'The word around the caminoists last night was that quite a few of them were not walking today and were going to catch the bus directly to Leon. Apparently the route is mainly along a busy, dangerous road with industrial buildings and pickpockets on the outskirts. It\'s amazing how easily fear can spread. A nice, more elderly, lady from NZ called Anne asked if she could walk with us. As it turned out the route was absolutely fine and we saw very little of the \'dangers\' mentioned. It rained during the walk and for the first time for a couple of weeks we had to don our ponchos. Just goes to show that the rain in Spain falls on the moderately good-looking as well !!!'
        }, {
            day: 24,
            daySummary: 'Villar de Mazarife',
            distance: 21.8,
            accommodationName: 'Meson Albergue Tio Pepe',
            accommodationType: 'Albergue',
            accommodationComments: 'Place where there was a funeral across the road.  Had our own room.  Ate at another albergue up the road and had a lovely vegeterian pilgrims meal with a lot of people including Patricia, Erling and Rachael.',
            accommodationURL: 'Room slept 6 and was ok.  There was a central area where you could sit.  Did hand washing there.   The 2 Swedish ladies stayed but in a separate room.',
            youtubeURL: 'SxgyhCKpw9A',
            blog: 'As the weather was cold (i.e less than 10 degrees) and the forecast was for more heavy rain, thunder and lightning we decided not to take the planned rest day in Leon. Although we are physically tired and could have done with a rest day we decided that we will do a few shorter days to \'rest\' and also wait for the sun to return as walking in this coolish weather is not particularly enjoyable. We walked along a path through fields with nothing around for miles except the occasional tree or electricity pylon. The sky all around was very stormy and neither of us could remember what we should do if there was lightning. Later we google it (after the walk) and discover that one should crouch down as low as possible on the balls of ones feet. Luckily the storm doesn\'t materialise, and so the choice of crouching down when it it is bucketing down, or sheltering under a tree, can wait for another day ! <br>There was a choice of route today, a 4-5 hour scenic route through countryside or 4-5 hours alongside a busy road. Sounded like a simple choice except the latter option passed through the little village of San Martin del Camino; surely the photo opportunity of me standing by the sign into the village is too good to ignore? <br>Split vote; we take the scenic route! Possibly not quite deserved but Saint Martin of the Camino sounds good!'
        }, {
            day: 25,
            daySummary: 'Villares de Órbigo',
            distance: 19.1,
            accommodationName: '',
            accommodationType: '',
            accommodationComments: '',
            accommodationURL: 'http://www.alberguetiopepe.es/nos.html',
            youtubeURL: '6s_vSJnnzK4',
            blog: 'Today was a relatively shortish walk, but it was very cold and we were both still tired. <br>I had been feeling rather smug about how good I had been feeling; big mistake. Today my right shin was playing up and was pretty swollen at the end of the day. I decided not to google shin splints as it would probably only suggest something ridiculous, such as rest, which unfortunately is not an option available to us. <br>We stayed at an albergue which had been highly recommended on Internet forums. It was really quirky, and we got her own room for only 20 euros. It was cold and we needed a shower; however the communal showers really felt like being back at school; we had to remind ourselves that being a real pilgrim involves suffering and not just fun ! <br>The evening meal was something else. It was donativo (donation) and was a 3 course meal with fabulous chorizo and ham quiches. It is so refreshing to see people who do things out of the kindness of their heart rather than trying to extract every last euro/centime out of you. To be honest it is only a very small minority on the Camino who charge what seems to be excessive.'
        }, {
            day: 26,
            daySummary: 'Murias de Rechivaldo',
            distance: 19.2,
            accommodationName: 'Junta Vecinal',
            accommodationType: '',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'jCNj1dXj27k',
            blog: 'A lot warmer today; back to how it was for the first couple of weeks, and making for a much more enjoyable walk. The village we stayed at had a limited number of beds, however I still chastise myself for not learning from experience; a municipal albergue with very basic facilities doth not a happy woman make! <br>Had a nice meal with Theresa and Vera; two nice ladies from Sweden.'
        }, {
            day: 27,
            daySummary: 'Foncebadón',
            distance: 21.3,
            accommodationName: 'La Posada del Druida',
            accommodationType: 'Albergue',
            accommodationComments: 'Room slept 6 and was ok.  There was a central area where you could sit.  Did hand washing there.   The 2 Swedish ladies stayed but in a separate room.',
            accommodationURL: '',
            youtubeURL: 'L5E9By1SqPw',
            blog: 'A really lovely walk today through lovely countryside and we started to walk up into the mountains again, up quite steep and very rocky climbs. The sun was just rising at 6:30 when we set off and was warming as the day progressed. My shin was very sore and it was a relief to take the hiking boots off at the end of the walk. The blisters have thankfully cleared up for both of us, as has Andrea\'s cold, and at the moment she seems as strong as an ox! <br>We had a nice meal with Rick and Starr from the US in a lovely Spanish taberna.'
        }, {
            day: 28,
            daySummary: 'Molinaseca',
            distance: 19.8,
            accommodationName: 'The Way',
            accommodationType: '',
            accommodationComments: 'Had our own room with own bathroom.  Night of England v someone which finished 0-0.  Got room after Bettina,Sue,Mary Ellen had spoken to slightly strange but friendly hospitalero.',
            accommodationURL: '',
            youtubeURL: 'xBiPyqgQh5U',
            blog: 'Really good day. It started with a 30 minute hike up to La Cruz de Ferro (Iron Cross) at 6:30. Legend has it that leaving a stone underneath it will rid yourself of a burden from your life. We have carried and we left 2 small stones all the way from home. <br>The rest of the day involves a long downhill walk; it sounded great on paper but turned out to be one of the hardest days so far; it was very steep in parts and there were lots of difficult rocky bits which made every step difficult.'
        }, {
            day: 29,
            daySummary: 'Villafranca del Bierzo',
            distance: 30.6,
            accommodationName: 'Leo',
            accommodationType: 'Albergue',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'RGo680iPuSI',
            blog: 'Double ouch day. Firstly it is the furthest we have walked in a day in terms of distance (although not difficulty) and in addition it is the hottest day we have walked in. We start walking at 6:15 and arrive at 15:45 having had to take several short breaks to escape the sun (which is in the mid-30s when we arrive at our destination). <br>Secondly my shin is very sore when we start and at our first 8km breakfast stop I have to take pain killers and change from hiking boots to hiking sandals. Luckily both do the job. <br>When we arrive at the albergue there are only 2 upper beds in different rooms, but the lady seems to like us, or take pity on us, and says that her sister has a flat just round the corner which she rents out for only 30 euros. So we are in our own flat tonight; bonus !!! <br>Had a really nice fun meal in the plaza mayor; we started off on our own but by the end there were 10 people sitting round the table from different countries.'
        }, {
            day: 30,
            daySummary: 'Laguna de Castilla',
            distance: 26.4,
            accommodationName: 'Escuela',
            accommodationType: 'Albergue',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'N7ZSLIhYKRU',
            blog: 'Another scorcher, and the last 5km was a very, very, never ending, steep climb to near the top of O\'Cebreiro. We walked for quite a while with Barbara, a lawyer from Brazil and separately with a nice lady from Italy who is an excursion organiser for the cruise company MSC.'
        }, {
            day: 31,
            daySummary: 'Triacastela',
            distance: 23.2,
            accommodationName: 'A horta de Abel',
            accommodationType: 'Albergue',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'LY-7973VixE',
            blog: 'We experienced two scenes like in horror films. The first happened the previous night at a remote albergue near the top of a mountain. In our room were 7 other people including 3 Spanish cyclists, one of whom was a large guy who could have won the world\'s worst snorer contest. If that wasn\'t bad enough during the night we had thunder and lightning and the next morning both Andrea and myself said to each other that we had had a dream/nightmare about a madman attacking all of us in the room! <br>The second incident occurred when we started walking at 6:30 am. It was misty and cool and for all of the 2 km to the top of the mountain we were each surrounded by about 30 flies who seemed to take it in turns to try and land on our faces. We were waving our hands about and getting angrier with each passing moment; we daren\'t look at each other because the sight was too horrific to behold. <br>Once at the top the views were fantastic and it was a lovely walk down the mountain, fly free.'
        }, {
            day: 32,
            daySummary: 'Sarria',
            distance: 18.7,
            accommodationName: 'Casa Matias',
            accommodationType: 'Pension',
            accommodationComments: 'Own room and bathroom in a place 10 min walk out of town.  No-one else stayed near.',
            accommodationURL: '',
            youtubeURL: '7LCE0iolxtg',
            blog: 'Today illustrated the luck of the draw when choosing each night\'s accommodation. We had been forewarned that there was a fiesta/festival in Sarria, and when we arrived at lunchtime there were a lot of fireworks to be heard. We had chosen to stay at a private hostel, which we didn\'t realise was just outside of the town centre, because we fancied having our own room for a change. At the time it was a pain to have to walk into the town centre as we were both tired; however we ate in the evening and went back to the hostel before the party really got going. We later heard from people staying at an albergue in the centre that the fiesta hadn\'t finished until about 4am and they had had very little sleep because of the noise; we had a really good night\'s sleep!'
        }, {
            day: 33,
            daySummary: 'Portomarín',
            distance: 22.1,
            accommodationName: 'Aqua',
            accommodationType: 'Albergue',
            accommodationComments: 'Nice clean albergue.  Shared room with Bob, Meg, Karen and 3 other girls.',
            accommodationURL: '',
            youtubeURL: '5pIfEILQ-tk',
            blog: 'To obtain a compostela you must walk at least 100 km and Sarria is just over 100 km from Santiago. This means that the Camino is notorious for getting busy at this stage, and boy was it busy. Lots of teenage school children and walking holiday parties; us hardened Caminoists found it very hard to accept! <br>We arrived at Portomarin, and what a gorgeous place it was, a medium sized town set on a hill overlooking a large reservoir. We had a very enjoyable, relaxing drink, followed by a meal, overlooking the water under sunny, but not too hot, skies; it was another fabulous Saturday night.'
        }, {
            day: 34,
            daySummary: 'Palas de Rei',
            distance: 24.8,
            accommodationName: 'A Casina di Marcello',
            accommodationType: 'Albergue',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: 'ROJHhjkXBNk',
            blog: 'We stayed last night in a lovely albergue in a room with 3 other people we know well and also 3 youngish girls (i.e. mid-20s), who had only started walking yesterday. At 9:30 pm it is generally accepted by the regulars that it is time to get ready and settle down to bed. The girls turned up in the room at 9:30, a little the worse for wear, and complained that it was far too early to go to sleep and went off to the kitchen area. As they had dared to disturb the status quo we decided that we should get our own back and make \'ever so slightly\' more noise than usual when we woke at 6am. In the morning we are woken up at 5am by synchronised alarms, the 3 girls got up, dressed and went on their merry way! The rest of us had a good laugh about it later !!!'
        }, {
            day: 35,
            daySummary: 'Ribadiso da Baixo',
            distance: 25.6,
            accommodationName: 'Milpes',
            accommodationType: 'Hostel',
            accommodationComments: '',
            accommodationURL: '',
            youtubeURL: '6HiEmneqgAE',
            blog: 'Another perfect day on the Camino. The walk was very scenic, we walked for a long time with several of our favourite friends, and we arrived at a sparkling new albergue to find that a lot of our friends were staying there too. <br>The albergue had an outdoor seating area in the shape of a triangle with water in the middle, so 10 of us sat there for ages having a drink, paddling our weary feet in the water, and enjoying the sun. <br>We started to discuss the reality that the adventure would soon be coming to an end; everybody would have liked it to continue.'
        }, {
            day: 36,
            daySummary: 'Monte do Gozo',
            distance: 38.1,
            accommodationName: 'Monte do Gozo',
            accommodationType: 'Albergue',
            accommodationComments: 'Disappointing as big complex for 400 but only our block open.  Water stopped working during the evening.  Room had 4 double bunks but there was only us and the youngish guy from Australia.',
            accommodationURL: '',
            youtubeURL: 'XhLsVkLethM',
            blog: 'Our longest, furthest and hardest day by a long way. We decided to end the day as close as possible to Santiago so that we could arrive as early as possible the next day. That meant waking at 5:30am and walking until 4:30pm (including numerous breaks); about 23 miles in all. By the end we were absolutely exhausted and the last few km were a real struggle. <br>We arrived at a massive albergue, which can sleep 400, with its own restaurant and cafe, a bit like a uni campus. However, there were only about 50 of us staying so most of it, including the restaurant/cafe, was closed and additionally the accommodation blocks resembled a concentration camp. We showered on arrival and then had to walk another km to eat, only to return to find that there was a problem with the water (i.e it was broken) and so late arrivers were unable to shower or use water for cooking, and also the toilets couldn\'t be flushed!'
        }, {
            day: 37,
            daySummary: 'Santiago de Compostela',
            distance: 4.5,
            accommodationName: 'NH Collection',
            accommodationType: 'Hotel',
            accommodationComments: 'Excellent.  Used our free night from Hotels.com',
            accommodationURL: 'http://www.nh-collection.com/hotel/nh-collection-santiago-de-compostela',
            youtubeURL: 'S_dIBU6Ofzg',
            blog: 'We arrived in Santiago, outside the Cathedral about 9am and had photos taken with other finishers, including Barbara from Brazil who we had met at breakfast on the very first day. <br>As it was our anniversary we stayed at the 5 star NH Collection hotel, and the room was one of the nicest we have ever stayed in. <br>We attended the mass at noon which lasted for an hour and was conducted entirely in Spanish; however it was a perfect opportunity for some quiet reflection on what we had achieved and it also felt appropriate to reflect on our lives and especially people we had loved and lost, such as my dad, Andrea\'s dad, grandparents, aunts, uncles and friends. <br>Right at the end of the service they performed the swinging of the Botafumeiro which was even more spectacular to see in person than on YouTube. <br>Later in the day we met up with numerous other friends who had either finished today or yesterday, and we had a really nice evening celebrating with them.'
        }, {
            day: 38,
            daySummary: 'Santiago de Compostela - Rest Day',
            distance: 0,
            accommodationName: 'NH Collection',
            accommodationType: 'Hotel',
            accommodationComments: 'Excellent.  Used our free night from Hotels.com',
            accommodationURL: 'http://www.nh-collection.com/hotel/nh-collection-santiago-de-compostela',
            youtubeURL: 'y6zppUsPzOM',
            blog: 'Lie-in until 8 am. Shower and go to breakfast; the buffet is fantastic and it is difficult to know what not to have.  Wander up to the cathedral about 10:30. Saw Annie. Find tourist info office to get info about Finisterre. Wander around Almeida park and then find where Em stayed. Had a look around Zara. Then wander back up through the old town and see the last 5 minutes of the botefuima. See Eugene waiting to do the cathedral tour with another youngish lady who later Kent says Eugene got very attached to. Walk around inside the cathedral for a while. Then sit and have a sangria near the top, and are joined by Patricia, Erling and Rachael. Agree to meet at 5 and as it is about 3 decide to stay in the old town.  Meet at 5, massive table with Jen, Cathy, Andres, Karen, Anne and dad, Anne from NZ. Later joined by Kent and Debs, John and really pleased to see Rick and Starr.  Also woman from Hungary.  Decide to eat; see Bob and Meg. Go to a Pizzeria and have calzone/spag Bol with Rick and Starr, Patricia and Erling. Go back to hotel and asleep about 11:30'
        }, {
            day: 39,
            daySummary: 'Negreira',
            distance: 22,
            accommodationName: 'San Jose',
            accommodationType: 'Albergue',
            accommodationComments: 'Had our own room in a building next to the main albergue.  Room was basic but good to have.  Used the washing machine/dryer in the main albergue.',
            accommodationURL: '',
            youtubeURL: 'pJgnS7lQxQw',
            blog: 'Woke up at 7 but snoozed to 7:45.  Had the fabulous buffet breakfast again. Left the hotel about 9:45 so by the time we had got up to the cathedral the walk started about 10am.  Walking out is Santiago was easy and was well way marked. The first 8km to the cafe was quite long and it took a while to get used to walking again. We get coffee/tea and shared a boccadillo as Andrea felt the need to eat.  After another few km and before the big climb we stopped and both felt really tired. We then did the climb but Andrea needed to stop near the top as her blood sugar level was low. We then got to the top and it was quite an easy walk down and eventually we came to a really nice cafe/restaurant near a waterfall and had a coke each. We talked to young Helen from Denmark who had just walked the Camino Norte and Primitovo. We walked the remaining 4km and then tried to find a room at an albergue or hotel. We tried the hotel and she knocked us down from 50 to 40 euros but the room with kitchen looked a bit tired. We then went to a travel booth but again no luck. We ended up at San Jose albergue and got a double room with shared bathroom for 30 euros. We went to the supermarket and then ate at the hotel by ourselves (8.95 euros each) - mixed salad/pasta soup and lamb/sardines and ice cream. A few coach loads of OAPs came in and there was a singer warming up beforehand. We got back to the albergue just before 10, packed and went to bed.'
        }, {
            day: 40,
            daySummary: 'Santa Marina del Rey',
            distance: 20,
            accommodationName: 'Casa Pepa',
            accommodationType: 'Albergue',
            accommodationComments: 'Albergue next to the farm.  Andrea wasn\'t feeling great so slept in the afternoon.  Facilities upstairs were good.  Probably about 14 in the room.',
            accommodationURL: '',
            youtubeURL: 'kbhq0AM6G3s',
            blog: 'Left the albergue at about 9 (woke at 7 but snoozed to about 8) and had breakfast at a nice little cake shop at the end of the road. Andrea was still feeling a bit rough and was careful with what she ate. We had a croissant and coffee/tea.              We decided early on that we weren\'t going to be able to do the 33 km necessary to do the walk to Finisterre in 3 days and it would take 4 days. Andrea was in email communication with Patricia to let them know. The weather was warm again, especially as we had left quite late.              On the way we saw John and Francesca from Ukraine and her 18 year old daughter who was studying in Prague. We walked with them for a bit and also stopped at a cafe and took some photos.              We arrived at the albergue which was right next to some farm buildings and is was really smelly sitting outside. However it was fine inside. Andrea slept for a couple of hours and I had a beer outside but there were a lot of flies. Later we had the pilgrims meal inside which was mixed salad, then pork steaks and then ice cream and coffee/tea. I then watched the first half of Germany v Italy 0-0 and Andrea went to bed and did some emails, and then I went to bed.'
        }, {
            day: 41,
            daySummary: 'Cee',
            distance: 33,
            accommodationName: 'Moreira',
            accommodationType: 'Albergue',
            accommodationComments: 'Had our own room with balcony overlooking the sea.  Kent & Debs in next room. Really nice room.',
            accommodationURL: '',
            youtubeURL: 'nbFWT2nXaUs',
            blog: 'Woke at 7 and had breakfast at the albergue. Left at 8 and walked for about 14 km to the first stop. It was sunny and warming up as the day progressed. Sat for cafe and talked to Fabienne from Paris who had been walking since Le Puy. Had a coke. Then walked another few kms and stopped at another cafe for another coke and lemon. The walk was very scenic and there were a lot of wind turbines. Then had to walk 15 km with only a couple of brief stops as no services.  Arrived exhausted.  Lovely approach to Cee and could see the sea in the distance. Stopped at a cafe and had a beer/shandy and dome tapas. Stopped at an albergue with a room for 30 euros with a window overlooking the sea; wonderful. Saw Kent and Debs and he sent me an email from Eugene about Karen.  Went to a restaurant recommended by a guy outside the albergue. Had mixed salad then chicken and chips and then Santiago cake/ice cream. Meal was nice, the cafe/restaurant was so so. We then walked along the promenade by the sea but it was getting cold and windy so were glad to get to the albergue.'
        }, {
            day: 42,
            daySummary: 'Finisterre',
            distance: 22,
            accommodationName: 'Cabo da Vila',
            accommodationType: 'Albergue',
            accommodationComments: 'Nice clean, big room.  Stayed in bunks at the back.  Colette and Leanne were in bunks near the front of the room.',
            accommodationURL: '',
            youtubeURL: 'FhfURe_UD1k',
            blog: 'Woke at 7 and left the albergue just before 8.  Stopped for coffee at Corcubin and saw Fabienne again. Had coffee/tea and croissant. Then walked for a few km. Was sunny again but quite a strong breeze. Stopped and I had a tea at a cafe by the sea. Then walked the last few km into Finisterre and saw some magnificent sandy bays. I walked along the beach into Finisterre. Stopped at the Oceans albergue and saw Karen but they didn\'t have any rooms. So went to Cabo da Vila albergue and found a nice room. Unpacked and then had a coke by a cafe opposite the harbour. Then went somewhere quiet and had our cheese rolls and saw Daisy and her mum. Went to tge supermarket. Then saw Norbert and Leonard  and Megan but not to talk to. Had a sangria at a cafe by the harbour. Went back to our room and had quite a long sleep because we were very tired. Showered and then went to eat at a really nice pizza place by the harbour.  Had pizza each and then a lovely cheesecake. Then walked the 2-3 km up to the lighthouse and saw the sun set which was fantastic. Walked back (forgot to have a picture at the 0 km marker). The weather was very windy and pretty cloudy but where we saw the sunset was quite sheltered.'
        }, {
            day: 43,
            daySummary: 'Muxía',
            distance: 29,
            accommodationName: 'Bela Muxia',
            accommodationType: 'Albergue',
            accommodationComments: 'Nice room in nice hotel for reasonable price.',
            accommodationURL: '',
            youtubeURL: '1Lt2FPftwUM',
            blog: 'Woke at 6:30 and had to get our 5 euro key deposit back at 7. Had breakfast coffee/tea and croissants at the cafe just down the road. Then walked out of Finisterre and tried to find the route for Muxia. Met Colette from North Florida as we were leaving and she asked if she could walk with us and ended up walking for all 29 km. Stopped at a cafe at half way and saw Helen and had coffee/tea. Weather was still windy and cloudy which meant the walking was ok. Walked the rest of the way and the last bit was hard as we were increasingly tired. Walk into Muxia was not great and we were glad we had done the walk into Finisterre. Stayed at an albergue in the centre ( blue one) and had 2 beds at the back for 12 euros each; there weren\'t any rooms. Andrea got talking to Leanne from Utah and we ended up having a sangria at a bar/cafe in the harbour and could shelter from the wind and is really nice and hot. Colettes smoking was starting to annoy us. Decided to eat and looked at a few restaurants but the 4 of us ended up eating at the same place. Had mixed salad, then beef and chips, then Santiago cake/ice cream. Then got back to the albergue at 9:30 ish and went to bed. Missed going to the church with the 0 km marker which other people said was really nice.'
        }, {
            day: 44,
            daySummary: 'Santiago de Compostela',
            distance: 0,
            accommodationName: 'Gelmirez',
            accommodationType: 'Hotel',
            accommodationComments: '',
            accommodationURL: 'http://www.hotelgelmirez.com/en/',
            youtubeURL: 'nNCCdZpQuB4',
            blog: 'Woke at just before 6 and left albergue at 6:30 and walked down to the harbour in order to catch the bus/coach at 6:45. Saw and talked to Megan whilst waiting for the bus. The bus took about 90 mins to get to Santiago but I dozed for a lot of it. We then walked and found a cafe along the Main Street; sat inside and had coffee/tea and croissants but were charged 7 euros. Then went to the tourist info office and got some info about Santiago.  Then sat in the main square and just watched people come and go for quite a while. Then walked down and sat at the cafe opposite Almeida Park and had cokes. Then went to our hotel Gelmirez about 1pm. We were exhausted so rested there until mid afternoon. Then went back out and looked round Zara and Andrea brought a cardigan. Sat in the cafe at the top of the square at the back of the cathedral and had beers. Then went back to Cafe Manola and had salads. Pork/beef and chocolate cake. Then waited in the main square for it to get dark and eventually left just before 11am, and went back to the hotel.'
        }, {
            day: 45,
            daySummary: 'Santiago de Compostela - Sight Seeing',
            distance: 0,
            accommodationName: 'Gelmirez',
            accommodationType: 'Hotel',
            accommodationComments: 'Quiet day to ourselves.  Did the free tour which was interesting.  Met up with Kent & Debs for drinks (in the usual place) and then for a nice meal at the restaurant at the bottom just off the square underneath the Parador.  Had a fabulous ice cream on the way back to the hotel.',
            accommodationURL: 'http://www.hotelgelmirez.com/en/',
            youtubeURL: 'BUSA-7630Sk',
            blog: 'Woke at 8 and leisurely got ready. Left hotel about 9:45 and got croissants and cakes from the cake shop; ate the croissants at Park Almeida. Then had a coffee inside at a cafe along the Main Street in the old town. Went to tourist info to find out airport bus info and then went on the Free Tour Compostela for 2 hours which was really interesting.  After went and had cokes at a cafe near the food markets and then had a quick look round the food (fruit, veg and fish) markets which unfortunately were closing. As it was scorching hot we decided to go back to the hotel for a couple of hours and saw and spoke to Colette along the way. Also saw the guy from Montreal who we had kept bumping in to. Andrea bought a little shell for her Pandora bracelet. Went up to the cafe/bar at 5:30 and had drinks with Kent and Debs and then went for a meal with them at the restaurant by the side of the cathedral. Had green salad, then lamb, then Santiago Cake/ice cream. After, walked back with them and had a delicious ice cream at the place we had walked past a few times.'
        }, {
            day: 46,
            daySummary: 'Home',
            distance: 0,
            accommodationName: 'N/A',
            accommodationType: 'N/A',
            accommodationComments: 'Went to airport on the early bus and flew home.  Arrived midday.  Had to get the house ready for a viewing for the rest of the day.',
            accommodationURL: 'N/A',
            youtubeURL: 'sL6_BCdL-3E',
            blog: 'Woke at 6 had shower and left hotel at about 6:40. Walked 5 mins up to the bus stop and caught the 7 o\'clock bus.  Cost 3 euros each and took 40 mins as made multiple stops on route. Arrived at nice new terminal and went straight through security and then had a coffee and croissant. Spoke to Daisy\'s mum when we boarded.'
        }
    ];

}
