using CatalogService as service from '../../srv/information_srv';


annotate service.Data_Rooms with @(
  UI.LineItem: [
    { $Type: 'UI.DataField', Label: 'Room Number', Value: number },
    { $Type: 'UI.DataField', Label: 'Room Type', Value: type },
    { $Type: 'UI.DataField', Label: 'Rate', Value: rate },
    { $Type: 'UI.DataField', Label: 'Available', Value: available }
  ],
  UI.FieldGroup #RoomDetails: {
    $Type: 'UI.FieldGroupType',
    Data: [
      { $Type: 'UI.DataField', Label: 'Room Number', Value: number },
      { $Type: 'UI.DataField', Label: 'Type', Value: type },
      { $Type: 'UI.DataField', Label: 'Rate', Value: rate },
      { $Type: 'UI.DataField', Label: 'Available', Value: available }
    ]
  },
  UI.Facets: [
    {
      $Type: 'UI.ReferenceFacet',
      ID: 'RoomFacet',
      Label: 'Room Details',
      Target: '@UI.FieldGroup#RoomDetails'
    }
  ]
);



