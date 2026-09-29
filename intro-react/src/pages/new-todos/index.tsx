import FormCreateTodo from '@/features/todos/components/FormCreateTodo';
import TodoList from '@/features/todos/components/TodoList';


export default function NewTodosPages() {
  return (
    <>
      <div className='bg-[url(background01.jpg)] h-[300px] bg-cover flex flex-col items-center'>
        <div className='w-135 pt-10'>
          <h1 className='text-white font-bold text-4xl'>TODO</h1>
          <FormCreateTodo />

          {/* Section Todo List */}
          <div className='bg-white rounded-md mt-10 shadow-md'>
            <TodoList />

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
