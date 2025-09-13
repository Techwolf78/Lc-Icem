import React, { useState } from "react";

const BonafideCertificate = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-start items-start w-full max-w-3xl mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Bonafide Certificate Dashboard
      </h1>

      {!formSubmitted ? (
        <>
          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-lg shadow mb-6 w-full">
            <h2 className="text-lg font-semibold mb-2">Instructions</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Fill out the form carefully with correct details.</li>
              <li>Ensure that the information provided is up to date.</li>
              <li>Once submitted, the request will go for verification.</li>
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-xl p-6 w-full flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Enter Name"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Enter Roll Number"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Enter Course / Branch"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <textarea
              placeholder="Purpose of Bonafide Certificate"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
              required
            />
            <div className="flex justify-end gap-3">
              <button
                type="reset"
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-lg shadow w-full">
          <h2 className="text-xl font-semibold mb-2">Verification in Progress</h2>
          <p>
            Your bonafide request has been submitted successfully. Please wait
            while it is being verified.
          </p>
        </div>
      )}
    </div>
  );
};

export default BonafideCertificate;
