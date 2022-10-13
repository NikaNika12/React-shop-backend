import React, {useContext, useEffect, useState} from 'react';
import { Context } from '..';
import {observer} from "mobx-react-lite";
import { createArt, fetchMediums, fetchSubjects} from '../http/deviceAPI';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const CreateArt = observer(() => {
    const {art} = useContext(Context)
    const [name, setName] = useState('')
    const [material, setMaterial] = useState('')
    const [size, setSize] = useState('')
    const [year, setYear] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const [file, setFile] = useState(null)
    

    useEffect(() => {
        fetchSubjects().then(data => art.setSubjects(data))
        fetchMediums().then(data => art.setMediums(data))
    }, [])

    

    const selectFile = event => {
        setFile(event.target.files[0])
    }

    const addArt = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('material', material)
        formData.append('size', size)
        formData.append('year', year)
        formData.append('description', description)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('subjectId', art.selectedSubject.id)
        formData.append('mediumId', art.selectedMedium.id)
        createArt(formData)
    }

    return (
        <form>
            <div>Create Artwork</div>
            <MyInput
                value={name}
                onChange={event => setName(event.target.value)}
                type="text"
                placeholder="Name"
            />
            <MyInput
                value={material}
                onChange={event => setMaterial(event.target.value)}
                type="text"
                placeholder="Material"
            />
            <MyInput
                value={price}
                onChange={event => setPrice(Number(event.target.value))}
                type="number"
                placeholder="Price"
            />
            <MyInput
                value={size}
                onChange={event => setSize(event.target.value)}
                type="text"
                placeholder="Size (W x H x D)"
            />
            <MyInput
                value={year}
                onChange={event => setYear(Number(event.target.value))}
                type="number"
                placeholder="Year"
            />
            <MyInput
                value={description}
                onChange={event => setDescription(event.target.value)}
                type="text"
                placeholder="Description"
            />
            <MyInput
                type="file"
                onChange={selectFile}
                multiple
            />
            <div className="dropdown_select">  
                <label className="dropdown_label">{art.selectedSubject.name || "Choose subject"}</label>            
                <select className="dropdown_items">
                             {art.subjects.map(type =>
                                 <option
                                     onClick={() => art.selectedSubject(type)}
                                     key={type.id}
                                 >
                                     {type.name}
                                 </option>
                             )}
                </select>
            </div>
            <div className="dropdown_select">
                <label className="dropdown_label">{art.selectedMedium.name || "Choose medium"}</label>
                <select className="dropdown_items">
                             {art.mediums.map(type =>
                                 <option
                                 onClick={() => art.selectedMedium(type)}
                                 key={type.id}
                                 >
                                     {type.name}
                                 </option>
                             )}
                </select>
            </div>
            <MyButton onClick={addArt}>Add artwork</MyButton>
        </form>
    );
});
    
export default CreateArt;
