import { ChevronDown, ChevronUp, BookOpen, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Lesson } from '../../assets/course';
import { SectionContainer } from '../ui/SectionContainer';

export const LessonContent = ({ lesson }: { lesson: Lesson }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isCompleted, toggleComplete } = useCompletionStatus(lesson.title);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleCompleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleComplete();
  };

  return (
    <SectionContainer>
      <div
        className='border border-gray-200 dark:border-gray-700 rounded-lg mb-2 overflow-hidden transition-all duration-200 ease-in-out'
        style={{ maxHeight: isExpanded ? '1000px' : '60px' }}
      >
        <div
          className='flex items-center justify-between p-4 cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
          onClick={toggleExpand}
        >
          <div className='flex items-center'>
            <BookOpen className='w-5 h-5 mr-3 text-blue-500 dark:text-blue-400' />
            <h3 className='text-md lg:text-lg font-semibold text-gray-800 dark:text-gray-200'>
              {lesson.title}
            </h3>
          </div>
          <div className='flex items-center'>
            <button
              className={`mr-4 p-1 rounded-full ${
                isCompleted
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
              }`}
              onClick={handleCompleteClick}
            >
              <Check className='w-4 h-4' />
            </button>
            {isExpanded ? (
              <ChevronUp className='w-5 h-5 text-gray-500 dark:text-gray-400' />
            ) : (
              <ChevronDown className='w-5 h-5 text-gray-500 dark:text-gray-400' />
            )}
          </div>
        </div>
        <div className='p-8 bg-gray-50 dark:bg-gray-900'>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-[800px] break-words'>
            {lesson.content}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

// src/hooks/useCompletionStatus.ts

const STORAGE_KEY = 'lesson_completion_status';

export const useCompletionStatus = (lessonId: string) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const completionStatus = JSON.parse(storedData);
      setIsCompleted(!!completionStatus[lessonId]);
    }
  }, [lessonId]);

  const toggleComplete = () => {
    setIsCompleted((prev) => {
      const newStatus = !prev;
      const storedData = localStorage.getItem(STORAGE_KEY);
      const completionStatus = storedData ? JSON.parse(storedData) : {};
      completionStatus[lessonId] = newStatus;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completionStatus));
      return newStatus;
    });
  };

  return { isCompleted, toggleComplete };
};
