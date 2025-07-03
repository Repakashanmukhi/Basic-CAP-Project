namespace data;
entity Rooms{
       key number       : Integer;
       name         : String;
       type         : String;
       rate         : Decimal(10,2);
       available    : Boolean;
}
entity Guests{
      key ID     : String;
          name   : String;
          email  : String;
}
entity Bookings{
      key ID    : String;
          guest_ID : Association to Guests;
          room_Number  : Association to Rooms;
          date  : Date;
}
@cds.persistence.exists
entity JoinBR {
        key date         : Date;
        ID               : String;
        Number           : Integer;
        type             : String;
        rate             : Decimal(10,2);
    }

    
