import { useState } from "react";
import './BMICalculator.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

let BMICalculator = () => {
    let[details, setDetails] = useState({
     weight: "",
     height: "",
     BMI: null

    })

    let handleChange = (e) =>{
     const {name, value} = e.target;
     setDetails((prev)=>{
       return { ...prev, [name]: value};
     })
           
    }
    let BMICalculate=(e)=>{
        e.preventDefault()
        const BMI = resultcross()
        console.log(BMI)
        setDetails((prev) => ({ ...prev, BMI }));
        console.log(details)
      }
      let resultcross=()=>{
          let heightinmeter = details.height / 100;
          let sqaureofheight = heightinmeter * heightinmeter
          let BMI = details.weight / sqaureofheight;
          return Math.round(BMI);
      }
      if(details.BMI>45){
        toast.error("Enter Valid Height&Weight")
        details.BMI=null;
        
      }
      return(
        <>
        <div className="form-head">
    <h2>BMI Calculator</h2>
      <div className="caltrac ">
        
      <form action="" method="get" className="form" onSubmit={BMICalculate} >
    <div className="form-example">
    <label htmlFor="weight">Enter your Weight: </label>
    <input type="number" name="weight" placeholder="Enter Weight in kg" min={0} required onChange={handleChange} />
  </div>
  <div className="form-example">
    <label htmlFor="height">Enter your Height: </label>
    <input type="number" name="height" placeholder="Enter Height in cm" min={0} required  onChange={handleChange}/>
  </div>
  <div className="form-example bttn">
    <input type="submit" value="Calculate"  />
  </div>
  </form>
  </div>
  <div className={`${details.BMI!==null ? 'resultCal' : ''}`}>
  {details.BMI !== null && (
              <p className="result"> Your BMI -{details.BMI} kg-m2 approx, You can Compare your BMI below</p>
              
  )}
  
              
              
            
</div> 
<div className="table">
<table className="table">
  <thead>
    <tr>
      <th scope="col">Classification</th>
      <th scope="col">BMI range - kg/m2</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Severe Thinness</td>
      <td>less than 16</td>
      
    </tr>
    <tr>
     
      <td>Moderate Thinness	</td>
      <td>16 - 17</td>
      
    </tr>
    <tr>
      
      <td>Mild Thinness</td>
      <td>17 - 18.5</td>
    </tr>
    <tr>
      
      <td>Normals</td>
      <td>18.5 - 25</td>
    </tr>
    <tr>
      
      <td>Overweight</td>
      <td>25 - 30</td>
    </tr>
    <tr>
      
      <td>Obese Class I</td>
      <td>30 - 35</td>
    </tr>
    <tr>
      
      <td>Obese Class II</td>
      <td>35 - 40</td>
    </tr>
    <tr>
      <td>Obese Class III</td>
      <td>more than 40</td>
    </tr>
  </tbody>
</table>

</div>
  </div>
  
  </>
      )
    }
    export default BMICalculator;