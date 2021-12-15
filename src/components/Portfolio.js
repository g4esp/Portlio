import images from "../images"
export default function Portfolio() {
  return (
    <div className="mx-auto my-2 grid grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-2 lg:px-2">
      {images.map(({ src, id }) => (
        <div
          key={id}
          className="cursor-pointer w-96 h-96 sm:w-full sm:h-full relative"
        >
          <img className="object-cover relative" src={`${src}`} alt="Project" />
          <div className="group absolute inset-2 bg-transparent">
            <div className="p-5 w-full h-full bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 relative transition-all duration-300">
              <h4 className="text-indigo-900 font-poppins text-2xl font-bold">
                Project {id}
              </h4>
              <p className="text-indigo-900 font-quicksand font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita id quae impedit!
              </p>
              <a
                className="absolute bottom-5 right-5 rounded-full w-12 h-12 border bg-red-500 border-red-500"
                href="#!"
              >
                <img
                  className="w-full h-full object-center object-cover"
                  src="/assets/images/btn-arrow.svg"
                  alt="Read more"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
