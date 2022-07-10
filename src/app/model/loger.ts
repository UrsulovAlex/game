export class Logger {
    message!: string;
    selectedHero!: string;
    startGenereteLabirint = 'start generate labirint';
    startGenerateRooms = 'start generate rooms'
    endGenerate = 'end generate rooms';
    
    get getMessage(): string {
        return this.message;
    }

    setMessage(text: string) {
        this.message = text;
    }
}