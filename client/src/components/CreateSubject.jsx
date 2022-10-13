import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { createSubject } from '../http/deviceAPI';



const CreateSubject = () => {
    const [value, setValue] = useState('')
    
    const addSubject = () => {
        createSubject({name: value}).then(data => {
        setValue('')
    })

    }

    return (
        
                
        <form>
            
            <div>Add subject</div>
            <MyInput
                value={value}
                onChange={event => setValue(event.target.value)}
                type="text"
                placeholder="Enter subject"
            />
            <MyButton onClick={addSubject}>Add</MyButton>
        </form>
        
    );
};

export default CreateSubject;