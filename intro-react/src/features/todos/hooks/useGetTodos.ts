import type { Todo } from '../types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function useGetTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    try {
      const res = await axios.get(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Todos',
      );

      setTodos(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return {
    todos, 
    getTodos
  }
}
