import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { JobCategories } from '../assets/assets';

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // You might want to define locations separately
  const locations = ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad'];

  useEffect(() => {
    // Initialize Quill editor
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <form className='container p-4 flex flex-col w-full gap-3'>
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input 
          type="text" 
          placeholder='Type here'
          value={title} 
          onChange={e => setTitle(e.target.value)}
          required
          className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
        />
      </div>

      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className='flex flex-col gap-2 sm:flex-row w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Job Category</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Location</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)}>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Level</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)}>
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>

      <div>
        <p className='mb-2'>Job Salary</p>
        <input 
          min={0}
          className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]'
          onChange={e => setSalary(e.target.value)} 
          type="number" 
          placeholder='2500'
        />
      </div>

      <button className='w-28 py-3 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
      ' type="submit">ADD</button>
    </form>
  );
};

export default AddJob;
