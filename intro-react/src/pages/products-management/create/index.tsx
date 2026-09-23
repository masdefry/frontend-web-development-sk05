import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';
const createProductSchema = z.object({
  name: z
    .string()
    .min(1, 'Product name is required')
    .max(100, 'Product have maximum 100 characters'),
  price: z.coerce
    .number('Price must be number')
    .gt(0, 'Price must be greater than 0'),
  imageUrl: z.string().min(1, 'Image URL is required'),
});

type CreateProductInput = z.input<typeof createProductSchema>;
type CreateProductOutput = z.output<typeof createProductSchema>;

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CreateProductInput, CreateProductOutput>({
    resolver: zodResolver(createProductSchema),
  });

  const handleCreateProduct = async (data: CreateProductInput) => {
    try {
      const res = await axios.post(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Products',
        data,
      );

      console.log(res); 
      toast.success('Create product successful'); 
      reset(); 
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className='flex flex-col items-center pt-10'>
        <h1 className='text-xl font-bold'>FORM CREATE PRODUCT</h1>
        <form
          onSubmit={handleSubmit(handleCreateProduct)}
          className='w-xl mt-5'
        >
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full'>
            <label className='label'>Name</label>
            <input
              type='text'
              className='input w-full'
              placeholder='Type product name'
              {...register('name')}
            />
            <p>{errors?.name?.message}</p>

            <label className='label mt-3'>Price</label>
            <input
              type='number'
              className='input w-full'
              placeholder='Type product price'
              {...register('price')}
            />
            <p>{errors?.price?.message}</p>

            <label className='label mt-3'>Image URL</label>
            <input
              type='text'
              className='input w-full'
              placeholder='Type product image url'
              {...register('imageUrl')}
            />
            <p>{errors?.imageUrl?.message}</p>

            <button className='btn bg-blue-800 text-white mt-4'>
              Create as New Product
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
