import { Link } from "react-router-dom";
import AddFeatureRequest from "../../components/AddFeatureRequest";
import FeatureReqForm from "../../components/form/FeatureReqForm";
import { useEffect, useState } from "react";
import { FetchData } from "../../services/FetchData";
import { TbMessage2 } from "react-icons/tb";
import { MdOutlineHowToVote } from "react-icons/md";

const UserFeedback = () => {
  const [featureRequest, setFeatureRequest] = useState({});

  //fetch data
  useEffect(() => {
    FetchData("/feature-request", setFeatureRequest);
  }, [featureRequest]);

  return (
    <div className="container mx-auto px-20">
      <div className="bg-gray-50 rounded-lg p-10">
        <div className="flex items-center justify-between border rounded-lg py-5 px-10 mb-10">
          <select
            className="input input-bordered input-md  max-w-xs"
            name="sort-by"
            id=""
          >
            Sort By
            <option>Sort By</option>
            <option value="vote">Vote</option>
            <option value="comment">Comment</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="arcived">Arcived</option>
          </select>
          <form action="">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-md w-full max-w-xs"
              //   {...register("title", { required: true })}
              name="search"
            />
          </form>
          <label
            htmlFor="details-modal"
            className="btn bg-teal-700 hover:bg-teal-600 text-white btn-md"
          >
            Feature Request
          </label>
        </div>
        {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
        {/* <input type="checkbox" id="details-modal" className="modal-toggle" /> */}
        {/* <FeatureReqForm buttonText="Send Feature Request" /> */}
        {/* <AddFeatureRequest /> */}

        <div>
          {featureRequest?.allFeatureRequest?.map((singleFeatureReq) => (
            <div
              className="bg-white border rounded-lg px-10 py-5 mb-5"
              key={singleFeatureReq._id}
            >
              <h5 className="text-xl font-semibold capitalize">
                {singleFeatureReq.title}
              </h5>
              <p className="capitalize text-gray-600">
                {singleFeatureReq.description.length > 50 ? (
                  <span>
                    {" "}
                    {singleFeatureReq.description.slice(0, 200)} ....
                  </span>
                ) : (
                  singleFeatureReq.description
                )}
              </p>
              <div className="flex items-center">
                <button className="flex items-center me-5 bg-transparent border-none focus:outline-0 p-0">
                  <TbMessage2 />
                  <span className="ml-1">
                    {singleFeatureReq.comment
                      ? singleFeatureReq.comment.length
                      : 0}
                  </span>
                </button>
                <button className="flex items-center bg-transparent border-none focus:outline-0">
                  {singleFeatureReq.vote ? (
                    <span className="text-teal-700">
                      <MdOutlineHowToVote />
                    </span>
                  ) : (
                    <span>
                      <MdOutlineHowToVote />
                    </span>
                  )}
                  <span className="ml-1">
                    {singleFeatureReq.vote ? singleFeatureReq.vote.length : 0}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
