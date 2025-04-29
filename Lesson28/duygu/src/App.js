import './App.css';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';

const cakes = [
  {
    name: 'Strawberry Cake',
    image: 'strawberrycake.png',
    theme: {
      backgroundColor: '#fff0f6',
      color: '#880e4f',
    },
    tasks: [
      'Bake the sponge cake in the oven.',
      'Spread cream between the layers and add fresh strawberries.',
      'Cover the top with whipped cream and decorate with strawberries.',
    ],
  },
  {
    name: 'Tiramisu',
    image: 'tiramisu.png',
    theme: {
      backgroundColor: '#f3e5ab',
      color: '#4e342e',
    },
    tasks: [
      'Soak the ladyfinger biscuits in coffee',
      'Layer with mascarpone cream.',
      'Dust with cocoa powder and chill in the fridge for a few hours.',
    ],
  },
];

export function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="CardWrapper">
        {cakes.map((cake) => (
          <Card key={cake.name} cake={cake} />
        ))}
      </main>
    </div>
  );
}

export default App;