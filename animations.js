/* ----- Constants ----- */

const lessonSelect = document.getElementById('lesson');
const hourSelect = document.getElementById('hour');
const bookingBtn = document.getElementById('booking-btn');
const closeBookingModal = document.querySelector('.close-booking-modal');
const bookingModal = document.querySelector('.booking-modal');
const registrationBtns = document.querySelectorAll('.registration-btn');
const registrationModal = document.querySelector('.registration-modal');
const closeRegistrationModal = document.querySelector('.close-registration-modal');


/* ----- Event Listeners  ----- */

lessonSelect.addEventListener('change', () => {
    const selectedLesson = lessonSelect.value;

    for(let option of hourSelect.options) {
        option.disabled = false;
    }

    if(selectedLesson === 'spinning') {
        for(let option of hourSelect.options) {
            if(option.value !== 'nine' && option.value !== 'fourteen' && option.value !== 'nineteen') {
                option.disabled = true
            }
        }
    } else if(selectedLesson === 'boxing') {
        for(let option of hourSelect.options) {
            if(option.value !== 'twelve' && option.value !== 'seventeen' && option.value !== 'twenty') {
                option.disabled = true;
            }
        }
    }
})

bookingBtn.addEventListener('click', () => {
    bookingModal.classList.add('show-modal');
    bookingModal.classList.remove('hidden-modal');
})

closeBookingModal.addEventListener('click', () => {
    bookingModal.classList.add('hidden-modal');
    bookingModal.classList.remove('show-modal');
})

registrationBtns.forEach(regBtn => {
    regBtn.addEventListener('click', () => {
        registrationModal.classList.add('show-modal');
        registrationModal.classList.remove('hidden-modal')
    })
})

closeRegistrationModal.addEventListener('click', () => {
    registrationModal.classList.add('hidden-modal');
    registrationModal.classList.remove('show-modal')
})

