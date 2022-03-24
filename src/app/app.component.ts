import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Transfer Items Between Lists
  MoviesList = [
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction',
    'Blade Runner',
    'Cool Hand Luke',
    'Heat',
    'Juice'
  ];
  content:any=["Problem Statement","Solution","Planning","Prototyping",
 "User Acceptance Test","Feedbacks","Agile","Frontend",
 "Backend","Database","Hosting Infra","Cloud Computing ",
 "Third Party Services","DevOps","Logical","Reusability",
 "Scalability","Communication","Documentation","Quality Analysis",
 "Unit Testing","Data Analyst","Digital Marketing","SEO",
 "Back Office Mgmt","UI","UX","Code versioning",
]
  MoviesWatched:any = [
  ];
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }  
}