import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className=" text-center">

            <h1 className=" text-4xl font-bold text-center mt-20" >!!!ops</h1>
             <Link className=" btn text-center mt-20" to="/" >Go Back To Home</Link>
            
        </div>
    );
};

export default ErrorPage;