import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalGoals: number;
  btnText: string = "Add an Item";
  goalText: string;
  goals: string[] = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.totalGoals = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.totalGoals = this.goals.length;
    this.goalText = null;
    this._data.changeGoal(this.goals);
  }

  removeItem(i:number) {
    this.goals.splice(i,2);
    this.totalGoals = this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
