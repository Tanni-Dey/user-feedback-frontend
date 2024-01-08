import React from "react";
import FeatureReqForm from "./form/FeatureReqForm";

const AddFeatureRequest = () => {
  return (
    <div className="modal modal-middle card glass">
      <div className="modal-box">
        <FeatureReqForm buttonText="Send Feature Request" />
        <div className="modal-action">
          <label
            htmlFor="details-modal"
            className="btn hover:bg-violet-600 border-0 bg-violet-500"
          >
            Ok
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddFeatureRequest;
