//current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY, hh:mm "));
//creat input boxes
var time = ['09:00 AM','10:00 AM','11:00 AM','12:00 AM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM',];

for (var i = 0; i < time.length; i++) {
    var rows = $('<li>');
    rows.addClass('row')
    var hours =$('<div>');
    hours.addClass('hour');
    hours.text(time[i]+'  ');
    var textareas = $('<textarea>');
    textareas.attr('id', 'textarea'+[i+1]);
    var savebtn = $('<button>');
    savebtn.attr('id', 'save-btn'+ [i+1]);    
    savebtn.addClass('saveBtn')
    savebtn.append('<i class="fa-solid fa-calendar-plus"></i>')
    $('#container').append(rows);
    rows.append(hours,textareas,savebtn);
    //change color by comparison of current hours
    let hournow = today.format("H");;
    if (hournow > i+9){
        textareas.attr('class', 'past');
    }else if (hournow < i+9){
        textareas.attr('class', 'present');
    }else {
        textareas.attr('class', 'future');
    };
};

renderLastRegistered1()
function renderLastRegistered1() {
    var ip = localStorage.getItem("input1");
    if (!ip) {
      return;
    } 
    $('#textarea1').val(ip) ;
}

renderLastRegistered2()
function renderLastRegistered2() {
    var ip = localStorage.getItem("input2");
    if (!ip) {
      return;
    } 
    $('#textarea2').val(ip) ;
}

renderLastRegistered3()
function renderLastRegistered3() {
    var ip = localStorage.getItem("input3");
    if (!ip) {
      return;
    } 
    $('#textarea3').val(ip) ;
}
renderLastRegistered4()
function renderLastRegistered4() {
    var ip = localStorage.getItem("input4");
    if (!ip) {
      return;
    } 
    $('#textarea4').val(ip) ;
}

renderLastRegistered5()
function renderLastRegistered5() {
    var ip = localStorage.getItem("input5");
    if (!ip) {
      return;
    } 
    $('#textarea5').val(ip) ;
}

renderLastRegistered6()
function renderLastRegistered6() {
    var ip = localStorage.getItem("input6");
    if (!ip) {
      return;
    } 
    $('#textarea6').val(ip) ;
}
renderLastRegistered7()
function renderLastRegistered7() {
    var ip = localStorage.getItem("input7");
    if (!ip) {
      return;
    } 
    $('#textarea7').val(ip) ;
}

renderLastRegistered8()
function renderLastRegistered8() {
    var ip = localStorage.getItem("input8");
    if (!ip) {
      return;
    } 
    $('#textarea8').val(ip) ;
}

renderLastRegistered9()
function renderLastRegistered9() {
    var ip = localStorage.getItem("input9");
    if (!ip) {
      return;
    } 
    $('#textarea9').val(ip) ;
}

//save btns
$('#save-btn1').on('click', handleFormSubmit1);
$('#save-btn2').on('click', handleFormSubmit2);
$('#save-btn3').on('click', handleFormSubmit3);
$('#save-btn4').on('click', handleFormSubmit4);
$('#save-btn5').on('click', handleFormSubmit5);
$('#save-btn6').on('click', handleFormSubmit6);
$('#save-btn7').on('click', handleFormSubmit7);
$('#save-btn8').on('click', handleFormSubmit8);
$('#save-btn9').on('click', handleFormSubmit9);

//local storage part
function handleFormSubmit1(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea1').val();
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input1", saveItem);
    console.log('#textarea1 = '+saveItem);
    renderLastRegistered1();
}  


function handleFormSubmit2(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea2').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input2", saveItem);
    console.log('#textarea2 = '+saveItem);
    renderLastRegistered2()
}  


function handleFormSubmit3(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea3').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input3", saveItem);
    console.log('#textarea3 = '+saveItem);
    renderLastRegistered3()
}  

function handleFormSubmit4(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea4').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input4", saveItem);
    console.log('#textarea4 = '+saveItem);
    renderLastRegistered4()
}  

function handleFormSubmit5(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea5').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input5", saveItem);
    console.log('#textarea5 = '+saveItem);
    renderLastRegistered5()
}  

function handleFormSubmit6(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea6').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input6", saveItem);
    console.log('#textarea6 = '+saveItem);
    renderLastRegistered6()
}  

function handleFormSubmit7(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea7').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input7", saveItem);
    console.log('#textarea7 = '+saveItem);
    renderLastRegistered7()
}  

function handleFormSubmit8(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea8').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input8", saveItem);
    console.log('#textarea8 = '+saveItem);
    renderLastRegistered8()
}  

function handleFormSubmit9(event) {
    event.preventDefault();
    // select form element by its `name` attribute and get its value
    var saveItem = $('#textarea9').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!saveItem) {
      console.log('No item filled out');
      return;
    }
    // print to the page
    localStorage.setItem("input9", saveItem);
    console.log('#textarea9 = '+saveItem);
    renderLastRegistered9()
} 