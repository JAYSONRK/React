import React from 'react';
import Questions from './Questions';
import Quests from './Quests';

const App = () => {
    return (<>
        <div className="card">
            <h1>FAQ</h1>
            {Quests.map((value) => {
                return (
                    <Questions
                        key = {value.id}
                        // question = {value.question}
                        // answer = {value.answer}
                        {...value}
                    />
                )
            })}
           
        </div>
    </>)
}

export default App;