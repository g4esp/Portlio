export default function Contact() {
  return (
    <>
      <div className="flex flex-col space-y-20 font-poppins">
        <div className="flex w-full">
          <input
            type="text"
            className="text-gray-500 text-base border-b-4 focus:outline-none focus:border-red-500 border-gray-500 bg-transparent p-4 w-full mr-3"
            placeholder="Your name"
          />
          <input
            type="text"
            className="text-gray-500 text-base border-b-4 focus:outline-none focus:border-red-500 border-gray-500 bg-transparent p-4 w-full ml-3"
            placeholder="Email ID"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            className="text-gray-500 text-base border-b-4 focus:outline-none focus:border-red-500 border-gray-500 bg-transparent p-4 w-full"
            placeholder="Message"
          />
        </div>
      </div>
      <div className="cursor-pointer px-4 py-3 mt-10 text-lg font-poppins w-max font-semibold text-white border-red-500 border-4 hover:bg-red-500 uppercase">
        Send message
      </div>
    </>
  )
}
