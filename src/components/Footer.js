export default function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="px-20 mx-auto">
        <div className="flex justify-center text-center items-center mb-7">
          <a href="#!">
            <img
              className="w-6 m-8 ml-0"
              alt="social"
              src="/assets/images/facebook.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-6 m-8"
              alt="social"
              src="/assets/images/twitter.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-6 m-8"
              alt="social"
              src="/assets/images/instagram.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-6 m-8"
              alt="social"
              src="/assets/images/linkedin.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-6 m-8"
              alt="social"
              src="/assets/images/behance.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-6 m-8 mr-0"
              alt="social"
              src="/assets/images/dribble.svg"
            />
          </a>
        </div>
        <div className="text-center text-gray-400 font-medium font-poppins text-lg">
          © 2020 <span className="text-indigo-300">Codefest</span>™ All Right
          Reserved
        </div>
      </div>
    </footer>
  )
}
