const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Integration Test: Nginx Web Server', () => {
  it('should return status 200 and the greeting from the HTML file', (done) => {
    chai.request('http://localhost:8080')  // Fixed URL syntax
      .get('/')
      .end((err, res) => {
        if (err) {
          console.error('Error:', err);  // Improved error logging
          return done(err);  // Ensure Mocha detects the failure
        }

        if (!res) {
          console.error('Error: No response received.');
          return done(new Error('No response received'));
        }

        console.log('Response Body:', res.text);  // Debugging response text
        expect(res).to.have.status(200);  // Ensure status code is 200
        expect(res.text).to.include('Hello from Docker!');  // Correct content check
        done();
      });
  });
});
