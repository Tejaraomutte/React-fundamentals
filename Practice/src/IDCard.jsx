function IDCard(proof){

    return(
        <div className="container">
            <img src="resume.jpg"></img>
            <p className="Name">{proof.Name}</p>
            <p className="Course">Course:{proof.Course}</p>
            <p className="RollNo">Roll No:{proof.RollNo}</p>
            <p className="BloodGroup">BLood Group:{proof.BloodGroup}</p>
            <p className="DOB">D.O.B:{proof.DOB}</p>
        </div>
    )
}
export default IDCard;