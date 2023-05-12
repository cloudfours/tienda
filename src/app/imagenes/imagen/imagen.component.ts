import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  constructor() {

    console.log('carga imagen construtor =>', this.img)
  }
  // counter = 0
  // counterFn: number | undefined;
  img: string = ""
  @Input("imge")
  set changeImg(img: string) {
    this.img = img
    console.log('change img')
  }
  @Output() loading = new EventEmitter<string>();
  error() {
    this.img = "./assets/img/img/5.jpg"
  }
  ngOnChanges() {
    console.log('carga imagen onchanges =>', this.img)
  }
  ngOnInit(): void {
    console.log('carga imagen init =>', this.img)
    //  this.counterFn= window.setInterval(()=>{
    // this.counter+=1
    // console.log('carga contador init =>',this.counter)
    //   },1000)
  }
  ngAfterViewInit() {
    console.log('carga imagen init =>', this.img)
  }
  ngOnDestroy() {
    console.log('carga ondestroy')
    // window.clearInterval(this.counterFn)
  }
  loadimg() {
    console.log("loadimg")
    this.loading.emit(this.img)
  }
}
