import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GameOptionsService} from "../../services/game-options.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ElectronService} from "../../services/electron.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  boardSizes: Array<String>;
  bombQuantities: Array<String>;
  optionsForm: FormGroup;
  constructor(private router: Router, private gameOptionsService: GameOptionsService, private formBuilder: FormBuilder) {

    this.boardSizes = this.gameOptionsService.getBoardSizes();
    this.bombQuantities = this.gameOptionsService.getBombQuantities();
    this.optionsForm = this.formBuilder.group({
      chosenBombQuantity: '',
      chosenBoardSize: ''
    })
  }

  ngOnInit(): void {

  }

  onReturn(): void {
    this.router.navigate(['/title-screen']);
  }

  onSubmit(): void {

    try {
      this.gameOptionsService.setBombQuantities(this.optionsForm.get('chosenBombQuantity')?.value);
      this.gameOptionsService.setBoardSizes(this.optionsForm.get('chosenBoardSize')?.value);
    } catch (error) {
      console.log(error);
    }
  }

}
