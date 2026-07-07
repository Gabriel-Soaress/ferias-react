
function CompInputT1({avisarPai}) {


    return (
        <div>
            <input
            type="text"
            onChange={(event) => avisarPai(event.target.value)}/>
        </div>
    )
}export default CompInputT1;