import { useState, useEffect } from "react";
function Route(){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        const handler = ()=>{
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate',handler);

        return ()=>{
            window.removeEventListener('popstate', handler);
        }
    },[])

    const navigate = (to)=>{
        window.history.pushState({},'',to);
        setCurrentPath(to);
    } 
}

export default Route;