import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <div className='search_bar'>Search artworks</div>
            <MyInput
                    value = {filter.query}
                    onChange = {event => setFilter({...filter, query: event.target.value})}
                    placeholder = "Search..."
            />
            <MySelect
                    value = {filter.sort}
                    onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="Choose sorting"
                    options = {[
                      {value: "title", name: "By title"},
                      {value: "price", name: "By price"}
                  ]}
            />
        </div>
    );
};

export default PostFilter;

