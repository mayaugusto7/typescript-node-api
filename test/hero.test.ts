import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/heroes', () => {

    it('responds with JSON array', () => {
        return chai.request(app).get('/api/v1/heroes')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.length(5);
        });
    });

    it('should include Wolwerine', () => {
        return chai.request(app).get('/ap1/v1/heroes')
            .then(res => {
                let Wolwerine = res.body.find(hero => hero.name === 'Wolwerine');
                expect(Wolwerine).to.exist;
                expect(Wolwerine).to.have.all.keys([
                        'id',
                        'name',
                        'aliases',
                        'occupation',
                        'gender',
                        'height',
                        'hair',
                        'eyes',
                        'powers'
                ]);
            });
    });
});