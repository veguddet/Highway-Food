import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Noodels With Shrimp",
        image: images.spagetti,
        duration: "30 mins",
        price: 500,
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        author: {
            profilePic: images.UserProfile5,
            name: "Venky",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.tomato,
                description: "Calories",
                quantity: "234g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Fat",
                quantity: "17g"
            },
            {
                id: 3,
                icon: icons.garlic,
                description: "Protiens",
                quantity: "33.3g"
            },
            {
                id: 4,
                icon: icons.egg,
                description: "Iron",
                quantity: "6g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Sodium",
                quantity: "7g"
            },
            {
                id: 6,
                icon: icons.rice,
                description: "Carbohydrates",
                quantity: "72.9g"
            },
            {
                id: 7,
                icon: icons.coriander,
                description: "Vitamin B",
                quantity: "2g"
            },
        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
    id: 2,
    name: "Ham Burger",
    image: images.burger,
    duration: "20 mins",
    price: 235,
    serving: 1,
    isBookmark: true,
    category: "Burger",
    author: {
        profilePic: images.UserProfile6,
        name: "Sujit",
    },
    ingredients: [
        {
            id: 1,
            icon: icons.tomato,
            description: "Calories",
            quantity: "234g"
        },
        {
            id: 2,
            icon: icons.oil,
            description: "Fat",
            quantity: "17g"
        },
        {
            id: 3,
            icon: icons.garlic,
            description: "Protiens",
            quantity: "33.3g"
        },
        {
            id: 4,
            icon: icons.egg,
            description: "Iron",
            quantity: "6g"
        },
        {
            id: 5,
            icon: icons.salt,
            description: "Sodium",
            quantity: "7g"
        },
        {
            id: 6,
            icon: icons.rice,
            description: "Carbohydrates",
            quantity: "72.9g"
        },
    ],
    viewers: [
        {
            id: 1,
            profilePic: images.UserProfile1
        },
        {
            id: 2,
            profilePic: images.UserProfile2
        },
        {
            id: 3,
            profilePic: images.UserProfile3
        },
        {
            id: 4,
            profilePic: images.UserProfile3
        }
    ]
},
    {
        id: 3,
        name: "Chicken 65",
        image: images.satay,
        duration: "40 mins",
        price: 235,
        serving: 10,
        isBookmark: true,
        category: "Non-Veg",
        author: {
            profilePic: images.UserProfile8,
            name: "Nikhil",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.egg,
                description: "Calories",
                quantity: "234g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Fat",
                quantity: "17g"
            },
            {
                id: 3,
                icon: icons.chicken,
                description: "Protiens",
                quantity: "33.3g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Iron",
                quantity: "6g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Sodium",
                quantity: "7g"
            },
            {
                id: 6,
                icon: icons.shallot,
                description: "Carbohydrates",
                quantity: "72.9g"
            },
            {
                id: 7,
                icon: icons.coriander,
                description: "Vitamin B",
                quantity: "2g"
            },
        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Meat Bone Steak with French Fries",
        image: images.steak,
        duration: "50 mins",
        price: 235,
        serving: 2,
        isBookmark: false,
        category: "Non-Veg",
        author: {
            profilePic: images.UserProfile5,
            name: "Praju",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Calories",
                quantity: "234g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Fat",
                quantity: "17g"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Protiens",
                quantity: "33.3g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Iron",
                quantity: "6g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Sodium",
                quantity: "7g"
            },
            {
                id: 6,
                icon: icons.rice,
                description: "Carbohydrates",
                quantity: "72.9g"
            },
            {
                id: 7,
                icon: icons.coriander,
                description: "Vitamin A",
                quantity: "2g"
            },
        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 5,
        name: "Chocolate Pastry",
        image: images.pastry,
        duration: "20 mins",
        price: 235,
        serving: 1,
        isBookmark: false,
        category: "Cake",
        author: {
            profilePic: images.UserProfile5,
            name: "Nandini",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.cheese,
                description: "Calories",
                quantity: "234g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Fat",
                quantity: "17g"
            },
            {
                id: 3,
                icon: icons.sugar,
                description: "Protiens",
                quantity: "33.3g"
            },
            {
                id: 4,
                icon: icons.salt,
                description: "Iron",
                quantity: "6g"
            },
            {
                id: 5,
                icon: icons.sugar,
                description: "Sugar",
                quantity: "37g"
            },
            {
                id: 6,
                icon: icons.oil,
                description: "Carbohydrates",
                quantity: "123.9g"
            },
        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 6,
        name: "Shrimp Sauce",
        image: images.laksa,
        duration: "30 mins",
        price: 235,
        serving: 1,
        isBookmark: true,
        category: "Sea-Food",
        author: {
            profilePic: images.UserProfile9,
            name: "Anushka",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Calories",
                quantity: "234g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Fat",
                quantity: "17g"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Protiens",
                quantity: "33.3g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Iron",
                quantity: "6g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Sodium",
                quantity: "7g"
            },
            {
                id: 6,
                icon: icons.shallot,
                description: "Carbohydrates",
                quantity: "72.9g"
            },
            {
                id: 7,
                icon: icons.onion,
                description: "Vitamin C",
                quantity: "2g"
            },
        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 7,
        name: "Rice and Starters",
        image: images.nasiLemak,
        duration: "25 mins",
        price: 235,
        serving: 10,
        isBookmark: true,
        category: "Veg",
        author: {
            profilePic: images.UserProfile7,
            name: "Prabhas",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.rice,
                description: "Calories",
                quantity: "234g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Fat",
                quantity: "17g"
            },
            {
                id: 3,
                icon: icons.shallot,
                description: "Protiens",
                quantity: "33.3g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Iron",
                quantity: "6g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Sodium",
                quantity: "7g"
            },
            {
                id: 6,
                icon: icons.potato,
                description: "Carbohydrates",
                quantity: "72.9g"
            },
            {
                id: 7,
                icon: icons.lemongrass,
                description: "Vitamin D",
                quantity: "2g"
            },
        ],
        viewers: [

        ]
    },

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}