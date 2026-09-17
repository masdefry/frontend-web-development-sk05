import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [quantity, setQuantity] = useState<number>(1);
  const [isLightMode, setIsLightMode] = useState<boolean>(true)

  const handleDecreaseQuantity = () => {
    setQuantity((currentValue) => {
      if(currentValue > 1) return currentValue - 1; 

      return currentValue
    });
  };

  const handleIncreaseQuantity = () => {
    let currentQuantity = quantity; // 10
    if(currentQuantity < 10) currentQuantity++;
    setQuantity(currentQuantity);
  };

  useEffect(()=>{
    console.log('triggerrr')
  }, [quantity])

  const handleDarkMode = () => {
    setIsLightMode(false)
  }

  return (
    <div className={`${isLightMode === true? 'bg-white':'bg-black'}`}>
      <div className='flex justify-center mt-5 gap-3'>
        <button className={`btn btn-xs ${isLightMode === true? 'bg-black':'bg-white'}`} onClick={handleDecreaseQuantity} disabled={quantity <= 1}>
          -
        </button>
        <span className='text-2xl font-bold'>{quantity}</span>
        <button className='btn btn-xs' onClick={handleIncreaseQuantity} disabled={quantity >= 10}>+</button>

        <button onClick={handleDarkMode} className='btn btn-success'>Dark Mode</button>
      </div>
    </div>
  );
}

