let data = [
    {
        "anime": "Yu-Gi-Oh! GX",
        "character": "Jūdai Yūki",
        "quote": "There are things you can't turn back, even if you want to."
    },
    {
        "anime": "07 Ghost",
        "character": "Frau",
        "quote": "If you're going to hide a tree, put it in the forest."
    },
    {
        "anime": "Guilty Crown",
        "character": "Shū Ouma",
        "quote": "I wonder if it's the selfish people who get ahead in this world, after all."
    },
    {
        "anime": "Bleach",
        "character": "Komamura Sajin",
        "quote": "I was glad you did not pretend to be a saint and claim to love the world despite everything. That is why I decided that I would be your true friend. I would accept your sorrow. And I would share my joy. If you strayed I would reprimand you. If you made mistakes, I would forgive you. And when you found yourself in trouble, I would be there for you. So that you who learn to hate the world, would come to love it once more."
    },
    {
        "anime": "Haikyuu!!",
        "character": "Shōyō Hinata",
        "quote": "It's true that I'm not very tall. However! I can jump!"
    },
    {
        "anime": "Mondaiji-tachi Ga Isekai Kara Kuru Sou Desu Yo?",
        "character": "Izayoi Sakamaki",
        "quote": "I'm not only allowing my comrade to continue to their deaths but I will also follow her footsteps. It's clearly a show of irresponsibility... But those that did not even intend to take the responsibility in the first place can only be called cowardly and despicable."
    },
    {
        "anime": "Pokémon",
        "character": "Kasumi",
        "quote": "It's my own recipe which I call Misty's mystery stew, and it's got 47 secret ingredients."
    },
    {
        "anime": "Pandora Hearts",
        "character": "Vincent Nightray",
        "quote": "*to a dying Elliot* I really liked you. It was only thanks to you that Gil managed to live in that house without forgetting how to smile."
    },
    {
        "anime": "Detective Conan",
        "character": "Shinichi Kudou",
        "quote": "Is a reason nesessary? I don't know why you would kill someone. But as for saving someone... A logical mind isn't needed, right?"
    },
    {
        "anime": "Nodame Cantabile",
        "character": "Kiyora Miki",
        "quote": "Play to the last note, and leave no regrets."
    }
] 

for (let i = 0; i < data.length; i++) {
   let anime1 = document.createElement("p");
   anime1.textContent = data[i].anime;
   document.body.appendChild(anime1);

   let character1 = document.createElement("p");
   character1.textContent = data[i].character;
   document.body.appendChild(character1);

   let quote1 = document.createElement("p");
   quote1.textContent = data[i].quote;
   document.body.appendChild(quote1);
}


