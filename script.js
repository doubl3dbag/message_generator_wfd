//create a random meal idea to inspire the user

//generate a random number
function randomizeNum(num) {
    return Math.floor(Math.random() * num);
}

//crate meal object to hold meal categories
const meals = {

    _ethnicities: ['Chinese', 'Mexican', 'American', 'Italian', 'Greek', 'French', 'Thai', 'Indian'],

    _meals: {
        Chinese: {
            meals: ["Pecking Duck", "Biang Biang Noodles", "Dim Sum", "Xiaolongbao", "Sichuan Hot Pot"],
            discriptions: ["The popularity of Peking Duck dates back to the Yuan Dynasty. It is one of the most common dishes in Chinese cooking and can be served in a variety of ways.", "Biang biang noodles are thick, fat and all different shapes. They are cut straight from dough balls and carry a heavy but tasty dough flavor.", "Dim sum consists of bite-size pieces, usually three to four, served in a small bamboo basket.", "Xiaolongbao is a dumpling filled with soup and is easier to think of as soup served in a dumpling.", "Sichuan hot pot is beloved for the sensation felt by the infamous Sichuan pepper. This pepper can not be sufficiently described as hot or spicy; it has a nature of its own that leaves a tingling sensation on the eaters’ tongues and lips."],
            recipes: ["https://www.allrecipes.com/recipe/31972/peking-duck/", "https://thewoksoflife.com/cumin-lamb-biang-biang-noodles/", "https://lemontrend.com/recipes/ultimate-dim-sum-recipe-guide/", "https://thewoksoflife.com/steamed-shanghai-soup-dumplings-xiaolongbao/", "https://madewithlau.com/recipes/ultimate-guide-to-hot-pot"],
        },
        Mexican: {
            meals: ["Chilaquiles", "Pozole", "Tamales", "Chiles en Nogada", "Cochinita Pibil"],
            discriptions: ["Chilaquiles is a traditional breakfast dish whipped together from leftover dinner tortilla and salsa.", "Made with pork and hominy, pozole is normally eaten on special occasions, fiestas, or holidays like the Mexican Independence Day.", "Long before it was the go-to comfort food of every Mexican household, tamale fed armies of ancient Aztec warriors.", "Made with all the colours of the Mexican flag, chiles en nogada is as much a party on the eyes as it is on the palate.", "This slow-roasted pull pork dish from the Yucatan Peninsula is usually made from braised shoulders or loins of suckling pigs."],
            recipes: ["https://www.thekitchn.com/chilaquiles-recipe-268271", "https://www.simplyrecipes.com/recipes/posole_rojo/", "https://tastesbetterfromscratch.com/mexican-tamales/", "https://mexicanfoodjournal.com/chiles-en-nogada/", "https://www.simplyrecipes.com/recipes/cochinita_pibil/"],
        },
        American: {
            meals: ["Chicken Pot Pie", "Grilled Cheese Dogs", "Deep-Dish Pizza", "Cheese Burgers", "Fried Chicken"],
            discriptions: ["Tell everyone you’re having pie for dinner and see how big their smiles are.", "Can't choose? Why not both?", "The dish is deep, as the name suggests, meaning the crust rises high and allows for an artery-choking volume of cheese and tomato sauce.", "There's only one place is recognised by the Library of Congress as being the birthplace of hamburgers: New Haven, Connecticut.", "The absolute perfect chicken in my opinion."],
            recipes: ["https://www.bettycrocker.com/recipes/classic-chicken-pot-pie/60237278-5f5b-4658-a583-8d085fea6dba", "https://www.delish.com/cooking/recipe-ideas/recipes/a52599/grilled-cheese-dogs-recipe/", "https://sallysbakingaddiction.com/how-to-make-chicago-style-deep-dish-pizza/", "https://life-in-the-lofthouse.com/in-n-out-cheeseburger/", "https://www.thecountrycook.net/the-best-southern-fried-chicken/"],
        },
        Italian: {
            meals: ["Pizza Napoletana", "Lasagna", "Ossobuco alla Milanese", "Panzanella", "Spaghetti alla Carbonara"],
            discriptions: ["There are so many fantastic traditional dishes in Italy, but perhaps no other sums up the very essence of Italian cooking better than Pizza Napoletana.", "One of the world’s oldest pasta recipes, lasagna (or lasagne in Italian) is a traditional Italian comfort food made by alternating layers of pasta sheets, meat, sauce, and cheese.", "A hearty, flavorful Milanese specialty, ossobuco consists of veal shanks cooked slowly in white wine, meat broth, and vegetables.", "A staple of Tuscan cuisine, or better yet, Italy’s “cucina povera”, panzanella is a healthy, delicious bread and tomato salad usually served in central Italy during the hot summer months.", "Carbonara is neither the oldest nor the most iconic (that would be cacio e pepe) pasta dish in Rome, but it’s pure magic in your mouth."],
            recipes: ["https://www.acouplecooks.com/neapolitan-pizza-recipe/", "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/", "https://cooking.nytimes.com/recipes/3242-osso-buco-alla-milanese", "https://cooking.nytimes.com/recipes/1017518-panzanella-with-mozzarella-and-herbs", "https://cooking.nytimes.com/recipes/12965-spaghetti-carbonara"],
        },
        Greek: {
            meals: ["Moussaka", "Papoutsakia (Stuffed Eggplants)", "Pastitsio (Greek lasagna)", "Souvlaki (Gyros)", "Soutzoukakia (Greek Meatballs)"],
            discriptions: ["Moussaka is a creamy delicious dish made of spiced meat (beef or lamb) cooked in tomato sauce and then layered with fried eggplant and bechamel sauce.", "Papoutsakia is stuffed eggplants that are first baked until soft and then filled with a tomato-based meat sauce, topped with bechamel sauce and cheese, and baked till they get a beautiful golden color!", "Pastitsio is another traditional Greek dish that consists of baked layers of pasta, juicy minced beef, bechamel and tomato sauce, topped melted cheese.", "Souvlaki is considered one of the most popular dishes in Greece!", "Soutzoukakia are sausages made from a mixture of ground pork and beef, cumin, and olive oil which are cooked in a red wine sauce."],
            recipes: ["https://www.chefspencil.com/recipe/moussaka/", "https://www.chefspencil.com/recipe/papoutsakia-stuffed-eggplants/", "https://www.chefspencil.com/recipe/greek-pastitsio-baked-greek-lasagna/", "https://www.chefspencil.com/recipe/souvlaki/", "https://www.chefspencil.com/recipe/soutzoukakia/"],
        },
        French: {
            meals: ["Boeuf Bourguignon", "Coq Au Vin", "Cassoulet", "Lamb Chops with a Cognac Dijon Cream Sauce", "Chicken Cordon Bleu"],
            discriptions: ["There’s nothing more comforting and luscious than Boeuf Bourguignon, a classic French beef stew made with red wine, pearl onions, mushrooms and bacon.", "A simplified version of the classic red wine chicken stew from Burgundy.", "Susan, from The View From Great Island, took Cassoulet back to its simpler roots in an easy recipe that can be made from start to finish in an hour.", "Romantic dinner? Trying to impress your boss? These Lamb Chops will do.", "All the flavor and sophistication from a classic Chicken Cordon Bleu in a healthier baked version."],
            recipes: ["https://www.oliviascuisine.com/boeuf-bourguignon/", "https://www.thekitchn.com/recipe-weeknight-coq-au-vin-recipes-from-the-kitchn-131456", "https://theviewfromgreatisland.com/easy-cassoulet/", "https://nomageddon.com/lamb-chops-with-a-cognac-dijon-cream-sauce/", "https://keviniscooking.com/baked-chicken-cordon-bleu-maple-dijon/"],
        },
        Thai: {
            meals: ["Tom Yum Goong (Spicy Shrimp Soup)", "Som Tum (Spicy Green Papaya Salad)", "Gaeng Daeng (Red Curry)", "Pad Thai (Thai style Fried Noodles)", "Khao Pad (Fried Rice)"],
            discriptions: ["A bold, refreshing blend of fragrant lemongrass, chili, galangal, lime leaves, shallots, lime juice and fish sauce shapes this classic soup, giving it its legendary herbal kick.", "Hailing from the Northeast state of Isaan, this outlandish dish is both great divider – some can’t get enough of its bite, some can’t handle it – and greatly distinctive.", "Made with morsels of meat, red curry paste, smooth coconut milk and topped off with a sprinkling of finely sliced kaffir lime leaves, this rich, aromatic curry always gets those taste buds tingling.", "From Cape Town to Khao San Road, the default international Thai dish!", "Fried rice, egg, onion, a few herbs – nothing more, nothing less."],
            recipes: ["https://www.thaitable.com/thai/recipe/tom-yum-goong", "https://cooking.nytimes.com/recipes/1012589-green-papaya-salad", "https://cookieandkate.com/thai-red-curry-recipe/", "https://tastesbetterfromscratch.com/pad-thai/", "https://www.allrecipes.com/recipe/79543/fried-rice-restaurant-style/"],
        },
        Indian: {
            meals: ["Masala dosa", "Chaat", "Dal makhani", "Vada pav", "Stuffed paratha"],
            discriptions: ["Arguably South India’s most renowned culinary export, masala dosas are famous the world over.", "Synonymous with Delhi street food vendors, chaat is one of India’s most delicious savoury snacks.", "Most foodies will have heard of or tasted dal, but there’s nothing quite like tasting the original dish in the country where it originated from.", "Originating in the traditionally vegetarian state of Maharashtra, vada pav is as close as Indian cuisine gets to veggie burgers.", "Punjab’s foodie heritage doesn’t stop at dal makhani. Often eaten at the start of the day, stuffed parathas are seen as the breakfast of champions in northern India."],
            recipes: ["https://cooking.nytimes.com/recipes/1017153-classic-masala-dosa", "https://recipesaresimple.com/recipe/aloo-chana-chaat/", "https://www.vegrecipesofindia.com/dal-makhani-restaurant-style-recipe/", "https://hebbarskitchen.com/vada-pav-recipe-make-vada-pav-wada-pav/", "https://www.indianhealthyrecipes.com/aloo-paratha/"],
        },
    },

    //store meal
    _day: {
        _today: {
            _ethnicity: [],
            _meal: [],
            _discription: [],
            _recipe: [],
        }
    },
    //create method to generate a random meal
    getRandomMeal() {
        //create meal message structure
        const ethnicities = this._ethnicities;
        const todayEthnicity = this._day._today._ethnicity;
        const todayMeal = this._day._today._meal;
        const todayDiscription = this._day._today._discription;
        const todayRecipe = this._day._today._recipe;
        let mealsMeals = this._meals.Chinese.meals;
        let mealsDiscription = this._meals.Chinese.discriptions;
        let mealsRecipe = this._meals.Chinese.recipes;
        //create variable to hold randomly selected ethnicity and meal type
        const randomEhnicity = randomizeNum(ethnicities.length);
        const randomMealsMeals = randomizeNum(mealsMeals.length);
        //ensure the variable holding message structure are clear before adding data
        todayEthnicity.pop();
        todayMeal.pop();
        todayDiscription.pop();
        todayRecipe.pop();
        //select ethnicity of the meal and store it
        todayEthnicity.push(`The ethnicity of your meal today is: "${ethnicities[randomEhnicity]}".`);
        //once ethnicity is stored begin process of selecting remaining 
        //data that corresponds to the stored ethnicity
        if (randomEhnicity === 0) {
            todayMeal.push(`Your random meal for today will be: "${mealsMeals[randomMealsMeals]}".`);
            todayDiscription.push(`A little discription of your meal today: "${mealsDiscription[randomMealsMeals]}".`);
            todayRecipe.push(`The recipe for your meal is located here: "${mealsRecipe[randomMealsMeals]}".`);
        }
        else if (randomEhnicity === 1) {
            mealsMeals = this._meals.Mexican.meals;
            mealsDiscription = this._meals.Mexican.discriptions;
            mealsRecipe = this._meals.Mexican.recipes;
            todayMeal.push(`Your random meal for today will be: "${mealsMeals[randomMealsMeals]}".`);
            todayDiscription.push(`A little discription of your meal today: "${mealsDiscription[randomMealsMeals]}".`);
            todayRecipe.push(`The recipe for your meal is located here: "${mealsRecipe[randomMealsMeals]}".`);
        }
        else if (randomEhnicity === 2) {
            mealsMeals = this._meals.American.meals;
            mealsDiscription = this._meals.American.discriptions;
            mealsRecipe = this._meals.American.recipes;
            todayMeal.push(`Your random meal for today will be: "${mealsMeals[randomMealsMeals]}".`);
            todayDiscription.push(`A little discription of your meal today: "${mealsDiscription[randomMealsMeals]}".`);
            todayRecipe.push(`The recipe for your meal is located here: "${mealsRecipe[randomMealsMeals]}".`);
        }
        else if (randomEhnicity === 3) {
            mealsMeals = this._meals.Italian.meals;
            mealsDiscription = this._meals.Italian.discriptions;
            mealsRecipe = this._meals.Italian.recipes;
            todayMeal.push(`Your random meal for today will be: "${mealsMeals[randomMealsMeals]}".`);
            todayDiscription.push(`A little discription of your meal today: "${mealsDiscription[randomMealsMeals]}".`);
            todayRecipe.push(`The recipe for your meal is located here: "${mealsRecipe[randomMealsMeals]}".`);
        }
        else if (randomEhnicity === 4) {
            mealsMeals = this._meals.Greek.meals;
            mealsDiscription = this._meals.Greek.discriptions;
            mealsRecipe = this._meals.Greek.recipes;
            todayMeal.push(`Your random meal for today will be: "${mealsMeals[randomMealsMeals]}".`);
            todayDiscription.push(`A little discription of your meal today: "${mealsDiscription[randomMealsMeals]}".`);
            todayRecipe.push(`The recipe for your meal is located here: "${mealsRecipe[randomMealsMeals]}".`);
        }
        else if (randomEhnicity === 5) {
            mealsMeals = this._meals.French.meals;
            mealsDiscription = this._meals.French.discriptions;
            mealsRecipe = this._meals.French.recipes;
            todayMeal.push(`Your random meal for today will be: "${mealsMeals[randomMealsMeals]}".`);
            todayDiscription.push(`A little discription of your meal today: "${mealsDiscription[randomMealsMeals]}".`);
            todayRecipe.push(`The recipe for your meal is located here: "${mealsRecipe[randomMealsMeals]}".`);
        }
        else if (randomEhnicity === 6) {
            mealsMeals = this._meals.Thai.meals;
            mealsDiscription = this._meals.Thai.discriptions;
            mealsRecipe = this._meals.Thai.recipes;
            todayMeal.push(`Your random meal for today will be: "${mealsMeals[randomMealsMeals]}".`);
            todayDiscription.push(`A little discription of your meal today: "${mealsDiscription[randomMealsMeals]}".`);
            todayRecipe.push(`The recipe for your meal is located here: "${mealsRecipe[randomMealsMeals]}".`);
        }
        else if (randomEhnicity === 7) {
            mealsMeals = this._meals.Indian.meals;
            mealsDiscription = this._meals.Indian.discriptions;
            mealsRecipe = this._meals.Indian.recipes;
            todayMeal.push(`Your random meal for today will be: "${mealsMeals[randomMealsMeals]}".`);
            todayDiscription.push(`A little discription of your meal today: "${mealsDiscription[randomMealsMeals]}".`);
            todayRecipe.push(`The recipe for your meal is located here: "${mealsRecipe[randomMealsMeals]}".`);
        }
        //log each of the 4 values to ouput message into the terminal
        console.log(meals._day._today._ethnicity[0]);
        console.log(meals._day._today._meal[0]);
        console.log(meals._day._today._discription[0]);
        console.log(meals._day._today._recipe[0]);
    },
};
//add function to auto run application 
function appRun() {
    return meals.getRandomMeal();
}
//run the application
appRun();