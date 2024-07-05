import { Book, Code, CheckSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { CourseSection } from '../../assets/course';
import { ErrorBoundary } from '../../ErrorBoundary';
import { Quiz } from './Quiz';
import { CodingExerciseUI } from './CodingExerciseUI';
import { LessonContent } from './LessonContent';

const ContentTabs = () => {
  return (
    <TabsList>
      <TabsTrigger value='lessons'>
        <Book className='mr-2' />
        Lessons
      </TabsTrigger>
      <TabsTrigger value='quiz'>
        <CheckSquare className='mr-2' />
        Quiz
      </TabsTrigger>
      <TabsTrigger value='coding'>
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
        <TabsContent value='lessons'>
          {courseSection.lessons.map((lesson, index) => (
            <LessonContent key={index} lesson={lesson} />
          ))}
        </TabsContent>
        <TabsContent value='quiz'>
          <Quiz quiz={courseSection.quiz} />
        </TabsContent>
        <TabsContent value='coding'>
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
