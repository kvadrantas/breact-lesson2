import Circle from './components/Circle';
import Square from './components/Square';

function App() {
  return (
    <>
      <Circle buttonText = {'spausti'} circleColor = {'red'}></Circle>
      <Circle buttonText = {'traukti'} circleColor = {'pink'}></Circle>

      <Square buttonText = {'spausti'} squareColor = {'blue'}></Square>
      <Square buttonText = {'traukti'} squareColor = {'yellow'}></Square>

    </>
  );
}

export default App;
