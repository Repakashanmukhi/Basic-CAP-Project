namespace app.data;
entity Rooms { 
  key number     : Integer; 
      name       : String;      
      type       : String; 
      rate       : Decimal(10,2); 
      available  : Boolean; 
} 
entity Guests { 
  key ID        : String; 
      name      : String; 
      email     : String; 
}
