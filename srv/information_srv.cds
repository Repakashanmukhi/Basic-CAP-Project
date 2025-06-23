using app.data from '../db/data';

service CatalogService {

  @odata.draft.enabled: true
  entity Data_Rooms as projection on data.Rooms;
  entity Data_Guests as projection on data.Guests;

  function initSampleData() returns String;
  function registerGuest() returns String;
  function deleteRoom() returns String;
  function updateRoom() returns String;
}
