var chakram = require('chakram'),
    expect = chakram.expect;

var URL = "http://localhost:3000/api/flights";
var contentType = "Content-Type:application/json";


describe("HTTP Requests on Flight API", function() {
    it("should create a new flight", function () {
        var response = chakram.post(URL,
          {
            "data_partida": "01-10-2015",
            "data_chegada": "10-10-2015",
            "numero": "2222",
            "origem": "CNF",
            "destino": "UIO",
            "duracao": 6,
            "lugares": 10,
            "companhia": "Avianca"
          },
          contentType
          );
        expect(response).to.have.status(200);
        return chakram.wait();
    });

  xit("should update an existing flight", function () {

  });

  xit("should retrieve existing flights", function () {

  });

  xit("should delete an existing flight", function () {

  });

});
