import React from 'react'
const Button = () => {

    const handleClick = () => {
        alert("You Clicked meeeeh");
    }
    return (
        <button onClick={handleClick}>Click me</button>
    )
}

const Copy = () => {

    const handleCopy = () => {
        alert("You are copying my content");
        
    } 
    return (
        <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus modi nemo aperiam dolorum molestias suscipit rerum sunt voluptas aliquid quasi blanditiis veniam totam laborum, aliquam repellat nobis maxime officia tempora.</p>
    )
}

const MouseMove = () => {

    const handleMouse = () => {
        console.log("you hovered meeeh");
    }
    return (
        <p onMouseMove={handleMouse}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus modi nemo aperiam dolorum molestias suscipit rerum sunt voluptas aliquid quasi blanditiis veniam totam laborum, aliquam repellat nobis maxime officia tempora.</p>
    )
}


const Event = () => {
  return (
    <>
      <Button />
      <Copy />
      <MouseMove />
    </>
  )
}

export default Event
