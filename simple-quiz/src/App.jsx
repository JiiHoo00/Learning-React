import React, { Component } from 'react';
import './App.css';

function Text(props) {
  return <div>{props.question}</div>;
}

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.answer}</button>
    </div>
  );
}

class Question extends Component {
  constructor(props) {
    super(props);
    /* 
    Using json-server that is serving '../test.json' at port 3001.
    */
    fetch('http://localhost:3001/questions/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState(prevState => {
          prevState.questions = data;
          prevState.doneLoading = true;
          return prevState;
        });
      });
    this.state = {
      doneLoading: false,
      questions: null,
      currentQuestionIndex: 0,
    };
  }

  checkAnswer(i) {
    if (i === this.state.questions[this.state.currentQuestionIndex].correctAnswer) {
      alert('Correct');
      this.setState(prevState => {
        // Modifying only the changing parts of the previous state to avoid copypasteing
        prevState.currentQuestionIndex++;
        return prevState;
      });
    } else {
      alert('Wrong!');
    }
  }

  render() {
    if (!this.state.doneLoading) {
      return <div>Loading...</div>;
    }
    if (this.state.currentQuestionIndex >= this.state.questions.length) {
      alert('End of quiz');
      return <div>Quiz finished</div>;
    }
    const answersData = this.state.questions[this.state.currentQuestionIndex].answers;
    let answersRender = [];
    for (let i = 0; i < answersData.length; i++) {
      answersRender.push(
        <Button answer={answersData[i]} onClick={() => this.checkAnswer(i)} key={i} />
      );
    }
    return (
      <div>
        <Text question={this.state.questions[this.state.currentQuestionIndex].question} />
        {answersRender}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Question />
      </div>
    );
  }
}

export default App;
