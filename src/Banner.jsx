
import '../public/images/317515084_2157920871262456_2236408473793064875_n.jpg'


const Banner = () => {
    return (
        <div className=' flex justify-center gap-72 items-center mt-20 mb-20 '>

             <div>

               <h1 className=" text-5xl font-extrabold mt-16">One Step<br></br> Closer To Your<br></br> <span className=" text-violet-600">Dream Job</span></h1>
               <p className="  text-slate-400 mt-2">Explore thousands of job opportunities with all the information you need.<br></br> Its your future. Come find it.<br></br> Manage all your job application from start to finish.</p>
                <button className=" btn bg-violet-600 text-xl font-bold text-white mt-2">Get Started</button>

             </div>


             <div>

                <img className=' h-[200px] w-[200px] bg-blue-200' src="../public/images/317515084_2157920871262456_2236408473793064875_n.jpg" alt="" />
 

             </div>
        
            
        </div>
    );
};

export default Banner;