import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'model3',
  templateUrl: './model3.component.html',
  styleUrls: ['./model3.component.scss'],
})
export class Model3Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.navigate(['car'],  { relativeTo: this.route });
  }
}
