import * as supertest from 'supertest';

// declare global {
//   namespace NodeJS {
//     interface Global {
//       request: supertest.SuperTest<supertest.Test>;
//     }
//   }
// }
declare global {
    var request: supertest.SuperTest<supertest.Test>;
}
