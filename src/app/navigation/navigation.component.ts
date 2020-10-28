import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
login():void{
  this.router.navigate(['/login']);
}
doctor():void{
  this.router.navigate(['/doctor']);
}
patient():void{
  this.router.navigate(['/patient']);
}
registration():void{
  this.router.navigate(['/register']);
}
help():void{
  this.router.navigate(['/help']);
}
}
