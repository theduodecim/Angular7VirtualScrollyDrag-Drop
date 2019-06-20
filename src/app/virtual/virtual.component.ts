import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport, { static: false }) viewPort: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor(private scroll: ScrollingModule) { }

  ngOnInit() {
    console.log(this.personas);

  }
  irAlfinal() {
    this.viewPort.scrollToIndex(this.personas.length);
  }
  irAlInicio() {
    this.viewPort.scrollToIndex(0);
  }
  irAlaMitad() {
    this.viewPort.scrollToIndex(this.personas.length / 2);
  }
}
