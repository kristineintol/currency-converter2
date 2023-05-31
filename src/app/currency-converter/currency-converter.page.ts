import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.page.html',
  styleUrls: ['./currency-converter.page.scss'],
})
export class CurrencyConverterPage implements OnInit {

  amount!: number;
  fromCurrency!: string;
  toCurrency!: string;
  convertedAmount!: number;

  ngOnInit() {
  }

  async convert() {
    try {
      const response = await axios.get(
        `https://www.oanda.com/currency/converter/convert?from=${this.fromCurrency}&to=${this.toCurrency}&amount=${this.amount}`
      );
      this.convertedAmount = response.data.conversion_result;
    } catch (error) {
      console.error('Failed to convert currency:', error);
    }
  }

}
