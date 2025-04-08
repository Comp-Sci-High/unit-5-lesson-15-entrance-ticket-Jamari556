// Create a function that tests the post route handler [2 pts]

async function createPotion() {
    const response = await fetch("http://localhost:3000/create-potion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        label: "Chug Jug",
        effect: "Regeneration Overtime.",
        ingredients: "Shield Potion, Medkit",
        color: "Blue",
        isExplosive: false
      })
    });
  
    const data = await response.json();
    console.log("Potion created:", data);
  }

// Call the function [1 pt]

createPotion();

// Show us the successful POST fetch [1 pt]


