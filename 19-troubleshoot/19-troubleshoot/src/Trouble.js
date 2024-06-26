import React, {useState} from 'react'

export default function Trouble() {

    const [faults, setFaults] = useState(
        [
            {
            'id': 101,
            'email': 'jan@abc.com',
            'name': 'Jan Cook',
            'trouble_type': 'equipment-fault',
            'description':'Lift is not working',
            'tags':['urgent', 'electricial']
            }
        ]
    );
    const [newFaultEmail, setNewFaultEmail] = useState("");
    const [newFaultName, setNewFaultName] = useState("");
    const [newTroubleType, setNewTroubleType] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newTags, setTags] = useState([]);

    const faultsContainer = [];

    function displayFaults() {
        let faultList = [];
        for (let f of faults) {
        faultList.push(<div>
            <h5>{f.name}</h5>
            <h6>Reported by: <span>{f.name} ({f.email})</span></h6>
            <h6>Trouble: <span>{f.trouble_type}</span></h6>
            <h6>Tags:<span>{f.tags.join(', ')}</span></h6>
            <p>
                {f.description}
            </p>
        </div>)
        }
        return faultList
    }

    function updateEmail (e) {
        setNewFaultEmail(e.target.value);
    }
  
    function updateCheckbox (e) {
      if (newTags.includes(e.target.value)) {
        const filter = newTags.filter(t => t != e.target.value)
        setTags(filter);
      } else {
        const modified = [...newTags, e.target.value];
        setTags(modified)
      }
    }

    function addFault () {
        let randomID = Math.random() * 10000 + 99999;

        let newFault = {
        id: randomID,
        email: newFaultEmail,
        name: newFaultName,
        trouble_type: newTroubleType,
        description: newDescription,
        tags: newTags
        }

        // make a clone
        let clone = faults;

        // push into the clone
        clone.push(newFault);

        // overwrite the state
        setFaults(clone);
    }

    const updateFault = (e) => {
      setNewTroubleType(e.target.value);
    }

    return (
    <React.Fragment>
      <div class="container">
        <div class="col">
            {displayFaults()}
        </div>

        <div class="col">

          <h3>Add Fault</h3>
          <div>
            <label>Email:</label>
            <input type="text" name="email" onChange={(event)=> setNewFaultEmail(event.target.value)} value={newFaultEmail}/>
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="email" value={newFaultName} onChange={(event)=> setNewFaultName(event.target.value)}/>
          </div>
            <div>
            <label>Description</label>
            <input type="text" name="description" value={newDescription} onChange={(event)=>setNewDescription(event.target.value)}/>
          </div>
          <div>
            <label>Trouble Type</label>

            <input type="radio" name="trouble_type" value="equipment-fault" onChange={updateFault} checked={newTroubleType === "equipment-fault"}/><label>Equipment Fault</label>

             <input type="radio" name="trouble_type" value="building-defect" onChange={updateFault} checked={newTroubleType === "building-defect"}/><label>Building Defect</label>

            <input type="radio" name="trouble_type" value="other-complaints" onChange={updateFault} checked={newTroubleType === "other-complaints"}/><label>Others</label>
          
          </div>
          <div>
            <label>Tags</label>
            <input type="checkbox" name="tags" value="urgent" onChange={updateCheckbox} checked={newTags.includes("urgent")}/><label>Urgent</label>
            <input type="checkbox" name="tags" value="dangerous" onChange={updateCheckbox} checked={newTags.includes("dangerous")}/><label>Dangerous</label>
            <input type="checkbox" name="tags" value="public-areas" onChange={updateCheckbox} checked={newTags.includes("public-areas")}/><label>Public Areas</label>
            <input type="checkbox" name="tags" value="electrical" onChange={updateCheckbox} checked={newTags.includes("electrical")}/><label>Electrical</label>
          </div>
          <button onClick={addFault}>Add Fault</button>
        </div>
      </div>
    </React.Fragment>
    )
}