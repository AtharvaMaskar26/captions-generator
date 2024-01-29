import React from 'react'

const FilePage = ({params}) => {
    const fileName = params.fileName;


  return (
    <div>
        {fileName}
    </div>
  )
}

export default FilePage