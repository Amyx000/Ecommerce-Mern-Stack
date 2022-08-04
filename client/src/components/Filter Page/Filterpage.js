import React, { useState } from "react";
import Rowproduct from "../Rowproduct/Rowproduct";
import "./Filterpage.css";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons"
import {BiFilterAlt} from "react-icons/bi"
import {MdArrowForwardIos, MdArrowBackIos} from "react-icons/md"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Filterpage() {

    const[gender,Setgender]=useState("select-data-contain-hide")
    const[price,Setprice]=useState("select-data-contain-hide")
    const[brand,Setbrand]=useState("select-data-contain-hide")
    const[plusicon1, Setplusicon1]=useState(faPlus)
    const[plusicon2, Setplusicon2]=useState(faPlus)
    const[plusicon3, Setplusicon3]=useState(faPlus)
    const[nextarrow,Setnextarrow]=useState("pagenext-icon")
    const[backarrow,Setbackarrow]=useState("pageback-icon-hide")
    const[no1,Setno1]=useState("no-active")
    const[no2,Setno2]=useState("no")
    const[no3,Setno3]=useState("no")
    const[no4,Setno4]=useState("no")

    

    const pagination =(e)=>{
        let pagevalue = e.target.dataset.user;

        if(pagevalue==="1"){
            Setbackarrow("pageback-icon-hide")
            Setnextarrow("pagenext-icon")
            Setno1("no-active")
            Setno2("no")
            Setno3("no")
            Setno4("no")
        }
        
        else if (pagevalue==="2"){
            Setbackarrow("pageback-icon")
            Setnextarrow("pagenext-icon")
            Setno1("no")
            Setno2("no-active")
            Setno3("no")
            Setno4("no")
        }

        else if (pagevalue==="3"){
            Setbackarrow("pageback-icon")
            Setnextarrow("pagenext-icon")
            Setno1("no")
            Setno2("no")
            Setno3("no-active")
            Setno4("no") 
        }
        else {
            Setbackarrow("pageback-icon")
            Setnextarrow("pagenext-icon-hide")
            Setno1("no")
            Setno2("no")
            Setno3("no")
            Setno4("no-active")  
        }
       
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

  return (
    <>
      <div className="filter-main">
        <div className="filter-col">
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
                        <input type="checkbox"></input>Male
                    </div>
                    <div>
                        <input type="checkbox"></input>Female
                    </div>
                </div>
          </div>

          <div className="select-data">
                <div className="select-data-head">
                    <div>PRICE</div><div onClick={dropprice} className="add-icon"><FontAwesomeIcon icon={plusicon2}/></div>
                </div>
                <div className={price}>
                    <div>
                        <input type="checkbox"></input>0-10,000
                    </div>
                    <div>
                        <input type="checkbox"></input>10,000-20,000
                    </div>
                    <div>
                        <input type="checkbox"></input>20,000-50,000
                    </div>
                    <div>
                        <input type="checkbox"></input>Above 50,000
                    </div>
                </div>
          </div>

          <div className="select-data">
                <div className="select-data-head">
                    <div>BRAND</div><div onClick={dropbrand} className="add-icon"><FontAwesomeIcon icon={plusicon3}/></div>
                </div>
                <div className={brand}>
                    <div><input type="checkbox"></input>Armani Exchange</div>
                    <div><input type="checkbox"></input>Balmain</div>
                    <div><input type="checkbox"></input>Bering</div>
                    <div><input type="checkbox"></input>Calvin Klein</div>
                    <div><input type="checkbox"></input>Citizen</div>
                    <div><input type="checkbox"></input>Daniel Wellington</div>
                    <div><input type="checkbox"></input>Diesel</div>
                    <div><input type="checkbox"></input>Emporio Armani</div>                 
                    <div><input type="checkbox"></input>Ferrari</div>                   
                    <div><input type="checkbox"></input>Fossil</div>
                    <div><input type="checkbox"></input>Kenneth Cole</div>
                    <div><input type="checkbox"></input>Luminox</div>
                    <div><input type="checkbox"></input>Michael Kors</div>
                    <div><input type="checkbox"></input>Police</div>
                    <div><input type="checkbox"></input>Seiko</div>
                    <div><input type="checkbox"></input>SevenFriday</div>
                    <div><input type="checkbox"></input>Skagen</div>
                    <div><input type="checkbox"></input>Tag Heuer</div>
                    <div><input type="checkbox"></input>Tissot</div>
                    <div><input type="checkbox"></input>Titan</div>
                    <div><input type="checkbox"></input>Tommy Hilfiger</div>
                    <div><input type="checkbox"></input>Victorinox</div>
                    
                </div>
          </div>

        </div>
        <div className="product-col">
          <div className="filter-head">
            <div className="filter-heading">Watches</div>
            <div className="sortbar">
                <div>Sort By:</div>
                <div className="sort-dropmenu">
                    <select>
                    <option>Recommended</option>
                    <option>Price: low to high</option>
                    <option>Price: high to low</option>
                    </select>
                </div>
            </div>
          </div>
          <Rowproduct />
          <div className="page-next">
                <div><MdArrowBackIos className={backarrow}/></div>
                <div className={no1} data-user={"1"} onClick={pagination}>1</div>
                <div className={no2} data-user={"2"} onClick={pagination}>2</div>
                <div className={no3} data-user={"3"} onClick={pagination}>3</div>
                <div className={no4} data-user={"4"} onClick={pagination}>4</div>
                <div><MdArrowForwardIos className={nextarrow}/></div>
             
          </div>
        </div>
      </div>
    </>
  );
}

export default Filterpage;

