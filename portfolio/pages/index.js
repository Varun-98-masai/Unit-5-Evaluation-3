import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home({github,githubProjects}) {
  console.log(github);
  console.log(githubProjects)
  return (
    <div className={styles.container} >
      <Head>
        <title>Home Page</title>
        
      </Head>
      <Navbar img={github.avatar_url}  />
      <div>
       <img src={github.avatar_url} style={{width:"200px",borderRadius:"50%"}} alt={github.name} />
      <h2>{github.id}</h2>
      <h2>{github.name}</h2>
      <h2>@{github.login}</h2>
      <h2>{github.bio}</h2>
     
      <div style={{display:"flex" ,gap:"5px"}}>
        <Button ><a href={github.blog}>Resume</a></Button>9
        <Button><a href={github.html_url}>Follow</a></Button>
      </div>
      <div><b>TechStack:-</b>{github.bio}</div>
     <div>
      <div><b>Experience Education</b></div>
      <div>
      <div>{github.company}(Full Time)</div>
  <div>Following:-{github.following}</div>
  <div>Followers:-{github.followers}</div>
      </div>
     </div>
     <div>
    
     </div>
     {
       githubProjects.items.map((e) =>
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
     <div>{githubProjects.items.totalcount}</div>
    </div>
    </div>
  )
}
export async function getStaticProps(){
  let res = await fetch(`https://api.github.com/users/varun-98-masai`)
  let data = await res.json()

  let res2 = await fetch(`https://api.github.com/search/repositories?q=user:Varun-98-masai+fork:true&sort=updated&per_page=10&type=Repositories`);
  let data2 = await res2.json();
  console.log(data2);
  return {
    props:{
      github:data,
      githubProjects:data2
    }
  }
 }