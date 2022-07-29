import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div>
            <div class="container">
  <div class="row">
      <h1 className='text-center fw-bold fs-1 mt-5 mb-5'>How React Works???</h1>
    
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 bg-dark">
      
      <p className='fs-3 mt-3 text-white px-5 pb-5 pt-5 pe-5 q-1'>React is a component based, easy to understand javascript library. This is used by a large amount of people around the world. When reactjs library is used for the purpose of development of a website, it creates a virtual DOM inside the memory which is cleaner and easily accessible by the program. This process is done so that, whenever there is a change in the code, react can easily understand and change the virtual DOM since it is easier. Then the virtual DOM gets compared with the real DOM by diff algorithm and the change in the UI takes place.</p>
    </div>
    
  </div>
  <div class="row">
      <h1 className='text-center fw-bold fs-1 mt-5 mb-5'>Difference between Props & State???</h1>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
      
      <p className='fs-3 bg-dark text-white px-5 pb-5 pt-5 pe-5 q-2'>Props and State in react have their individual property and differences.
      <br></br>
      1. Props are immutable.But states are mutable.
      <br></br>
          2. Props cannot be changed from child element.But state, sent as props can be changed from child element asynchronously.
          <br></br>
          3. State cannot be accessed by a child component But can be sent as a props to the child component.
          <br></br>
          4. props are used for communication between components.But state is used for rendering dynamic changes in a component.
      </p>
      
    </div>
    
  </div>

  <div class="row">
      <h1 className='text-center fw-bold fs-1 mt-5 mb-5'>What is useState and How it works???</h1>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
      
      <p className='fs-3 mt-3 bg-dark text-white pt-5 pb-5 px-5 pe-5 q-3'>The useState() is a react hook. This is basically used for management of the state in the component. The reason for using this hook is when a state of a componet will be changed, react can re-render the component very eaily but that will not take a reload to be done, providing a better user experience. in the useEffect hook, a variable and a fuction gets returned. the variable is used in the component and by using the set callback function we can handle the changes of the variable which is used in our component.</p>
      
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Question;