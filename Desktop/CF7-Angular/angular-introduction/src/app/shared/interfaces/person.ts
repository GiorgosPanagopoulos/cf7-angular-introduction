export interface Address {
  area: string;
  road: string
}

export interface Person {
  givenName: string;
  surName: string;
  age: number;
  email: string;
  // address: Address;
  address: string;
}