
// import { Quote } from '@angular/compiler';
// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


 quotes: Quotes[] = [
    new Quotes(1,0,0,'One has a Moral responsibiity to DISOBEY UNJUST LAWS ','Martin Luther King','F. K. Nsyde',new Date(2001,4,10)),
    new Quotes(2,0,0,'To forgive the terrorists is upto God but to send them to Him is upto me','Vladmir Putin','Vladimir Kolokoltsev ',new Date(1997,5,14)),
    // new Quotes(3,0,0,'Learn untill you earn','O.L Collins','Emmarensia Owino',new Date(2022,1,14)),
  ];

  
  quote:Quotes | undefined 

      deleteQuote(isComplete: any, index: number){
         let toDelete = confirm(`Do you want to delete ${this.quotes[index].name}???`)
         if (toDelete) {
         this.quotes.splice(index,1);
       }
  }   
  addNewQuotes(quote: any){ 
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
      
  }

  array: number[]=this.quotes.map(quote=> quote.upVote)
  public highest=Math.max(...this.array)

  constructor() { }
  ngOnInit(): void {
  }

}
