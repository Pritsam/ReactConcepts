import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props)=>{

    const dataPointValues=props.dataPoint.map((datapoint)=>datapoint.value)
    const totalMaximum=Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoint.map(datapoint => <ChartBar
            key={datapoint.label} 
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label}/>)}
        </div>
    )
}

export default Chart