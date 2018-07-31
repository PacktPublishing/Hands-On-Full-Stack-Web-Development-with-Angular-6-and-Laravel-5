import { Bike } from '../bikes/bike';

export class Builder {
  id: number;
  name: string;
  description: string;
  location: string;
  bike?: Bike;

  constructor() {}
}
