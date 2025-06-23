namespace app.data;

entity Rooms { 
  key number     : Integer; 
      type       : String; 
      rate       : Decimal(10,2); 
      available  : Boolean; 
} 
 
entity Guests { 
  key ID        : Integer; 
      name      : String; 
      email     : String; 
} 

    