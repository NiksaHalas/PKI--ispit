// "movieId": 1,
//     "internalId": "HO00014952",
//     "corporateId": "A000016169",
//     "directorId": 1,
//     "title": "Bratstvo lopova 2: Panter",
//     "originalTitle": "Den of Thieves: Pantera",
//     "description": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
//     "shortDescription": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!",
//     "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/B1_DEN-OF-THIEVES_2_SRB_712px446_1.jpg",
//     "startDate": "2025-01-09",
//     "shortUrl": "bratstvo-lopova-2-panter",
//     "runTime": 130,
//     "createdAt": "2025-03-03T21:49:26.000Z",
//     "updatedAt": null,
//     "director": {
//       "directorId": 1,
//       "name": "Christian  Gudegast",
//       "createdAt": "2025-03-03T21:48:47.000Z"

// "movieActors": [
//       {
//         "movieActorId": 1,
//         "movieId": 1,
//         "actorId": 1,
//         "actor": {
//           "actorId": 1,
//           "name": "Gerard Butler",
//           "createdAt": "2025-03-03T21:48:47.000Z"
//         }
//       },

    // "movieGenres": [
    //   {
    //     "movieGenreId": 1,
    //     "movieId": 1,
    //     "genreId": 1,
    //     "genre": {
    //       "genreId": 1,
    //       "name": "Drama",
    //       "createdAt": "2025-03-03T21:48:48.000Z"
    //     }
    //   },

    export interface MovieModel {
        movieId: number;
        internalId: string;
        corporateId: string;
        directorId: number;
        title: string;
        originalTitle: string;
        description: string;
        shortDescription: string;
        poster: string;
        startDate: string;
        shortUrl: string;
        runTime: number;
        createdAt: string;
        updatedAt: null;
        pricePerTicket: "1000";
        director: {
            directorId: number;
            name: string;
            createdAt: string;
        };
        movieActors: {
            movieActorId: number;
            movieId: number;
            actorId: number;
            actor: {
                actorId: number;
                name: string;
                createdAt: string;
            };
        }[];
        movieGenres: {  
            movieGenreId: number;
            movieId: number;
            genreId: number;
            genre: {
                genreId: number;
                name: string;
                createdAt: string;
            };
        }[];  
    }
