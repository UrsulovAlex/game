import { Component, OnInit } from '@angular/core';
import { Archer, Mage, Warrior } from 'src/app/model/heroes.model';
import { IMage, HeroType, IRoom } from 'src/app/model/interface';
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
  loader: boolean = false;
  hero!: Partial<IMage>;
  heroType: HeroType | undefined;

	ngOnInit(): void {
    console.log('heroType', this.heroType);
	}

  generateRoom(): void {
    this.labirint = new PlayingField();
    this.dataTemplate = this.labirint.setActiveRooms;
    this.showMessages = this.labirint.messageRoom;
  }

  generate(): void {
    if(this.showMessages.length <= 5) {
      this.loader = true;
      setTimeout(() => {
        this.setActiveRoom();
        this.loader = false;
      }, 400)
    }
  }

  setActiveRoom(): void {
    if(this.showMessages.length <= 5) {
      this.dataTemplate = this.labirint.setActiveRooms;
      this.showMessages = this.labirint.messageRoom;
    }
  }

  initHero(hero: HeroType): void {
    switch(hero) {
      case 'warrior': 
        this.heroType = 'warrior';
        this.hero = new Warrior();
        this.generateRoom();
      break;
      case 'archer': 
        this.heroType = 'archer';
        this.hero = new Archer();
        this.generateRoom();
      break;
      case 'mage': 
        this.heroType = 'mage';
        this.hero = new Mage();
        this.generateRoom();
      break;
    }
  };
}
