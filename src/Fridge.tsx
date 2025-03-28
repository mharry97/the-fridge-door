// Fridge.tsx
import Magnet from './Magnet';

const words = [
    "fall", "serfs", "this", "creatures", "we", "entreat", "it", "downstream", "by",
    "of", "mother", "youth", "she", "an", "what", "it", "happy", "and", "its", "its",
    "is", "and", "the", "your", "these", "five", "all", "a", "settle", "sweet", "sale",
    "the", "us", "sip", "gray", "glorious", "have", "with", "us", "who", "as", "io",
    "our", "floor", "astray", "of", "unseemly", "who", "roast", "cask", "world", "car",
    "ah", "be", "salt", "down", "might", "a", "on", "and", "for", "out", "death", "the",
    "this", "feel", "as", "tilt", "than", "black", "in", "flaming", "does", "certainly",
    "are", "later", "at", "look", "youth", "lived", "a", "stars", "pope", "is", "city",
    "half", "this", "case", "a", "is", "doorstone", "says", "no", "do", "cheek", "sows",
    "passions", "alone", "the", "high"
  ];

export default function Fridge() {
  return (
    <div className='fridge'
    >
      {words.map((word, index) => (
        <Magnet
          key={index}
          word={word}
          // random positions for fun
          defaultX={Math.random() * 600}
          defaultY={Math.random() * 400}
        />
      ))}
    </div>
  );
}
