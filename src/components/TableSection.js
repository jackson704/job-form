import React, { useEffect, useState, } from 'react'

const TableSection = (props) => {

  const [posTitle, setPosTitle] = useState("")

  let positionTitleNames = [];

  useEffect(
    () => {

      if (positionTitleNames !== null) {

        positionTitleNames.push(props.positionTitle)
        setPosTitle(positionTitleNames);
      }
    }, []
  );



  // // const [posTitle, setPosTitle] = useState([])
  // // if (posTitle.length <= 0) {
  // //   setPosTitle(positionTitleNames)
  // // }
  // console.log(positionTitleNames.length);



  // let heading1 = document.getElementById("heading-1")
  // let element = document.createElement("span");
  // // elemen
  // if (heading1 !== null) {

  //   heading1.append(positionTitleNames)
  //   console.log(heading1);
  // }



  return (
    <>
      <h1 id='heading-1'>{posTitle}</h1>
      <hr />
      <hr />
      <hr />
      <h1 className='text-red-700'>"This is Navbar position title {props.positionTitle}"</h1>
    </>
  )
}

export default TableSection