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
  lastUpDateTime!: string;
  classify!: Classify;

  static fromHttp(data: Stock): Stock {
    const stock = new Stock();
    stock.id = data.id;
    stock.name = data.name;
    stock.classify = data.classify;
    stock.symbol = data.symbol;
    stock.changeInPercent = data.changeInPercent;
    stock.changePrice = data.changePrice;
    stock.previousClosed = data.previousClosed;
    stock.price = data.price;
    stock.volume = data.volume;
    stock.lastUpDateTime = data.lastUpDateTime;

    return stock;
  }
}
