import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
// component to out the results
@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  // parent component can pass input to this component
  // results = input() - signal input
  @Input({}) results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];


}
