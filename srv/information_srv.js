var cds = require('@sap/cds');
module.exports = async function (srv) {
  var { Rooms, Guests } = cds.entities('app.data');
  srv.on('initSampleData', async () => {
    var sampleRooms = [
      { number: 1001, type: 'Ordinary', rate: 3000, available: true },
      { number: 4001, type: 'Luxary', rate: 5000, available: true },
      { number: 5001, type: 'Ordinary', rate: 3000, available: false }
    ];
    await cds.run(INSERT.into(Rooms).entries(sampleRooms));
    return `sample Rooms created successfully!`;
  });
  srv.on('registerGuest', async () => {
    var sampleGuest = {
      ID: 8,
      name: 'Tarun',
      email: 'tarun@gmail.com'  
    };
    await cds.run(INSERT.into(Guests).entries(sampleGuest));
    return `sample Guests are created successfully`
  });
  srv.on('deleteRoom', async (req) => { 
    var roomNumber = req.data.number; 
    var result = await cds.run(DELETE.from(Rooms).where({ number: 4001 })); 
    return `Room ${result} deleted successfully.`; 
  });
  srv.on('updateRoom', async (req) => {
    var { roomNumber, newRate} = req.data;
    var room = await cds.run(SELECT.one.from(Rooms).where({ number: 104 }));
    var updateData = { rate: 3000.00 };
    var result = await cds.run(
      UPDATE(Rooms)
        .set(updateData)
        .where({ number: 104 })
    );
    return `Room ${roomNumber} updated with new rate of ${newRate}.`;
  });
}
