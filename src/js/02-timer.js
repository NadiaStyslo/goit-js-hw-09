import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputId = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button[data-start]')
const timerEl = document.querySelector('.timer')
//const fieldEl = document.querySelector('.field');
const valueDays = document.querySelector('[data-days]');
//const labelEl = document.querySelector('.label');
const valueHours = document.querySelector('[data-hours]');
const valueMin = document.querySelector('[data-minutes]')
const valueSec = document.querySelector('[data-seconds]');


let timerId = null;
let selectedDate = null;
let timer = {};

timerEl.style.display = 'flex';
timerEl.style.margin = '6px';
timerEl.style.width = '250px'

// inputId.addEventListener('click', onInputIdClick);
// buttonEl.addEventListener('click', onButtonStartClick);

buttonEl.setAttribute('disabled', "")
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime()
        if (selectedDate < Date.now()) {
            Notify.failure('Please choose a date in the future')
            buttonEl.setAttribute('disabled', "");
            
        } else {
            buttonEl.removeAttribute('disabled',)
            onClickStart()
        }
        
    }
}
flatpickr('#datetime-picker', options);
function onClickStart(){
    buttonEl.addEventListener('click', onStartTime)
}
function onStartTime() {
    timerId= setInterval(onWorkTimer, 1000)
}
function onWorkTimer() {
    const timeFinish = selectedDate - Date.now();
    //console.log(timeFinish)
    convertMs(timeFinish)
    console.log(convertMs(timeFinish))
    //function updateClockfase({ days, hours, minutes, seconds }) {
        valueDays.textContent = timer.days
        valueHours.textContent = addLeadingZero(timer.hours);
        valueMin.textContent = addLeadingZero(timer.minutes);
        valueSec.textContent = addLeadingZero(timer.seconds);
    //}
    
    if (timeFinish < 1000) {
        clearInterval(timerId)
        console.log(Date.now);
    }
    function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
    const day = hour * 24;
    
    

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
