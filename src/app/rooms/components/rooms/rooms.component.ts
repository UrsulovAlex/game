import { Component, OnInit } from '@angular/core';
import { configOne, configTwo, configThree, configFour, IConfig } from 'src/app/config/roomsConfig.const';
import { IRoom } from 'src/app/model/room_model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
	dataTemplate!: IRoom;
  showMessages = '';

	ngOnInit(): void {
		this.generateRoom(configFour);
	}

  generateRoom(config: IConfig): void {
    this.dataTemplate = config.preset.generate;
    this.showMessages = config.messegeConfig;
  }
}
