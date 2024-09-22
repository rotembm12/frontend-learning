import { Book, Code, CheckSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { CourseSection } from '../../assets/course';
import { ErrorBoundary } from '../../ErrorBoundary';
import { Quiz } from './Quiz';
import { CodingExerciseUI } from './CodingExerciseUI';
import { LessonContent } from './LessonContent';

const ContentTabs = () => {
  return (
    <TabsList className='p-8 mx-auto gap-12 border-purple-400 rounded-xl border-2'>
      <TabsTrigger value='lessons' className='text-xl'>
        <Book className='mr-2' />
        Lessons
      </TabsTrigger>
      <TabsTrigger value='quiz' className='text-xl'>
        <CheckSquare className='mr-2' />
        Quiz
      </TabsTrigger>
      <TabsTrigger value='coding' className='text-xl'>
        <Code className='mr-2' />
        Coding
      </TabsTrigger>
    </TabsList>
  );
};
export const CourseContent = ({
  courseSection,
}: {
  courseSection: CourseSection;
}) => {
  return (
    <ErrorBoundary>
      <Tabs defaultValue='lessons' className='w-full'>
        <ContentTabs />
        <TabsContent value='lessons' className='py-20'>
          {courseSection.lessons.map((lesson, index) => (
            <LessonContent key={index} lesson={lesson} />
          ))}
        </TabsContent>
        <TabsContent value='quiz' className='py-20'>
          <Quiz quiz={courseSection.quiz} />
        </TabsContent>
        <TabsContent value='coding' className='py-20'>
          <CodingExerciseUI
            key={courseSection.title}
            exercises={courseSection.codingExercises}
            language={courseSection.language}
          />
        </TabsContent>
      </Tabs>
    </ErrorBoundary>
  );
};
