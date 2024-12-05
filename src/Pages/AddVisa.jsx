export const AddVisa = () => {
  return (
    <div className="py-10 lg:py-14">
      <div className="flex box-border justify-center items-center">
        <div className="rounded-2xl flex w-11/12 md:max-w-5xl md:p-5 items-center">
          <div className="mx-auto px-8">
            <h2 className="font-bold text-xl md:text-3xl text-primary mb-6">
              Please fill the form with correct information
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="font-medium">Country name</label>
                <input
                  type="text"
                  name="cName"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="Country Name"
                />
              </div>
              <div>
                <label className="font-medium">Country image</label>
                <input
                  type="text"
                  name="cPhoto"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="Country image"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex-1">
                  <label className="font-medium">Processing time (day) </label>
                  <input
                    type="number"
                    name="time"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Processing time"
                  />
                </div>
                {/* options */}
                <div className="flex-1 w-full">
                  <label className="font-medium"> Visa Type</label>
                  <select className="select select-bordered mt-1 h-10 w-full bg-gray-50">
                    <option selected disabled>
                      Visa Type
                    </option>
                    <option>Tourist visa</option>
                    <option>Student visa</option>
                    <option>Official visa</option>
                  </select>
                </div>
              </div>
              <label className="font-medium">Required_documents</label>
              <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-2 mt-1">
                <div className="flex items-start gap-2">
                  <input type="checkbox" checked="" class="checkbox" />
                  <span>Valid passport</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" checked="" class="checkbox" />
                  <span>Visa application form</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" checked="" class="checkbox" />
                  <span>Recent passport-sized photograph</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" checked="" class="checkbox" />
                  <span>Proof of financial means</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" checked="" class="checkbox" />
                  <span>Proof of accommodation</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" checked="" class="checkbox" />
                  <span>Travel itinerary</span>
                </div>
              </div>

              <div className="w-full">
                <label className="font-medium">Description</label>
                <br />
                <textarea
                  class="textarea textarea-bordered w-full mt-1 bg-gray-50"
                  placeholder="Enter visa Description"
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                <div className="flex-1">
                  <label className="font-medium">Age_restriction</label>
                  <input
                    type="number"
                    name="cName"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Enter minimum age for apply"
                  />
                </div>
                <div className="flex-1 w-full">
                  <label className="font-medium">Fee $</label>
                  <input
                    type="number"
                    name="cName"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Enter Fee"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="font-medium">Validity</label>
                <input
                  type="text"
                  name="cName"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="Enter visa validity"
                />
              </div>
              <div className="flex-1">
                <label className="font-medium">Application_method</label>
                <input
                  type="text"
                  name="cName"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="Ex - online, offline, embassy"
                />
              </div>

              <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-xl w-full overflow-hidden group">
                <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10">Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
