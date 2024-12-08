import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl:'./housing-location.component.html',
  styleUrls:['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
