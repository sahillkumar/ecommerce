import { Button, Grid, Slider, Tab, Tabs } from '@material-ui/core'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './filters.css'

const TabPanel = ({value,index,children})=>{
    return(
        <div className="tab-panel" hidden={value !== index }>
            {
                value === index && (
                    <h1>{children}</h1>
                )
            }
        </div>
    )
 }

const Filters = ({setFilter,filter}) => {

    const [value,setValue]=useState(0)
    const [hide,setHide] = useState(false)
    const [remove,setRemove] = useState(false)
    const categories = ['beauty essentials','eatables','handicrafts','mugs','clothing']
    const handleTabChange = (e,val)=>{
        setValue(val)
        setHide(true)
    }

    const addDel = (value)=>{
        let element = document.getElementById(value)
        element.classList.add('active')
        element.children[1].setAttribute("style", "display:visible;")
    }

    const removeDel = (value) =>{
        let element = document.getElementById(value)
        element.classList.remove('active')
        element.children[1].setAttribute("style", "display:none;")
    }

    const handleFilter = (key,value,method) => (e)=>{
        if(method === 'add'){
            addDel(value)
            setFilter({
                ...filter,
                [key]:value
            })
        }
        else if(method === 'remove'){
            removeDel(value)
            delete filter[key]
            setFilter({
                ...filter,
            })
    }
}
    
    return (
        <div className="filters">
                <Tabs onChange={handleTabChange} value={value} className="tabs" indicatorColor="primary">
                <Tab label="CATEGORIES" className="tab"/>
                    <Tab label="SORT BY" className="tab"/>
                    <Tab label="AVAILABILITY" className="tab"/>
                    <Tab label="PRICE" className="tab"/>
                    <Tab label="SIZE" className="tab"/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Grid container justify="center">
                    <Grid item  className="grid-item"  id="all" justify="center">
                        <Button variant="outlined" className="btn" onClick={handleFilter("category","all")}>
                            add
                        </Button>
                    </Grid>
                    {
                        categories && 
                        categories.map(category=>
                            <Grid item  key={category} className="grid-item"  id={category} justify="center">
                                <Button  className="btn" onClick={handleFilter("category",category,"add")}>
                                    {category}
                                </Button>
                                <span className="remove" style={{display:"none"}} onClick={handleFilter("category",category,"remove")}>&#10005;</span>
                                </Grid>
                           )
                    }
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <Grid container justify="center">
                    <Grid item> <Button variant="outlined" className="btn">High to low</Button></Grid>
                    <Grid item><Button variant="outlined" className="btn">low to high</Button></Grid>
                    <Grid item><Button variant="outlined" className="btn">Best Seller</Button></Grid>
              </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} >
                    <Button variant="outlined" className="btn" onClick={()=>{
                        setFilter({
                            ...filter,
                            ["available"]:true
                        })
                    }}>available</Button>
                    <Button variant="outlined" className="btn">outofStock</Button>
                </TabPanel>
                <TabPanel value={value} index={3}>
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
                <TabPanel value={value} index={4}>
                    <Button variant="outlined" className="btn">small</Button>
                    <Button variant="outlined" className="btn">medium</Button>
                    <Button variant="outlined" className="btn">large</Button>
                </TabPanel>
            </div>
    )
}

export default Filters
