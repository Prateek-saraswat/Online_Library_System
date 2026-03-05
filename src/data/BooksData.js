const books = [
  {
    id: 1,
    category: "philosophical",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.7,
    launchDate: "1813-01-28",
    pages: 432,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/500px-PrideAndPrejudiceTitlePage.jpg",
    description:
      "A novel by Jane Austen exploring morality, love, marriage, and social class in early 19th-century England.",
  },
  {
    id: 2,
    category: "fantasy",
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    rating: 4.8,
    launchDate: "1937-09-21",
    pages: 310,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
    description:
      "J. R. R. Tolkien’s fantasy adventure following Bilbo Baggins on a quest to reclaim treasure guarded by a dragon.",
  },
  {
    id: 3,
    category: "sci-fi",
    title: "1984",
    author: "George Orwell",
    rating: 4.9,
    launchDate: "1949-06-08",
    pages: 328,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Nineteen_Eighty_Four.jpg",
    description:
      "George Orwell’s dystopian novel about surveillance, authoritarianism, and loss of individual freedom.",
  },
  {
    id: 4,
    category: "philosophical",
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: 4.3,
    launchDate: "1988-01-01",
    pages: 208,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/8/88/Alchemistposter1986.jpg",
    description:
      "A philosophical novel by Paulo Coelho about destiny, dreams, and personal legend.",
  },
  {
    id: 5,
    category: "history",
    title: "War and Peace",
    author: "Leo Tolstoy",
    rating: 4.6,
    launchDate: "1869-01-01",
    pages: 1225,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg/500px-Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg",
    description:
      "Leo Tolstoy’s epic novel depicting Russian society during the Napoleonic Wars.",
  },
  {
    id: 6,
    category: "philosophical",
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    rating: 4.5,
    launchDate: "1892-10-14",
    pages: 307,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Adventures_of_sherlock_holmes.jpg",
    description:
      "Arthur Conan Doyle’s detective stories highlighting logic, observation, and justice.",
  },
  {
    id: 7,
    category: "philosophical",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    rating: 4.6,
    launchDate: "1847-10-16",
    pages: 500,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/500px-Jane_Eyre_title_page.jpg",
    description:
      "Charlotte Brontë’s novel about independence, morality, and emotional resilience.",
  },
  {
    id: 8,
    category: "fantasy",
    title: "Harry Potter and the Philosopher’s Stone",
    author: "J. K. Rowling",
    rating: 4.8,
    launchDate: "1997-06-26",
    pages: 223,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    description:
      "The beginning of J. K. Rowling’s wizarding world and Harry Potter’s journey.",
  },
  {
    id: 9,
    category: "sci-fi",
    title: "Dune",
    author: "Frank Herbert",
    rating: 4.7,
    launchDate: "1965-08-01",
    pages: 412,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Dune_First_Edition.jpg",
    description:
      "Frank Herbert’s science fiction epic about power, politics, and survival on Arrakis.",
  },
  {
    id: 10,
    category: "history",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.8,
    launchDate: "1960-07-11",
    pages: 281,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG",
    description:
      "Harper Lee’s novel addressing racial injustice in the American South.",
  },
  {
    id: 11,
    category: "philosophical",
    title: "Moby-Dick",
    author: "Herman Melville",
    rating: 4.2,
    launchDate: "1851-10-18",
    pages: 635,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Moby-Dick_FE_title_page.jpg",
    description:
      "Herman Melville’s novel about obsession, fate, and the limits of knowledge.",
  },
  {
    id: 12,
    category: "fantasy",
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    rating: 4.9,
    launchDate: "1954-07-29",
    pages: 423,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
    description:
      "The first part of The Lord of the Rings, following the quest to destroy the One Ring.",
  },
  {
    id: 13,
    category: "sci-fi",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    rating: 4.4,
    launchDate: "1953-10-19",
    pages: 249,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
    description:
      "Ray Bradbury’s novel about censorship and the destruction of knowledge.",
  },
  {
    id: 14,
    category: "fantasy",
    title: "Dracula",
    author: "Bram Stoker",
    rating: 4.3,
    launchDate: "1897-05-26",
    pages: 418,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Dracula_1st_ed_cover_reproduction.jpg",
    description:
      "Bram Stoker’s gothic novel that defined modern vampire mythology.",
  },
  {
    id: 15,
    category: "philosophical",
    title: "Great Expectations",
    author: "Charles Dickens",
    rating: 4.5,
    launchDate: "1861-08-01",
    pages: 505,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Great_Expectations_vol1.jpg",
    description:
      "Charles Dickens’ novel of personal growth, ambition, and morality.",
  },
  {
    id: 16,
    category: "philosophical",
    title: "The Republic",
    author: "Plato",
    rating: 4.4,
    launchDate: "0380-01-01",
    pages: 416,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Platon-Politeia-1578.jpg",
    description:
      "Plato’s dialogue on justice, political theory, and the ideal state.",
  },
  {
    id: 17,
    category: "history",
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    rating: 4.9,
    launchDate: "1947-06-25",
    pages: 283,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Diary_of_a_Young_Girl.jpg",
    description:
      "Anne Frank’s diary documenting her life during the Holocaust.",
  },
  {
    id: 18,
    category: "fantasy",
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    rating: 4.1,
    launchDate: "1883-11-14",
    pages: 292,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Treasure_Island_title_page.jpg",
    description: "A pirate adventure novel by Robert Louis Stevenson.",
  },
  {
    id: 19,
    category: "sci-fi",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    rating: 4.6,
    launchDate: "1988-04-01",
    pages: 256,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/b/bb/A_Brief_History_of_Time.jpg",
    description: "Stephen Hawking explains cosmology, time, and black holes.",
  },
  {
    id: 20,
    category: "history",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.4,
    launchDate: "1925-04-10",
    pages: 218,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    description:
      "A critique of wealth, love, and the American Dream by F. Scott Fitzgerald.",
  },
  {
    id: 21,
    category: "philosophical",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    rating: 4.8,
    launchDate: "1866-01-01",
    pages: 671,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Crimeandpunishmentcover.png",
    description:
      "Dostoevsky’s psychological exploration of guilt and redemption.",
  },
  {
    id: 22,
    category: "history",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    rating: 4.3,
    launchDate: "1605-01-16",
    pages: 863,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Don_Quijote_1605.jpg",
    description:
      "A satirical novel by Miguel de Cervantes about idealism and reality.",
  },
  {
    id: 23,
    category: "history",
    title: "Les Misérables",
    author: "Victor Hugo",
    rating: 4.7,
    launchDate: "1862-01-01",
    pages: 1463,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Les_Miserables_1862.jpg",
    description: "Victor Hugo’s epic story of justice, love, and revolution.",
  },
  {
    id: 24,
    category: "philosophical",
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    rating: 4.0,
    launchDate: "1951-07-16",
    pages: 277,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg",
    description:
      "A novel about teenage alienation and identity by J. D. Salinger.",
  },
  {
    id: 25,
    category: "history",
    title: "Animal Farm",
    author: "George Orwell",
    rating: 4.6,
    launchDate: "1945-08-17",
    pages: 112,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Animal_Farm_-_1st_edition.jpg",
    description:
      "George Orwell’s political allegory critiquing totalitarianism.",
  },
  {
    id: 26,
    category: "sci-fi",
    title: "Brave New World",
    author: "Aldous Huxley",
    rating: 4.4,
    launchDate: "1932-01-01",
    pages: 311,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
    description: "Aldous Huxley’s dystopian vision of a controlled society.",
  },
  {
    id: 27,
    category: "poetry",
    title: "The Odyssey",
    author: "Homer",
    rating: 4.5,
    launchDate: "0800-01-01",
    pages: 541,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Odyssey-crop.jpg",
    description: "Homer’s epic poem about Odysseus’ journey home.",
  },
  {
    id: 28,
    category: "poetry",
    title: "The Iliad",
    author: "Homer",
    rating: 4.4,
    launchDate: "0750-01-01",
    pages: 683,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Iliad-crop.jpg",
    description: "Homer’s epic poem describing the Trojan War.",
  },
  {
    id: 29,
    category: "philosophical",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    rating: 4.3,
    launchDate: "1847-12-01",
    pages: 416,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/WutheringHeightsTitlePage.jpg",
    description: "Emily Brontë’s intense novel of love and revenge.",
  },
  {
    id: 30,
    category: "fantasy",
    title: "Frankenstein",
    author: "Mary Shelley",
    rating: 4.4,
    launchDate: "1818-01-01",
    pages: 280,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Frankenstein_1818_edition_title_page.jpg",
    description:
      "Mary Shelley’s novel about creation, science, and responsibility.",
  },
  {
    id: 31,
    category: "history",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    rating: 4.6,
    launchDate: "2003-05-29",
    pages: 371,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg",
    description:
      "A novel by Khaled Hosseini exploring friendship and redemption.",
  },
  {
    id: 32,
    category: "history",
    title: "The Book Thief",
    author: "Markus Zusak",
    rating: 4.7,
    launchDate: "2005-03-14",
    pages: 552,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg",
    description: "A World War II story narrated by Death.",
  },
  {
    id: 33,
    category: "history",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    rating: 4.6,
    launchDate: "2011-01-01",
    pages: 443,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Sapiens_A_Brief_History_of_Humankind.jpg",
    description: "Yuval Noah Harari explores the history of humankind.",
  },
  {
    id: 34,
    category: "philosophical",
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4.8,
    launchDate: "2018-10-16",
    pages: 320,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/3/38/Atomic_Habits_cover.jpg",
    description: "James Clear explains how habits shape success.",
  },
  {
    id: 35,
    category: "history",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    rating: 4.2,
    launchDate: "1997-01-01",
    pages: 336,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Rich_Dad_Poor_Dad.jpg",
    description: "A personal finance book by Robert Kiyosaki.",
  },
  {
    id: 36,
    category: "philosophical",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    rating: 4.3,
    launchDate: "1937-01-01",
    pages: 238,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Think_and_Grow_Rich.jpg",
    description: "Napoleon Hill’s classic book on success philosophy.",
  },
  {
    id: 37,
    category: "philosophical",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    rating: 4.4,
    launchDate: "2012-02-28",
    pages: 371,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Power_of_Habit.jpg",
    description: "Charles Duhigg explains how habits work and change.",
  },
  {
    id: 38,
    category: "philosophical",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: 4.6,
    launchDate: "2020-09-08",
    pages: 256,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Psychology_of_Money.jpg",
    description: "Morgan Housel explains behavioral finance concepts.",
  },
  {
    id: 39,
    category: "philosophical",
    title: "Ikigai",
    author: "Héctor García",
    rating: 4.1,
    launchDate: "2016-01-01",
    pages: 208,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/Ikigai_book_cover.jpg",
    description: "A Japanese philosophy for purpose and longevity.",
  },
  {
    id: 40,
    category: "philosophical",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    rating: 4.0,
    launchDate: "2016-09-13",
    pages: 224,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/2/25/The_Subtle_Art_of_Not_Giving_a_Fuck.png",
    description: "Mark Manson’s counterintuitive approach to life values.",
  },
  {
    id: 41,
    category: "philosophical",
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    rating: 4.5,
    launchDate: "1952-09-01",
    pages: 127,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/7/73/The_Old_Man_and_the_Sea.jpg",
    description: "Ernest Hemingway’s novel about perseverance and dignity.",
  },
  {
    id: 42,
    category: "philosophical",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    rating: 4.3,
    launchDate: "1890-06-20",
    pages: 254,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/The_Picture_of_Dorian_Gray_%281890%29.png",
    description: "Oscar Wilde’s novel on vanity and moral corruption.",
  },
  {
    id: 43,
    category: "philosophical",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    rating: 4.8,
    launchDate: "1880-01-01",
    pages: 824,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/The_Brothers_Karamazov.jpg",
    description: "A philosophical novel on faith, doubt, and free will.",
  },
  {
    id: 44,
    category: "fantasy",
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    rating: 4.7,
    launchDate: "1950-10-16",
    pages: 767,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg",
    description: "C. S. Lewis’s fantasy series set in the land of Narnia.",
  },
  {
    id: 45,
    category: "fantasy",
    title: "Journey to the Center of the Earth",
    author: "Jules Verne",
    rating: 4.2,
    launchDate: "1864-11-25",
    pages: 183,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Journey_to_the_Center_of_the_Earth_1874.jpg",
    description: "Jules Verne’s adventure exploring Earth’s interior.",
  },
  {
    id: 46,
    category: "sci-fi",
    title: "The Time Machine",
    author: "H. G. Wells",
    rating: 4.1,
    launchDate: "1895-05-07",
    pages: 118,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Time_Machine_%281st_ed%29.jpg",
    description: "H. G. Wells’ novel that introduced time travel.",
  },
  {
    id: 47,
    category: "history",
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    rating: 4.7,
    launchDate: "1877-01-01",
    pages: 864,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/AnnaKareninaTitlePage.jpg",
    description: "Leo Tolstoy’s novel about love, society, and tragedy.",
  },
  {
    id: 48,
    category: "history",
    title: "The Communist Manifesto",
    author: "Karl Marx & Friedrich Engels",
    rating: 4.0,
    launchDate: "1848-02-21",
    pages: 80,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Manifesto_of_the_Communist_Party.jpg",
    description: "Karl Marx and Friedrich Engels’ political work.",
  },
];

export default books;
