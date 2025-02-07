import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const BMI = () => {
    const [weight, setweight] = useState('');
    const [height, setheight] = useState('');
    const [bmi, setbmi] = useState(null);
    const [category, setcategory] = useState('')

    // calculate the bmi
    function calculateBMI(){
        if(weight && height){
            // toast.success("Submitted Successfully")
            const weightkg = parseFloat(weight) * 0.453592;
            const heightm = parseFloat(height) * 0.0254;
            const bmivalue = (weightkg/(heightm * heightm)).toFixed(2);
            setbmi(bmivalue);

            // category
            if(bmivalue < 18.5){
                setcategory("you are underweight");
            } 
            else if (bmivalue >= 18.5 && bmivalue < 24.9) {
                setcategory("You are Normal weight");
              } 
            else if (bmivalue >= 25 && bmivalue < 29.9) {
                setcategory("You are Overweight");
              } 
            else {
                setcategory("You are Obese");
              }
        } else{
            alert("Please enter valid weight and height")
        }
    };

    //reset the input fields
    function resetinputs(){
        setweight('');
        setheight('');
        setbmi(null);
        toast.success("Refresh Done")
    }

  return (
    <div className='h-screen w-full border-4 border-red-500 flex justify-center items-center bg-orange-400 p-2'>
        <div className='h-[540px] sm:h-120 w-100 border-4 border-red-500 rounded-3xl flex flex-col gap-[4%] items-center bg-purple-500'>
            <h1 className='text-3xl text-black-500'>BMI CLACULATOR</h1>
            <div className='h-18 w-[80%] rounded-2xl flex flex-col'>
                <h4 className='text-lg font-bold'>Weight(lbs)</h4>
                <input type="text" value={weight} className='h-[100%] border-2 border-black rounded-[10px] bg-white outline-0 text-2xl' onChange={(e)=>{setweight(e.target.value)}}/>
            </div>
            <div className='h-18 w-[80%] rounded-2xl flex flex-col'>
                <h4 className='text-lg font-bold'>Height(in)</h4>
                <input type="text" value={height} className='h-[100%] border-2 border-black rounded-[10px] outline-0 bg-white text-2xl' onChange={(e)=>setheight(e.target.value)}/>
            </div>
            <button className='text-lg font-bold h-11 w-[80%] border-3 border-black rounded-2xl bg-blue-500 text-white' onClick={calculateBMI}>
                Submit
            </button>
            <button className='text-lg font-bold h-11 w-[80%] border-3 border-black rounded-2xl bg-blue-500 text-white' onClick={resetinputs}>
                Reload
            </button>
            <p className='text-2xl'>Your BMI is : {bmi} </p>
            <p className='text-2xl font-bold'> {category} </p>
        </div>
    </div>
  )
}

export default BMI