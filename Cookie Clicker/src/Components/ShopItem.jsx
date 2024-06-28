export default function ShopItem({ name, cost, increase }) {
  return (
    <>
      <div className="Itembox">
        <h5 className="Item">
          {name}: increase eggs persecond by {increase}. Cost: {cost} eggs
          <button>Buy</button>
        </h5>
      </div>
    </>
  );
}
