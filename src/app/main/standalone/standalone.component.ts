import { Component, OnInit } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  selector: 'standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.css']
})
export class StandaloneComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
