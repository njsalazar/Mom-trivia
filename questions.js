// 50 questions across 5 categories. `answer` is the index of the correct option.
// `note` is an optional fun-fact one-liner the host can read after the reveal.
const QUESTIONS = [
  // -------------------- TV MOMS --------------------
  {
    category: "TV Moms",
    question: 'Complete the Mean Girls line: "I\'m not a regular mom, I\'m a ___ mom."',
    options: ["cool", "hot", "fun", "chill"],
    answer: 0,
    note: "Amy Poehler as Mrs. George, juice box in hand."
  },
  {
    category: "TV Moms",
    question:
      "On Gilmore Girls, what is the name of the inn Lorelai eventually owns with Sookie?",
    options: ["The Independence Inn", "The Dragonfly Inn", "Stars Hollow Inn", "The Cheshire Cat"],
    answer: 1,
    note: "She works her way up from concierge at the Independence Inn first."
  },
  {
    category: "TV Moms",
    question:
      "Who is the matriarch of the Pearson family on NBC's This Is Us?",
    options: ["Beth Pearson", "Rebecca Pearson", "Kate Pearson", "Sandra Pearson"],
    answer: 1,
    note: "Played by Mandy Moore, aging across six seasons of prosthetics."
  },
  {
    category: "TV Moms",
    question: "Which Friends character gives birth to a baby girl named Emma?",
    options: ["Monica", "Phoebe", "Rachel", "Janice"],
    answer: 2,
    note: "Ross is the dad; the labor episode runs an absurdly long 24 hours."
  },
  {
    category: "TV Moms",
    question: "Who is the matriarch — and momager — of the Kardashian-Jenner clan?",
    options: ["Kourtney Jenner", "Kris Jenner", "Khloé Kardashian", "Kendall Jenner"],
    answer: 1,
    note: "She owns a 15% commission on her kids' empire. You're doing amazing, sweetie."
  },
  {
    category: "TV Moms",
    question: "On Modern Family, what is the name of Claire Dunphy's perpetually-flustered husband?",
    options: ["Jay", "Mitchell", "Phil", "Cameron"],
    answer: 2,
    note: "Peerless real estate agent and inventor of the Dunphy-do."
  },
  {
    category: "TV Moms",
    question:
      "Beth Dutton, the most quotable mom-coded character on Yellowstone, is married to which ranch hand?",
    options: ["Rip Wheeler", "Kayce Dutton", "Jamie Dutton", "Lloyd Pierce"],
    answer: 0,
    note: '"You are the trailer park, I am the tornado."'
  },
  {
    category: "TV Moms",
    question:
      "On Schitt's Creek, Moira Rose has a famously elaborate collection of what?",
    options: ["Caftans", "Wigs", "Pearls", "Vintage cocktail rings"],
    answer: 1,
    note: "She names them. Eleanora, Cybil, you know the rest."
  },
  {
    category: "TV Moms",
    question:
      "Which Real Housewives franchise gave the world the table-flip heard round the world?",
    options: ["Beverly Hills", "Atlanta", "New Jersey", "Orange County"],
    answer: 2,
    note: 'Teresa Giudice, 2009: "Prostitution whore!"'
  },
  {
    category: "TV Moms",
    question:
      "On Sex and the City, which character becomes a mom first — adopting a daughter named Lily?",
    options: ["Carrie", "Samantha", "Miranda", "Charlotte"],
    answer: 3,
    note: "Charlotte and Harry adopt Lily from China; later they have Rose biologically."
  },

  // -------------------- MOVIE MOMS --------------------
  {
    category: "Movie Moms",
    question:
      "In the 1996 hit Mrs. Doubtfire, what nationality is the nanny Robin Williams pretends to be?",
    options: ["Irish", "Scottish", "English", "Welsh"],
    answer: 1,
    note: '"Help is on the way, dear!"'
  },
  {
    category: "Movie Moms",
    question:
      "In the 1998 remake of The Parent Trap, where does the mom (Natasha Richardson) live?",
    options: ["Paris", "London", "New York", "Napa Valley"],
    answer: 1,
    note: "She runs a wedding dress atelier; the dad runs a Napa vineyard."
  },
  {
    category: "Movie Moms",
    question:
      "In Bad Moms (2016), who plays the over-it-all lead Amy Mitchell?",
    options: ["Kristen Bell", "Mila Kunis", "Kathryn Hahn", "Christina Applegate"],
    answer: 1,
    note: "Kathryn Hahn and Kristen Bell are the chaotic ride-or-dies."
  },
  {
    category: "Movie Moms",
    question:
      "In Freaky Friday (2003), Jamie Lee Curtis plays a mom whose body swaps with whose?",
    options: ["Hilary Duff", "Amanda Bynes", "Lindsay Lohan", "Anne Hathaway"],
    answer: 2,
    note: 'Lohan plays Anna, who fronts a band called "Pink Slip."'
  },
  {
    category: "Movie Moms",
    question:
      'In Lady Bird (2017), the mom Marion drives Lady Bird around looking at houses while what plays on the radio?',
    options: [
      "An NPR pledge drive",
      "An audiobook of The Grapes of Wrath",
      "A Joni Mitchell song",
      "An audiobook of Steinbeck — wait, same thing"
    ],
    answer: 1,
    note: "They both ugly-cry at the ending and refuse to acknowledge it."
  },
  {
    category: "Movie Moms",
    question:
      'Erin Brockovich, single mom of three, takes on which giant in the 2000 film?',
    options: [
      "Exxon",
      "Pacific Gas & Electric",
      "Monsanto",
      "Dow Chemical"
    ],
    answer: 1,
    note: "Julia Roberts won her Oscar for it. The push-up bras did their part."
  },
  {
    category: "Movie Moms",
    question:
      'In Stepmom (1998), which two actresses play the moms (one biological, one new)?',
    options: [
      "Meryl Streep and Goldie Hawn",
      "Susan Sarandon and Julia Roberts",
      "Diane Keaton and Sandra Bullock",
      "Meg Ryan and Annette Bening"
    ],
    answer: 1,
    note: "Cue the lip-sync to \"Ain't No Mountain High Enough.\""
  },
  {
    category: "Movie Moms",
    question:
      'In Mamma Mia! (2008), Meryl Streep\'s character Donna runs what on a Greek island?',
    options: [
      "A taverna",
      "A vineyard",
      "A villa/hotel called Villa Donna",
      "An olive grove"
    ],
    answer: 2,
    note: 'Cher shows up in the sequel as Grandma Ruby. "Fernando!"'
  },
  {
    category: "Movie Moms",
    question:
      'Who plays Sandra Bullock\'s adoptive-mom character Leigh Anne Tuohy in The Blind Side?',
    options: ["Sandra Bullock", "Julia Roberts", "Reese Witherspoon", "Cate Blanchett"],
    answer: 0,
    note: "She won the Oscar and also Razzie that year. Iconic split."
  },
  {
    category: "Movie Moms",
    question:
      'In Knives Out (2019), who plays the lifestyle-influencer mom Joni Thrombey?',
    options: ["Toni Collette", "Jamie Lee Curtis", "Laura Dern", "Allison Janney"],
    answer: 0,
    note: 'She runs a brand called Flam — "skincare with a feminist lifestyle component."'
  },

  // -------------------- CELEBRITY MOMS --------------------
  {
    category: "Celebrity Moms",
    question: "Which actress co-founded The Honest Company, the eco-friendly baby brand?",
    options: ["Jessica Biel", "Jessica Alba", "Jenna Dewan", "Jaime King"],
    answer: 1,
    note: "Founded in 2011 after she had her first daughter, Honor."
  },
  {
    category: "Celebrity Moms",
    question:
      "Reese Witherspoon's Southern-inspired lifestyle and clothing brand is called what?",
    options: ["Draper James", "Hello Sunshine", "Reese's Pieces", "Tennessee Honey"],
    answer: 0,
    note: "Named after her grandparents. Hello Sunshine is her production company."
  },
  {
    category: "Celebrity Moms",
    question: "Who wrote the bestselling cookbook series Cravings?",
    options: ["Chrissy Teigen", "Ina Garten", "Ayesha Curry", "Giada De Laurentiis"],
    answer: 0,
    note: "Mom to Luna, Miles, Esti, and Wren."
  },
  {
    category: "Celebrity Moms",
    question: "What is the name of Beyoncé and Jay-Z's first-born daughter?",
    options: ["Sir", "Rumi", "Blue Ivy", "North"],
    answer: 2,
    note: "Twins Rumi and Sir came later. North is a Kardashian-West."
  },
  {
    category: "Celebrity Moms",
    question: "How many children do Blake Lively and Ryan Reynolds have?",
    options: ["Two", "Three", "Four", "Five"],
    answer: 2,
    note: "James, Inez, Betty, and Olin. Yes, Taylor Swift used the names in folklore."
  },
  {
    category: "Celebrity Moms",
    question:
      'Which singer-mom of three is known for "So What," "Just Give Me a Reason," and aerial concert acrobatics?',
    options: ["Kelly Clarkson", "Pink", "Christina Aguilera", "Gwen Stefani"],
    answer: 1,
    note: "Her kids Willow and Jameson regularly join her on tour."
  },
  {
    category: "Celebrity Moms",
    question:
      "Joanna Gaines and her husband Chip Gaines built which lifestyle empire out of Waco, Texas?",
    options: ["Farmhouse Co.", "Magnolia", "Shiplap & Co.", "Silos"],
    answer: 1,
    note: "Magnolia Network, Magnolia Table, Magnolia Market at the Silos — the works."
  },
  {
    category: "Celebrity Moms",
    question:
      "Drew Barrymore, mom of two girls Olive and Frankie, hosts what daytime show?",
    options: [
      "Live with Drew",
      "The Drew Barrymore Show",
      "Drew’s Morning",
      "Wake Up With Drew"
    ],
    answer: 1,
    note: "Famously cried on-air about the rain. We loved her for it."
  },
  {
    category: "Celebrity Moms",
    question:
      'Which "Friends" star and mom to daughter Coco was once married to David Arquette?',
    options: ["Jennifer Aniston", "Lisa Kudrow", "Courteney Cox", "Jennifer Garner"],
    answer: 2,
    note: "She and David were Cox-Arquette through the 2000s."
  },
  {
    category: "Celebrity Moms",
    question:
      "Which celeb mom famously sold Goop’s “This Smells Like My Vagina” candle?",
    options: ["Gwyneth Paltrow", "Kourtney Kardashian", "Jessica Alba", "Cameron Diaz"],
    answer: 0,
    note: "Mom to Apple and Moses with Chris Martin. Of course."
  },

  // -------------------- MOM POP CULTURE --------------------
  {
    category: "Mom Pop Culture",
    question:
      'The Stanley Quencher, the official water bottle of millennial moms, holds how many ounces in its viral size?',
    options: ["30 oz", "40 oz", "50 oz", "64 oz"],
    answer: 1,
    note: 'The Adventure Quencher 40-oz Tumbler. Available in every shade of "Pinterest sage."'
  },
  {
    category: "Mom Pop Culture",
    question:
      'Which Taylor Swift album, released in 2014, became the soundtrack of every millennial mom’s car rides?',
    options: ["Red", "1989", "Speak Now", "Reputation"],
    answer: 1,
    note: '"Shake It Off," "Blank Space," "Style." It was re-recorded in 2023.'
  },
  {
    category: "Mom Pop Culture",
    question:
      'Reese’s Book Club and which other club are the two most-influential celebrity book clubs for this demographic?',
    options: [
      "Jenna (Bush Hager)'s Read With Jenna",
      "Oprah’s Book Club",
      "Both of the above",
      "Emma Watson’s Our Shared Shelf"
    ],
    answer: 2,
    note: "If a book has both stickers, your group chat is reading it next month."
  },
  {
    category: "Mom Pop Culture",
    question:
      'Big Little Lies, the HBO mom-drama, is set in which California beach town?',
    options: ["Carmel", "Monterey", "Santa Barbara", "Half Moon Bay"],
    answer: 1,
    note: 'Based on the Liane Moriarty novel. The "Monterey 5" became shorthand for the group.'
  },
  {
    category: "Mom Pop Culture",
    question:
      'The "wine mom" aesthetic peaked with which boxed wine that became a meme?',
    options: ["Black Box", "Bota Box", "Franzia", "Bandit"],
    answer: 2,
    note: 'Honorable mention: those "Mommy needs wine" Etsy signs that haunt every kitchen.'
  },
  {
    category: "Mom Pop Culture",
    question:
      'In Judy Blume’s Are You There God? It’s Me, Margaret, what does Margaret’s mom’s side of the family practice?',
    options: ["Catholicism", "Judaism", "Christianity (Protestant)", "Nothing"],
    answer: 2,
    note: "Margaret’s dad is Jewish; the book is about her figuring religion out for herself."
  },
  {
    category: "Mom Pop Culture",
    question:
      'Which 2014 Lin-Manuel Miranda musical became required group-text content for moms with Disney+?',
    options: ["In the Heights", "Hamilton", "Moana", "Encanto"],
    answer: 1,
    note: 'It hit Disney+ in July 2020, when we all desperately needed it.'
  },
  {
    category: "Mom Pop Culture",
    question:
      'Which Nora Ephron film features Meg Ryan running an Upper West Side children’s bookstore — basically the millennial-mom origin story?',
    options: ["Sleepless in Seattle", "You’ve Got Mail", "When Harry Met Sally", "Julie & Julia"],
    answer: 1,
    note: "\"I would send you a bouquet of newly sharpened pencils.\""
  },
  {
    category: "Mom Pop Culture",
    question:
      'In the 2000s, which Lifetime drama defined "rich Manhattan-mom" energy with characters like Lily van der Woodsen?',
    options: ["The OC", "Gossip Girl", "One Tree Hill", "90210"],
    answer: 1,
    note: 'It aired on the CW, technically. xoxo'
  },
  {
    category: "Mom Pop Culture",
    question:
      'What does "Karen" famously want to speak to in the 2020-era meme?',
    options: ["A lawyer", "The manager", "HR", "Corporate"],
    answer: 1,
    note: "May the bob haircut never recover."
  },

  // -------------------- ANIMATED MOMS --------------------
  {
    category: "Animated Moms",
    question:
      'Elastigirl, aka Helen Parr, is the mom in which Pixar franchise?',
    options: ["Monsters Inc.", "The Incredibles", "Toy Story", "Finding Nemo"],
    answer: 1,
    note: "Voiced by Holly Hunter, who absolutely deserved an Emmy for that performance."
  },
  {
    category: "Animated Moms",
    question:
      'In Disney’s 2016 Moana, Moana’s mother is named what?',
    options: ["Sina", "Tala", "Pua", "Tui"],
    answer: 0,
    note: "Tala is Moana’s grandma (“the village crazy lady”, by her own admission)."
  },
  {
    category: "Animated Moms",
    question:
      'On the show Bluey, beloved by exhausted parents worldwide, what is the mom’s name?',
    options: ["Chilli", "Bingo", "Stripe", "Trixie"],
    answer: 0,
    note: "She works in airport security. Bandit is the dad (an archaeologist)."
  },
  {
    category: "Animated Moms",
    question:
      'In Encanto, who is the family matriarch whose past trauma is at the heart of the film?',
    options: ["Mirabel", "Abuela Alma", "Tía Pepa", "Dolores"],
    answer: 1,
    note: "Voiced by María Cecilia Botero. And no — we don’t talk about Bruno."
  },
  {
    category: "Animated Moms",
    question:
      'What color is Marge Simpson’s iconic beehive hair?',
    options: ["Black", "Brown", "Blue", "Purple"],
    answer: 2,
    note: 'It’s also reportedly hiding "a giant zoom for the bees to fit in."'
  },
  {
    category: "Animated Moms",
    question:
      'In Disney’s Brave, Queen Elinor is accidentally turned into what?',
    options: ["A horse", "A bear", "A bird", "A wisp"],
    answer: 1,
    note: 'The 2012 Pixar film with Merida’s wild red curls.'
  },
  {
    category: "Animated Moms",
    question:
      'In Disney’s Tangled, what is the name of Rapunzel’s false "mother" who has kept her in the tower?',
    options: ["Queen Arianna", "Mother Gothel", "Lady Tremaine", "Yzma"],
    answer: 1,
    note: 'Mother knows best — listen to your mother. (Lock that song in your brain for 12 hours.)'
  },
  {
    category: "Animated Moms",
    question:
      'In Finding Nemo, what is the name of Nemo’s mother (briefly seen in the opening scene)?',
    options: ["Pearl", "Coral", "Dory", "Marlin’s sister"],
    answer: 1,
    note: 'A devastating opening sequence that no parent has emotionally recovered from.'
  },
  {
    category: "Animated Moms",
    question:
      'In the original Toy Story films, what is Andy’s mom’s first name (revealed years later in fan theories and tie-ins)?',
    options: ["Margaret", "Emily", "Jessie", "It is never officially confirmed"],
    answer: 3,
    note: "Pixar has danced around the “Andy’s mom is Emily” theory but never confirmed it on screen."
  },
  {
    category: "Animated Moms",
    question:
      'In the Pixar film Coco, what does Miguel’s family business specialize in — a trade his grandma insists he take up?',
    options: ["Music", "Shoemaking", "Baking", "Weaving"],
    answer: 1,
    note: "Music is famously banned in the Rivera household. Until, you know, it isn’t."
  }
];

const CATEGORY_ORDER = [
  "TV Moms",
  "Movie Moms",
  "Celebrity Moms",
  "Mom Pop Culture",
  "Animated Moms"
];
