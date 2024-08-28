
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-content-projection-child',
  templateUrl: './content-projection-child.component.html',
  styleUrls: ['./content-projection-child.component.scss']
})


export class ContentProjectionChildComponent {
  @Input() Data:any;


}
