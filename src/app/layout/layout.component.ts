import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { NzTabsModule } from 'ng-zorro-antd/tabs';
@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
	imports: [RouterOutlet, NzTabsModule ],
    standalone   : true,
})

export class LayoutComponent  {
    
}