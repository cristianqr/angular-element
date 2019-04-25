import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ndl-group",
  templateUrl: "./group.component.html",
  styleUrls: ["./group.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GroupComponent implements OnInit {
  @Input() header: string;
  constructor() {}

  ngOnInit() {}
}
