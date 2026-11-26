import './App.css'

function HeaderInputForm(){
  return(
    <div className='input-div'>
      <p className='login-title'>login</p>
      <input type="text" placeholder='username' />
      <input type="text" placeholder='trustID' />

      <button
      className='submit-btn'
        type="button"
        onClick={() => {
          setTrustId("");
        }}
      >
        submit
      </button>

    </div>
  )
}

//-----building s dummy component jus tto see how it would be built.

function HeaderTitleText(){
  return(
    <div className='indroduction-div'>
      <p>Hello,</p>
      <p>Welcome to the Network.</p>
      <p>Everything you find here is confidential.</p>
      <p>Privacy is of the utmost importance.</p>
      <p>Please keep your personal information private and do not trust anyone with your trustID.</p>
      <p>In no event shall we be held liable for any direct, indirect, incidental, consequential, or punitive damages whatsoever, including, without limitation, any financial, spiritual, or intellectual property losses arising out of or in connection with your use of this service.</p>
      <p>Bene tibi eveniat</p>

    </div>
  )
}

function App() {

  return (
    <>
      <HeaderTitleText />
      <HeaderInputForm />
    </>
  )
}


export default App
