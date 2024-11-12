import chai from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../app.js'

chai.use(chaiHttp)
chai.should()

describe('/GET files', () => {
  it('it should get a list of Files', (done) => {
    chai
      .request(app)
      .get('/api/files/data')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
  })
})