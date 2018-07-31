import { User } from './../auth/user';
import { Builder } from '../builders/builder';

export class Bike {
  id: number;
  make: string;
  model: string;
  year: string;
  mods: string;
  picture: string;
  user_id: number;
  builder_id: number;
  average_rating?: number;
  user?: User;
  builder?: Builder;
  items?: any;
  ratings?: any;

  constructor() {}
}
