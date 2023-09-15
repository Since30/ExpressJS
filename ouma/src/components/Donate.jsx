import React from "react";

import emailjs from '@emailjs/browser'

const Donate = () => {

    const form = React.createRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Contact_Pfolio', 'template_slfrry8', form.current, 'Eh9W9ugE3Ot_hKrLA')
      .then((result) => {
        alert('Message envoyé avec succés')
        console.log(result.text);
      }, (error) => {
        alert('Une erreur est survenue, veuillez réessayer');
          console.log(error.text);
      });
      e.target.reset()
  };

    return (
        <div className="max-w-[1240px] items-center mx-auto px-auto">
        <h1 className="text-3xl text-center py-8">Faire un don</h1>
        <form id="donate" ref={form} onSubmit={sendEmail}>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
              <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Nom</label>
                <input name='name'
                  className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#5651e5]'
                  type="text" required />

              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Téléphone</label>
                <input id='phone' name='phone'
                  className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#5651e5]'
                  type="text" required />

              </div>

            </div>
            <div className='flex flex-col py-2'>
              <label className='uppercase text-sm py-2'>Email</label>
              <input id='email' name='email'
                className='border-2 rounded-lg p-3 flex border-gray-300 w-full hover:border-[#5651e5]'
                type="mail" required />

            </div>
            <div className='flex flex-col py-2'>
              <label className='uppercase text-sm py-2'>Sujet</label>
              <input id='subject' name='subject'
                className='border-2 rounded-lg p-3 flex border-gray-300 w-full hover:border-[#5651e5]'
                type="text" required />

            </div>
            
            <div className="flex flex-col py-2">
                <label className='uppercase text-sm py-2'>Montant du don</label>
                <input id='amount' name='amount'
                    className='border-2 rounded-lg p-3 flex border-gray-300 w-full hover:border-[#5651e5]'
                    type="number" required />
            </div>
            <div className='flex items-center py-2'>
              <input type="checkbox" required />
              <p className='text-sm ml-2'>J'accepte que les informations saisies dans ce formulaire soient utilisées pour me recontacter dans le cadre de ma demande.</p>
            </div>
            <button className='w-full bg-[#37357d] text-white  px-4 py-2 rounded-lg mt-8 hover:scale-105 ease-in duration-300'>Envoyer un don</button>
          </form>
        </div>
     

    );
}

export default Donate
