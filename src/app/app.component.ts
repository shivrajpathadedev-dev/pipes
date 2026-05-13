import { Component } from '@angular/core';
import { cricketers } from './const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut provident doloremque. Eligendi, et voluptatum vitae culpa ipsum sit voluptatem necessitatibus repellendus, ratione, ipsa possimus delectus magni praesentium asperiores maxime"

searchValue!:string

  course={
    title:"Angular Developer",
    students:1234698765,
    rating:4.66666,
    price:1999,
    relessDate:new Date(2025,1,26)
  }

  playersArr=cricketers
}



