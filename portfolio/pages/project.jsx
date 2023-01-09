import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../Components/Navbar";
 const Project = ({project}) => {
  return (
    <div>
     <Head>
      <title>Projects</title>
     </Head>
     <Navbar/>
     <Heading>Projects</Heading>
     {
       project.map((e) =>
       <div  key={e.id} style={{border:"1px solid" ,display:"flex",gap:"27px" ,padding:"10px"}}>
        <div>
        <a href={e.html_url}><b>{e.name} --Click here</b></a>
        <div>{e.description?e.description:""}</div>
        <div>

       <div>Stars Count:-{e.stargazers_count}</div>
       <div>Fork Count:-{e.forks}</div>


       </div>


        </div>
       
       

       <div>Language:- {e.language}</div>
        </div>

        
        )
     }
     <div>{project.totalcount}</div>
    </div>
  )
}

export async function getServerSideProps() {
  let res = await fetch(`https://api.github.com/search/repositories?q=user:Varun-98-masai+fork:true&sort=updated&per_page=10&type=Repositories`);
  let data = await res.json();
  console.log(data);

  return{
    props:{
      project: data.items
    }
  }
}
export default Project