import { useState } from 'react';
import { CoinButton } from './CoinButton';
import './style.css';

/*
  Zadání: V tomto úkolu máme několik tlačítek, která představují mince. Při kliknutí na 
    tlačítko chceme do celé částky přidat hodnotu mince.

  Krok 1: Do komponenty `CoinButton` přidejte prop `onCoinClick`, která bude očekávat 
    funkci, která se zavolá při kliknutí na tlačítko. Komponenta funkci zavolá s hodnotou své 
    prop `value`.

  Krok 2: V komponentě `Ukol2` založte funkci `handleCoinClick`, která bude mít jeden 
    parametr `value`. Ve funkci přidejte k hodnotě `amount` hodnotu `value`. Tuto funkci pak 
    předejte komponentě `CoinButton` jako prop `onCoinClick`.

  Vykoušejte, že jde přidat částka pomocí tlačítek.
*/

export const Ukol2 = () => {
  const [amount, setAmount] = useState(0);

  const handleCoinClick = (value) => {
    setAmount(amount + value);
  };

  return (
    <>
      <p>
        <strong>Částka: {amount} Kč</strong>
      </p>
      <div className="button-group">
        <CoinButton onCoinClick={handleCoinClick} value={1} />
        <CoinButton onCoinClick={handleCoinClick} value={2} />
        <CoinButton onCoinClick={handleCoinClick} value={5} />
        <CoinButton onCoinClick={handleCoinClick} value={10} />
        <CoinButton onCoinClick={handleCoinClick} value={20} />
        <CoinButton onCoinClick={handleCoinClick} value={50} />
      </div>
    </>
  );
};
