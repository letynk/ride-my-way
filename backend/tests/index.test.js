const app = require('../index');
const request = require('supertest');

describe("The app works", () => {
    
    test("Retrieve list of rides", () => request(app)
        .get('/api/v1/rides')
        .then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe("list was succefully retrieved!");
            expect(response.body.rides).toBeArray();
        })
    );


    test("Ride offer has been created!", () => request(app)
    .post('/api/v1/rides')
    .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Object added succefully!");
        expect(response.body.rides).toBeArray();
    })
);


    test("join a ride", () => request(app)
    .post('/api/v1/rides/:id/:requests')
    .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("ride request was sent!");
        expect(response.body.rides).toBeArray();
    })
);


    
})