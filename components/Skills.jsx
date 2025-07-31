import React from 'react'
import Card from './Reusable/Card'

const skills=[
  {title:'HTML ',description:'Built responsive, component-based user interfaces using React for scalable and interactive web applications.',icon:'/images/html.svg'},
  {title:'CSS ',description:'Styled responsive and visually consistent interfaces using CSS, with a focus on layout, animations, and cross-browser compatibility.',icon:'/images/css.svg'},
  {title:'Bootstrap ',description:'Designed responsive and mobile-first web pages using Bootstrap 5, leveraging its grid system and pre-built UI components for fast development.',icon:'/images/bootstrap.svg'},
  {title:'Tailwind CSS ',description:'Built modern, responsive UIs using Tailwind CSS, applying utility-first classes for rapid styling and clean, maintainable design.',icon:'/images/tailwind.svg'},
  {title:'JavaScript ',description:'Developed interactive and dynamic web functionalities using JavaScript (ES6+), focusing on DOM manipulation, event handling, and API integration.',icon:'/images/javascript.svg'},
  {title:'React',description:'Structured clean and semantic web content using HTML5 to ensure accessibility, SEO optimization, and responsive layouts.',icon:'/images/react.svg'},
  {title:'Next.js',description:'Developed fast, SEO-friendly web applications using Next.js , leveraging server-side rendering, routing, and optimized performance.',icon:'/images/nextjs.svg'},
  {title:'Figma',description:'Used Figma to interpret and translate UI/UX designs into responsive web layouts, ensuring design accuracy and visual consistency in development.',icon:'/images/figma.svg'},
  {title:'GitHub',description:'Used GitHub for version control, project collaboration, and managing code through branches, pull requests, and issue tracking.',icon:'/images/github-icon.svg'},
  {title:'Netlify',description:'Deployed and hosted frontend web applications using Netlify, enabling continuous deployment, custom domains, and fast global delivery.',icon:'/images/netlify.svg'},
  {title:'VS Code',description:'Used Visual Studio Code as the primary code editor, leveraging extensions, debugging tools, and Git integration for efficient frontend development.',icon:'/images/visual-studio-code.svg'},
]
export default function 
() {
  return (
    <div className=' mt-30 w-screen flex flex-col justify-center items-center  p-20 lg:px-28'>
        <h2 className='text-2xl lg:text-4xl font-bold'>What I Know</h2>
        <h4 className='text-sm lg:text-md text-transparent bg-clip-text bg-gradient-to-r  from-[#4FC3F7] to-black dark:to-white'>My Skills</h4>
        <div className=' gap-4 grid lg:grid-cols-4 lg:grid-rows-3  mt-28'>
        {
          skills.map(({title,description,icon},i)=>(
            <Card key={i} title={title} description={description} icon={icon} />
          ))
        }

         
        
        </div>
    </div>
  )
}
