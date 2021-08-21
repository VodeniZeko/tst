import React from 'react';
import image from './assets/boots.png';

export default function App() {
  const ids = [1, 2, 3];
  return (
    <div class='p-10 flex justify-center flex-wrap'>
      {ids.map((id) => (
        <div
          key={id}
          style={{ width: '300px', border: '.2px solid black' }}
          class=' rounded m-5 shadow-sm '
        >
          <img class='w-full' src={image} alt='boots' />
          <div class='px-12 py-4'>
            <div class='font-extrabold text-2xl mb-1'>Woman's Boots</div>
            <p class='font-semibold text-base'>
              Fashionable boots made of real fur. Keep you warm <br />
              in the cold weather
            </p>
          </div>
          <div class='mb-4 pl-12 pr-10 py-1 flex justify-between items-center'>
            <span class='text-xl font-extrabold'>300 $</span>
            <span className='bg-green-400 rounded px-3 py-1 text-white '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
