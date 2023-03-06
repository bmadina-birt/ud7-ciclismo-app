import { Cyclist } from "../cyclists/cyclist";

export class Team {
  id:number;
  name : string;
  city: string;
  nationality: string;
  manager:string;
  cyclists: Cyclist[];
}
