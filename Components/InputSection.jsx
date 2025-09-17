import UserInput from "./UserInput.jsx";
export default function InputSection({userInput,handleInputChange}){
    return (
        <div id="user-input">
            <div className="input-group">
                <UserInput value={userInput.initialInvestment} onInputChange={handleInputChange} label="Initial Investment" name="initialInvestment"/>
                <UserInput value={userInput.annualInvestment} onInputChange={handleInputChange} label="Annual Investment" name="annualInvestment"/>
            </div>
            <div className="input-group">
                <UserInput value={userInput.expectedReturn} onInputChange={handleInputChange} label="Expected Return" name="expectedReturn"/>
                <UserInput value={userInput.duration} onInputChange={handleInputChange} label="Duration" name="duration"/>
            </div>
        </div>
    )
}