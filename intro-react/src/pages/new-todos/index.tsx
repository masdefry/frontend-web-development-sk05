import {
  createTodoSchema,
  type TodoRequest,
} from '@/features/todos/validations/createTodoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { HiXMark } from 'react-icons/hi2';

export default function NewTodosPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoRequest>({
    resolver: zodResolver(createTodoSchema),
  });

  const handleCreateTodo = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='bg-[url(background01.jpg)] h-[300px] bg-cover flex flex-col items-center'>
        <div className='w-135 pt-10'>
          <h1 className='text-white font-bold text-4xl'>TODO</h1>
          <form onSubmit={handleSubmit(handleCreateTodo)}>
            <input
              type='text'
              placeholder='Type Your Todo'
              className='input input-md w-full mt-5'
              {...register('description')}
            />
            <span className='text-white'>{errors?.description?.message}</span>
          </form>
          {/* Section Todo List */}
          <div className='bg-white rounded-md mt-10 shadow-md'>
            <div className='flex justify-between items-center p-6 border-b border-gray-300'>
              <div className='flex gap-3'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-md rounded-full'
                />
                <span className='line-through'>Project Javascript</span>
              </div>
              <HiXMark />
            </div>

            <div className='flex justify-between items-center p-6 text-sm text-gray-500'>
              <span>5 Items Left</span>
              <div className='flex items-center gap-3'>
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
              </div>
              <button>Clear Completed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
