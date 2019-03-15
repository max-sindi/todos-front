import React from 'react'
import { Loader } from 'components/partials'

const FetchChecker = ({ isFetching, DataItemRender, data }) => {
  if(isFetching) {
    return <Loader />
  } else if(!data) {
    return <span>Something went wrong</span>
  } else if(data.length === 0) {
    return <span>Has no data</span>
  } else {
    return (
      <>
        {data.map((item, index) =>
          <DataItemRender key={item.id} {...item} index={index} />)
        }
      </>
    )
  }
}

export default FetchChecker
