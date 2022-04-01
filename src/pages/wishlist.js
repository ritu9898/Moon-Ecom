import axios from "axios";
import { users } from '../backend/db/users';

export default function Wishlist() {

  var id = users.filter((f) => f.email == 'adarshbalika@gmail.com')[0]._id;
  console.log(id);

  axios.get('/api/user/wishlist', users.first)
  .then(res => {
    console.log('res'+res);
  }).catch((err) => {
    console.log(err);
  })

  return(
    <>
    <h2>Wishlist</h2>
    </>
  );
}
