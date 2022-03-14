import { IPerson } from "./model";

const person1: IPerson={
  id: Math.floor(Math.random() *100),
  name: 'kuro',
  birthday: new Date('08/06/2077'),
  address: 'Hcm'
}

const person2: Partial<IPerson> ={
  name: 'kazuto'
}
