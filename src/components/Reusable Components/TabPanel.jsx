import React from 'react'

const TabPanel = ({value,index,children}) => {
     return (
          <div className="tab-panel" hidden={value !== index }>
               {
               value === index && (
                    <h1>{children}</h1>
               )
               }
          </div>
     )
}

export default TabPanel
