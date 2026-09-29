import { HiXMark } from 'react-icons/hi2';
import type { Todo } from '../types';

interface TodoListProps {
  todos: Todo[]
}

export default function TodoList({todos}: TodoListProps) {

  return (
    <>
      {todos?.map((item, index) => (
        <div
          key={index}
          className='flex justify-between items-center p-6 border-b border-gray-300'
        >
          <div className='flex gap-3'>
            <input
              type='checkbox'
              className='checkbox checkbox-md rounded-full'
              checked={item?.isCompleted}
            />
            <span className={`${item?.isCompleted ? 'line-through' : ''}`}>
              {item?.description}
            </span>
          </div>
          <HiXMark />
        </div>
      ))}
    </>
  );
}
