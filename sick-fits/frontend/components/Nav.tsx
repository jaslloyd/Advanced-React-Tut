import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";

export default function Nav() {
  return (
    <NavStyles>
      <User>
        {({ data: { me } }) => {
          console.log(me);
          return me ? <p>{me.name}</p> : null;
        }}
      </User>
      <Link href="/items">
        <a>Shop</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
      <Link href="/orders">
        <a>Orders</a>
      </Link>
      <Link href="/me">
        <a>Account</a>
      </Link>
    </NavStyles>
  );
}
