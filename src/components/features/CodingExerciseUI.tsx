import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { CodingExercise } from '../../assets/course';
import { SectionContainer } from '../ui/SectionContainer';
import Editor from '@monaco-editor/react';

export const CodingExerciseUI = ({
  exercises,
  language = 'javascript',
}: {
  exercises: CodingExercise[];
  language?: 'html' | 'javascript' | 'css';
}) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [code, setCode] = useState(exercises[currentExercise].startingCode);
  const [showSolution, setShowSolution] = useState(false);
  const [output, setOutput] = useState('');

  useEffect(() => {
    setCode(exercises[currentExercise].startingCode);
    setShowSolution(false);
    setOutput('');
  }, [currentExercise]);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const handlePrevious = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
    }
  };

  const runCode = () => {
    try {
      // This is a simple and unsafe way to run code. In a real application,
      // you'd want to use a sandboxed environment for security.
      if (language === 'html') {
        setOutput(code);
      } else {
        const result = eval(code);
        setOutput(String(result));
      }
    } catch (error) {
      setOutput(`Error: ${error?.message}`);
    }
  };

  return (
    <SectionContainer>
      <h3 className='text-lg font-semibold mb-2'>
        Coding Exercise {currentExercise + 1} of {exercises.length}
      </h3>
      <p className='mb-4'>{exercises[currentExercise].instructions}</p>
      <div className='h-[300px] border rounded'>
        <Editor
          height='90%'
          defaultLanguage={language}
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
      <div className='flex justify-between mt-4'>
        <Button onClick={handlePrevious} disabled={currentExercise === 0}>
          <ArrowLeft className='mr-2 h-4 w-4' /> Previous
        </Button>
        <Button onClick={runCode}>
          <Play className='mr-2 h-4 w-4' /> Run Code
        </Button>

        <Button onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentExercise === exercises.length - 1}
        >
          Next <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
      {output && <SolutionOutput output={output} language={language} />}
      {showSolution && (
        <SolutionEditor
          solution={exercises[currentExercise].solution}
          language={language}
        />
      )}
    </SectionContainer>
  );
};

const SolutionOutput = ({
  output,
  language,
}: {
  output: string;
  language: 'html' | 'javascript' | 'css';
}) => {
  return (
    <div className='mt-4 p-2 bg-gray-100 rounded'>
      <h4 className='font-semibold'>Output:</h4>
      {language === 'html' ? (
        <iframe
          title='output'
          className='w-full h-[300px]'
          src={'data:text/html,' + encodeURIComponent(output)}
        />
      ) : (
        <pre>{output}</pre>
      )}
    </div>
  );
};
const SolutionEditor = ({
  solution,
  language,
}: {
  solution: string;
  language: 'html' | 'javascript' | 'css';
}) => {
  return (
    <div className='h-[300px] border rounded'>
      <Editor
        height='100%'
        defaultLanguage={language}
        value={solution}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
        }}
      />
    </div>
  );
};
