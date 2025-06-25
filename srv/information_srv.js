var cds = require('@sap/cds');

module.exports = async function (srv) {
  var { Rooms, Guests } = cds.entities('app.data');
  srv.on('ReadRooms', async () => {
    const rooms = await cds.run(SELECT.from(Rooms));
    return rooms;
  });
  srv.on('ReadGuests', async () => {
    const guests = await cds.run(SELECT.from(Guests));
    return guests;
  });  
  srv.on('CreateRoom', async () => {
    var sampleRooms = [
      { number: 101, name: 'Room A', type: 'Ordinary', rate: 3000, available: true },
      { number: 102, name: 'Luxury Suite', type: 'Luxury', rate: 5000, available: true },
      { number: 103, name: 'Room B', type: 'Ordinary', rate: 3000, available: false }
    ];
    await cds.run(INSERT.into(Rooms).entries(sampleRooms));
    return `Sample rooms created successfully!`;
  });
  srv.on('CreateGuests', async () => {
    var sampleGuest = {
      ID: '8',
      name: 'Tarun',
      email: 'tarun@gmail.com'
    };
    await cds.run(INSERT.into(Guests).entries(sampleGuest));
    return `Sample guest created successfully!`;
  });
  srv.on('deleteRoom', async (req) => {
    var { roomNumber } = req.data;
    await cds.run(DELETE.from(Rooms).where({ number: 101 }));
    return `Room ${roomNumber} deleted successfully.`;
  });
  srv.on('deleteGuest', async (req) => {
    var { guestEmail } = req.data;
    await cds.run(DELETE.from(Guests).where({ email: 'Shruthi@gmail.com' }));
    return `Guest with email ${guestEmail} deleted successfully.`;
  });
  srv.on('updateRoom', async (req) => {
    var { roomNumber, newRate } = req.data;
    var updateData = {
      rate: 3000.00,
    };
    await cds.run(UPDATE(Rooms).set(updateData).where({ number: 101 }));
    return `Room ${roomNumber} updated successfully.`;
  });
  srv.on('updateGuest', async (req) => {
    var { guestId, newName, newEmail } = req.data;
    var updateData = {
      email: 'shanukhirepaka@gmail.com'
    };
    await cds.run(UPDATE(Guests).set(updateData).where({ ID:String(1) }));
    return `Guest ${guestId} updated successfully.`;
  });
  srv.on('getRoomGuestJoin', async () => {
    var query = `
      SELECT
        R.number,
        R.name AS room_name,
        R.rate,
        R.available,
        G.name AS guest_name,
        G.email AS guest_email
      FROM app_data_Rooms AS R
      JOIN app_data_Guests AS G
        ON R.name = G.name
    `;
    var result = await cds.run(query);   
    return result;
  });
  srv.on('getAvailableRooms', async () => {
    var availableRooms = await cds.run(SELECT.from(Rooms).where({ available: true }));
    return availableRooms;
  });
  srv.on('getRoomStatus', async () => {
    var [available, booked] = await Promise.all([
      cds.run(SELECT.from(Rooms).where({ available: true })),
      cds.run(SELECT.from(Rooms).where({ available: false }))
    ]);
    return {
      availableRooms: available.length,
      bookedRooms: booked.length
    };
  });
  srv.on('searchGuests', async (req) => {
    var { searchTerm } = req.data;
    var guests = await cds.run(
      SELECT.from(Guests).where(`name LIKE '%${'Sreya'}%' OR email LIKE '%${'sreya@gmail.com'}%'`)
    );
    return guests;
  });
};

