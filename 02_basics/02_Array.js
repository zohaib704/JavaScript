const mrvlhero = ["thor", "ironman", "spideman"]
const dc_hero = ["superman", "flash", "batman"]

// mrvlhero.push(dc_hero)

// const allhero = mrvlhero.concat( dc_hero)
const allhero = [...mrvlhero, ...dc_hero]
console.log(allhero);