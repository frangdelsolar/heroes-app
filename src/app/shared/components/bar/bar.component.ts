import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  @Input() value: string;
  @Input() title: string;
  bufferValue = 75;

  ngOnInit(){}
}
