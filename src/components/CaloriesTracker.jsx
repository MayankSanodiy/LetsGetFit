import React, { useEffect, useState } from 'react';
import { Data } from './Data';
import './CaloriesTracker.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const CaloriesTracker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedData, setAddedData] = useState(() => {
    const storedData = localStorage.getItem('Table');
    return storedData ? JSON.parse(storedData) : [];
  });;
  
  

  useEffect(()=>{
   window.localStorage.setItem("Table", JSON.stringify(addedData))
  }, [addedData])

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddButtonClick = () => {
    
    const originalObject = Data.find(obj => obj.name.toLowerCase() === searchQuery.toLowerCase());
      
    if (originalObject) {
      
      setAddedData([...addedData, originalObject]);
    }
    else{
      toast.error("Sorry!!! You Food Not Found")
    }
    setSearchQuery('')
  };

  const resetData = () => {
    window.localStorage.clear();
    setAddedData([])
  }
 
  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fats = 0;

  addedData.forEach((item)=> {
    calories += Number(item.Calories);
    protein += Number(item.Protein);
    carbs += Number(item.Carbs);
    fats += Number(item.Fats);
  });

  return (
    <div className='main'>
    <div className='div-1'>
         <h2>Calories Tracker</h2>
         </div>
         <p className='pp'>*Calories are not accurate it depend on quantity and ingredients. So Please Eat less & Live More*</p>
         <div className='caloriestracker'>
         <input type="text"  className="input" placeholder="Search..." value={searchQuery} onChange={handleSearchInputChange}/>
      
      
      <button onClick={handleAddButtonClick} type="button" class="btn btn-success btn-sm gap">Add</button>
      </div>
        <br />
        <div className=''>
      {addedData.length > 0 && (
        <table className='center'>
          <thead>
            <tr>
              <th>Name</th>
              <th >Serving</th>
              <th>Calories</th>
              <th>Protein(in gram)</th>
              <th>Carbs(in gram)</th>
              <th>Fats(in gram)</th>
            </tr>
          </thead>
          <tbody>
            {addedData.map((obj,i) => (
              <tr key={i}>
                <td>{obj.name}</td>
                <td>{obj.Serving}</td>
                <td>{obj.Calories}</td>
                <td>{obj.Protein}</td>
                <td>{obj.Carbs}</td>
                <td>{obj.Fats}</td>
                
              </tr>
            ))}
            
          </tbody>
        </table>
       )}
    </div>
    {addedData.length > 0 && (
        <div>
          <p className='result'>{`You Intake : ${calories} calories, ${protein} grams of protein, ${carbs} grams of carbs, and ${fats} grams of fat.`}</p>
        </div>
      )}
      <button type="button" class="btn btn-danger btn-sm" onClick={resetData}>Reset</button>
    </div>
   
  );
};

export default CaloriesTracker ;
