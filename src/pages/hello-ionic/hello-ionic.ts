import {ViewChild, ViewChildren, Component, QueryList, ElementRef} from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage
{
  @ViewChild('myname') input:ElementRef;
  @ViewChild('video') video:ElementRef;
  @ViewChildren('div1,div2,div3') divs:QueryList<ElementRef>;

  constructor()
  {

  }

  ngAfterViewInit()
  {
    let video=this.video.nativeElement;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        })
    }
  }

}
