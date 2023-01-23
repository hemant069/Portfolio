import React, { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { ThemeContext } from '../../contexts/ThemeContext';
import  "./github.css"
function Github() {
    const { theme } = useContext(ThemeContext);
  return (
<div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"#eaeaea"}} className="gitname">
<h2 style={{color: theme.primary}}>Github</h2>
</div>
    <div style={{  margin:"auto",display:"flex",justifyContent:"center",background:"#eaeaea" }}>
    
    <GitHubCalendar
      username="hemant069"
      blockSize={15}
      blockMargin={7}
      color="#ff764d"
      fontSize={16}
      
      theme={{color: theme.primary}}
    />
  </div>
</div>
  );
}

export default Github;
