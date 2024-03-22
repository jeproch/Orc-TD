// main.js

import { checkOrcDeath } from './damage.js';

// Call checkOrcDeath() when the orc is killed

// Define a key for storing the currency data in localStorage
const currencyKey = 'userCurrency';

function writeCurrency(currency) {
    // Convert currency to JSON format
    const data = JSON.stringify(currency);

    // Save data to localStorage
    localStorage.setItem(currencyKey, data);
    
    console.log('Currency saved to localStorage:', currency);
}

function readCurrency() {
    // Read data from localStorage
    const data = localStorage.getItem(currencyKey);

    if (data) {
        // Parse JSON-formatted data
        return JSON.parse(data);
    } else {
        // If no data exists, return default currency
        return { orcCoins: 0 };
    }
}


function increaseCurrency() {
  // Read current currency
  let userCurrency = readCurrency();

  // Increase orcCoins by ten
  userCurrency.orcCoins += 10;

  // Write updated currency back
  writeCurrency(userCurrency);
}

// Example usage
const userCurrency = readCurrency();
console.log('Current currency:', userCurrency);

// Update orcCoins
userCurrency.orcCoins += 100;

// Write updated currency to localStorage
writeCurrency(userCurrency);
