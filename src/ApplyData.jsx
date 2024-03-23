

const ApplyData = ({apply}) => {


     const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility,

        educational_requirements, experiences, contact_information
     
    
    } = apply;


    return (
        <div className=" ml-10 mr-10 flex justify-center">
             

             <div>

             
               <div className="hero  bg-base-200 h-[200px] w-[500px] border-[1px] border-blue-500 mt-5"> 

               <div className="hero-content flex-col lg:flex-row">
                 <img src={logo} className=" h-[30px] w-[100px]  rounded-lg shadow-2xl" />
                 <div>
                   <h1 className="text-2xl font-bold"> {job_title} </h1>
                   <p className=" mt-2 mb-2"> {company_name} </p>
                   <div className=" grid grid-cols-2 gap-10 p-2">

                   <h1 className=" bg-blue-200 p-2 border-[1px] rounded-xl btn"> {remote_or_onsite} </h1>
                   <h1 className=" bg-blue-200 p-2 border-[1px] rounded-xl btn"  > {job_type} </h1>

                 </div>
                   <button className="btn btn-primary">Get Started</button>
                 </div>
               </div>
             </div>
             


             </div>

            
        </div>
    );
};

export default ApplyData;