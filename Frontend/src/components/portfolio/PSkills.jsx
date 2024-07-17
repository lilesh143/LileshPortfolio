import React from 'react'
import CodeBlock from '../CodeBlock';

function PSkills() {

  const code = `
  <h3 >A comprehensive overview of my technical expertise.</h3> 
    <h2>Programming Languages</h2>
      <p>Proficient in Java, JavaScript, and SQL. 
      I have developed multiple projects utilizing these languages, ensuring high performance and scalability.</p>

    <h2>Libraries and Frameworks</h2>
      <p> Experienced with Spring Boot, Spring MVC, Hibernate, React, and Angular.
      These tools have enabled me to build robust backend systems and dynamic frontend interfaces.</p>
        
    <h2>Tools</h2>
      <p>Skilled in using JDBC, MySQL, MongoDB, Postman, Git, and GitHub.
      These tools are integral to my development process, allowing me to manage databases, test APIs, and maintain version control effectively.</p>
  `;

  return (
    <>
    <div className='max-w-screen-2xl flex container justify-between mx-auto md:px-20 px-4  flex-col md:flex-row my-10'>
      <div className="max-w-sm  bg-slate-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Technical Skills</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Programming Languages</h1>
            <p className="mt-2 text-gray-600">Java, JavaScript, SQL</p>
            <h2 className="block mt-4 text-lg leading-tight font-medium text-black">Libraries and Frameworks</h2>
            <p className="mt-2 text-gray-600">Spring Boot, Spring MVC, Hibernate, React, Angular</p>
            <h2 className="block mt-4 text-lg leading-tight font-medium text-black">Tools</h2>
            <p className="mt-2 text-gray-600">JDBC, MySQL, MongoDB, Postman, Git and GitHub</p>
        </div>        
      </div>
      
      <div className='max-w-sm  bg-slate-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <CodeBlock code={code} />
      </div>
      
    </div>
    

    </>

    
)
}

export default PSkills;