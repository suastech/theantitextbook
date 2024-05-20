import { Link } from "react-router-dom";

export default function Explanation () {

  return ( 
    <section id="explanation">
      <h1>The Economics Anti-Textbook</h1>
      <h3 style={{cursor: "none", textDecoration:"none"}}> The Wikipedia of the failure of neoclassical economics</h3>
      <h3 style={{cursor: "none", textDecoration:"none"}}> Rebooting economics, one myth at a time </h3>

      <h4>➤ This site seeks to centralize, structure and disseminate the vast dissent against neoclassical economics in an innovative and collaborative way.</h4>
     
      <h4>➤ It will be structured around the 'myths' held my neoclassical economics.
          Each 'myth' will have an entry that refutes it.For example: Phillips curve, theory of marginal productivity of economic factors, idea of banks as intermediaries...
          It is difficult foe me to estimate how many entries we can expect: 50, 200, more?
      </h4>
      
      <h4>➤ The site will invite heterodox economists, based on their field of expertise, to produce an entry that shows why a certain neoclassical thesis is wrong and providing the empirical evidence that proves it.
        (The site will include a page so that guest editors can automatically create a new entry easily)
      </h4>

      <h4>➤ We will not ask our potential guest-editors to do extra work for this site. Instead, we will be offering them a platform for the dissemination of work that they have already completed.</h4>
      
      <h4>➤ For each economic topic, we will be producing a repository of the state of the art that can be consulted by students, researchers, professors seeking silabus for their courses, etc.
      </h4>
      
      <h4>➤ The site should have a sort of "academic board" (researchers knowledgeable enough to suggest topics (myths/refutations) and guests), and an executive team: people in charge of making the website work and grow.</h4>
      
      <h4>➤ Ideally, once the site is known, we would expect researchers to suggest creating their own entries.</h4>

      <div style={{display:"flex", width:"fit-content", margin:"0 auto", fontSize:"25px"}}>
        <Link to="/home">Layout of a Home Page</Link> | 
        <Link to="/example"> Example of a Refutation Page </Link>
      </div>
  
    </section>
  )
}
