import React from 'react'

const DeleteModal = ( { onDelete, links, setModal }) => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center'>
        <div className="bg-grey rounded-md py-5 px-10">
            <p className='text-xl'>Are you sure you want to delete this link?</p>
            <div className="flex justify-center gap-5 mt-7">
                <button onClick={() => onDelete(links.id)} className='py-2 px-12 text-white text-md rounded-md bg-purple hover:bg-opacity-70 transition-all duration-200'>
                Yes delete</button>

                <button onClick={() => setModal(false)} className='py-2 px-12 text-white text-md rounded-md border-2 border-purple hover:bg-purple hover:bg-opacity-50 transition-all duration-200'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal