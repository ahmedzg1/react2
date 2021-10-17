import logo from './logo.svg';
import './App.css';
import './style.css';
import img1 from './image/japan.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title-red">Your name here</h1>
    <br />
    <img src={img1} />
    <br />
    <img src="/image/milan.jpg" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>


      </header>
  
   </div>
  );
}


export default App;
