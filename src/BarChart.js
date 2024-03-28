import axios from 'axios'
import { useState,useEffect} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const BarChart = () => {
  const [populationData,setPopulationData]=useState({
    datasets: []
  });
  useEffect(()=>{
    axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((res)=>{
    
      if (res.data.data.length >0){
        const populationData = res.data.data.map((indData) => ({
          year: indData.Year,
          population: { value: indData.Population } // Convert population to an object with a value property
        }));
        setPopulationData({
          labels:res.data.data.map((indData)=>indData.Year),
          datasets:[{
            label: "Population of United States",
            data: populationData.map((indData) =>indData.population.value),
            backgroundColor: "#9BD0F5",
            borderColor: '#FF6384',
              borderWidth: 1,
            
            
              
          

        }]
        })

      }
      
      else{
        console.log("No Data")
      }
      
    })
  })
  const chartOptions = {
  
    stroke: {
      curve: 'smooth',
    },
    scales: {
      x: {
        reverse: true // Reverse the x-axis
      },
      // Other scale configurations for y-axis, if needed
    }
  };

  return (
    <div>
      <Line data={populationData} options={chartOptions}/>
      
    </div>
  )
}
export default BarChart;