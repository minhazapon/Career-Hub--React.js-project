import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const JobDtails = () => {





     const jobs = useLoaderData();

     const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility,

        educational_requirements, experiences, contact_information
     
    
    } = useParams();

     const idInt = parseInt(id);
     const job = jobs.find( job => job.id === idInt);
     console.log(job);


     const applyJob = () => {
          toast('you have applleid in job done')


     }


    return (
        <div className=" ml-10 mr-10">


            <h1 className=" text-center mt-10 mb-10 text-4xl font-extrabold bg-violet-100 p-28">jobs details  </h1>
             <div className=" flex justify-center gap-10 mb-10">
                 <div>
                   <h1 className=" font-extrabold text-2xl"> jobs description</h1>
                 </div>
                      
                 <div className=" border-[2px] border-blue-500 p-5 rounded-xl">
                    <h1>Jobs details</h1>
                      <hr className=" mt-5 mb-5"></hr>
                    <p className=" text-xl font-semibold"> Salary : 100K - 150K (Per Month) </p>  
                    <p className=" text-xl font-semibold">Job Title : Product Designer </p>  
                    <p className=" text-xl font-semibold mt-2 mb-2">Contact Information </p>  
                    <p className=" text-xl font-semibold"> Phone : 01750-00 00 00 </p>  
                    <p className=" text-xl font-semibold">Email : info@gmail.com </p>  
                    <p className=" text-xl font-semibold"> Address : Dhanmondi 32, Sukrabad
                    Dhaka, Bangladesh</p>  
                   





                    <div>
                        <button onClick={applyJob} className=" btn bg-violet-600 w-[200px] text-white">Apply Now</button>
                        <ToastContainer />
                    </div>
                </div>                
            </div> 




        </div>
    );
};

export default JobDtails;