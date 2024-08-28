 
// import {point} from '../assets/point.svg'

const Education = () => {
  return (
    <div className='section-with-second-bg '>
    <h1 className='text-4xl font-bold text-center'>My <span className='text-blue-600'>Journey</span></h1>

    <div className='flex flex-row   h-screen mt-5'>
      
{/* div1 */}
      <div className='   ms-2 '>
        <h1 className='text-2xl font-bold text-center'>Education</h1>

        <div className='border-4 border-[#2a677d] rounded-md  mr-2 mt-2'>
        
          <div className='ms-4 mt-4 mb-4'>
            <div className="h-full flex flex-row items-center"> 
              <div className="h-4 w-4 bg-white"></div>
              <div className="text ms-2">
                <p className='text-lg'>2015 - 2019</p>
              </div>
            </div>
           
            <h1 className='text-2xl font-bold'>Bsc in Computer Science</h1>
            <p className='text-lg'>University of Lagos</p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un imprimeur anonyme assembla ensemble des morceaux
            </p>
          </div>
                    
        </div>

      
      </div>

{/* div2 */}
      {/* <div className='border-2 border-[#214e5e]   '>
      </div>
  */}
{/* div3 */}
      <div className='   ms-2'>
        <h1 className='text-2xl font-bold text-center'>Expericens</h1>
        <div className='border-4 border-[#2a677d] rounded-md  mr-2 mt-2'>
        
          <div className='ms-4 mt-4 mb-4'>
            <div className="h-full flex flex-row items-center"> 
              <div className="h-4 w-4 bg-white"></div>
              <div className="text ms-2">
                <p className='text-lg'>2015 - 2019</p>
              </div>
            </div>
           
            <h1 className='text-2xl font-bold'>Bsc in Computer Science</h1>
            <p className='text-lg'>University of Lagos</p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un imprimeur anonyme assembla ensemble des morceaux
            </p>
          </div>
                    
        </div>

      </div>

    </div>
  </div>
  )
}

export default Education