const request = require('supertest');
let server;
const userController = require('../../controllers/usercontroller');


 describe('/user', () =>{
     beforeEach(() => {server =require('../../app')});
     afterEach(() => server.close());
    describe('Get /', () => {
        it('should return all users', async () => {
            const res = await request(server).get('/user');
            expect(res.status).toBe(200);
        });
        it('should create user', async ()=> {
            const res = await request(server).post('/user').send({
                "name": "oloyede",
                "email": "test1@test.com",
                "password": "12345678"
            });

            expect(res.status).toBe(200);
        });
    });
});
