import {useState } from 'react';
import './App.css'
import Header from './Component/Header/Header'
import Recipescards from './Component/Recipe-cards/Recipescards';
import Carditems from './Component/Recipe-carts/Carditems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [card, setCard] = useState([])
  const [preparing, setPreparing] = useState([])

  const handelWant = button => {
    const newCard = [...card, button]
    const alreadyExists = card.find(c => c.recipe_id === button.recipe_id);
    if(!alreadyExists){
      setCard(newCard);
    }
    else{
      toast("Already Exists !");
    }
    // setCard(p => [...p, button]);
  }
 
  const handelPreparing = (cook, id) =>{
    const newdata = card.filter(itme => itme.recipe_id != id)
    setCard(newdata)
    const newPrepar = [...preparing, cook]
    setPreparing(newPrepar)
  }

  return (
    <>
      <Header></Header>
      <div className='my-10 flex justify-center items-start gap-5'>
        <div className='w-[758px] px-5'>
          <Recipescards handelWant={handelWant}></Recipescards>
        </div>

        <div className='w-[514px] border-2 rounded-lg p-5'>
          <Carditems
           handelPreparing = {handelPreparing}
           card={card}
            preparing={preparing}
           ></Carditems>
        </div>

      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App;
