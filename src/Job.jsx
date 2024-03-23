import { Link } from "react-router-dom";


const Job = ({jobs}) => {

         const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility,

            educational_requirements, experiences, contact_information
         
        
        } = jobs

    return (
        <div >

                <div className=" flex justify-center mt-10 mb-10  "  >
                           
                <div className="card w-[500px] bg-base-100 shadow-xl border-[1px] border-blue-600 p-1 ">
               <figure className="px-10 pt-10">
                 <img src={logo} alt="Shoes" className="rounded-xl h-[30px] w-[80px]" />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title"> {job_title} </h2>
                 <p> {company_name} </p>

                 <div className=" grid grid-cols-2 gap-10">

                   <h1 className=" bg-blue-200 p-2 border-[1px] rounded-xl btn"> {remote_or_onsite} </h1>
                   <h1 className=" bg-blue-200 p-2 border-[1px] rounded-xl btn"  > {job_type} </h1>

                 </div>


                 <div className=" grid grid-cols-2 gap-10">

                     <h1> salary: {salary} </h1>

                     <h1> Remote: {location}  </h1>
                 </div>

                 <div className="card-actions">

                      <Link to={`/jobs/${id}`} >
                              
                       <button className="btn btn-primary">View Details</button>
                      
                      </Link>


                 </div>
               </div>
             </div>

             
            </div>



            
        </div>
    );
};

export default Job;