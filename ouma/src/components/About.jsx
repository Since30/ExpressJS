import React from 'react'
import Image from 'next/image'
import Photo1 from '../../public/Africa1.jpg'

const About = () => {
    return (
        <div id='about' className="w-full md:h-screen px-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">A propos</p>
                <h2 className="py-4">Qui sommes nous?</h2>
                <p className="py-2 text-gray-600">
                    Une association à but non lucrative</p>
                <p className="py-2 text-gray-600">
                NOUS SOMMES UNE NOUVELLE ASSOCIATION ET NOUS AVONS FAIT ÉNORMÉMENT DE CHOSES,
                 MAIS CE N'EST QUE LE DÉBUT ET NOUS AVONS BESOIN DE VOUS.
                 OBJECTIFS :
                  construction de puits en AFRIQUE ,distribution de fourniture scolaire au Maroc ,distribution
                   de manteaux et couverture en France, DÉJÀ RÉALISÉ collecte d'argent pour 7 puit en AFRIQUE 
                   et  leur construction sont terminé, nous répondrons à toute vos questions et
                    vous fournissons tout nos justificatifs pour chaques action .
                </p>
               </div> 
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
                <Image 
                className="rounded-xl " 
                src={Photo1} 
                height={500}
                width={500}
                alt="photo"/>

            </div>

        
        </div>
        </div>
    )
}

export default About