const { test, expect } = require('@playwright/test');

test('Pokemon API: Explore Pokemon data and abilities', async ({ request }) => {
    // Get data for a specific Pokemon (let's use Pikachu seeing that Capitec is hopefully a bank for Pokémon fans)

    const pokemonResponse = await request.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    expect(pokemonResponse.status()).toBe(200);
    const pokemonData = await pokemonResponse.json();

    console.log(`Exploring data for ${pokemonData.name}:`);
    console.log(`Height: ${pokemonData.height} decimetres`);
    console.log(`Weight: ${pokemonData.weight} hectograms`);

    // Verify Pikachu's type
    expect(pokemonData.types[0].type.name).toBe('electric');

    // Get Pikachu's abilities
    const abilities = pokemonData.abilities.map(ability => ability.ability.name);
    console.log(`Abilities: ${abilities.join(', ')}`);

    // Verify Pikachu has the 'static' ability
    expect(abilities).toContain('static');

    // Get data for a Pokemon ability (let's use 'static')
    const abilityResponse = await request.get('https://pokeapi.co/api/v2/ability/static');
    expect(abilityResponse.status()).toBe(200);
    const abilityData = await abilityResponse.json();

    console.log(`\nExploring the 'static' ability:`);
    console.log(`Effect: ${abilityData.effect_entries.find(entry => entry.language.name === 'en').effect}`);

    // Get a list of Pokemon types
    const typesResponse = await request.get('https://pokeapi.co/api/v2/type');
    expect(typesResponse.status()).toBe(200);
    const typesData = await typesResponse.json();

    console.log(`\nThere are ${typesData.count} Pokemon types in total.`);

    // Find a random Pokemon of the 'electric' type
    const electricTypeResponse = await request.get('https://pokeapi.co/api/v2/type/electric');
    expect(electricTypeResponse.status()).toBe(200);
    const electricTypeData = await electricTypeResponse.json();

    const randomElectricPokemon = electricTypeData.pokemon[Math.floor(Math.random() * electricTypeData.pokemon.length)].pokemon.name;
    console.log(`A random Electric-type Pokemon: ${randomElectricPokemon}`);

    // Final assertion: Ensure the random Electric Pokemon is different from Pikachu
    expect(randomElectricPokemon).not.toBe('pikachu');
});