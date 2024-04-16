export function Item2({ name, importance }) {
    return (
      <li className="item">
        {name}{importance>0 &&<i>(Importance {importance})</i>}
      </li>
    );
  }