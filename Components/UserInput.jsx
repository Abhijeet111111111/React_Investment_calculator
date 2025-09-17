export default function UserInput({label,onInputChange,name,value}){
    return (
        <p>
            <label>
                {label}
            </label>
            <input required={true} value={value} name={name} onChange={onInputChange} type="number"/>
        </p>
    )
}