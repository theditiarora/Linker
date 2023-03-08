import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  let navigate = useNavigate()
  return (
    <div className='w-full px-10'>
        <h1 className='text-c-twenty'>Linker</h1>

        <div className=' flex flex-col gap-7 w-2/3 mt-24'>
            <h1 className='text-5xl font-bold leading-tight'>Savor the simplicity of link saving with Linker tool!</h1>
            <p className='text-c-twentyEight w-3/4 font-light leading-tight'>Take control of your links and streamline your online experience!</p>

            <div className="flex gap-5 mt-5">
                <button onClick={() => navigate('/addLink')} className='bg-green py-2 px-12 text-white rounded-md hover:bg-opacity-60 transition-all duration-200'>Give a try!</button>

                <button onClick={() => navigate('/signup')} className='py-2 px-12 text-white rounded-md bg-blue hover:bg-opacity-70 transition-all duration-200'>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Landing