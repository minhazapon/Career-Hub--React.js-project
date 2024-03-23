
import '../public/images/accounts.png'
import '../public/images/bullhorn.png'
import '../public/images/creativity.png'
import '../public/images/social-engineering.png'


const JobCatagory = () => {
    return (
        <div>
            
            <div className=" text-center">
               <h1 className=" text-4xl font-extrabold">Job Category List</h1>
               <p className=" text-xl mt-2 text-slate-400">Explore thousands of job opportunities with all the information you need. Its your future</p>


            </div>


            <div className=' flex justify-center gap-5 items-center mt-10 mb-10'>


               <div className=' border-[1px] bg-violet-100 border-blue-800 w-[200px] p-6 rounded-3xl '>
                   <img className=' h-[50px] ' src="../public/images/accounts.png" alt="" />
                   <h1 className=' text-xl font-bold'>Account & Finance</h1>
                   <p className=' text-xl text-slate-400'>300 Jobs Available</p>

               </div>

               <div className=' border-[1px] bg-violet-100 border-blue-800 w-[200px] p-3 rounded-3xl '>
                   <img className=' h-[50px] ' src="../public/images/bullhorn.png" alt="" />
                   <h1 className=' text-xl font-bold'>Creative Design</h1>
                   <p className=' text-xl text-slate-400'>100+ Jobs Available</p>

               </div>

               <div className=' border-[1px] bg-violet-100 border-blue-800 w-[200px] p-3 rounded-3xl '>
                   <img className=' h-[50px] ' src="../public/images/creativity.png" alt="" />
                   <h1 className=' text-xl font-bold'>Marketing & Sales</h1>
                   <p className=' text-xl text-slate-400'>150 Jobs Available</p>

               </div>

               <div className=' border-[1px] bg-violet-100 border-blue-800 w-[200px] p-3 rounded-3xl '>
                   <img className=' h-[50px] ' src="../public/images/social-engineering.png" alt="" />
                   <h1 className=' text-xl font-bold'>Engineering Job</h1>
                   <p className=' text-xl text-slate-400'>224 Jobs Available</p>

               </div>




            </div>
          

        </div>
    );
};

export default JobCatagory;