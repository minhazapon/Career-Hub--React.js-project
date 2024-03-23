import { useEffect, useState } from "react";
import Job from "./Job";




const Featured = () => {


     const [jobs, setJobs] = useState([]);

     const [datalength, setDatalength] = useState(4);


     useEffect( () => {

       fetch('jobs.json')
       .then(res => res.json())
       .then(data => setJobs(data))
 


     }  , [])





    return (
        <div className=" ml-16 mr-16">
            

             <div>
               <h1 className=" text-center text-4xl font-bold text-blue-500">Featured Jobs {jobs.length}  </h1>
               <p className=" text-center mt-4 text-slate-400 text-xl ">Explore thousands of job opportunities with all the information you need. Its your future</p>


             </div>
             

             <div className=" grid grid-cols-2 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                  {
                      jobs.slice(0, datalength).map( jobs => <Job  key={jobs.id} jobs={jobs}></Job>  )


                  }

             </div>


             
            <div className=" text-center">  

            <button onClick={() => setDatalength(jobs.length)} className=" btn bg-violet-600 text-white font-bold mb-5">See all jobs</button>
            
            </div>

        </div>
    );
};

export default Featured;