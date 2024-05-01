import './Header.css';

export default function Header() {
  return (
    <div className="header-div">
      <div className="sets-view-div">
        <button>Sets</button>
      </div>
      <div className="title-div">
        <h1>SpellCraft</h1>
      </div>
      <div className="decks-view-div">
        <img src="/images/deckview.png" />
      </div>
    </div>
  );
}
