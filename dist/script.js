function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const sounds = [
{
  key: "Q",
  id: "chord 1",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  key: "W",
  id: "chord 2",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  key: "E",
  id: "chord 3",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  key: "A",
  id: "Open-HH",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  key: "S",
  id: "Closed-HH",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },

{
  key: "D",
  id: "Kick-and-Hat",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  key: "Z",
  id: "Punch Kick",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

{
  key: "X",
  id: "Side Stick",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },

{
  key: "C",
  id: "Snare",
  mp3: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }];


// const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const App = (props) =>
React.createElement("div", { id: "display", className: "display" },
React.createElement("h1", null, "Play For Beats"),
sounds.map((sound, idx) =>
React.createElement(Box, { text: sound.key, key: idx, audio: sound.mp3, boom: sound.id })));




class Box extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",











    () => {
      this.audio.current.play();

      const id = this.audio.current.id;
      const k = sounds.filter(check => {
        if (id == check.key) {
          return check.id;
        }
      });
      const instrument = k[0].id;

      const parent = this.audio.current.parentNode;
      parent.classList.add("active");

      const display = parent.parentNode;
      display.querySelector("h1").innerText = instrument;
    });this.audio = React.createRef();}componentDidMount() {this.audio.current.addEventListener("ended", e => {const parent = e.target.parentNode;parent.classList.remove("active");});}

  render() {
    const { text, audio } = this.props;

    return (
      React.createElement("div", { className: "box", onClick: this.playSound },
      text,
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));


  }}


document.addEventListener("keydown", e => {
  const id = e.key.toUpperCase();
  const k = sounds.filter(check => {
    if (id == check.key) {
      return check.id;
    }
  });
  const instrument = k[0].id;

  const audio = document.getElementById(id);

  if (audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add(`active`);
    const display = parent.parentNode;
    display.querySelector("h1").innerText = `${instrument}`;
    audio.play();
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("drum-machine"));