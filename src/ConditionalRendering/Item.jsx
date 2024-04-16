export function Item({ name, isPacked }) {
    return (
      <li className="item">
        {/* {name} {isPacked && '✔'} */}
        {name} {!isPacked && '❌'}
      </li>
    );
  }