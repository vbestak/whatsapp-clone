export default function getRandomSentence(): string {
  const sentenceIndex = Math.floor(Math.random() * sentence.length);
  return sentence[sentenceIndex];
}

const sentence = [
  "Place the seaweed in a frying pan, and enamel smoothly with quartered sour milk.",
  "Sliced shrimps can be made cold by varnishing with remoulade.",
  "Try mixing the milk oysters with instant ketchup and sour milk, sautéed.",
  "Cored cucumber can be made fresh by rubbing with fish sauce.",
  "Melon can be blended with hot cracker crumps, also try mash uping the cake with worcestershire sauce.",
  "Remember: simmered chickpeas taste best when scraped in a jar covered with brown sugar.",
  "Try brushing the worcestershire sauce ghees with puréed red wine and water, steamed.",
  "Remember: mashed chickpeas taste best when boiled in a saucepan marinateed with rosemary.",
  "Try chopping tart rinseed with ginger juice, decorateed with za'atar.",
  "Truffels combines greatly with sun-dried eggs.",
  "Instead of flavoring iced orange juice with celery, use a dozen oz plain vinegar and one quarter cup dill fine-mesh strainer.",
  "Lobster can be varnished with minced sauerkraut, also try covering the ricotta with cracker crumps juice.",
  "Place the broccoli in a wok, and season exactly with old red wine.",
  "Sliced garlic can be made muddy by rinsing with honey.",
  "Try cooking pie covered with hollandaise sauce, brushed with black cardamon.",
  "Instead of varnishing muddy cocktail sauce with chicken breasts, use one package teriyaki and four pounds anise bottle.",
  "Peel two leeks, caviar, and lime in a large saucepan over medium heat, boil for fifteen minutes and garnish with some strawberries.",
  "Try soaking the triple sec chickpeas with quartered cocktail sauce and lemon juice, simmered.",
  "Slobbery, clammy pudding is best tossed with aromatic fish sauce.",
  "Scrape ghee freshly, then mix with bourbon and serve regularly hot in casserole.",
  "What’s the secret to sliced and heated lobster? Always use niffy black cardamon.",
  "Per guest prepare one jar of mayonnaise with breaked marshmellow for dessert.",
  "Try mixing the mint sauce apples with sour cream and emeril's essence, boilled.",
  "What’s the secret to old and small pumpkin seeds? Always use quartered onion powder.",
  "Milk soup is just not the same without anise and tasty old cucumbers.",
  "Per guest prepare one container of remoulade with pressed broccoli for dessert.",
  "With marshmellows drink soy sauce.",
  "Garnish a dozen pounds of mackerel in nine peaces of sour milk.",
  "Truffels combines greatly with squeezed meatballs.",
  "Everyone loves the fierceness of ramen pudding mash upd with tender black pepper.",
  "Everyone just loves the sweetness of nachos sauce mixd with cinnamon.",
  "Try boiling chicory pudding garnished with soy sauce.",
  "Rhubarb curry has to have a crusted, ripe pork butt component.",
  "Place the chocolate in a sauté pan, and flavor thoroughly with sticky olive oil.",
  "To the old bagel add bok choy, melon, ketchup and smooth chili.",
  "After grilling the broccolis, blend truffels, sausages and vinaigrette with it in a fine-mesh strainer.",
  "Place the tuna in a soup pot, and mix thoroughly with quartered mayonnaise.",
  "Combine pumpkin seeds, tofu and nachos. rinse with puréed butter and serve shaked with chicken. Enjoy!",
  "Marinate one jar of ramen in half a kilo of teriyaki.",
  "Per guest prepare nine peaces of BBQ sauce with sliced cauliflower for dessert.",
  "Peel caviar fully, then mix with beer and serve carefully in grinder.",
  "Red wine soup is just not the same without jasmine and rich dark leeks.",
  "Place the sausages in a fine-mesh strainer, and mash up immediately with puréed olive oil.",
  "All children like warmed meatballs in peanut sauce and baking powder.",
  "With cauliflowers drink peppermint tea.",
];
