import { useState } from "react";
import "./CaloriesCalculator.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { ImCross } from "react-icons/im";

let CaloriesCalculator = () => {
     let[details, setDetails] = useState({
      gender: "",
      age: "",
      weight: "",
      height: "",
      activity: "",
      calories: null

     })

     let handleChange = (e) =>{
      const {name, value} = e.target;
      setDetails((prev)=>{
        return { ...prev, [name]: value};
      })
            
     }
  
  
  
  let caloriesCalculate=(e)=>{
    e.preventDefault()
    const calories = resultcross()
    setDetails((prev) => ({ ...prev, calories }));
    console.log(details)
  }
  let resultcross=()=>{
      if(details.gender === 'Male'){
        let BMR = (10*details.weight)+(6.25*details.height)-(5*details.age)+5;
        let calories = '';
        if(details.activity === 'Sedentary (little or no exercise)'){
            calories = BMR * 1.2;
        }
        else if(details.activity === 'Lightly active (light exercise/sports 1-3 days/week)'){
          calories = BMR * 1.375
        }
        else if(details.activity === 'Moderately active (moderate exercise/sports 3-5 days/week)'){
          calories = BMR * 1.55
        }
        else if(details.activity === 'Very active (hard exercise/sports 6-7 days a week)'){
          calories = BMR * 1.725
        }
        else if(details.activity === 'Extra active (very hard exercise/sports & physical job or 2x training)'){
          calories = BMR * 1.9
        }
        return Math.round(calories);
        
      }
      else if(details.gender === 'Female'){
        let BMR = (10*details.weight)+(6.25*details.height)-(5*details.age)-161;
        let calories = '';
        if(details.activity === 'Sedentary (little or no exercise)'){
            calories = BMR * 1.2;
        }
        else if(details.activity === 'Lightly active (light exercise/sports 1-3 days/week)'){
          calories = BMR * 1.375
        }
        else if(details.activity === 'Moderately active (moderate exercise/sports 3-5 days/week)'){
          calories = BMR * 1.55
        }
        else if(details.activity === 'Very active (hard exercise/sports 6-7 days a week)'){
          calories = BMR * 1.725
        }
        else if(details.activity === 'Extra active (very hard exercise/sports & physical job or 2x training)'){
          calories = BMR * 1.9
        }
        return Math.round(calories);
      }
      else{
        toast.error("please select Gender ")
      }

  }

  return (
    <> 
    <div className="calro">
    <div className="form-head">
    <h2>Calories Calculator</h2>
      <div className="caltrac ">
        
      <form action="" method="get" className="form" onSubmit={caloriesCalculate} >
      <div className="form-example">
  <label htmlFor="exercise" className="label">
            Select your gender:
          </label>
          <select name="gender" onChange={handleChange}>
            <option value="">Choose</option>
            <option >Male</option>
            <option >Female</option>
            </select>
          </div>
  <div className="form-example">
    <label htmlFor="age">Enter your Age: </label>
    <input type="number" name="age"  min={0} required onChange={handleChange} className="agein" />
  </div>
  <div className="form-example">
    <label htmlFor="weight">Enter your Weight: </label>
    <input type="number" name="weight" placeholder="Enter Weight in kg" min={0} required onChange={handleChange} />
  </div>
  <div className="form-example">
    <label htmlFor="height">Enter your Height: </label>
    <input type="number" name="height" placeholder="Enter Height in cm" min={0} required  onChange={handleChange}/>
  </div>
  <div className="form-example">
  <label htmlFor="exercise" className="label">
            Activity:
          </label>
          <select name="activity" onChange={handleChange}>
          <option value="">Choose</option>
            <option >Sedentary (little or no exercise)</option>
            <option >Lightly active (light exercise/sports 1-3 days/week)</option>
            <option >Moderately active (moderate exercise/sports 3-5 days/week)</option>
            <option >Very active (hard exercise/sports 6-7 days a week)</option>
            <option >Extra active (very hard exercise/sports & physical job or 2x training)</option>
          </select>
          </div>
  <div className="form-example bttn">
    <input type="submit" value="Calculate"  />
  </div>
  <div className="paragraph">
            <p>
              If you're pregnant or breast-feeding, are a competitive athlete,
              or have a metabolic disease, such as diabetes, the calorie
              calculator may overestimate or underestimate your actual calorie
              needs.
            </p>
          </div>
</form>

          
      </div>
      <div className={`${details.calories!==null ? 'resultCal' : ''}`}>
         {details.calories !== null && (
          <>
              <p className="result">Your Maintainance Calories: {details.calories} approx & Calories for weight loss : {details.calories - 300} appprox &
              Calories for weight gain: {details.calories + 400} approx</p>
              
            
              
              </>
            )}
</div>
      </div>
      
      </div>  
    </>
  );
};

export default CaloriesCalculator;
