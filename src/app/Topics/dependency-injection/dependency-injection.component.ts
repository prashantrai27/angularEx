import { Component, ViewChild } from '@angular/core';
import { RandomDataService } from 'src/app/random-data.service';
import { ChildComponent } from './ParentChildCommunication/child/child.component';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
})
export class DependencyInjectionComponent {
  public loadedData: any;
  @ViewChild('childRef')
  childComp!: ChildComponent; // it's the way to make instance of component
  constructor(private serviceData: RandomDataService) {
   // this.childComp = new ChildComponent(); // Initialize 'childComp'
  }
  public valueToChild = 'Data from parent, wohooooooo!';
  public valueFromChild: any;
  AssignValue(data: any) {
    this.valueFromChild = data;
  }

  loadDataFromApi() {
    this.serviceData.getDummyData().subscribe((data) => {
      this.loadedData = data;
    });
  }

  methodToIncrement() {
    this.childComp.incrementBy1(); // here accessing method of child in parent
  }

  // here now will set the data to that variable so other component can access.

  sendMessage() {
    this.serviceData.changeMessage('new message from parent to be available on random message')
  }
}
