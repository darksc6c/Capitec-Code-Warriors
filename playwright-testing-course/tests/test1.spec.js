const { test, expect } = require('@playwright/test');

//Fact api: https://catfact.ninja/fact
//Breed api: https://catfact.ninja/breeds?limit=5
//Facts api: https://catfact.ninja/facts?limit=5

//Instructions:
//1. Get a random cat fact +
//2. Verify the fact length +
//3. Get a list of cat breeds +
//4. Verify we got 5 breeds +
//5. Find a breed with the longest name // -
//6. Get multiple cat facts +
//7. Find the shortest fact - 
//8. Final assertion: Ensure the shortest fact is indeed shorter than the initial random fact + 

test('Cat Facts API: Breed exploration and fact verification', async ({ request }) => {
    // Get a random cat fact
    const factResponse = await request.get('https://catfact.ninja/fact');
    expect(factResponse.status()).toBe(200);
    const factData = await factResponse.json();

    console.log(`Did you know? ${factData.fact}`);

    // Verify the fact length
    expect(factData.length).toBe(factData.fact.length);

    // Get a list of cat breeds
    const breedsResponse = await request.get('https://catfact.ninja/breeds?limit=5');
    expect(breedsResponse.status()).toBe(200);
    const breedsData = await breedsResponse.json();

    // Verify we got 5 breeds
    expect(breedsData.data.length).toBe(5);

    // Find a breed with the longest name
    let longestBreedName = '';
    let longestBreedCountry = '';


    breedsData.data.forEach(breed => {
        if (breed.breed.length > longestBreedName.length) {
            longestBreedName = breed.breed;
            longestBreedCountry = breed.country;
        }
    });

    console.log(`The breed with the longest name is "${longestBreedName}" from ${longestBreedCountry}.`);

    // Get multiple cat facts
    const factsResponse = await request.get('https://catfact.ninja/facts?limit=5');
    expect(factsResponse.status()).toBe(200);
    const factsData = await factsResponse.json();

    // Find the shortest fact
    let shortestFact = factsData.data[0].fact;
    factsData.data.forEach(factObj => {
        if (factObj.fact.length < shortestFact.length) {
            shortestFact = factObj.fact;
        }
    });

    console.log(`The shortest cat fact is: "${shortestFact}"`);

    // Final assertion: Ensure the shortest fact is indeed shorter than the initial random fact
    expect(shortestFact.length).toBeLessThan(factData.fact.length);
});