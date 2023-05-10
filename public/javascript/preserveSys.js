// // let r= document.getElementById('doctor').nodeValue
// // console.log(r);
// function onclick() {
//   let r = document.getElementById('doctor').nodeValue;
//   console.log(r);
//   console.log('hi')
// }
function sendheartmail() {
  let userName = document.getElementById('name').value;
  let userAge = document.getElementById('age').value;
  let userMobileNumber = document.getElementById('mobileNumber').value;
  let EmailElement = document.getElementById('email').value;
  let userGernder = document.getElementById('Gender').value;
  let userAddress = document.getElementById('address').value;

  let hospitaElement = document.getElementById('hospital').value;
  let doctorElement = document.getElementById('doctor').value;
  let timeElement = document.getElementById('time').value;
  let selectionModeElement = document.getElementById('selectionMode').value;


  
  console.log(hospitaElement, doctorElement, timeElement, selectionModeElement)

  fetch('http://localhost:3000/sendMail', {
    method: 'POST',
    body: JSON.stringify({
      name: userName,
      age: userAge,
      mobileNumber: userMobileNumber,
      gender: userGernder,
      address: userAddress,
      hospital: hospitaElement,
      doctor: doctorElement,
      time: timeElement,
      selectionMode: selectionModeElement,
      heartEmail: EmailElement
    }),
    headers: {
      "Content-Type": 'application/json'
    }
  }).then(res => res.json()).then(res => {
    console.log(res)
  }).catch(err => {
    alert(err);
  });
  
}