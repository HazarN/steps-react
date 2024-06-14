import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const customStyle = {
  buttons: {
    backgroundColor: '#7950F2',
    color: 'white',
  },
};

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleVisibility = () => setIsOpen(isOpen => !isOpen);
  const handleNext = () => step < 3 && setStep(currStep => currStep + 1);
  const handlePrev = () => step > 1 && setStep(currStep => currStep - 1);

  return (
    <>
      <button className='close' onClick={handleVisibility}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <button style={customStyle.buttons} onClick={handlePrev}>
              Previous
            </button>
            <button style={customStyle.buttons} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
