import React from "react";
import ProjectItem from "./ProjectItem";
import Image2 from "/public/asset/project/puitN1.jpg";
import Image3 from "/public/asset/project/puitN2.jpg";
import Image4 from "/public/asset/project/puitN3.jpg";
import Image5 from "/public/asset/project/puitN6.jpg";
import Image6 from "/public/asset/project/puitN5.jpg";


const Project = () => {
    return (
<div id='project' className="max-w-[1240px] mx-auto px-2 py-16">
    <p className="text-xl tracking-widest uppercase mt-8 text-[#5651e5]">Projets</p>
    <h2 className="py-4">Projet abouti</h2>
    <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
         title="Puit en Afrique N1"
         backgroundImg={Image2} 
         projectUrl='/property'/>
         <ProjectItem
         title="Puit en Afrique N2"
         backgroundImg={Image3} 
         projectUrl='/property'/>
            <ProjectItem
            title="Puit en Afrique N3"
            backgroundImg={Image5}
            projectUrl='/property'/>
            <ProjectItem
            title="Puit en Afrique N4"
            backgroundImg={Image4}
            projectUrl='/property'/>
            <ProjectItem
            title="Puit en Afrique N5"
            backgroundImg={Image6}
            projectUrl='/property'/>
        
      

        
        </div>
    </div>
    )
}

export default Project