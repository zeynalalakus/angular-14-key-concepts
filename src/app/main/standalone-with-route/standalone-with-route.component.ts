import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@Component({
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatCardModule],
  selector: 'app-standalone-with-route',
  templateUrl: './standalone-with-route.component.html',
  styleUrls: ['./standalone-with-route.component.css']
})
export class StandaloneWithRouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['']);
  }

}
