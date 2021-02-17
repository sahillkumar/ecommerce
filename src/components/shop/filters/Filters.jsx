import { Button, Grid, Slider, Tab, Tabs } from '@material-ui/core'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './filters.css'

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

const Filters = () => {
    const [value,setValue]=useState(0)
    const [hide,setHide] = useState(false)
    const handleTabChange = (e,val)=>{
        setValue(val)
        setHide(true)
    }
   
    return (
        <div className="filters">
                <Tabs onChange={handleTabChange} value={value} className="tabs" indicatorColor="primary">
                    <Tab label="SORT BY" className="tab"/>
                    <Tab label="AVAILABILITY" className="tab"/>
                    <Tab label="PRICE" className="tab"/>
                    <Tab label="SIZE" className="tab"/>
                    <Link to="/shop">
                        <Tab label="CATEGORIES" className="tab"/>
                    </Link>
                        
        
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Button variant="outlined">High to low</Button>
                    <Button variant="outlined">low to high</Button>
                    <Button variant="outlined">Best Seller</Button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <Button variant="outlined">avalable</Button>
                    <Button variant="outlined">outofStock</Button>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid item xs={3}>
                    <Slider aria-labelledby="continuous-slider" />

                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>Filter 4</TabPanel>
            </div>
    )
}

export default Filters
