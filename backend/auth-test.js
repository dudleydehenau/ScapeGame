const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./index');
const {describe} = require("node:test");
const should = chai.should();


chai.use(chaiHttp);

describe('Auth', () => {
    describe('/POST signup', () => {
        it('it should not POST a user without email field', (done) => {
            let user = {
                userFName: "John",
                userLName: "Doe",
                userBirth: "1990-01-01",
                userPassword: "password123"
            }
            chai.request(server)
                .post('/signup')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('email');
                    res.body.errors.email.should.have.property('kind').eql('required');
                    done();
                });
        });
    });
});

describe('Auth', () => {
    describe('/POST login', () => {
        it('it should POST a user and get a token', (done) => {
            let user = {
                email: "test@test.com",
                userPassword: "password123"
            }
            chai.request(server)
                .post('/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token');
                    done();
                });
        });
    });
});