class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    // console.log('Clicked');
    // console.log(callback);
    const incrementFunction = () => { 
      this.currentTime+=10;
      callback(); 
    };
    // this.intervalId = setInterval(incrementFunction(callback), 1);

    this.intervalId = setInterval(incrementFunction, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 1000 / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime / 1000 - this.getMinutes() * 60) ;
  }

  getMilliseconds() {
    return this.currentTime - this.getSeconds() * 1000 - this.getMinutes() * 60 * 1000;
  }

  twoDigitsNumber(number) {
    let returnStr = number.toString().length === 1 ? '0' + number.toString() : number.toString();
    return returnStr;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
