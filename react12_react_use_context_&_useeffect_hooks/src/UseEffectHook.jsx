import React, { useEffect, useState } from "react";

const Uef = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        alert("i am clicked");
    },[nums])
    return (<>
        <button onClick={() => {setNum(num+1)}}>clickme{num}</button><br/>
        <button onClick={() => {setNums(nums+1)}}>clickme{nums}</button>
    </>)
}

export default  Uef;