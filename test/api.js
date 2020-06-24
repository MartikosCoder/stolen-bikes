//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Подключаем dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);
/*
 * Тест для /api/bikes
 */
describe("GET /api/bikes", () => {
  it("should return all bikes", (done) => {
    chai
      .request(server)
      .get("/api/bikes")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

describe("POST /api/bikes", () => {
  it("should not post with empty body", (done) => {
    chai
      .request(server)
      .post("/api/bikes")
      .end((err, res) => {
        res.should.have.status(502);
        done();
      });
  });
  it("should not post without number field", (done) => {
    chai
      .request(server)
      .post("/api/bikes")
      .send({
        test: 0,
      })
      .end((err, res) => {
        res.should.have.status(502);
        done();
      });
  });
  it("should not post if number is already posted", (done) => {
    chai
      .request(server)
      .post("/api/bikes")
      .send({
        number: "TEST19009TEST",
      })
      .end((err, res) => {
        res.should.have.status(502);
        done();
      });
  });
});

describe("GET /api/:officer_id/bike", () => {
    it("should not work with wrong id", (done) => {
      chai
        .request(server)
        .get("/api/0.4/bike")
        .end((err, res) => {
          res.should.have.status(502);
          done();
        });
    });
    it("should return object for officer", (done) => {
        chai
          .request(server)
          .get("/api/1/bike")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });
  });
  

describe("POST /api/findBike", () => {
  it("should not post with empty body", (done) => {
    chai
      .request(server)
      .post("/api/findBike")
      .end((err, res) => {
        res.should.have.status(502);
        done();
      });
  });
  it("should not post with wrong id", (done) => {
    chai
      .request(server)
      .post("/api/findBike")
      .send({
          officer_id: 999
      })
      .end((err, res) => {
        res.should.have.status(502);
        done();
      });
  });
  it("should not post with wrong fields", (done) => {
    chai
      .request(server)
      .post("/api/findBike")
      .send({
          aa: 999,
          bb: 222
      })
      .end((err, res) => {
        res.should.have.status(502);
        done();
      });
  });
});
