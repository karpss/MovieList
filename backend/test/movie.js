const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const { expect } = chai;

describe('Movies API', () => {
  it('should get all movies', (done) => {
    chai
      .request(app)
      .get('/movie')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a movie by name', (done) => {
    chai
      .request(app)
      .get('/movie/Earth')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('movieName', 'Earth');
        expect(res.body).to.have.property('releaseDate', '15-09-2003');
        done();
      });
  });

  it('should return 404 for invalid movie name', (done) => {
    chai
      .request(app)
      .get('/movie/ola')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('should add a movie to the movieList', (done) => {
    const movie = {
      movieName: 'The Matrix',
      releaseDate: '1999-03-31',
    };

    chai
      .request(app)
      .post('/movie')
      .send(movie)
      // eslint-disable-next-line consistent-return
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Movie added successfully!');
        expect(res.body.movie).to.deep.equal(movie);
        done();
      });
  });

  // it('should update a movie', (done) => {
  //   chai
  //     .request(app)
  //     .put('/movie/1')
  //     .send({ movieName: 'Movie 1 updated' })
  //     .send({ releaseDate: '15-09-2004' })
  //     .end((err, res) => {
  //       expect(res).to.have.status(200);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body).to.have.property('id', 1);
  //       expect(res.body).to.have.property('movieName', 'Movie 1 updated');
  //       expect(res.body).to.have.property('releaseDate', '15-09-2004');
  //       done();
  //     });
  // });

  // it('should delete a movie', (done) => {
  //   chai
  //     .request(app)
  //     .delete('/movie/1')
  //     .end((err, res) => {
  //       expect(res).to.have.status(200);
  //       expect(res.text).to.equal('Movie Deleted');
  //       done();
  //     });
  // });
});
