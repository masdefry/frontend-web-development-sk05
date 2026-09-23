import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProductsManagementPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [isGetProducts, setIsGetProducts] = useState<boolean>(true);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Products',
      );
      setProducts(res?.data);
    } catch (error) {
      console.log(error);
    }finally{
        setIsGetProducts(false);
    }
  };

  //   React Hook: useEffect
  useEffect(() => {
    console.log('USEEFFECTTT');
    getProducts();
  }, []);

  return (
    <>
      {console.log('RENDERRR')}
      <div className='flex justify-center pt-10'>
        <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-xl shadow-md'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {isGetProducts === true ? (
                <span className='loading loading-spinner loading-xl'></span>
              ) : (
                products?.map((item, index) => (
                  <tr key={index}>
                    <th>1</th>
                    <td>{item?.name}</td>
                    <td>Rp{item?.price}</td>
                    <td>
                      <img
                        src={item?.imageUrl}
                        width={'50px'}
                        height={'50px'}
                        className='rounded-md'
                      />
                    </td>
                    <td>
                      <button className='btn btn-xs'>Update</button>
                      <button className='btn btn-xs ml-1'>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
