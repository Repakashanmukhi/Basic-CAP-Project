var cds = require('@sap/cds');
module.exports = async function (srv) {
  var { Rooms, Guests } = cds.entities('app.data');
        // Creating the data of Room Entity
  srv.on('initSampleData', async () => {
    var sampleRooms = [
      { number: 1001, type: 'Ordinary', rate: 3000, available: true },
      { number: 4001, type: 'Luxary', rate: 5000, available: true },
      { number: 5001, type: 'Ordinary', rate: 3000, available: false }
    ];
    await cds.run(INSERT.into(Rooms).entries(sampleRooms));
    return `sample Rooms created successfully!`;
  });
        // Creating the Data of Guests Entity
  srv.on('registerGuest', async () => {
    var sampleGuest = {
      ID: 8,
      name: 'Tarun',
      email: 'tarun@gmail.com'  
    };
    await cds.run(INSERT.into(Guests).entries(sampleGuest));
    return `sample Guests are created successfully`
  });
        // Deleting the Data of Room Entity
  srv.on('deleteRoom', async (req) => { 
    var roomNumber = req.number; 
    var result = await cds.run(DELETE.from(Rooms).where({ ID:8 })); 
    return `Room deleted successfully.`; 
  });
        // Deleting the Data of Guests Entity
  srv.on('deleteGuest', async (req) => {
    var guestEmail = req.email; 
    var result = await cds.run(DELETE.from(Guests).where({ email: 'tarun@gmail.com' }));
    return `Guest deleted successfully.`;
  });
      // Updating the Data of Room Entity
  srv.on('updateRoom', async (req) => {
    var { roomNumber, newRate} = req.data;
    var room = await cds.run(SELECT.one.from(Rooms).where({ number: 104 }));
    var updateData = { rate: 3000.00 };
    var result = await cds.run(
      UPDATE(Rooms)
        .set(updateData)
        .where({ number: 104 })
    );
    return `Room updated successfully`;
  });
      // Updating the Data of Guests Entity
  srv.on('updateGuest', async (req) => {
    var { guestId, newName, newEmail } = req.data;  
    var guest = await cds.run(SELECT.one.from(Guests).where({ ID: guestId }));
    var updateData = {
        name: 'Shanmukhi Repaka ',   
        email: 'shanmukhirepaka@gmail.com' 
    };
    var result = await cds.run(
        UPDATE(Guests)
        .set(updateData)
        .where({ ID: String(1) })
    );
    return `Guest updated successfully`;
  });
}
