import { useState } from 'react';


function StudentDetail({ onUpdateDetails }) {

    const [sname, setName] = useState("");
    const [sAge, setAge] = useState("");
    const [sCity, setCity] = useState("");

    const detailsStyle = {
        padding: "10px",
        margin: "10px",
        border: "2px solid #096B68",
        background: "#096B68",
        color: "#FFFBDE",
        borderRadius: "20px",
        width: "500px",
        boxShadow: "0 4px 8px rgba(41, 67, 69, 0.7)"
    }
    const inputStyle = {
        padding: "5px",
        margin: "5px",
        size: "20px",
        width: "270px",
        borderRadius: "10px",
        border: "2px solid white"
    }

    const btnStyle = {
        padding: "5px",
        margin: "5px",
        size: "20px",
        background: "#90D1CA",
        border: "2px solid #90D1CA",
        borderRadius: "5px"
    }

    function addDetails() {
        if(sname === '' || sAge === '' || sCity === ''){
            alert("Fill all Fields")
        }
        else{
            onUpdateDetails({ sname: sname, sAge: sAge, sCity: sCity });
            setAge("");
            setName("");
            setCity("");
        }
    }

    return (
        <div style={detailsStyle}>
            <h1>Add Student Details</h1>
            <input value={sname} onChange={(e) => setName(e.target.value)} style={inputStyle} type="text" placeholder="Enter Name" />
            <input value={sAge} onChange={(e) => setAge(e.target.value)} style={inputStyle} type="number" placeholder="Enter Age" />
            <input value={sCity} onChange={(e) => setCity(e.target.value)} style={inputStyle} type="text" placeholder="Enter City" /> <br />
            <button onClick={addDetails} style={btnStyle}>Add Student</button>
        </div>
    )
}

export default StudentDetail