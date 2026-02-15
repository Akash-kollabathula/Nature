import './UserInput.css';
const UserInput =()=>{
    const titleChangerHandler =(event)=>{
        console.log(event.target.value);
    }
    return(
        <>
        <div className='input__form'>
            <form className='form'>
                <div>
                    <label htmlFor='title' className='form__label'>Title</label>
                    <input 
                    className='form_input' 
                    type='text'
                    id='title'
                    placeholder='Enter title'
                    onChange={titleChangerHandler}
                    /> 
                </div>
                <div>
                   
                     <label htmlFor='Address' className='form__label'>Address</label>
                    <input 
                    className='form_input' 
                    type='text'
                    id='Address'
                    placeholder='Enter Address'
                    onChange={(e)=> console.log(e.target.value)}
                    /> 
                </div>  
    
          <div>
            <label htmlFor='Image' className='form__label'>Image</label>
            <input className='input__image'
            type='file'
            accept='image/'
            />
          </div>

          <div className='div__button'>
            <button type='submit' className='submit__button'>Add Memory</button>
          </div>
                
              
            </form>

          
        </div>
        </>
    )
}

export default UserInput;
    