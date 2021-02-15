import { Grid, MenuItem, Select,Tabs,Tab } from '@material-ui/core'
import React, { Children, useState } from 'react'
import './search.css'

const Search = () => {

    const [value,setValue]=useState(0)
    const [hide,setHide] = useState(false)
    const handleTabChange = (e,val)=>{
        setValue(val)
        setHide(true)
    }
    const TabPanel = ({value,index,children})=>{
        return(
            <div className="tab-panel" hidden={value != index }>
                {
                    value === index && (
                        <h1>{children}</h1>
                    )
                }
            </div>
        )
        
    }

    return (
        <div className="search">
            <div >
                <input 
                    type="text" 
                    className="search-bar"
                    placeholder="Search For Products..."
                />
            </div>
            <div className="filters">
                <Tabs onChange={handleTabChange} value={value} className="tabs" indicatorColor="primary">
                    <Tab label="item1" className="tab"/>
                    <Tab label="item2" className="tab"/>
                    <Tab label="item3" className="tab"/>
                    <Tab label="item4" className="tab"/>
                    <Tab label="item5" className="tab"/>
                    <Tab label="item6" className="tab"/>
                    <Tab label="item7" className="tab"/>
                </Tabs>
                <TabPanel value={value} index={0}>Filter 1</TabPanel>
                <TabPanel value={value} index={1}>Filter 2</TabPanel>
                <TabPanel value={value} index={2}>Filter 3</TabPanel>
                <TabPanel value={value} index={3}>Filter 3</TabPanel>
                <TabPanel value={value} index={4}>Filter 3</TabPanel>
                <TabPanel value={value} index={5}>Filter 3</TabPanel>
                <TabPanel value={value} index={6}>Filter 3</TabPanel>
            </div>
        </div>
    )
}




export default Search
