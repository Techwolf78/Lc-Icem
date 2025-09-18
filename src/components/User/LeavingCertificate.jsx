import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const LeavingCertificate = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex flex-col justify-start items-start w-full max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Leaving Certificate Dashboard
      </h1>

      <button
        onClick={handleOpenModal}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Fill Form
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">
                Leaving Certificate Form
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-white hover:text-gray-200"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <form className="space-y-4">
                <input type="text" placeholder="Student ID" className="w-full border p-2 rounded" required />
                <input type="text" placeholder="Name of Student (Full Name)" className="w-full border p-2 rounded" required />
                <input type="text" placeholder="Father's Name" className="w-full border p-2 rounded" required />
                <input type="text" placeholder="Mother's Name" className="w-full border p-2 rounded" required />
                <input type="text" placeholder="Caste & Sub-Caste" className="w-full border p-2 rounded" />
                <input type="text" placeholder="Nationality" className="w-full border p-2 rounded" />
                <input type="text" placeholder="Place of Birth" className="w-full border p-2 rounded" />
                <input type="date" className="w-full border p-2 rounded" placeholder="Date of Birth" />
                <input type="text" placeholder="Date of Birth (in words)" className="w-full border p-2 rounded" />
                <input type="text" placeholder="Last College Attended" className="w-full border p-2 rounded" />
                <input type="date" className="w-full border p-2 rounded" placeholder="Date of Admission" />
                <input type="text" placeholder="Progress & Conduct" className="w-full border p-2 rounded" />
                <input type="date" className="w-full border p-2 rounded" placeholder="Date of Leaving College" />
                <input type="text" placeholder="Year in which studying & since when" className="w-full border p-2 rounded" />
                <textarea placeholder="Reason for leaving college" className="w-full border p-2 rounded" rows={3} />
                <textarea placeholder="Remarks" className="w-full border p-2 rounded" rows={3} />
              </form>
            </div>

            <div className="bg-gray-50 px-4 py-3 flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeavingCertificate;
