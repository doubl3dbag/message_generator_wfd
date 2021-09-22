//create a random meal idea to inspire the user

//generate a random number
const randomizeNum = () => {
    Math.floor(Math.random() * 10);
}
const foodEthnicities = ["Chinese", "Mexican", "American", "Italian", "Greek", "French", "Thai", "Indian"]

const mealTypes = {
    Chinese: {
        meals: {
            "Peking Duck": {
                Discription: "The popularity of Peking Duck dates back to the Yuan Dynasty. It is one of the most common dishes in Chinese cooking and can be served in a variety of ways.",
                Recipie: "https://www.allrecipes.com/recipe/31972/peking-duck/",
            },
            "Biang Biang Noodles": {
                Discription: "Biang biang noodles are thick, fat and all different shapes. They are cut straight from dough balls and carry a heavy but tasty dough flavor. ",
                Recipie: "https://thewoksoflife.com/cumin-lamb-biang-biang-noodles/",
            },
            "Dim Sum": {
                Discription: "Dim sum consists of bite-size pieces, usually three to four, served in a small bamboo basket.",
                Recipie: "https://lemontrend.com/recipes/ultimate-dim-sum-recipe-guide/",
            },
            Xiaolongbao: {
                Discription: "Xiaolongbao is a dumpling filled with soup and is easier to think of as soup served in a dumpling.",
                Recipie: "https://thewoksoflife.com/steamed-shanghai-soup-dumplings-xiaolongbao/",
            },
            "Sichuan Hot Pot": {
                Discription: "Sichuan hot pot is beloved for the sensation felt by the infamous Sichuan pepper. This pepper can not be sufficiently described as hot or spicy; it has a nature of its own that leaves a tingling sensation on the eaters’ tongues and lips.",
                Recipie: "https://madewithlau.com/recipes/ultimate-guide-to-hot-pot",
            },
        },
    },
    Mexican: {
        meals: {
            Chilaquiles: {
                Discription: "Chilaquiles is a traditional breakfast dish whipped together from leftover dinner tortilla and salsa.",
                Recipie: "https://www.thekitchn.com/chilaquiles-recipe-268271",
            },
            Pozole: {
                Discription: "Made with pork and hominy, pozole is normally eaten on special occasions, fiestas, or holidays like the Mexican Independence Day.",
                Recipie: "https://www.simplyrecipes.com/recipes/posole_rojo/",
            },
            Tamales: {
                Discription: "Long before it was the go-to comfort food of every Mexican household, tamale fed armies of ancient Aztec warriors.",
                Recipie: "https://tastesbetterfromscratch.com/mexican-tamales/",
            },
            "Chiles en Nogada": {
                Discription: "Made with all the colours of the Mexican flag, chiles en nogada is as much a party on the eyes as it is on the palate.",
                Recipie: "https://mexicanfoodjournal.com/chiles-en-nogada/",
            },
            "Cochinita Pibil": {
                Discription: "This slow-roasted pull pork dish from the Yucatan Peninsula is usually made from braised shoulders or loins of suckling pigs.",
                Recipie: "https://www.simplyrecipes.com/recipes/cochinita_pibil/",
            },
        },
    },
    American: {
        meals: {
            "Chicken Pot Pie": {
                Discription: "Tell everyone you’re having pie for dinner and see how big their smiles are.",
                Recipie: "https://www.bettycrocker.com/recipes/classic-chicken-pot-pie/60237278-5f5b-4658-a583-8d085fea6dba",
            },
            "Grilled Cheese Dogs": {
                Discription: "Can't choose? Why not both?",
                Recipie: "https://www.delish.com/cooking/recipe-ideas/recipes/a52599/grilled-cheese-dogs-recipe/",
            },
            "Deep-Dish Pizza": {
            Discription: "The dish is deep, as the name suggests, meaning the crust rises high and allows for an artery-choking volume of cheese and tomato sauce. ",
                Recipie: "https://sallysbakingaddiction.com/how-to-make-chicago-style-deep-dish-pizza/",
            },
            "Cheese Burgers": {
                Discription: "There's only one place is recognised by the Library of Congress as being the birthplace of hamburgers: New Haven, Connecticut.",
                Recipie: "https://life-in-the-lofthouse.com/in-n-out-cheeseburger/",
            },
            "Fried Chicken": {
                Discription: "The absolute perfect chicken in my opinion.",
                Recipie: "https://www.thecountrycook.net/the-best-southern-fried-chicken/",
            },
        },
    },
    Italian: {
        meals: {
            "Pizza Napoletana": {
                Discription: "There are so many fantastic traditional dishes in Italy, but perhaps no other sums up the very essence of Italian cooking better than Pizza Napoletana.",
                Recipie: "https://www.acouplecooks.com/neapolitan-pizza-recipe/"
            },
            Lasagna: {
                Discription: "One of the world’s oldest pasta recipes, lasagna (or lasagne in Italian) is a traditional Italian comfort food made by alternating layers of pasta sheets, meat, sauce, and cheese.",
                Recipie: "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/",
            },
            "Ossobuco alla Milanese": {
                Discription: "A hearty, flavorful Milanese specialty, ossobuco consists of veal shanks cooked slowly in white wine, meat broth, and vegetables.",
                Recipie: "https://cooking.nytimes.com/recipes/3242-osso-buco-alla-milanese",
            },
            Panzanella: {
                Discription: "A staple of Tuscan cuisine, or better yet, Italy’s “cucina povera”, panzanella is a healthy, delicious bread and tomato salad usually served in central Italy during the hot summer months.",
                Recipie: "https://cooking.nytimes.com/recipes/1017518-panzanella-with-mozzarella-and-herbs",
            },
            "Spaghetti alla Carbonara": {
                Discription: "Carbonara is neither the oldest nor the most iconic (that would be cacio e pepe) pasta dish in Rome, but it’s pure magic in your mouth.",
                Recipie: "https://cooking.nytimes.com/recipes/12965-spaghetti-carbonara",
            },
        },
    },
    Greek: {
        meals: {
            Moussaka: {
                Discription: "Moussaka is a creamy delicious dish made of spiced meat (beef or lamb) cooked in tomato sauce and then layered with fried eggplant and bechamel sauce.",
                Recipie: "https://www.chefspencil.com/recipe/moussaka/",
            },
            "Papoutsakia (Stuffed Eggplants)": {
                Discription: "Papoutsakia is stuffed eggplants that are first baked until soft and then filled with a tomato-based meat sauce, topped with bechamel sauce and cheese, and baked till they get a beautiful golden color!",
                Recipie: "https://www.chefspencil.com/recipe/papoutsakia-stuffed-eggplants/",
            },
            "Pastitsio (Greek lasagna)": {
                Discription: "Pastitsio is another traditional Greek dish that consists of baked layers of pasta, juicy minced beef, bechamel and tomato sauce, topped melted cheese.",
                Recipie: "https://www.chefspencil.com/recipe/greek-pastitsio-baked-greek-lasagna/",
            },
            "Souvlaki (Gyros)": {
                Discription: "Souvlaki is considered one of the most popular dishes in Greece!",
                Recipie: "https://www.chefspencil.com/recipe/souvlaki/",
            },
            "Soutzoukakia (Greek Meatballs) ": {
                Discription: "Soutzoukakia are sausages made from a mixture of ground pork and beef, cumin, and olive oil which are cooked in a red wine sauce.",
                Recipie: "https://www.chefspencil.com/recipe/soutzoukakia/",
            },
        },
    },
    Thai: {
        meals: {
            "Tom Yum Goong (Spicy Shrimp Soup)": {
                Discription: "A bold, refreshing blend of fragrant lemongrass, chili, galangal, lime leaves, shallots, lime juice and fish sauce shapes this classic soup, giving it its legendary herbal kick.",
                Recipie: "https://www.thaitable.com/thai/recipe/tom-yum-goong"
            },
            "Som Tum (Spicy Green Papaya Salad)": {
                Discription: "Hailing from the Northeast state of Isaan, this outlandish dish is both great divider – some can’t get enough of its bite, some can’t handle it – and greatly distinctive.",
                Recipie: "https://cooking.nytimes.com/recipes/1012589-green-papaya-salad",
            },
            "Gaeng Daeng (Red Curry)": {
                Discription: "Made with morsels of meat, red curry paste, smooth coconut milk and topped off with a sprinkling of finely sliced kaffir lime leaves, this rich, aromatic curry always gets those taste buds tingling.",
                Recipie: "https://cookieandkate.com/thai-red-curry-recipe/",
            },
            "Pad Thai (Thai style Fried Noodles)": {
                Discription: "From Cape Town to Khao San Road, the default international Thai dish!",
                Recipie: "https://tastesbetterfromscratch.com/pad-thai/",
            },
            "Khao Pad (Fried Rice)": {
                Discription: "Fried rice, egg, onion, a few herbs – nothing more, nothing less.",
                Recipie: "https://www.allrecipes.com/recipe/79543/fried-rice-restaurant-style/",
            },
        },
    },
    French: {
        meals: {
            "Boeuf Bourguignon": {
                Discription: "There’s nothing more comforting and luscious than Boeuf Bourguignon, a classic French beef stew made with red wine, pearl onions, mushrooms and bacon.",
                Recipie: "https://www.oliviascuisine.com/boeuf-bourguignon/",
            },
            "Coq Au Vin": {
                Discription: "A simplified version of the classic red wine chicken stew from Burgundy.",
                Recipie: "https://www.thekitchn.com/recipe-weeknight-coq-au-vin-recipes-from-the-kitchn-131456",
            },
            Cassoulet: {
                Discription: "Susan, from The View From Great Island, took Cassoulet back to its simpler roots in an easy recipe that can be made from start to finish in an hour.",
                Recipie: "https://theviewfromgreatisland.com/easy-cassoulet/",
            },
            "Lamb Chops with a Cognac Dijon Cream Sauce": {
                Discription: "Romantic dinner? Trying to impress your boss? These Lamb Chops will do.",
                Recipie: "https://nomageddon.com/lamb-chops-with-a-cognac-dijon-cream-sauce/",
            },
            "Chicken Cordon Bleu": {
                Discription: "All the flavor and sophistication from a classic Chicken Cordon Bleu in a healthier baked version.",
                Recipie: "https://keviniscooking.com/baked-chicken-cordon-bleu-maple-dijon/",
            },
        },
    },
    Indian: {
        meals: {
            "Masala dosa": {
                Discription: "Arguably South India’s most renowned culinary export, masala dosas are famous the world over.",
                Recipie: "https://cooking.nytimes.com/recipes/1017153-classic-masala-dosa",
            },
            Chaat: {
                Discription: "Synonymous with Delhi street food vendors, chaat is one of India’s most delicious savoury snacks.",
                Recipie: "https://recipesaresimple.com/recipe/aloo-chana-chaat/",
            },
            "Dal makhani": {
                Discription: "Most foodies will have heard of or tasted dal, but there’s nothing quite like tasting the original dish in the country where it originated from.",
                Recipie: "https://www.vegrecipesofindia.com/dal-makhani-restaurant-style-recipe/",
            },
            "Vada pav": {
                Discription: "Originating in the traditionally vegetarian state of Maharashtra, vada pav is as close as Indian cuisine gets to veggie burgers.",
                Recipie: "https://hebbarskitchen.com/vada-pav-recipe-make-vada-pav-wada-pav/",
            },
            "Stuffed paratha": {
                Discription: "Punjab’s foodie heritage doesn’t stop at dal makhani. Often eaten at the start of the day, stuffed parathas are seen as the breakfast of champions in northern India.",
                Recipie: "https://www.indianhealthyrecipes.com/aloo-paratha/",
            },
        },
    }
};

//messages the program will output


//**message 1 - You had ______ for dinner yesterday? */

//what what ethnicity is the dinner today?
//**message 2 - Your dinner will be ______ ethnicity. */

//the name of the meal
//**message 3 - ______ is the name of today's dinner! */