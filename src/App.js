import Section from "./components/Section"
import { Menu } from "./components/Menu"
import Underlined from "./components/Underlined"
import Portfolio from "./components/Portfolio"
import Quotes from "./components/Quotes"
import { Link } from "react-scroll"
import { Blog } from "./components/Blog"
import ContactForm from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Menu />
      <Section
        className="bg-pink-400 min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-between relative"
        style={{
          backgroundImage:
            "url(/assets/images/header_hero.jpeg)",
        }}
      >
        <div className="px-10 lg:px-20 mx-auto pt-24 mt-auto w-full">
          <div className="mb-20">
            <p className="text-green-50 text-4xl font-bold font-quicksand mb-2">
              Hey, I'm
            </p>
            <h1 className="text-white text-8xl font-poppins font-bold leading-none mb-1">
              Brad Smith
            </h1>
            <p className="text-green-50 text-4xl font-light font-quicksand">
              Graphic Designer, Artist & Illustrator
            </p>
          </div>
        </div>
        <div className="px-10 lg:px-20 mx-auto flex mb-16 w-full">
          <a href="#!">
            <img
              className="w-8 m-8 ml-0"
              alt="social"
              src="/assets/images/facebook.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-8 m-8"
              alt="social"
              src="/assets/images/twitter.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-8 m-8"
              alt="social"
              src="/assets/images/behance.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-8 m-8"
              alt="social"
              src="/assets/images/dribble.svg"
            />
          </a>
          <a href="#!">
            <img
              className="w-8  m-8 mr-0"
              alt="social"
              src="/assets/images/pinterest.svg"
            />
          </a>
        </div>

        <div className="relative">
          <img
            src="designer.png"
            alt="designer"
            className="absolute bottom-0 left-0"
          />
        </div>
      </Section>
      <Section
        id="about"
        className="bg-indigo-900 min-h-screen flex flex-col justify-center relative"
      >
        <div className="px-10 lg:px-20 mx-auto space-y-10 my-auto">
          <div className="relative">
            <img
              src="/assets/images/a.svg"
              alt="Dropcap"
              className="absolute -top-24 hidden lg:block w-56"
            />
          </div>
          <Underlined
            tag="h4"
            className="text-white text-2xl font-poppins font-medium"
          >
            About
          </Underlined>
          <h3 className="text-white text-4xl font-poppins font-bold leading-tight">
            Who said a landing page can't display an abundance of content
            beautifully
          </h3>
          <p className="text-white text-2xl font-poppins font-semibold leading-normal">
            Portlio is a bright and bold landing page{" "}
            <Underlined tag="span">template</Underlined> for professionals and
            freelancers to display their{" "}
            <Underlined tag="span">artworks or portfolio</Underlined>. If you're
            a web designer, use the{" "}
            <Underlined tag="span">projects section</Underlined> below to link
            directly to the live version of your clients' website.
          </p>
        </div>
        <div className="w-full mt-8">
          <img
            src="/assets/images/divider_illustration.png"
            alt="designer"
            className="object-cover"
          />
        </div>
      </Section>
      <Section
        id="projects"
        className="bg-indigo-900 min-h-screen flex flex-col justify-start relative"
      >
        <div className="lg:flex px-10 lg:px-20 items-end pt-24 mb-16">
          <div className="space-y-10 lg:w-3/4 mb-6">
            <div className="relative">
              <img
                src="/assets/images/p.svg"
                alt="Dropcap"
                className="absolute -top-40 hidden lg:block w-56"
              />
            </div>
            <Underlined
              tag="h4"
              className="text-white text-2xl font-poppins font-medium"
            >
              Projects
            </Underlined>
            <h3 className="text-white text-4xl font-poppins font-bold leading-tight">
              I've done many exciting projects which you can view below
            </h3>
          </div>
          <div className="lg:w-1/4">
            <Link
              className="cursor-pointer float-right px-4 py-3 text-lg font-poppins font-semibold text-white border-red-500 border-4 hover:bg-red-500"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              View testimonials
            </Link>
          </div>
        </div>
        <Portfolio />
      </Section>
      <Section
        id="testimonials"
        className="bg-indigo-900 min-h-screen lg:grid lg:grid-cols-12 pt-24"
      >
        <div className="col-span-5">
          <img
            src="/assets/images/review-header-img.png"
            alt="Some clients"
            className="lg:-ml-8"
          />
        </div>
        <div className="col-span-7 px-10 lg:pr-20 mx-auto lg:ml-0 w-11/12">
          <div className="space-y-10 mb-8">
            <div className="relative">
              <img
                src="/assets/images/t.svg"
                alt="Dropcap"
                className="absolute -top-40 hidden w-48 lg:block"
              />
            </div>
            <Underlined
              tag="h4"
              className="text-white text-2xl font-poppins font-medium w-11/12"
            >
              Testimonials
            </Underlined>
            <h3 className="text-white text-4xl font-poppins font-bold leading-tight">
              Read through what my clients have to say about me
            </h3>
          </div>
          <Quotes />
        </div>
        <div className="col-span-12">
          <div className="flex flex-wrap items-center justify-center lg:px-20 px-10">
            <img
              className="w-32 m-5 lg:ml-0"
              alt="brand"
              src="/assets/images/dummy_logo1.png"
            />
            <img
              className="w-32 m-5"
              alt="brand"
              src="/assets/images/dummy_logo2.png"
            />
            <img
              className="w-32 m-5"
              alt="brand"
              src="/assets/images/dummy_logo3.png"
            />
            <img
              className="w-32 m-5 hidden lg:block"
              alt="brand"
              src="/assets/images/dummy_logo1.png"
            />
            <img
              className="w-32 m-5 hidden lg:block"
              alt="brand"
              src="/assets/images/dummy_logo2.png"
            />
            <img
              className="w-32 m-5 hidden lg:block lg:mr-0"
              alt="brand"
              src="/assets/images/dummy_logo3.png"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-indigo-900 min-h-screen pt-24 pb-8" id="blog">
        <div className="max-w-screen-xl lg:px-20 px-10 mx-auto mb-2">
          <div className="space-y-10 mb-8">
            <div className="relative">
              <img
                src="/assets/images/a.svg"
                alt="Dropcap"
                className="absolute -top-40 hidden w-48 lg:block"
              />
            </div>
            <Underlined
              tag="h4"
              className="text-white text-2xl font-poppins font-medium"
            >
              My Articles
            </Underlined>
            <h3 className="text-white text-4xl font-poppins font-bold leading-tight w-10/12">
              Sometimes I like to write about the things I enjoy doing in my
              spare time
            </h3>
          </div>
          <Blog />
        </div>
      </Section>
      <Section
        className="bg-indigo-900 pt-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(/assets/images/footer-bg.png)",
        }}
        id="contact"
      >
        <div className="lg:grid lg:grid-cols-12 lg:px-20 px-10">
          <div className="col-span-5">
            <div className="space-y-10 mb-8">
              <div className="relative">
                <img
                  src="/assets/images/c.svg"
                  alt="Dropcap"
                  className="absolute -top-40 hidden w-48 lg:block"
                />
              </div>
              <Underlined
                tag="h4"
                className="text-white text-2xl font-poppins font-medium"
              >
                Contact Me
              </Underlined>
              <h3 className="text-white text-4xl font-poppins font-bold leading-tight w-10/12">
                Have a project? Let's chat.
              </h3>
            </div>
            <h6 className="text-white text-xl font-poppins leading-normal font-bold">
              <span className="text-indigo-300">Email:</span> mail@domain.com
            </h6>
            <h6 className="text-white text-xl font-poppins leading-normal font-bold">
              <span className="text-indigo-300">Tel:</span> +44 (0) 123 456 7890
            </h6>
          </div>
          <div className="col-span-7 mt-8 lg:mt-0">
            <ContactForm />
          </div>
        </div>
        <Footer className="py-8" />
      </Section>
    </>
  )
}
