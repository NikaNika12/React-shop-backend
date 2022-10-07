import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CreateMedium = ({create}) => {
    const [value, setValue] = useState('')
    
    const addMedium = () => {
        createSubject({name: value}).then(data => {
            setValue('')
        })

    return (
        <form>
            <div>Add medium</div>
            <MyInput
                value={value}
                onChange={event => setValue(e.target.value)}
                type="text"
                placeholder="Enter medium"
            />
            <MyButton onClick={addSubject}>Add</MyButton>
        </form>
    );
};

export default CreateMedium;
