import React, { useEffect, useState } from "react";
import Rowproduct from "../Rowproduct/Rowproduct";
import "./Filterpage.css";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons"
import {BiFilterAlt} from "react-icons/bi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom"
import {useSelector} from "react-redux"
import useQueryState from "../../Customhooks/useQueryState"
import Slider from "@mui/material/Slider"
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange} from "@mui/material/colors";
import axios from "axios";

function Filterpage() {
    const [searchParams] = useSearchParams()
    const navigate=useNavigate()
    const location=useLocation()
    const productlength =useSelector(state=>state.product.productlength)
    const [totalprod,Settotalprod]=useState("")
    const[gender,Setgender]=useState("select-data-contain-hide")
    const[price,Setprice]=useState("select-data-contain-hide")
    const[brand,Setbrand]=useState("select-data-contain-hide")
    const[plusicon1, Setplusicon1]=useState(faPlus)
    const[plusicon2, Setplusicon2]=useState(faPlus)
    const[plusicon3, Setplusicon3]=useState(faPlus)
    const [filgen,Setfilgen]=useState([])
    const [filbrand,Setfilbrand]=useState([])
    /* eslint-disable */
    const [brandquery, setBrandquery] = useQueryState("brand")
    const [genderquery, setGenderquery] = useQueryState("gender")
    const [pricequery, setPricequery] = useQueryState("price")
    const [sortquery, setSortquery] = useQueryState("sort")
    const[pagequery, setpagequery]=useQueryState("page")
    /* eslint-disable */
    const[clrfill,setClrfill]=useState("clrfilter-main-none")
    const [slidevalue, setSlidevalue] = useState([0, 1000000]);
    const[filprice,Setfilprice]=useState([searchParams.get("price")])
    const[filtercol,Setfiltercol]=useState("filter-col")


    useEffect(() => {
        async function product(){

              try {
                  const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products${location.search}`)
                  if(res.data.totalprod>=5){Settotalprod(Math.ceil(res.data.totalprod/5))}
                  else{Settotalprod(1)}
               
                } catch (error) {
                    console.log(error)     
                }
        }
        product();
    }, [location.search])
    const theme = createTheme({
        palette: {
          primary: {
            main:orange["A200"]
          },
          secondary: {
            main:orange[200]
          }
        }
      });

    const handleChange = (event, newValue) => {
      setSlidevalue(newValue);
      if(newValue[0]===0&&newValue[1]===1000000){Setfilprice([])}
      else{
        Setfilprice([`${slidevalue[0]}-${slidevalue[1]}`])
      }
    };
  
    function valuetext(slidevalue) {
      return `${slidevalue}`;
    }
  
    const dropgender = ()=>{

        let gen = gender;
        if(gen==="select-data-contain-hide"){
            Setgender("select-data-contain")
            Setplusicon1(faMinus)
        }else{
            Setgender("select-data-contain-hide")
            Setplusicon1(faPlus)
        }
        
    }

    const dropprice = ()=>{

        let pri = price;
        if(pri==="select-data-contain-hide"){
            Setprice("select-data-contain")
            Setplusicon2(faMinus)
        }else{
            Setprice("select-data-contain-hide")
            Setplusicon2(faPlus) 
        }
        
    }

    const dropbrand = ()=>{

        let brnd = brand;
        if(brnd==="select-data-contain-hide"){
            Setbrand("select-data-contain")
            Setplusicon3(faMinus)
        }else{
            Setbrand("select-data-contain-hide")
            Setplusicon3(faPlus) 
        }
        
    }
   
    useEffect(() => {
        setBrandquery(filbrand?.join(",")||null)
      // eslint-disable-next-line
    }, [filbrand])

    useEffect(() => {
        setGenderquery(filgen?.join(",")||null)
      // eslint-disable-next-line
    }, [filgen])

    useEffect(() => {
      setPricequery(filprice.length!==0?filprice[0]:null)
      // eslint-disable-next-line
    }, [filprice])

    useEffect(() => {
        
        location?.search?setClrfill("clrfilter-main"):setClrfill("clrfilter-main-none")
      
    }, [location])
    

    const filterfunc = (e)=>{
        const check = e.target.checked
        const {name, value}= e.target
        if(check===true){
            if(name==="gender"){
                Setfilgen((pre)=>[...pre,value])
            }
            else{
                Setfilbrand((pre)=>[...pre,value])
            }
        }
        else{
            if(name==="gender"){
                Setfilgen(filgen.filter((v)=>(v!==value)))
            }
            else{Setfilbrand(filbrand.filter((v)=>(v!==value)))}
        }

    }

    const sortFunc=(e)=>{
        setSortquery(e.target.value)

    }
    const clearFilter=()=>{
        navigate("")
    }

  return (
    <>
      <div className="filter-main">
        <div className={filtercol}>
          <div className="filter-heading1">
            <div>FILTER:</div>
            <BiFilterAlt className="filter-icon"/>
          </div>

          <div className="select-data">
                <div className="select-data-head">
                    <div>GENDER</div><div onClick={dropgender} className="add-icon"><FontAwesomeIcon icon={plusicon1}/></div>
                </div>
                <div className={gender}>
                    <div>
                        <input onChange={filterfunc} name="gender" value="Male" type="checkbox"></input>Male
                    </div>
                    <div>
                        <input onChange={filterfunc} name="gender" value="Female" type="checkbox"></input>Female
                    </div>
                </div>
          </div>

          <div className="select-data">
                <div className="select-data-head">
                    <div>PRICE</div><div onClick={dropprice} className="add-icon"><FontAwesomeIcon icon={plusicon2}/></div>
                </div>
                <div className={price}>
                    <ThemeProvider theme={theme}>
                        <Box sx={{ width: "89%" }}>
                            <Slider
                            step={1000}
                            min={0}
                            max={1000000}
                            value={slidevalue}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            size="small"
                            color="secondary"
                            />
                        </Box>
                    </ThemeProvider>
                </div>
                
          </div>

          <div className="select-data">
                <div className="select-data-head">
                    <div>BRAND</div><div onClick={dropbrand} className="add-icon"><FontAwesomeIcon icon={plusicon3}/></div>
                </div>
                <div className={brand}>
                    <div><input onChange={filterfunc} name="brand" value="Armani Exchange" type="checkbox"></input>Armani Exchange</div>
                    <div><input onChange={filterfunc} name="brand" value="Balmain" type="checkbox"></input>Balmain</div>
                    <div><input onChange={filterfunc} name="brand" value="Bering" type="checkbox"></input>Bering</div>
                    <div><input onChange={filterfunc} name="brand" value="Calvin Klein" type="checkbox"></input>Calvin Klein</div>
                    <div><input onChange={filterfunc} name="brand" value="Citizen" type="checkbox"></input>Citizen</div>
                    <div><input onChange={filterfunc} name="brand" value="Daniel Wellington" type="checkbox"></input>Daniel Wellington</div>
                    <div><input onChange={filterfunc} name="brand" value="Diesel" type="checkbox"></input>Diesel</div>
                    <div><input onChange={filterfunc} name="brand" value="Emporio Armani" type="checkbox"></input>Emporio Armani</div>                 
                    <div><input onChange={filterfunc} name="brand" value="Ferrari" type="checkbox"></input>Ferrari</div>                   
                    <div><input onChange={filterfunc} name="brand" value="Fossil" type="checkbox"></input>Fossil</div>
                    <div><input onChange={filterfunc} name="brand" value="Kenneth Cole" type="checkbox"></input>Kenneth Cole</div>
                    <div><input onChange={filterfunc} name="brand" value="Luminox" type="checkbox"></input>Luminox</div>
                    <div><input onChange={filterfunc} name="brand" value="Michael Kors" type="checkbox"></input>Michael Kors</div>
                    <div><input onChange={filterfunc} name="brand" value="Police" type="checkbox"></input>Police</div>
                    <div><input onChange={filterfunc} name="brand" value="Seiko" type="checkbox"></input>Seiko</div>
                    <div><input onChange={filterfunc} name="brand" value="SevenFriday" type="checkbox"></input>SevenFriday</div>
                    <div><input onChange={filterfunc} name="brand" value="Skagen" type="checkbox"></input>Skagen</div>
                    <div><input onChange={filterfunc} name="brand" value="Tag Heuer" type="checkbox"></input>Tag Heuer</div>
                    <div><input onChange={filterfunc} name="brand" value="Tissot" type="checkbox"></input>Tissot</div>
                    <div><input onChange={filterfunc} name="brand" value="Titan" type="checkbox"></input>Titan</div>
                    <div><input onChange={filterfunc} name="brand" value="Tommy Hilfiger" type="checkbox"></input>Tommy Hilfiger</div>
                    <div><input onChange={filterfunc} name="brand" value="Victorinox" type="checkbox"></input>Victorinox</div>
                    
                </div>
          </div>
          <div className={clrfill}><button className="clrfilter" onClick={clearFilter}>Clear Filter</button></div>
          <div className="closefilterbtn"><button className="clrfilter" onClick={()=>Setfiltercol("filter-col")}>Close</button></div>

        </div>
        <div className="product-col">
          <div className="filter-head">
            <div className="filter-heading">Watches</div>
            <div className="filter-btn" onClick={()=>Setfiltercol("filter-col-mob")}>Filter</div>
            <div className="sortbar">
                <div>Sort By:</div>
                <div className="sort-dropmenu">
                    <select onChange={sortFunc}>
                    <option value="rec">Recommended</option>
                    <option value="asc">Price: low to high</option>
                    <option value="desc">Price: high to low</option>
                    </select>
                </div>
            </div>
          </div>
          <Rowproduct/>
          {productlength===0?
          null:
         <div className="pagination">
            <ThemeProvider theme={theme}>
                <Stack spacing={2}>
                    <Pagination count={totalprod} onChange={(event,page)=>{setpagequery(page)}} variant="outlined" shape="rounded" color="primary" />
                </Stack>
            </ThemeProvider>
         </div>}
        </div>
      </div>
    </>
  );
}

export default Filterpage;

