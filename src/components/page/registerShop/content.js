import React,{useState} from "react";
import ReactDOM from "react-dom";
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import Modal from "react-modal";
import {registerShop} from "../../../utils/userAPI"
//<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Content() {
  const [token,setToken] = useRecoilState(tokenState);
    const [data, setData] = useState({
        name: "",
        address: ""
      })
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleChange = (type, value) => {
    setData({
      ...data,
      [type]: value
    }

    )

  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  function closeModal() {
    setIsOpen(false);
  }
  const callRegisterShop = async()=>{
    let res=  await registerShop({...data},token) 
    let resjson = await res.json()
    console.log("callRegisterShop = ",resjson)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="w3-container w3-teal">
          <h2>Input Form</h2>
        </div>

        <form class="w3-container">
          <label>Shop Name</label>
          <input class="w3-input" type="text" 
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          />

          <label>Address</label>
          <input class="w3-input" type="text"
          value={data.address}
          onChange={(e) => handleChange("address", e.target.value)}
           />
        </form>
        <button class="w3-btn w3-blue" onClick={closeModal}>
          close
        </button>
        <button class="w3-btn w3-blue"
        onClick={()=>{callRegisterShop()}}
        >Register</button>
      </Modal>
    </div>
  );
}

export default Content;
