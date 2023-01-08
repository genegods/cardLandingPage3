import React from 'react'
import { CardData1 } from "../data/CardData";

const Card1 = () => {
  return (
    <React.Fragment>
    <section>
      <div>
        {
           CardData1.map((item, index) => {
            return(
              <div key={index}>
                <div className="w-2/3 mx-auto min-h-96 centered space-y-4 px-5 py-10 flex-col bg-white shadow-lg rounded-lg md:w-full">
                  <div className="text-5xl bg-blue-100 text-blue-700 rounded-full w-20 h-20 centered">
                  <span>{item.icon}</span>
                  </div>
                  <p className="text-3xl capitalize font-bold text-blue-700">
                    {item.title}
                  </p>
                  <p className="text-center">{item.body}</p>
                  <button
                    type="button"
                    className="px-6 py-3.5 text-white bg-blue-500 font-bold rounded-lg capitalize"
                  >
                    {item.btn}
                  </button>
                </div>
              </div>
            )
           })
        }
      </div>
    </section>
  </React.Fragment>
  )
}

export default Card1