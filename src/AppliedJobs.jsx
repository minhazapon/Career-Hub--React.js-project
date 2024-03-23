import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ApplyData from "./ApplyData";


const AppliedJobs = () => {
     
    const jobs = useLoaderData();


    const [apply, setApply] = useState([])


    useEffect( () => {

     fetch('jobs.json')
     .then( res => res.json())
     .then(data => setApply(data))


    } , [])

    return (
        <div>

             <div>

                  <h1 className=" text-4xl font-extrabold text-center mt-10 mb-10">Applied <span className=" text-violet-600">Jobs</span> {jobs.length}  </h1>



             </div>

             <div>

              {

                  apply.map( apply => <ApplyData key={apply.id} apply={apply} ></ApplyData> )

              }



             </div>


            
        </div>
    );
};

export default AppliedJobs;