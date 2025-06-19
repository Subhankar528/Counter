const person={
  name:"Sonu",
  address:{
    line1:"Bakeer Street",
    city:"London",
    state:"UK"
  },
  profiles:["Twitter ","Linkdin ","Instagram"],
  printProfiles:()=>{
    person.profiles.map(
      (profile)=>{
        console.log(profile)
      }
    )
  }
  
}
export default function LearningJavaScript(){
  return (
    <>
      <h1><div>{person.name}</div></h1>
      <div>{person.address.line1}</div>
      <div>{person.profiles}</div>
      <div>{person.printProfiles()}</div>
    </>
  )
}