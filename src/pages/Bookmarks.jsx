import Button from "../components/Button";

import Error from "../components/Error";
import Input from "../components/Input";
const Bookmarks = () => {
  return (
    <div className="w-full ">
      <h1 className="text-6xl font-bold text-center text-[blue] ">
        Book mark system
      </h1>

      <form action="" className="bg-blue-500 w-[800px] mx-auto p-4 rounded-[16px] text-center mt-4">

        <Input type={"text"} placeholder={"website Name"} />
        <Input type={"URL"} placeholder={"URL Link"} />
      
        
        <Button buttonText={"Add"} />
        

      </form>

      <Error errorcontent="not valid url" />
    </div>
  );
};

export default Bookmarks;
