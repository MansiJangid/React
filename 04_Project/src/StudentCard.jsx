
function StudentCard(std){

    const cardStyle = {
        padding: "10px",
        margin: "10px",
        border: "2px solid #90D1CA",
        background: "#90D1CA",
        borderRadius: "20px",
        width:"500px", 
        boxShadow: "0 4px 8px rgba(41, 67, 69, 0.7)"
    }


    return(
        <div style={cardStyle}> 
            <h1>Student Name: {std.sname}</h1>
            <h2>Student Age: {std.sAge}</h2>
            <h2>Student City: {std.sCity}</h2>
        </div>
    )
}

export default StudentCard