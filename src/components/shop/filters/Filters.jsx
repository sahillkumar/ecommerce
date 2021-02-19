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
                    <Link to="/shop" className="tab">
                        <Tab label="CATEGORIES" className="tab"/>
                    </Link>
                        
        
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Button variant="outlined" className="btn">High to low</Button>
                    <Button variant="outlined" className="btn">low to high</Button>
                    <Button variant="outlined" className="btn">Best Seller</Button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Button variant="outlined" className="btn">available</Button>
                    <Button variant="outlined" className="btn">outofStock</Button>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={3} justify="center">
                        <Grid item>
                            min
                        </Grid>
                        <Grid item xs={3}>
                            <Slider aria-labelledby="continuous-slider" className="slider" />
                        </Grid>
                        <Grid item>
                            max
                        </Grid>
                </Grid>
     
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Button variant="outlined" className="btn">small</Button>
                    <Button variant="outlined" className="btn">medium</Button>
                    <Button variant="outlined" className="btn">large</Button>
                </TabPanel>
            </div>
    )
}

export default Filters
