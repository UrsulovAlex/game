import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/model/interface';
import { PlayingField } from 'src/app/model/room_model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
	dataTemplate!: IRoom;
  labirint!: PlayingField;
  showMessages: string[] = [];

	ngOnInit(): void {
		this.generateRoom();
	}

  generateRoom(): void {
    this.labirint = new PlayingField();
    this.dataTemplate = this.labirint.setActiveRooms;
    this.showMessages = this.labirint.messageRoom;
  }

  setActiveRoom(): void {
    if(this.showMessages.length <= 5) {
      this.dataTemplate = this.labirint.setActiveRooms;
      this.showMessages = this.labirint.messageRoom;
    } else {
      return
    }
  }
}
