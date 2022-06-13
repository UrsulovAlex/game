import { Component, OnInit } from '@angular/core';
import { arrayConfig } from 'src/app/config/roomsConfig.const';
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
  showMessages = '';

	ngOnInit(): void {
		this.generateRoom();
	}

  generateRoom(): void {
    this.labirint = new PlayingField(arrayConfig);
    this.labirint.generateRooms();
    this.dataTemplate = this.labirint.setActiveRooms;
    this.showMessages = this.labirint.messageRoom;
  }
}
