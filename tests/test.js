const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupExpressServer } = require("../server");
chai.should();

const server = setupExpressServer();

describe("RPDR SlayPI Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });
  describe("GET method", () => {
    describe("GET /api/queens/:name", () => {
      it("should return data for the selected queen", async () => {
        const expected = [
          {
            id: 62,
            name: "Adore Delano",
            season: 6,
            ranking: 2,
            congeniality: false,
            snatch_game: false,
            first_win: false,
            entrance: 1,
            wins: 3
          }
        ];
        const res = await request.get("/api/queens/Adore%20Delano");
        res.body.should.deep.equal(expected);
      });
    });
  });

  describe("POST method", () => {
    describe("POST /api/queens", () => {
      it("should add a new queen", async () => {
        const sendQueen = [
          {
            name: "Diallo",
            season: 12,
            ranking: 1,
            congeniality: true,
            snatch_game: true,
            first_win: true,
            entrance: 15,
            wins: 12
          }
        ];
        const res = await request.post("/api/queens").send(sendQueen);
        res.should.have.status(200);
      });
    });
  });

  describe("PATCH method", () => {
    describe("PATCH /api/Milk", () => {
      it("should update the selected queen's data", async () => {
        const sendQueen = {
          season: 3000
        };
        const res = await request.patch("/api/queens/Milk").send(sendQueen);
        res.should.have.status(200);
      });
    });
  });

  describe("DELETE method", () => {
    describe("DELETE /api/Mimi%20Imfurst", () => {
      it("should delete the selected queen", async () => {
        const res = await request.delete("/api/queens/Mimi%20Imfurst");
        res.should.have.status(200);
      });
    });
  });
});
