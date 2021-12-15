import React, { useState, useEffect } from "react"
import quotes from "../quotes"
const Quotes = () => {
  const [activeOne, setActiveOne] = useState(0)
  useEffect(() => {
    const lastquote = quotes.length - 1
    if (activeOne < 0) {
      setActiveOne(lastquote)
    }
    if (activeOne > lastquote) {
      setActiveOne(0)
    }
  }, [activeOne])
  return (
    <div className="relative overflow-hidden flex text-center h-96 lg:h-3/5 lg:w-11/12 mx-auto lg:ml-0">
      {quotes.map(({ id, name, img, job, quote }, index) => {
        // 1. default quote position: next quote
        let pos = "opacity-0 translate-x-full"
        if (index === activeOne) {
          // 2. active quote
          pos = "translate-x-0 opacity-100"
        }
        if (
          index === activeOne - 1 ||
          (activeOne === 0 && activeOne === quotes.length - 1)
        ) {
          // 3. last quote
          pos = "opacity-0 -translate-x-full"
        }
        return (
          <article
            className={`absolute top-0 left-0 transition-all transform ${pos}`}
            key={id}
          >
            <div className="flex">
              <div className="w-2/6 lg:w-1/6">
                <img
                  src="/assets/images/quote.svg"
                  alt="quotes"
                />
              </div>
              <div className="ml-8 mt-3">
                <div className="mb-5">
                  <p className="text-white text-left text-xl font-quicksand leading-normal">
                    {quote}
                  </p>
                </div>
                <div className="flex content-start items-center pt-1">
                  <div className="h-20 w-20">
                    <img src={img} alt={name} className="object-cover" />
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-white font-poppins font-medium text-lg lg:text-xl">
                      {name}
                    </p>
                    <p className="text-white font-poppins text-sm lg:text-base">
                      {job}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )
      })}
      <div className="absolute flex bottom-0 lg:bottom-20 right-0">
        <img
          src="/assets/images/prev.svg"
          className="cursor-pointer"
          alt="prev"
          onClick={() => {
            setActiveOne(activeOne - 1)
          }}
        />
        <img
          src="/assets/images/next.svg"
          className="cursor-pointer"
          alt="next"
          onClick={() => {
            setActiveOne(activeOne + 1)
          }}
        />
      </div>
    </div>
  )
}
export default Quotes
