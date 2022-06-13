
import './App.css';
import data from './data.json';
import { useState, createContext } from 'react';
import QUESTION from './question';

export const USERCONTEXT = createContext();
function App() {
  const [questions, setquestions] = useState(data);

  return (
       <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((ele,i) => {
            return (
                (<QUESTION key={i} {...ele} />)
            )
          })}
        </section>
      </div>
    </main>
   
    

  );
}

export default App;
