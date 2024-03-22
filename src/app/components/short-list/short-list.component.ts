import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrl: './short-list.component.css'
})
export class ShortListComponent implements OnInit{

 @Input() short_artist : any= ""; 
 @Input() short_artist_array : any[] = [];

 ngOnInit(): void {
   
 }


 

}
