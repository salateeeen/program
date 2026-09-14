import React, { useState } from 'react';
import './index.css'

function App() {
  ///useState(default value (step));
  ///useState just used in top level component
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3)
      //* setStep(new value you want)
      //? react know you are update a state so it re-render the component
      setStep(step + 1)
  }
  function handlePrevios() {
    if (step > 1)
      setStep((step) => step - 1)
  }
  function handleClose() {
    /// re-render but step is always remembered
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <button className='close' onClick={handleClose}>&times;</button>
      {
        isOpen && < div className='steps' >

          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className='message'>Step: {step}</p>

          <div className='buttons'>
            <button style={{
              backgroundColor: "#7950f2", color: "#fff"
            }} onClick={handlePrevios} >Previos</button>
            <button style={{
              backgroundColor: "#7950f2", color: "#fff"
            }} onClick={handleNext}>Next</button>
          </div>

        </ div >
      }
    </React.Fragment>
  )
}
// module.exports = App
export default App;
