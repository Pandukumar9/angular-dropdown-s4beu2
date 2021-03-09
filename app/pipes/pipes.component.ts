import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.css"]
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  public name = "arunkumarpandu";
  public msg = " title case with pipes";
  public persons = {
    fname: "pandu",
    lname: "gujja"
  };
  public date = new Date();
}
