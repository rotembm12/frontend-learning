import { PropsWithChildren, useState } from 'react';
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
      <div className='mx-auto p-2 lg:p-10 rounded-md	bg-purple-400 '>
        <Container>
          <header className='  flex justify-between items-center '>
            <h1 className='text-3xl font-bold'>Frontend Basics Course</h1>
            <Button variant='outline' size='icon'>
              <Menu className='h-4 w-4' />
            </Button>
          </header>
        </Container>

        <Container>
          <p className='text-2xl pb-8'>
            Welcome to the Frontend Basics Course!
            <br /> This course will teach you the basics of frontend
            development.
          </p>
          <div className='grid md:grid-cols-3 gap-4 rounded-md '>
            {courseContent.map((module, index) => (
              <Card
                key={index}
                onClick={() => viewModule(index)}
                className={`
                  ease-in duration-300 bg-white cursor-pointer border-purple-500 rounded-2xl 
                  ${
                    index === selectedModule
                      ? 'bg-purple-500 shadow-indigo-500/50 text-white shadow-xl'
                      : ''
                  }
                  `}
              >
                <CardHeader>
                  <CardTitle className='mb-2'>
                    {index + 1 + '. '} {module.title}
                  </CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  {index === selectedModule
                    ? 'Currently Viewing'
                    : 'View Module'}
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>

        <Container>
          <Card className='mt-6 p-8 border-none'>
            <CardHeader className=' gap-4'>
              <CardTitle className='text-3xl'>
                {courseContent[selectedModule].title}
              </CardTitle>

              <CardDescription className='text-xl'>
                {courseContent[selectedModule].description}
              </CardDescription>
            </CardHeader>

            <CardContent className='rounded-xl'>
              <CourseContent courseSection={courseContent[selectedModule]} />
            </CardContent>
          </Card>
        </Container>
      </div>
    </ErrorBoundary>
  );
};
const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='container mx-auto bg-purple-50 p-8 my-8 rounded-2xl shadow-sm'>
      {children}
    </div>
  );
};

function App() {
  return <FrontendBasicsCourse />;
}

export default App;
