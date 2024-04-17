import React from 'react'

const User = ({img,name,age,hobbies,children}) => {
    return(
        <div>
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <div>
                <h3>Personal Information : </h3>
                <h4>Age : {age}  </h4>
                <h4>Hobbies: {hobbies.map((hobby,index) => (
                    <li key={index}>{index+1} -- {hobby}</li>
                ))}</h4>
                
                <h5>{children}</h5>
            </div>
        </div>
    )
}





const PropsTest = () => {
    return (
      <User 
          name="Arpita"
          img="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
          age={24}
          hobbies={["Sleeping", "Drawing", "Singing"]}
      >
          <p>This paragraph is not included in props </p>

          <p>This is p2 </p>

          <h2>kdjghelr</h2>
      </User>
    )
  }


export default PropsTest
