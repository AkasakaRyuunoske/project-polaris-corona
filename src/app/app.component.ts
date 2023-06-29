import { Component, OnInit } from '@angular/core';
import { HandshakeService } from './Security/Handshake/handshake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private handshake: HandshakeService) { }

  message: string = 'kimo kimo anata';

  title: string = 'Utsu-P - The Dying Message';
  
  neeanaatawaitsumoyumewomitemasuka: string = 'Nee anata wa itsumo yume wo mite masu ka';
  owarikakenokonosekaide: string = 'owari kake no kono sekai de';
  fusagaretamicchiwohirakumononinaru: string = 'fusaga re ta micchi wo hiraku mono ni naru';
  messejiiwoidaitatsuraiyo: string = 'messejii wo ida ita tsurai yo';
  
  // When the page is loaded try to connect to back end and ask for stuff xd
  // ngOnInit(): void {
  //   setTimeout(() =>{
  //     this.handshake.getMessage("http://localhost:8080/handshake/test").subscribe(
  //       (response) => this.message = JSON.stringify(response), // If ok
  //       (error: any) => this.message = "Connection error occured. No data was received :(",      // If not
  //       () => console.log(this.message)                        // Default?
  //     );
  //   }, 3000)
  // }
}
