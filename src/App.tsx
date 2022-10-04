import React, {useState} from 'react';
import './App.css';
import img1 from './images/cats.jpg';
import img2 from './images/chubaka.jpg';
import img3 from './images/dogs.jpg';
import img4 from './images/dyno.jpg';
import img5 from './images/planets.jpg';
import {getRandomNumber} from './helpers/heplers';


function App() {
    const [numbers, setNumbers] = useState({
        number1: img1,
        number2: img2,
        number3: img3,
        number4: img4,
        number5: img5,
    })

    const [color, setColor] = useState<string>('')

    const getRandomPictures = (min: number, max: number): {
        number1: string,
        number2: string,
        number3: string,
        number4: string,
        number5: string,
    } => {
        const numbersArr: number[] = []
        const number = Math.floor(min + Math.random() * (max - min))
        if (numbersArr.includes(number)){
            return getRandomPictures(min, max)
        } else {
            numbersArr.push(number);
            if(number >= 0 && number >= 1) {
                setNumbers({
                    number1: img3,
                    number2: img5,
                    number3: img2,
                    number4: img1,
                    number5:img4,
                })
            }
            if(number > 1 && number >= 2) {
                setNumbers({
                    number1: img2,
                    number2: img5,
                    number3: img4,
                    number4: img3,
                    number5:img2,
                })
            }
            if(number > 2 && number >= 3) {
                setNumbers({
                    number1: img2,
                    number2: img3,
                    number3: img1,
                    number4: img4,
                    number5:img5,
                })
            }
            if(number > 3 && number >= 4) {
                setNumbers({
                    number1: img5,
                    number2: img1,
                    number3: img4,
                    number4: img3,
                    number5:img2,
                })
            }
            if(number > 4 && number >= 5) {
                setNumbers({
                    number1: img2,
                    number2: img5,
                    number3: img4,
                    number4: img2,
                    number5:img1,
                })
            }
        }
        setColor(`rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`)
        return numbers
    }

  return (
      <>
      <header style={{background: `url(${numbers.number1})`, width: '100%', height: '200px'}} />
        <main style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '500px'
            }
        }>
            <div style={{background: `url(${numbers.number2})`, width: '25%', height: '100%'}}>

            </div>
            <div style={
                {
                    background: `url(${numbers.number3})`, width: '50%', height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            }>
                <button onClick={() => getRandomPictures(0,5)} style={{background: `${color}`}}>КРУТИТЬ БАРАБАН</button>
            </div >
            <div style={{background: `url(${numbers.number4})`, width: '25%', height: '100%'}}>

            </div>

        </main>

        <footer style={{background: `url(${numbers.number5})`, width: '100%', height: '200px'}}></footer>

      </>
  );
}

export default App;
