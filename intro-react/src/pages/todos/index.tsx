import { useRef, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';

interface Todo {
  id: number;
  title: string;
}
export default function TodosPages() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Makan malam',
    },
    {
      id: 2,
      title: 'Belajar pemrograman Javascript',
    },
  ]);
  const inputTodo = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newTodo = inputTodo?.current?.value?.trim();
    if (!newTodo) return;

    if (e?.key === 'Enter') {
      //   setTodos((prevValue) => [
      //     ...prevValue,
      //     {
      //         id: prevValue.length+1,
      //         title: newTodo
      //     }
      //   ])
      const currentTodos = [...todos];
      currentTodos?.push({
        id: currentTodos?.length + 1,
        title: newTodo,
      });
      setTodos(currentTodos);

      inputTodo.current!.value = '';
    }
  };

  const handleDeleteTodo = (id: number) => { 
    const newTodos = todos?.filter(item => {
        if(item?.id !== id) return item
    }); 
    setTodos(newTodos); 
  }

  return (
    <>
      <div className='bg-[url(background01.jpg)] h-[300px] bg-cover flex flex-col items-center'>
        <div className='w-135 pt-10'>
          <h1 className='text-white font-bold text-4xl'>TODO</h1>
          <input
            type='text'
            placeholder='Type Your Todo'
            className='input input-md w-full mt-5'
            ref={inputTodo}
            onKeyUp={handleAddTodo}
          />

          {/* Section Todo List */}
          <div className='bg-white rounded-md mt-10 shadow-md'>
            {todos?.map((item, index) => (
              <div
                key={index}
                className='flex justify-between items-center p-6 border-b border-gray-300'
              >
                <div className='flex gap-3'>
                  <input
                    type='checkbox'
                    className='checkbox checkbox-md rounded-full'
                  />
                  <span>{item?.id}</span>
                  <span>{item?.title}</span>
                </div>
                <HiXMark onClick={() => handleDeleteTodo(item?.id)} />
              </div>
            ))}

            {/* Section Filter */}
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
