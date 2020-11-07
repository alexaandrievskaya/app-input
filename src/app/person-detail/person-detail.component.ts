import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  /*inputs: ['personName', 'personAgeValue', 'personAgeStep'],*/
})
export class PersonDetailComponent implements OnInit {

  @Input('name') personName = 'Гость';
  @Input('age') personAgeValue = 25;
  @Input('step') personAgeStep = 1;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.personAgeValue += this.personAgeStep;
  }

  decrement(): void {
    this.personAgeValue -= this.personAgeStep;
  }

}

