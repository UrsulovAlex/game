import { Component, OnInit } from '@angular/core';
import { Archer, Mage, Warrior } from 'src/app/model/heroes.model';
import { IMage, HeroType, IRoom, messageType } from 'src/app/model/interface';
import { Logger } from 'src/app/model/loger';
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
  hero!: IMage;
  heroType: HeroType | undefined;
  generateMessageLogger = 'choose Hero';
  messageArray: string[] = [];
  setLogger = new Logger();
  private _heroName = '';

	ngOnInit(): void {
	}

  generateRoom(): void {
    this.loader = true;
    this.labirint = new PlayingField();
    this.dataTemplate = this.labirint.setActiveRooms;
    this.showMessages = this.labirint.messageRoom;
    this.generateMassageArray('hero');
  }

  generate(): void {
    if(this._heroName.length) {
      if(this.showMessages.length <= 4) {
        this.generateMessageLogger = '';
        this.loader = true;
        this.generateMassageArray('room');
        this.setActiveRoom();
      } else {
        this.setActiveRoom();
      }
    }
  }

  generateMassageArray(typeArray: messageType): void {
    this.generateMessageLogger = '';
    let counter = 0;
    typeArray === 'hero' ? this.messageArray = [
      `You choose ${this._heroName}`,
      this.setLogger.startGenereteLabirint,
      this.setLogger.startGenerateRooms,
      this.showMessages[counter],
      this.setLogger.endGenerate
    ] : this.messageArray = [
      this.setLogger.startGenerateRooms,
      this.showMessages[counter],
      this.setLogger.endGenerate
    ];

    let timerId =  setInterval(() => {
        this.generateMessageLogger = this.messageArray[counter];
        if(counter == this.messageArray.length - 1) {
          clearInterval(timerId);
          this.loader = false;
        }
        counter++;
    }, 500);
  }

  setActiveRoom(): void {
    if( this.showMessages.length != 5 ) {
      this.dataTemplate = this.labirint.setActiveRooms;
      this.showMessages = this.labirint.messageRoom;
    } else {
      this.dataTemplate = this.labirint.setActiveRooms;
      this.showMessages = this.labirint.messageRoom; 
      this.heroType = undefined;
    }
  }

  initHero(hero: HeroType): void {
    switch(hero) {
      case 'warrior': 
        this.heroType = 'warrior';
        this.hero = new Warrior();
        this._heroName = this.hero.name;
        this.generateRoom();
        break;
      case 'archer': 
        this.heroType = 'archer';
        this.hero = new Archer();
        this._heroName = this.hero.name;
        this.generateRoom();
        break;
      case 'mage': 
        this.heroType = 'mage';
        this.hero = new Mage();
        this._heroName = this.hero.name;
        this.generateRoom();
        break;
    }
  };
}