import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameOptionsService {

  private discriminator: String;
  private boardSizes: Array<String>;
  private bombQuantities: Array<String>;
  private chosenBoardSize: String;
  private chosenBombQuantity: String;
  constructor() {
    this.discriminator = "x";
    this.boardSizes = ["10x10", "15x15", "20x20", "25x25", "30x30", "35x35", "40x40"];
    this.bombQuantities = ["10%", "15%", "20%", "25%", "30%"];
    this.chosenBoardSize = this.boardSizes[1];
    this.chosenBombQuantity = this.bombQuantities[2];
  }

  getChosenBombQuantityAsString() {
    return this.chosenBombQuantity;
  }

  getChosenBombQuantityAsNumber() : Number {
    let bombQuantity = this.chosenBombQuantity.substring(0, this.chosenBombQuantity.length - 1);
    return Number(bombQuantity) * 0.01;
  }

  getBoardSizes() : Array<String> {
    return this.boardSizes;
  }

  getBombQuantities() : Array<String> {
    return this.bombQuantities;
  }

  setBoardSizes(boardSize: String) {
    if(this.boardSizes.find(e => e == boardSize)) {
      this.chosenBoardSize = boardSize;
    } else {
      throw new Error('wrong board size');
    }
  }

  setBombQuantities(bombQuantity: String) {
    if(this.bombQuantities.find(e => e == bombQuantity)) {
      this.chosenBombQuantity = bombQuantity;
    } else {
      throw new Error('wrong bomb quantity');
    }
  }
}


