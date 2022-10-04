import React,{useRef,useState} from 'react'

function Contact() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");
  const [error,seterror] = useState("")
  const [success,setsuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nameRef.current.value === "" || emailRef.current.value ==="" || subjectRef.current.value ==="" ){
      seterror("Error, Check input fields")
    }
    else{
      seterror(null)
      setsuccess("Message received, reach via email")
      emailRef.current.value="";
      nameRef.current.value="";
      subjectRef.current.value = "";
      messageRef.current.value ="";
    }
  };
  return (
   <> <div className="bg">

    <h2 className="font-bold text-3xl">For more enquiry</h2>
  
  </div>

  <br/><br/>
     
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center md-6" style={{background:'black',padding:'20px'}}>
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus ipsum aperiam cumque fugit suscipit animi natus
                nostrum voluptatem iste quam!
              </p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      ref={nameRef}
                      style={{background:'black',color:'white',width:'100%',border:'none',outline:'none',padding:'8px',borderRadius:'20px',border:'1px solid white'}}
                    />
                  </div>
                  <p style={{color:'red'}}>{error ? error :null}</p>
                   <br/>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      ref={emailRef}
                      style={{background:'black',color:'white',width:'100%',border:'none',outline:'none',padding:'8px',borderRadius:'20px',border:'1px solid white'}}
                    />
                  </div>
                  <p style={{color:'red'}}>{error ? error :null}</p>
                  <br/>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter subject"
                      ref={subjectRef}
                       style={{background:'black',color:'white',width:'100%',border:'none',outline:'none',padding:'8px',borderRadius:'20px',border:'1px solid white'}}
                      
                    />
                  </div>
                  <p style={{color:'red'}}>{error ? error :null}</p><br/>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Write message"
                      ref={messageRef}
                      style={{background:'black',color:'white',width:'100%',border:'none',outline:'none',padding:'8px',borderRadius:'20px',border:'1px solid white'}}
                    ></textarea>
                  </div>
                  <p style={{color:'red'}}>{error ? error :null}</p>

                  <button
                    className="send__btn"
                    style={{
                      border: "none",
                      padding: "7px 25px",
                      borderRadius: "5px",
                      marginTop: "20px",
                      background:'linear-gradient(to right, #E7B226,black)',
                      width:'60%',
                      color:'white'
                    }}
                  >
                    Send a Message
                  </button>
                </form>
              <p style={{marginTop:'20px'}}>{success ? success :null}</p>  
              </div>
            </div>
          </div>
        </div>
      </section>
    


  </>
  )
}

export default Contact