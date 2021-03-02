import { Button, Grid, Slider, Tab, Tabs } from '@material-ui/core'
import React,{useState} from 'react'
import sort from 'fast-sort'
import { Link } from 'react-router-dom'
import { byNumber, byValue } from 'sort-es'
import useFirestore from '../../../firebase/useFirestore'
import { AllProducts, getAllSortedProducts, getProducts, getProductsByCategory, sortProductsByCategory } from '../shopHelper/shopHelper'
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

const Filters = ({setProds,allproducts,currentProds}) => {

    const [value,setValue]=useState(0)
    const [category,setCategory] = useState(null)

    const categories = ['beauty essentials','eatables','handicrafts','mugs','clothing']
    const handleTabChange = (e,val)=>{
        setValue(val)
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
            setCategory(value)
            getProdsByCat(value)
        }
        else if(method === 'remove'){
            removeDel(value)
            setCategory(null)
            setProds(allproducts)
        }
    }

    const handleSort = (field, direction,method,id) => (e)=>{
        if(method === 'add'){
            addDel(id)
            sortProducts(field,direction)
        }else{
            removeDel(id)
            sortProducts('name','asc')
        }
    }

    const getProdsByCat = async (filter) =>{
        if(filter == 'all')
            setProds(allproducts)
        else{
            const products = await getProductsByCategory(filter)
            setProds(products)
        }   
    }

    const sortProducts = async (field,direction) =>{
        
        if(currentProds.length < allproducts.length && category){
            const products = await sortProductsByCategory(category,field,direction)
            setProds(products)
        }else{
           const products = await getAllSortedProducts(field,direction)
           setProds(products)
        }
        
    }

    
    return (
        <div className="filters">

                <Tabs onChange={handleTabChange} value={value} className="tabs" indicatorColor="primary" centered>
                    <Tab label="CATEGORIES" className="tab"/>
                    <Tab label="SORT BY" className="tab"/>
                    <Tab label="PRICE RANGE" className="tab"/>
                </Tabs>

                <TabPanel value={value} index={0}>
                    <Grid container justify="center">
                        <Grid item  className="grid-item" justify="center" id="all" >
                            <Button  className="btn" onClick={handleFilter("category","all","add")}>
                                all
                            </Button>
                            <span className="remove" style={{display:"none"}} onClick={handleFilter("category","all","remove")}>&#10005;</span>
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
                        <Grid item id="sort-lth"  className="grid-item" justify="center"> 
                            <Button className="btn" onClick={handleSort('discountMrp','asc','add',"sort-lth")}>
                                price : low to high
                            </Button>
                            <span className="remove" style={{display:"none"}} onClick={handleSort("discountMrp","asc","remove","sort-lth")}>&#10005;
                            </span>
                        </Grid>
                        <Grid item id="sort-htl"  className="grid-item" justify="center">
                            <Button className="btn" onClick={handleSort('discountMrp','desc','add',"sort-htl")}>
                                price : high to low
                            </Button>
                            <span className="remove" style={{display:"none"}} onClick={handleSort("discountMrp","desc","remove","sort-htl")}>&#10005;
                            </span>
                        </Grid>
                        <Grid item id="sort-discount"  className="grid-item" justify="center">
                            <Button className="btn" onClick={handleSort('discountPercentage','desc','add','sort-discount')}>
                                discount
                            </Button>
                            <span className="remove" style={{display:"none"}} onClick={handleSort("discountPercentage","desc","remove","sort-discount")}>&#10005;
                            </span>
                        </Grid>
                        <Grid item id="sort-rating"  className="grid-item" justify="center">
                            <Button className="btn" onClick={handleSort('rating','desc','add','sort-rating')}> 
                                customer ratings
                            </Button>
                            <span className="remove" style={{display:"none"}} onClick={handleSort("rating","desc","remove","sort-rating")}>&#10005;
                            </span>
                        </Grid>
                    </Grid>
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
            </div>
    )
}

export default Filters
