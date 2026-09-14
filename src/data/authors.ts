import type { Author } from "../types";
import { commonsImage } from "./sources";

export const authors: Author[] = [
  {
    slug: "mary-shelley",
    name: "Mary Shelley",
    birthYear: 1797,
    deathYear: 1851,
    period: "romanticism",
    nationality: "British",
    biography:
      "Mary Shelley wrote Frankenstein at nineteen, during a summer on Lake Geneva spent trading ghost stories with Byron and Percy Shelley. The novel she produced outgrew its origins to become one of the founding texts of science fiction.",
    portrait: {
      url: commonsImage.maryShelleyPortrait,
      alt: "Portrait of Mary Shelley by Richard Rothwell, 1840",
      sourceId: "npg-rothwell-shelley",
      width: 500,
      height: 609,
    },
    genres: ["novel"],
    workSlugs: ["frankenstein"],
    subjectSlugs: ["womens-writing"],
    externalLinks: [{ label: "Frankenstein at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/84" }],
  },
  {
    slug: "jane-austen",
    name: "Jane Austen",
    birthYear: 1775,
    deathYear: 1817,
    period: "romanticism",
    nationality: "British",
    biography:
      "Jane Austen's six completed novels turned the drawing rooms of Regency England into a precise study of marriage, money, and moral judgment, narrated with an irony that has rarely been matched.",
    portrait: {
      url: commonsImage.prideAndPrejudiceTitlePage,
      alt: "Title page of the first edition of Pride and Prejudice, 1813",
      sourceId: "lilly-library-austen",
      width: 1867,
      height: 3016,
    },
    genres: ["novel"],
    workSlugs: ["pride-and-prejudice"],
    subjectSlugs: ["womens-writing"],
    externalLinks: [{ label: "Pride and Prejudice at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1342" }],
  },
  {
    slug: "charles-dickens",
    name: "Charles Dickens",
    birthYear: 1812,
    deathYear: 1870,
    period: "victorian",
    nationality: "British",
    biography:
      "Charles Dickens serialized the Victorian city into being — its workhouses, courts, and counting-houses rendered with a caricaturist's eye and a reformer's anger.",
    portrait: {
      url: commonsImage.dickensPortrait,
      alt: "Portrait of Charles Dickens by Daniel Maclise, 1839",
      sourceId: "npg-maclise-dickens",
      width: 2400,
      height: 3071,
    },
    genres: ["novel"],
    workSlugs: ["great-expectations"],
    subjectSlugs: [],
    externalLinks: [{ label: "Great Expectations at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1400" }],
  },
  {
    slug: "virginia-woolf",
    name: "Virginia Woolf",
    birthYear: 1882,
    deathYear: 1941,
    period: "modernism",
    nationality: "British",
    biography:
      "Virginia Woolf dissolved plot into perception, following consciousness itself across a single day or a single life, and argued — in A Room of One's Own — for the material conditions women's writing requires.",
    portrait: {
      url: commonsImage.woolfPortrait,
      alt: "Portrait of Virginia Woolf by George Charles Beresford, 1902",
      sourceId: "npg-beresford-woolf",
      width: 2924,
      height: 3994,
    },
    genres: ["novel", "essay"],
    workSlugs: ["mrs-dalloway"],
    subjectSlugs: ["womens-writing"],
    externalLinks: [{ label: "Mrs Dalloway at Wikisource", url: "https://en.wikisource.org" }],
  },
  {
    slug: "william-shakespeare",
    name: "William Shakespeare",
    birthYear: 1564,
    deathYear: 1616,
    period: "renaissance",
    nationality: "English",
    biography:
      "William Shakespeare's plays and sonnets, written for a working commercial stage, became the measure against which English-language drama and poetry are still set.",
    portrait: {
      url: commonsImage.shakespearePortrait,
      alt: "The Chandos portrait, attributed to John Taylor, c. 1600–1610",
      sourceId: "npg-chandos-shakespeare",
      width: 1943,
      height: 2490,
    },
    genres: ["drama", "poetry"],
    workSlugs: ["hamlet"],
    subjectSlugs: [],
    externalLinks: [{ label: "Hamlet at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1524" }],
  },
  {
    slug: "emily-dickinson",
    name: "Emily Dickinson",
    birthYear: 1830,
    deathYear: 1886,
    period: "victorian",
    nationality: "American",
    biography:
      "Emily Dickinson wrote nearly 1,800 poems in near-total seclusion in Amherst, Massachusetts, compressing vast subjects — death, faith, perception — into her signature slant rhyme and dashes.",
    portrait: {
      url: commonsImage.dickinsonPortrait,
      alt: "Daguerreotype of Emily Dickinson, c. 1847",
      sourceId: "yale-dickinson",
      width: 619,
      height: 768,
    },
    genres: ["poetry"],
    workSlugs: ["dickinson-poems"],
    subjectSlugs: ["american-literature", "womens-writing"],
    externalLinks: [{ label: "Dickinson's poems at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/12242" }],
  },
  {
    slug: "august-strindberg", name: "August Strindberg", birthYear: 1849, deathYear: 1912, period: "modernism", nationality: "Swedish",
    biography: "August Strindberg transformed European drama through psychological conflict, naturalistic detail, and experiments with form. The Father is one of his central studies of power, gender, and family authority.", genres: ["drama"], workSlugs: ["the-father"], subjectSlugs: ["modern-european-drama"], externalLinks: [{ label: "The Father at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/8499" }],
  },
  {
    slug: "bertolt-brecht", name: "Bertolt Brecht", birthYear: 1898, deathYear: 1956, period: "modernism", nationality: "German",
    biography: "Bertolt Brecht developed epic theatre and the alienation effect as ways of making audiences think critically about politics, history, and social change.", genres: ["drama"], workSlugs: ["life-of-galileo"], subjectSlugs: ["modern-european-drama"],
  },
  {
    slug: "samuel-beckett", name: "Samuel Beckett", birthYear: 1906, deathYear: 1989, period: "postmodernism", nationality: "Irish",
    biography: "Samuel Beckett’s spare drama makes waiting, repetition, silence, and uncertainty into theatrical events. Waiting for Godot is his most influential play.", genres: ["drama"], workSlugs: ["waiting-for-godot"], subjectSlugs: ["modern-european-drama"],
  },
  {
    slug: "harold-pinter", name: "Harold Pinter", birthYear: 1930, deathYear: 2008, period: "postmodernism", nationality: "British",
    biography: "Harold Pinter’s drama turns pauses, evasions, and ordinary conversation into instruments of menace and power.", genres: ["drama"], workSlugs: ["the-birthday-party"], subjectSlugs: ["modern-european-drama"],
  },
  {
    slug: "ernest-hemingway", name: "Ernest Hemingway", birthYear: 1899, deathYear: 1961, period: "modernism", nationality: "American",
    biography: "Ernest Hemingway’s spare prose and theory of omission shaped twentieth-century American fiction. The Old Man and the Sea examines endurance, dignity, and defeat.", genres: ["novel"], workSlugs: ["the-old-man-and-the-sea"], subjectSlugs: ["american-literature"],
  },
  {
    slug: "arthur-miller", name: "Arthur Miller", birthYear: 1915, deathYear: 2005, period: "modernism", nationality: "American",
    biography: "Arthur Miller’s social dramas examine family responsibility, public success, and the moral costs of economic ambition.", genres: ["drama"], workSlugs: ["all-my-sons"], subjectSlugs: ["american-literature"],
  },
  {
    slug: "edgar-allan-poe", name: "Edgar Allan Poe", birthYear: 1809, deathYear: 1849, period: "romanticism", nationality: "American",
    biography: "Edgar Allan Poe pioneered the modern detective story and developed a poetics of atmosphere, deduction, and psychological unease.", genres: ["short-story", "poetry"], workSlugs: ["the-purloined-letter"], subjectSlugs: ["american-literature"], externalLinks: [{ label: "The Purloined Letter at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/2148" }],
  },
  {
    slug: "booker-t-washington", name: "Booker T. Washington", birthYear: 1856, deathYear: 1915, period: "modernism", nationality: "American",
    biography: "Booker T. Washington’s autobiography narrates education, institution-building, and self-making after emancipation, while also revealing debates about racial uplift and accommodation.", genres: ["autobiography"], workSlugs: ["up-from-slavery-chapter-one"], subjectSlugs: ["american-literature"], externalLinks: [{ label: "Up from Slavery at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/2376" }],
  },
  {
    slug: "maya-angelou", name: "Maya Angelou", birthYear: 1928, deathYear: 2014, period: "contemporary", nationality: "American",
    biography: "Maya Angelou’s autobiographical writing connects memory, racial violence, language, and the recovery of voice.", genres: ["autobiography"], workSlugs: ["i-know-why-the-caged-bird-sings-chapter-fifteen"], subjectSlugs: ["american-literature"],
  },
  {
    slug: "william-faulkner", name: "William Faulkner", birthYear: 1897, deathYear: 1962, period: "modernism", nationality: "American",
    biography: "William Faulkner’s fiction investigates the afterlives of slavery, segregation, memory, and violence in the American South.", genres: ["short-story"], workSlugs: ["dry-september"], subjectSlugs: ["american-literature"],
  },
  {
    slug: "walt-whitman", name: "Walt Whitman", birthYear: 1819, deathYear: 1892, period: "romanticism", nationality: "American",
    biography: "Walt Whitman expanded the possibilities of American poetic voice through free verse, catalogues, democratic address, and a poetry of public mourning.", genres: ["poetry"], workSlugs: ["o-captain-my-captain"], subjectSlugs: ["american-literature"], externalLinks: [{ label: "Whitman at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1322" }],
  },
  {
    slug: "robert-frost", name: "Robert Frost", birthYear: 1874, deathYear: 1963, period: "modernism", nationality: "American",
    biography: "Robert Frost’s apparently conversational poems use rural scenes, formal control, and ambiguity to examine choice, community, and isolation.", genres: ["poetry"], workSlugs: ["mending-wall"], subjectSlugs: ["american-literature"],
  },
  {
    slug: "langston-hughes", name: "Langston Hughes", birthYear: 1901, deathYear: 1967, period: "modernism", nationality: "American",
    biography: "Langston Hughes made Black American speech, music, history, and aspiration central to modern poetry and the Harlem Renaissance.", genres: ["poetry"], workSlugs: ["the-negro-speaks-of-rivers", "the-white-fiends"], subjectSlugs: ["american-literature", "postcolonial-literatures"],
  },
  {
    slug: "ngugi-wa-thiongo", name: "Ngũgĩ wa Thiong'o", birthYear: 1938, period: "postcolonial", nationality: "Kenyan",
    biography: "Ngũgĩ wa Thiong'o’s criticism examines language, education, culture, and the politics of literary production after colonialism.", genres: ["essay", "theory"], workSlugs: ["the-language-of-african-literature"], subjectSlugs: ["postcolonial-literatures"],
  },
  {
    slug: "derek-walcott", name: "Derek Walcott", birthYear: 1930, deathYear: 2017, period: "postcolonial", nationality: "Saint Lucian",
    biography: "Derek Walcott’s poetry confronts colonial history, divided inheritance, violence, and the making of Caribbean identity.", genres: ["poetry"], workSlugs: ["a-far-cry-from-africa"], subjectSlugs: ["postcolonial-literatures"],
  },
  {
    slug: "mamang-dai", name: "Mamang Dai", birthYear: 1957, period: "contemporary", nationality: "Indian",
    biography: "Mamang Dai’s poetry and prose draw on Arunachal Pradesh, oral memory, ecology, community, and the pressures of modernisation.", genres: ["poetry"], workSlugs: ["small-towns-and-the-river"], subjectSlugs: ["postcolonial-literatures"],
  },

  {
    slug: "simone-de-beauvoir", name: "Simone de Beauvoir", birthYear: 1908, deathYear: 1986, period: "modernism", nationality: "French",
    biography: "Simone de Beauvoir’s philosophical and literary work became foundational to modern feminist thought, especially through its analysis of woman as socially produced Other.", genres: ["theory"], workSlugs: ["the-second-sex-introduction"], subjectSlugs: ["womens-writing"],
  },
  {
    slug: "elaine-showalter", name: "Elaine Showalter", birthYear: 1941, period: "postmodernism", nationality: "American",
    biography: "Elaine Showalter is a literary critic associated with feminist literary history, gynocriticism, and the recovery of women’s writing traditions.", genres: ["criticism"], workSlugs: ["a-literature-of-their-own"], subjectSlugs: ["womens-writing"],
  },
  {
    slug: "gayatri-chakravorty-spivak", name: "Gayatri Chakravorty Spivak", birthYear: 1942, period: "postcolonial", nationality: "Indian-American",
    biography: "Gayatri Chakravorty Spivak’s criticism brings deconstruction, Marxism, feminism, and postcolonial theory into sustained conversation about representation and power.", genres: ["criticism"], workSlugs: ["in-other-worlds"], subjectSlugs: ["womens-writing"],
  },
  {
    slug: "chandra-talpade-mohanty", name: "Chandra Talpade Mohanty", birthYear: 1955, period: "postcolonial", nationality: "Indian-American",
    biography: "Chandra Talpade Mohanty is a transnational feminist theorist whose work critiques colonial and universalising representations of women.", genres: ["criticism"], workSlugs: ["under-western-eyes"], subjectSlugs: ["womens-writing"],
  },
  {
    slug: "sandra-gilbert-susan-gubar", name: "Sandra Gilbert & Susan Gubar", birthYear: 1936, period: "postmodernism", nationality: "American",
    biography: "Sandra Gilbert and Susan Gubar’s collaborative criticism reshaped the study of women’s writing through its account of authorship, constraint, anger, and literary inheritance.", genres: ["criticism"], workSlugs: ["the-madwoman-in-the-attic"], subjectSlugs: ["womens-writing"],
  },
  {
    slug: "toril-moi", name: "Toril Moi", birthYear: 1953, period: "postmodernism", nationality: "Norwegian",
    biography: "Toril Moi’s feminist criticism clarifies the relation among sexuality, textuality, embodiment, and theories of literary interpretation.", genres: ["criticism"], workSlugs: ["sexual-textual-politics"], subjectSlugs: ["womens-writing"],
  },
  {
    slug: "kumkum-sangari-sudesh-vaid", name: "Kumkum Sangari & Sudesh Vaid", birthYear: 1948, period: "postcolonial", nationality: "Indian",
    biography: "Kumkum Sangari and Sudesh Vaid edited influential essays that place women, gender, reform, and social change in the histories of colonial and postcolonial South Asia.", genres: ["criticism"], workSlugs: ["recasting-women"], subjectSlugs: ["womens-writing"],
  },

];

export const authorBySlug = (slug: string) => authors.find((a) => a.slug === slug);
