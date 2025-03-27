
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Integration Test: Nginx Web Server', () => {
  it('should return status 200 and the greeting from the HTML file', (done) => {
    chai.request('http://localhost:8080')  // Assuming Docker container is mapped to port 8080
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);  // Ensure the server returns 200 status code
        expect(res.text).to.include('Hello from Docker!');  // Ensure the HTML content is correct
        done();
      });
  });
});
