// using app.data from '../db/data';  
// service CatalogService {
//     @odata.draft.enabled: true
//     entity Data_Rooms     as projection on data.Rooms;    
//     entity Data_Guests    as projection on data.Guests;   
//     entity Data_Bookings  as projection on data.Bookings; 
//     entity Data_Join      as projection on data.Join;

//    function ReadRooms() returns String;
//    function ReadGuests() returns String;
//    function CreateRoom() returns String;
//    function CreateGuests() returns String;
//    function BookingRoom() returns String;
//    function deleteRoom() returns String;
//    function deleteGuest() returns String;
//    function CancelBooking() returns String;
//    function updateRoom() returns String;
//    function updateGuest() returns String;
//    function getRoomGuestJoin() returns String;
//    function getAvailableRooms() returns String;
//    function getRoomStatus() returns String;
//    function searchGuests() returns String;
//    function bookRoom() returns String; 
//    function BRJoin() returns String;
// }


using data from '../db/data';  

service CatalogService {
    @odata.draft.enabled: true
    entity Rooms     as projection on data.Rooms;    
    entity Guests    as projection on data.Guests;   
    entity Bookings  as projection on data.Bookings; 
    entity JoinBR      as projection on data.JoinBR;  
    
    function ReadRooms() returns String;
    function ReadGuests() returns String;
    function CreateRoom() returns String;
    function CreateGuests() returns String;
    function BookingRoom() returns String;
    function deleteRoom() returns String;
    function deleteGuest() returns String;
    function CancelBooking() returns String;
    function updateRoom() returns String;
    function updateGuest() returns String;
    function getRoomGuestJoin() returns String;
    function getAvailableRooms() returns String;
    function getRoomStatus() returns String;
    function searchGuests() returns String;
    function bookRoom() returns String; 
    function BRJoin() returns String;
}





