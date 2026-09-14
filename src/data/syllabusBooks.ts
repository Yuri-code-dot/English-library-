import type { Book } from "../types";

// Prescribed Semester V texts that were missing from the main book catalogue.
// These are kept separate so the existing library catalogue can be expanded
// gradually without losing the syllabus mapping.
export const syllabusBooks: Book[] = [
  {
    slug: "the-fact-of-blackness", title: "The Fact of Blackness", authorSlug: "frantz-fanon", publicationYear: 1952,
    genre: "theory", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "Fanon's chapter examines the psychological effects of racialisation and colonial society on Black identity and self-perception.",
    themes: ["Race", "Colonialism", "Identity", "Psychology"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "colonial-influence-postcolonial-intertextuality", title: "Colonial Influence, Postcolonial Intertextuality", authorSlug: "harish-trivedi", publicationYear: 2007,
    genre: "criticism", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "Trivedi examines the relationship between Western and Indian literatures through the histories of colonial influence and postcolonial literary exchange.",
    themes: ["Colonial influence", "Intertextuality", "Indian literature", "Postcolonial studies"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "a-house-for-mr-biswas", title: "A House for Mr Biswas", authorSlug: "vs-naipaul", publicationYear: 1961,
    genre: "novel", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "Naipaul's novel follows Mohun Biswas's long struggle for an independent home, using domestic life to explore colonial society, class, family, and belonging.",
    themes: ["Belonging", "Home and identity", "Colonial society", "Independence"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "things-fall-apart", title: "Things Fall Apart", authorSlug: "chinua-achebe", publicationYear: 1958,
    genre: "novel", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "Achebe's novel traces Okonkwo and his Igbo community as colonial intervention and missionary influence disrupt an established social world.",
    themes: ["Colonialism", "Tradition and change", "Masculinity", "Community"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-collector-of-treasures", title: "The Collector of Treasures", authorSlug: "bessie-head", publicationYear: 1977,
    genre: "short-story", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "Head's story centres a rural woman's life and examines gender, violence, labour, and the social structures surrounding her.",
    themes: ["Gender", "Violence", "Community", "Women and labour"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-breast-giver", title: "The Breast Giver", authorSlug: "gayatri-spivak", publicationYear: 1988,
    genre: "short-story", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "A syllabus record for the text associated with Mahasweta Devi and discussed by Gayatri Spivak, examining motherhood, exploitation, caste, class, and representation.",
    themes: ["Motherhood", "Caste and class", "Exploitation", "Representation"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "this-is-a-photograph-of-me", title: "This Is a Photograph of Me", authorSlug: "margaret-atwood", publicationYear: 1966,
    genre: "poetry", period: "contemporary", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "Atwood's poem turns an apparently ordinary photograph into an unsettling meditation on visibility, absence, and perspective.",
    themes: ["Visibility", "Identity", "Absence", "Perspective"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "woman-to-man", title: "Woman to Man", authorSlug: "judith-wright", publicationYear: 1949,
    genre: "poetry", period: "contemporary", language: "English", subjectSlugs: ["womens-writing"],
    description: "Wright's poem approaches pregnancy and creation through a speaker reflecting on the intimate transformation of becoming a mother.",
    themes: ["Motherhood", "Creation", "Body", "Transformation"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "lady-lazarus", title: "Lady Lazarus", authorSlug: "sylvia-plath", publicationYear: 1965,
    genre: "poetry", period: "contemporary", language: "English", subjectSlugs: ["womens-writing"],
    description: "Plath's dramatic monologue constructs a speaker who turns repeated survival into a performance about power, spectatorship, and self-reinvention.",
    themes: ["Identity", "Survival", "Spectatorship", "Rebirth"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "advice-to-women", title: "Advice to Women", authorSlug: "eunice-de-souza", publicationYear: 1990,
    genre: "poetry", period: "contemporary", language: "English", subjectSlugs: ["womens-writing"],
    description: "De Souza's concise poem uses domestic imagery and dark humour to question conventional advice about women, relationships, and self-protection.",
    themes: ["Domestic life", "Gender roles", "Irony", "Self-protection"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "eunuch", title: "Eunuch", authorSlug: "kamala-das", publicationYear: 1965,
    genre: "poetry", period: "contemporary", language: "English", subjectSlugs: ["womens-writing"],
    description: "Das's poem uses the figure of the eunuch to explore gender, desire, marginality, and the social pressures placed on bodies.",
    themes: ["Gender", "Desire", "Marginality", "The body"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-black-hill", title: "The Black Hill", authorSlug: "mamang-dai", publicationYear: 2014,
    genre: "novel", period: "contemporary", language: "English", subjectSlugs: ["womens-writing"],
    description: "Dai's novel follows a landscape and its people through changing histories, relationships, and encounters across the northeastern frontier.",
    themes: ["Place", "Memory", "Community", "History"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "bliss", title: "Bliss", authorSlug: "katherine-mansfield", publicationYear: 1920,
    genre: "short-story", period: "modernism", language: "English", subjectSlugs: ["womens-writing"],
    description: "Mansfield's story follows Bertha Young through a seemingly perfect evening whose social surface begins to crack under the pressure of perception and desire.",
    themes: ["Perception", "Marriage", "Desire", "Social performance"], sourceId: "project-gutenberg", license: "Public Domain",
  },
  {
    slug: "yellow-woman", title: "Yellow Woman", authorSlug: "leslie-marmon-silko", publicationYear: 1981,
    genre: "short-story", period: "contemporary", language: "English", subjectSlugs: ["womens-writing"],
    description: "Silko's story moves between contemporary experience and Laguna Pueblo storytelling, questioning the boundary between myth, memory, and lived identity.",
    themes: ["Indigenous identity", "Myth and memory", "Gender", "Storytelling"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "chilli-powder", title: "Chilli Powder", authorSlug: "bama", publicationYear: 2000,
    genre: "short-story", period: "contemporary", language: "English", subjectSlugs: ["womens-writing"],
    description: "Bama's Dalit writing confronts caste hierarchy and the everyday social realities through which discrimination is experienced and resisted.",
    themes: ["Caste", "Gender", "Resistance", "Everyday discrimination"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "a-vindication-of-the-rights-of-woman", title: "A Vindication of the Rights of Woman", authorSlug: "mary-wollstonecraft", publicationYear: 1792,
    genre: "theory", period: "neoclassical", language: "English", subjectSlugs: ["womens-writing"],
    description: "Wollstonecraft argues that women's apparent inferiority is produced by unequal education and social conditions rather than a lack of rational capacity.",
    themes: ["Education", "Equality", "Reason", "Women's rights"], sourceId: "project-gutenberg", readingUrl: "https://www.gutenberg.org/ebooks/3420", license: "Public Domain",
  },
  {
    slug: "professions-for-women", title: "Professions for Women", authorSlug: "virginia-woolf", publicationYear: 1931,
    genre: "essay", period: "modernism", language: "English", subjectSlugs: ["womens-writing"],
    description: "Woolf's essay considers the obstacles women face when entering professional and creative work, including the pressure to conform to idealised femininity.",
    themes: ["Women and work", "Authorship", "Gender roles", "Independence"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "a-testimony-of-our-inexhaustible-treasures", title: "A Testimony of our Inexhaustible Treasures", authorSlug: "ramabai-ranade", publicationYear: 2000,
    genre: "autobiography", period: "modernism", language: "English", subjectSlugs: ["womens-writing"],
    description: "A selected autobiographical testimony associated with Ramabai Ranade's life and the history of women's education and social reform in colonial India.",
    themes: ["Education", "Social reform", "Women's lives", "Colonial India"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
];

export const syllabusBookBySlug = (slug: string) => syllabusBooks.find((book) => book.slug === slug);
