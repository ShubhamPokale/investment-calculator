import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
// calculate = output()
@Output() calculate = new EventEmitter<InvestmentInput>(); 

enteredInitialInvestment =  '0';
enteredAnnualInvestment = '0';
enteredExpectedReturn = '5';
enteredDuration = '10';
  //method 
  onSubmit(){

    // console.log('SUBMITTED');
    // console.log(this.enteredInitialInvestment);
    // console.log(this.enteredAnnualInvestment);
    // console.log(this.enteredExpectedReturn);
    // console.log(this.enteredDuration);


      this.calculate.emit({
        // string value to a number
        initialInvestment: +this.enteredInitialInvestment,
        duration: +this.enteredDuration,
        expectedReturn: +this.enteredExpectedReturn,
        annualInvestment: +this.enteredAnnualInvestment

      });

  };

}
