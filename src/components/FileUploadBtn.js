import React, { Children } from 'react';
import './page/shopprofile/shopprofile.css';
// import styled from 'styled-components';
// Style the Button component
// const Button = styled.button`
//   /* Insert your favorite CSS code to style a button */
// `;
const FileUploader = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <div
        class="file btn-img btn btn-lg btn-primary"
        onClick={handleClick}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/addPhoto.png'}`,
          backgroundSize: 'cover',
        }}
      ></div>
      {/* <button onClick={handleClick}>Upload a file</button> */}
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default FileUploader;
