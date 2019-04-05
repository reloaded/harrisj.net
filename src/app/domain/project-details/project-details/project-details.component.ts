import {Component, Input, OnInit} from '@angular/core';
import {ProjectDetailsModule} from '../index';
import Project = ProjectDetailsModule.Project;

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() project: Project;
  showFullDescription: boolean;

  constructor() { }

  ngOnInit() {
  }

  expandProjectDescription() {
    this.showFullDescription = true;
  }

  collapseProjectDescription() {
    this.showFullDescription = false;
  }
}
