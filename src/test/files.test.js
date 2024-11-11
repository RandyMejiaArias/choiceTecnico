import * as chai from "chai";
import {default as chaiHttp, request} from "chai-http";
chai.use(chaiHttp);

import { app } from '../app.js'

describe('/GET files', () => {
  it('it should get a list of Files', async () => {
    const res = await request.execute(app)
      .get('/api/files/data');
    
    chai.expect(res).to.have.status(200);
    chai.expect(res.body).to.be.an('array');
  });
});