import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CreateSubject = ({create}) => {
    const [value, setValue] = useState('')
    
    const addSubject = () => {
        createSubject({name: value}).then(data => {
            setValue('')
        })

    return (
        <form>
            <div>Add subject</div>
            <MyInput
                value={value}
                onChange={event => setValue(e.target.value)}
                type="text"
                placeholder="Enter subject"
            />
            <MyButton onClick={addSubject}>Add</MyButton>
        </form>
    );
};

export default CreateSubject;
