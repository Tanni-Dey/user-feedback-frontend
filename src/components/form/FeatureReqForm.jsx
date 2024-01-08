import { useForm } from "react-hook-form";

const FeatureReqForm = ({ buttonText }) => {
  // rhf form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //rhf submit form
  const onSubmit = async (data) => {
    console.log(data);
    try {
      //   const response = await axiosNonSecureInstance[apiMethod](url, data);
      //   return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <button className="btn">Close</button> */}
            {errors.title && (
              <p className="text-error text-xs">Please write title</p>
            )}
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-md w-full max-w-xs mb-3"
              {...register("title", { required: true })}
            />

            {errors.description && (
              <p className="text-error">Please write description</p>
            )}
            <textarea
              type="text"
              {...register("description", { required: true })}
              placeholder="Description"
              className="textarea textarea-bordered textarea-md w-full max-w-xs mb-3"
            />

            {/*       
      {loading ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : ( */}
            {/* <div className="modal-action">
              <label
                htmlFor="details-modal"
                // className="btn hover:bg-violet-600 border-0 bg-violet-500"
              > */}

            <form method="dialog">
              <button>
                <input
                  type="submit"
                  value={buttonText}
                  className="btn w-full hover:bg-teal-600 text-white bg-teal-700 border-0"
                />
              </button>{" "}
            </form>
            {/* </label> */}
            {/* </div> */}
            {/* )} */}
          </form>
          {/* <button>close</button> */}
        </div>
      </div>
    </dialog>
    // <div className="modal modal-middle card glass">
    //   <div className="modal-box">
    //    {/* <FeatureReqForm buttonText="Send Feature Request" /> */}

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     {errors.title && (
    //       <p className="text-error text-xs">Please write title</p>
    //     )}
    //     <input
    //       type="text"
    //       placeholder="Title"
    //       className="input input-bordered input-md w-full max-w-xs mb-3"
    //       {...register("title", { required: true })}
    //     />

    //     {errors.description && (
    //       <p className="text-error">Please write description</p>
    //     )}
    //     <textarea
    //       type="text"
    //       {...register("description", { required: true })}
    //       placeholder="Description"
    //       className="textarea textarea-bordered textarea-md w-full max-w-xs mb-3"
    //     />

    //     {/*
    // {loading ? (
    //   <span className="loading loading-spinner text-primary"></span>
    // ) : ( */}
    //     <div className="modal-action">
    //       <label
    //         htmlFor="details-modal"
    //         // className="btn hover:bg-violet-600 border-0 bg-violet-500"
    //       >
    //         <input
    //           type="submit"
    //           value={buttonText}
    //           className="btn w-full hover:bg-teal-600 text-white bg-teal-700 border-0"
    //         />
    //       </label>
    //     </div>
    //     {/* )} */}
    //   </form>
    // <div className="modal-action">
    //   <label
    //     htmlFor="details-modal"
    //     // className="btn hover:bg-violet-600 border-0 bg-violet-500"
    //   >
    //     ok
    //   </label>
    // </div>
    //   </div>
    // </div>
  );
};

export default FeatureReqForm;
