import React, {useEffect, useState} from 'react';
import useTimer from '../../../hooks/timer';
import Button from '../../ui/Button';
import TextInput from '../../ui/TextInput';
import './styles.css';

function Problem(props) {
  const [problem, setProblem] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    let prob = props.problem.replace('#', '_____');
    setProblem(prob);
  }, [props.problem]);

  const timer = useTimer(30000, () => {
    setInput('banana');

    let probInput = props.problem.replace('#', input.toUpperCase());
    props.submitProblemInput(probInput);
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (input !== '') {
      let probInput = props.problem.replace('#', input.toUpperCase());
      props.submitProblemInput(probInput);
    }
  }

  return (
    <form className="problem-container" onSubmit={e => handleSubmit(e)}>
      <h4>Time Remaining: {Math.ceil(timer / 1000)}</h4>
      <h2 className="problem-prompt">{problem}</h2>
      <label className="problem-input-count">{input.length}/50</label>
      <TextInput
        aria-label="problem-input"
        maxLength="50"
        autoComplete="off"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Fill the blank"
      />
      <Button disabled={!input.length} type="submit" value="SUBMIT" />
    </form>
  );
}

export default Problem;
