import React, { useState } from 'react'
import axios from 'axios';

const ImgPreloader = () => {
  return (
    <div class="loader"></div>
  )
}


function Page2() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);


  const [inputText, setInputText] = useState('')
  const [dataReceived, setDataReceived] = useState(false) // False default
  const [answerReceived, setAnswerReceived] = useState(false)

  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')
  const [answer5, setAnswer5] = useState('')

  const [rating, setRating] = useState('')

  const [inputQuestions, setInputQuestions] = useState([])
  const [inputAnswers, setInputAnswers] = useState([])










  function handleFileInputChange(event) {
    const input = event.target;
    const imageContainer = document.querySelector('.image-container');
    const selectedImage = document.querySelector('.selected-image');
    const fileName = document.querySelector('.file-name');

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();


      reader.onload = function (e) {
        selectedImage.src = e.target.result;
        fileName.textContent = file.name;
        imageContainer.style.display = 'block'; // Display the image container
      };

      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  }




  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select an image to upload.');
      return;

    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.post('http://127.0.0.1:5000/uploadImg', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        // Handle the response here, e.g., show a success message
        console.log(response.data);
        setInputText(response.data.output)
        setInputQuestions(response.data.questions)
        setDataReceived(true)
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the request is complete
      });
  };

  const handleAnswerSubmit = async () => {
    console.log('Sending data')
    arr[0] = answer1; arr[1] = answer2, arr[2]= answer3, arr[3] =answer4, arr[4] = answer5
        await setInputAnswers(arr)
        arr[0] = answer1; arr[1] = answer2, arr[2]= answer3, arr[3] =answer4, arr[4] = answer5
        await setInputAnswers(arr)
    try {
      
      const response = await axios.post('http://127.0.0.1:5000/uploadAnswers', { 'questions': inputQuestions, 'answers': inputAnswers, 'inptext': inputText })
      setRating(response.data.output)
      console.log(response.data.output)
      setAnswerReceived(true)
      console.log('Received data')
    } catch (err) { console.log('errorrr: ' + err) }

  }

  return (
    <div >

      <div className="ImgHead">
        <h2>Upload Image</h2>

      </div>
      <div className='center'>
        <label className="custom-file-input">
          <input type="file" accept="image/*" className="ImgChoose" onChange={handleFileInputChange} />
          <span class="button-text">Choose Image</span>
        </label>
      </div>
      <div className="image-container">
        <img src="" alt="Selected Image" class="selected-image" />
        <div class="file-name"></div>
      </div>

      <div className="Btncen">
        {loading ? (
          <ImgPreloader />
        ) : (
          <button className='button2' onClick={handleUpload}>Generate!</button>
        )}
      </div>

      <div className="content">
                {
                    dataReceived? 

                    <div className='center1'>
                        <h2>Here are some questions generated!</h2>
                        <div className='question'>
                            <h3>Difficulty : Very Easy</h3>
                            <p>{inputQuestions[0]}</p>
                            <div className="center3">
                            <input placeholder='Enter your answer here!' type="text" value={answer1} onChange={(e)=>setAnswer1(e.target.value)} />
                            </div>
                        </div>

                        <div className='question'>
                            <h3>Difficulty : Easy</h3>
                            <p>{inputQuestions[1]}</p>
                            <div className="center3">
                            <input placeholder='Enter your answer here!' type="text" value={answer2} onChange={(e)=>setAnswer2(e.target.value)} />
                            </div>
                        </div>

                        <div className='question'>
                            <h3>Difficulty : Medium</h3>
                            <p>{inputQuestions[2]}</p>
                            <div className="center3">
                            <input placeholder='Enter your answer here!' type="text" value={answer3} onChange={(e)=>setAnswer3(e.target.value)} />
                            </div>
                        </div>

                        <div className='question'>
                            <h3>Difficulty : Hard</h3>
                            <p>{inputQuestions[3]}</p>
                            <div className="center3">
                            <input placeholder='Enter your answer here!' type="text" value={answer4} onChange={(e)=>setAnswer4(e.target.value)} />
                            </div>
                        </div>

                        <div className='question'>
                            <h3>Difficulty : Very Hard</h3>
                            <p>{inputQuestions[4]}</p>
                            <div className="center3">
                            <input placeholder='Enter your answer here!' type="text" value={answer5} onChange={(e)=>setAnswer5(e.target.value)} />
                            </div>
                        </div>

                        <div className="center4">
                        <button className='button2' onClick={handleAnswerSubmit}>Submit!</button> 
                        </div>

                        <div className='center4'>
                            {
                                answerReceived?
                                <div style={{marginTop:'0px', marginBottom:'50px', fontSize:'30px', color:'white'}}>
                                    {rating}
                                </div>: <div></div>
                            }

                        </div>

                    </div> 
                    :<div></div>
                }

            </div>
    </div>

  );
}

export default Page2;