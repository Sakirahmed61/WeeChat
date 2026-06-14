const GenderCheckBox = ({onCheckboxChange , selectedGender}) => {
  return (
    <div className="flex mt-3 gap-3">
      <div className="form-control">
        <label className= {`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
          <span className="label-text">Male</span>
          <input 
            type="checkbox" 
            className="checkbox border-orange-300 text-orange-300 bg-transparent" 
            checked = {selectedGender === 'male'}
            onChange = {() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className= {`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
          <span className="label-text">Female</span>
          <input 
            type="checkbox" 
            className="checkbox border-orange-300 text-orange-300 bg-transparent" 
            checked = {selectedGender === 'female'}
            onChange = {() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox