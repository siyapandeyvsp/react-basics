export function Drink({ name }) {
    let part,caffine,age
    if (name==='tea'){
        part='leaf'
        caffine='15–70 mg/cup'
        age='4,000+ years'
    }else {
        part='bean'
        caffine= '80–185 mg/cup'
        age='1,000+ years'

    }
    return (
      <section className="flex flex-col " >
        <h1 className="text-xl font-bold">{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffine}</dd>
          <dt>Age</dt>
          <dd>{age }</dd>
        </dl>
      </section>
    );
  }