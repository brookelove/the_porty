import React, {useEffect, useState} from "react";
import "../Assets/CSS/Pages/Landing.css";
import { useNavigate } from "react-router";

const Loading = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
      const timeout = setTimeout(() => {
        setIsLoading(false); // Set loading to false after 2 seconds (simulated loading time)
      }, 2000);
      return () => clearTimeout(timeout);
    },[])

    return (
      <div>
      {isLoading ? (
        <div className="loadingContainer">Loading...</div>
      ) : (
        <div>
          {/* Render children when isLoading is false */}
          {children}
        </div>
      )}
    </div>
    )
}


export default Loading;