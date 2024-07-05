import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Button } from './components/ui/button';
import { courseContent } from './assets/course';
import { ErrorBoundary } from './ErrorBoundary';
import { CourseContent } from './components/features/CourseContent';

const FrontendBasicsCourse = () => {
  const [selectedModule, setSelectedModule] = useState(0);

  const viewModule = (index: number) => {
    setSelectedModule(index);
  };
  return (
    <ErrorBoundary key={selectedModule}>
      <div className=' mx-auto p-10 rounded-md	'>
        <header className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold'>Frontend Basics Course</h1>
          <Button variant='outline' size='icon'>
            <Menu className='h-4 w-4' />
          </Button>
        </header>
        <div className='grid md:grid-cols-3 gap-4 rounded-md	'>
          {courseContent.map((module, index) => (
            <Card
              key={index}
              onClick={() => viewModule(index)}
              className={
                index === selectedModule ? 'border-red-500 rounded-md	' : ''
              }
            >
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                {index === selectedModule ? 'Currently Viewing' : 'View Module'}
              </CardFooter>
            </Card>
          ))}
        </div>
        <Card className='mt-6'>
          <CardHeader>
            <CardTitle>{courseContent[selectedModule].title}</CardTitle>
            <CardDescription>
              {courseContent[selectedModule].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CourseContent courseSection={courseContent[selectedModule]} />
          </CardContent>
        </Card>
      </div>
    </ErrorBoundary>
  );
};

function App() {
  return <FrontendBasicsCourse />;
}

export default App;
