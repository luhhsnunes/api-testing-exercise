var frisby = require('frisby');

var url = "http://localhost:4567/api/flights";
var contentType = "Content-Type:application/json";
var newId = 1;

var types = {
    data_partida: String,
    data_chegada: String,
    numero: String,
    origem: String,
    destino: String,
    duracao: Number,
    lugares: Number,
    companhia: String,
    id: Number
    }

var jsonBase = {
  data_partida: "2015-09-01T00:00:00.000Z",
  data_chegada: "2015-09-02T00:00:00.000Z",
  numero: "3455",
  origem: "object",
  destino: "object",
  duracao: 1,
  lugares: 10,
  companhia: "object",
  id: newId
}

frisby.create('Create a flight')
  .post(url, jsonBase)
  .expectStatus(200)
  .expectJSON(jsonBase)
  .expectJSONTypes(types)

  .afterJSON(function(json) {
    frisby.create('Deleting created flight')
      .delete(url +"/1")
      .expectStatus(204)
    .toss()
    })
.toss();