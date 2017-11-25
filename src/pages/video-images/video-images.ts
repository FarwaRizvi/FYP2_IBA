import {ViewChild, ViewChildren, Component, QueryList, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-video-images',
  templateUrl: 'video-images.html',
})
export class VideoImages
{
  @ViewChild('myname') input:ElementRef;
  @ViewChild('video') video:ElementRef;
  @ViewChildren('div1,div2,div3') divs:QueryList<ElementRef>;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {

  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad VideoImagesPage');
  }

  ngAfterViewInit()
  {
    let video = document.getElementById('video');

    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          video.src = window.URL.createObjectURL(stream);
          video.play();
      });
    }

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    // Trigger photo take
    Observable.interval(1000).subscribe(x => {
          context.drawImage(video, 0, 0, 640, 480);
          let files = document.getElementById("canvas").toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
          var dataURL = document.getElementById("canvas").toDataURL();
          console.log(dataURL);
          console.log("timer");
    });

  }

}
