import { Component, OnInit } from '@angular/core';
import { HandshakeService } from 'src/app/Security/Handshake/handshake.service';
@Component({
  selector: 'app-utsu-p',
  templateUrl: './utsu-p.component.html',
  styleUrls: ['./utsu-p.component.css']
})
export class UtsuPComponent implements OnInit {

  constructor (private handshake: HandshakeService ) {}

  song: string             = "";
  shortDescription: string = "";
  length: string           = "";
  author: string           = "";

  message: string = "Before connect";

  ngOnInit(): void {
    setTimeout(() =>{
      this.handshake.getMessage("http://localhost:8080/handshake/test").subscribe(
        (response: any) => {
          this.message = JSON.stringify(response);
          this.song = response.body.Song;
          this.shortDescription = response.body.ShortDescription;
          this.length = response.body.Length;
          this.author = response.body.Author;
        }, // If ok
        (error: any) => this.message = "Connection error occured. No data was received :(",      // If not
        () => console.log(this.message)                        // Default?
      );
    }, 3000)
  }
}
