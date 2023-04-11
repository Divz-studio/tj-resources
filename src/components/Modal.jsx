import EditItem from './EditItem'
import NewItem from './NewItem'
import NewJob from './NewJob'

const Modal = ({ toggleModal, setToggleModal }) => {

  return (
    <div style={{display: toggleModal ? "flex" : "none"}}>
        <div onClick={() => setToggleModal(false)} className="overlay"></div>
        <NewItem />
    </div>
  )
}

export default Modal