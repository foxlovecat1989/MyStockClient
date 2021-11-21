import { Classify } from "./Classify";

export class Stock{
  id!: number;
  symbol!: string;
  name!: string;
  previousClosed!: number;
  price!: number;
  changePrice!: number;
  changeInPercent!: number;
  volume!: number;
  transactionDate!: string;
  classify!: Classify;
}
