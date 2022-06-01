import { Component, OnInit } from '@angular/core';
import { roomPresetOne, Labirint, IRoom } from './model/room_model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	roomsPreset = new Labirint(roomPresetOne);
	dataTemplate!: IRoom;

	ngOnInit(): void {
		this.dataTemplate = this.roomsPreset.generate();
	}
}
