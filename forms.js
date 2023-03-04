/* ------ Constants ----- */

const contactForm = document.querySelector('.form');
const bookingForm = document.querySelector('.booking-form');
const inscriptionForm = document.querySelector('.inscription-form')
const inputs = document.querySelectorAll('input');
const selects = document.querySelectorAll('select');
const textArea = document.querySelector('textarea');
const contactSubmit = document.querySelector('.contact-submit');
const bookingModalBtn = document.querySelector('#booking-modal-btn');
const inscriptionBtn = document.querySelector('#inscription-btn');


/* ----- Functions ----- */

const createErrorMsg = (field) => {
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'El campo no puede estar vacío.'
    errorMsg.classList.add('error-msg','mb-2', 'text-red-600')
    field.insertAdjacentElement('afterend', errorMsg);
    field.classList.remove('mb-4')
    field.classList.add('border-2', 'border-red-600', 'has-error-msg', 'mb-1');
}

const removeErrorMsg = (field) => {
    const errorMsg = document.querySelectorAll('.error-msg');
    errorMsg.forEach(err => {
        if (err && field.classList.contains('has-error-msg') && field.value !== '') {
            err.remove();
            field.classList.remove('border-2', 'border-red-600', 'has-error-msg');
            field.classList.add('mb-4')
        }
    })
}

const inputValidation = (input, className) => {
    if(input.value === '' && input.classList.contains(className) && !input.classList.contains('has-error-msg')) {
        createErrorMsg(input)
    } else {
        removeErrorMsg(input)
    }
}

const everyInputValidation = (inputs) => {
    let result = Array.from(inputs).every(input => input.value.trim() !== '')
    return result
}

/* ----- Event Listeners ----- */

inputs.forEach(inp => {
    inp.addEventListener('input', () => {
        removeErrorMsg(inp);
    });
})

textArea.addEventListener('input', () => {
    removeErrorMsg(textArea)
})

contactSubmit.addEventListener('click', (e) => {
    e.preventDefault(e)
    inputs.forEach(inp => {
        inputValidation(inp, 'contact-form')
    }) 
    inputValidation(textArea, 'contact-form')

    const contactFormInputs = document.querySelectorAll('.contact-form');
    
    if(everyInputValidation(contactFormInputs)) {
        Swal.fire({
            html: `
            <div class="contact-alert bg-background p-4 pb-0">
               <h2 class="text-primary font-antonio text-2xl mb-4">El mensaje se ha enviado correctamente</h2>
               <p class="text-base text-light">Estaremos respondiendo tu consulta a la brevedad. Muchas gracias por contactarte con Valhalla Gym!</p>
            </div> `,
            showConfirmButton: true,
            confirmButtonText: 'Volver al Sitio',
            background: '#212121',
            customClass: {
                container: 'p-8',
                confirmButton: 'action-btn bg-[#FF8F00] mb-2'
            },
            buttonsStyling: false,
        })
        contactForm.reset()
    }
})

bookingModalBtn.addEventListener('click', (e) => {
    e.preventDefault(e)
    inputs.forEach(inp => {
        inputValidation(inp, 'booking')
    })

    const bookingFormInputs = document.querySelectorAll('.booking');

    if(everyInputValidation(bookingFormInputs)) {
        Swal.fire({
            html: `
            <div class="contact-alert bg-background p-4 pb-0">
               <h2 class="text-primary font-antonio text-2xl mb-4">¡Clase reservada con éxito!</h2>
               <p class="text-base text-light">Revisa tu bandeja de correo electrónico para ver todos los detalles de la reserva de tu clase.</p>

            </div> `,
            showConfirmButton: true,
            confirmButtonText: 'Volver al Sitio',
            background: '#212121',
            customClass: {
                container: 'p-8',
                confirmButton: 'action-btn bg-[#FF8F00] mb-2'
            },
            buttonsStyling: false,
        })
        bookingForm.reset()
        bookingModal.classList.add('hidden-modal');
        bookingModal.classList.remove('show-modal');
    }

})

inscriptionBtn.addEventListener('click', (e) => {
    e.preventDefault(e)
    inputs.forEach(inp => {
        inputValidation(inp, 'inscription')
    })

    const inscriptionFormInputs = document.querySelectorAll('.inscription');

    if(everyInputValidation(inscriptionFormInputs)) {
        Swal.fire({
            html: `
            <div class="contact-alert bg-background p-4 pb-0">
               <h2 class="text-primary font-antonio text-2xl mb-4">El mensaje se ha enviado correctamente</h2>
               <p class="text-base text-light">Estaremos respondiendo tu consulta a la brevedad. Muchas gracias por contactarte con Valhalla Gym!</p>
            </div> `,
            showConfirmButton: true,
            confirmButtonText: 'Volver al Sitio',
            background: '#212121',
            customClass: {
                container: 'p-8',
                confirmButton: 'action-btn bg-[#FF8F00] mb-2'
            },
            buttonsStyling: false,
        })
        inscriptionForm.reset()
        registrationModal.classList.add('hidden-modal');
        registrationModal.classList.remove('show-modal')
    }
})
