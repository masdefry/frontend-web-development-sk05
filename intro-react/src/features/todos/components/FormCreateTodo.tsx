import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createTodoSchema,
  type TodoRequest,
} from '@/features/todos/validations/createTodoSchema';
import { toast } from 'react-toastify';
import axios from 'axios';

interface FormCreateTodoProps {
  getTodos: () => void; 
}

export default function FormCreateTodo({getTodos}: FormCreateTodoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoRequest>({
    resolver: zodResolver(createTodoSchema),
  });

  const handleCreateTodo = async (data: TodoRequest) => {
    try {
      await axios.post(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Todos',
        data,
      );
      toast.success('Create todo successful');
      getTodos(); 
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreateTodo)}>
      <input
        type='text'
        placeholder='Type Your Todo'
        className='input input-md w-full mt-5'
        {...register('description')}
      />
      <span className='text-white'>{errors?.description?.message}</span>
    </form>
  );
}
