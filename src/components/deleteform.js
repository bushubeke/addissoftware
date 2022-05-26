import {  useDispatch } from 'react-redux';
import { useState  } from 'react';

export default function DeleteEmployeeForm({onclose, prevalues}) {
    
  // eslint-disable-next-line
    const [values, setValues] = useState(prevalues);
  
  // eslint-disable-next-line
  const dispatch = useDispatch()
  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(login());
    console.log("submission prevented");
    console.log(values)
  };

// ###################################

// ###########################################

  return (
    <>
     
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        
          <form className="mt-8 space-y-6" onSubmit={onSubmit} method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
               <input
                  id="_id"
                  name="_id"
                  type="text"
                  value={values._id}
                  readOnly
                  required
                  hidden
                />
              </div>
              <div className='text-white'>
               
               <h1>Are You Sure You Want to Delete Employee Data ?</h1>
              </div>
              

             
        
            </div>

            
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 m-3 border border-solid text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-stone-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                
                Delete Employee
              </button>
              <button
                onClick={()=>onclose()}
                className="group relative w-full flex justify-center py-2 px-4 m-3 border border-solid text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-stone-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                
                close
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}

