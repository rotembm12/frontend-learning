import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { QuizQuestion } from '../../assets/course';
import { SectionContainer } from '../ui/SectionContainer';

export const Quiz = ({ quiz }: { quiz: QuizQuestion[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quiz.length).fill('')
  );
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    console.log('Quiz rendered with currentQuestion:', currentQuestion);
  }, [currentQuestion]);

  const handleAnswer = (answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === quiz[index].answer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <SectionContainer>
        <h3 className='text-xl font-semibold mb-2'>Quiz Results</h3>
        <p className='text-lg mb-2'>
          You scored {score} out of {quiz.length}!
        </p>
        <Progress value={(score / quiz.length) * 100} className='mt-2 mb-4' />
        {quiz.map((question, index) => (
          <Card key={index} className='mb-4'>
            <CardHeader>
              <CardTitle className='text-lg'>Question {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='font-semibold mb-2'>{question.question}</p>
              <p
                className={
                  selectedAnswers[index] === question.answer
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                Your answer: {selectedAnswers[index]}
              </p>
              <p className='text-green-600'>
                Correct answer: {question.answer}
              </p>
            </CardContent>
          </Card>
        ))}
        <Button
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswers(Array(quiz.length).fill(''));
            setShowResults(false);
          }}
          className='mt-4'
        >
          Retry Quiz
        </Button>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <h3 className='text-lg font-semibold mb-2'>
        Question {currentQuestion + 1} of {quiz.length}
      </h3>
      <p className='mb-4'>{quiz[currentQuestion].question}</p>
      <RadioGroup
        value={selectedAnswers[currentQuestion]}
        onValueChange={handleAnswer}
      >
        {quiz[currentQuestion].options.map((option, index) => (
          <div key={index} className='flex items-center space-x-2'>
            <RadioGroupItem value={option} id={`option${index}`} />
            <Label htmlFor={`option${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <div className='flex justify-start gap-8 mt-8'>
        <Button
          className='text-xl bg-purple-500 text-white'
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <ArrowLeft className='mr-2 h-4 w-4' /> Previous
        </Button>
        <Button
          onClick={handleNext}
          className='text-xl bg-purple-500 text-white'
        >
          {currentQuestion === quiz.length - 1 ? 'Finish' : 'Next'}{' '}
          <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </SectionContainer>
  );
};
