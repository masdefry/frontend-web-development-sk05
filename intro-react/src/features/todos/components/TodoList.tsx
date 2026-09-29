import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import type { Todo } from '../types';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    try {
      const res = await axios.get(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Todos',
      );
      console.log(res?.data);
      setTodos(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  
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
