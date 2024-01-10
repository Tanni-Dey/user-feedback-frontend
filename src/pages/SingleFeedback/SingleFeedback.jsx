import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../../services/FetchData";

const SingleFeedback = () => {
  const { id } = useParams();
  const [featureReq, setFeatureReq] = useState();

  // fetch data
  useEffect(() => {
    FetchData(`/feature-request/${id}`, setFeatureReq);
  }, []);

  return (
    <div className="container mx-auto px-20">
      <div className="bg-gray-50 rounded-lg p-10 flex">
        <img className=" max-w-[40%]" src={featureReq?.logo} alt="logo" />
        <div className="ml-20">
          <h4 className="text-xl font-bold">{featureReq?.title}</h4>
          <p>{featureReq?.description}</p>
        </div>
      </div>
      <div className="my-10">
        <form action="">
          <input
            type="text"
            placeholder="Write your comment"
            className="input input-bordered input-md w-full mr-1 max-w-xs"
            //   {...register("title", { required: true })}
            name="comment"
          />
          <input
            type="submit"
            value="Send"
            className="btn bg-teal-700 hover:bg-teal-600 text-white"
            //   {...register("title", { required: true })}
            name="search"
          />
        </form>
      </div>
    </div>
  );
};

export default SingleFeedback;
