import PropTypes from "prop-types";
const Modal = ({ show, handleClose, handleConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#6D31ED] h-[251px] w-[556px] rounded-3xl p-8">
        <h1 className="text-3xl text-white">
          Are you sure you want to delete this conversation?
        </h1>
        <div className="flex flex-row items-center justify-between mt-[40px]">
          <button
            type="button"
            className="rounded-full bg-[#DDF3FF] h-[44px] w-[116px] text-sm font-semibold shadow-sm hover:bg-grey-400"
            onClick={() => handleClose()}
          >
            No
          </button>

          <button
            type="button"
            className="rounded-full bg-[#FF0000] h-[44px] w-[116px] text-sm font-semibold text-white shadow-sm hover:bg-[#FF0000]/60"
            onClick={() => {
              handleConfirm();
              handleClose();
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default Modal;
