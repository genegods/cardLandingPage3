import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const AllCards = () => {
  return (
    <React.Fragment>
    <section>
      <div className="space-y-5 mt-10 md:grid md:grid-cols-2 md:grid-row-7 md:gap-x-5 md:px-10">
        <div className="md:mt-5 md:row-span-3"><Card1/></div>
        <div className="md:row-span-4"><Card2/></div>
        <div className="md:row-span-4"><Card3/></div>
        <div className="md:row-span-3"><Card4/></div>

        
     
      </div>
    </section>
  </React.Fragment>
  )
}

export default AllCards