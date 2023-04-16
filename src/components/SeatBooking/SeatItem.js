import axios from "axios"
const SeatItem = props => {
 

    const {arrayList, deleteComment, toggleFavorite} = props
    const {
      id,
      row,
      column,
      type,
      state,
    } = arrayList
    const favButton = () => {
      toggleFavorite(id)
    }
    const delButton = () => {
      deleteComment(id)
    }
    return (
      <li  key={id}>
     
         <input type="checkbox" className="seats input2"/>
      </li>
     
    )
  }
  export default SeatItem
  