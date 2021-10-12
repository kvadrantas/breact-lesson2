import Circle from './components/Circle';
import Square from './components/Square';

const circleData = [
  {
    buttonText: 'spausti',
    circleColor: 'red'
  },
  {
    buttonText: 'traukti',
    circleColor: 'pink'
  }
];

const squareData = [
  {
    buttonText: 'spausti',
    squareColor: 'blue'
  },
  {
    buttonText: 'traukti',
    squareColor: 'yellow'
  }
];

function App() {
  return (
    <>
    {
      circleData.map((circ, i) => <Circle buttonText = {circ.buttonText} circleColor = {circ.circleColor}></Circle>)
    }

    {
      squareData.map((sqrt, i) => <Square buttonText = {sqrt.buttonText} squareColor = {sqrt.squareColor}></Square>)
    }
    
      {/* <Circle buttonText = {'spausti'} circleColor = {'red'}></Circle>
      <Circle buttonText = {'traukti'} circleColor = {'pink'}></Circle> */}

      {/* <Square buttonText = {'spausti'} squareColor = {'blue'}></Square>
      <Square buttonText = {'traukti'} squareColor = {'yellow'}></Square> */}

    </>
  );
}

export default App;
