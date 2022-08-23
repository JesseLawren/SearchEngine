import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <ClipLoader type='Puff' color='#00BFFF' height={50} width={80}/>
    </div>
  )
}
