import { Component, OnInit } from '@angular/core';
import {ElectronService} from "../../services/electron.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.css']
})
export class TitleScreenComponent implements OnInit {

  constructor(private electronService: ElectronService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onStart() {
    this.router.navigate(['/options']);
  }

  onQuit(){
    this.electronService.quit();
  }

}
