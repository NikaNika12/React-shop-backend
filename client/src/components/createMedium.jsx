import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { createMedium } from '../http/deviceAPI';

const CreateMedium = () => {
    const [value, setValue] = useState('')
    
    const addMedium = () => {
        createMedium({name: value}).then(data => {
            setValue('')
        })
    }

    return (
        <form>
            <div>Add medium</div>
            <MyInput
                value={value}
                onChange={event => setValue(event.target.value)}
                type="text"
                placeholder="Enter medium"
            />
            <MyButton onClick={addMedium}>Add</MyButton>
        </form>
    );
};

export default CreateMedium;