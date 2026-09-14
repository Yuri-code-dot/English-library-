import type { Book } from "../types";
import { commonsImage } from "./sources";

export const books: Book[] = [
  {
    slug: "frankenstein",
    title: "Frankenstein; or, The Modern Prometheus",
    authorSlug: "mary-shelley",
    publicationYear: 1818,
    genre: "novel",
    period: "romanticism",
    language: "English",
    subjectSlugs: ["womens-writing"],
    description:
      "A young scientist's experiment gives rise to a creature that forces him to confront creation, responsibility, and humanity — a novel that founded modern science fiction while interrogating the limits of Romantic ambition.",
    themes: ["Creation and responsibility", "Isolation", "The limits of ambition", "Nature vs. artifice"],
    cover: {
      url: commonsImage.maryShelleyPortrait,
      alt: "Portrait of Mary Shelley, author of Frankenstein",
      sourceId: "npg-rothwell-shelley",
    },
    sourceId: "project-gutenberg",
    readingUrl: "https://www.gutenberg.org/ebooks/84",
    license: "Public Domain",
    relatedBookSlugs: ["mrs-dalloway"],
    featured: true,
  },
  {
    slug: "pride-and-prejudice",
    title: "Pride and Prejudice",
    authorSlug: "jane-austen",
    publicationYear: 1813,
    genre: "novel",
    period: "romanticism",
    language: "English",
    subjectSlugs: ["womens-writing"],
    description:
      "Elizabeth Bennet's sharp wit and Mr. Darcy's wounded pride collide across a novel that turns the marriage plot into a study of self-knowledge, class, and first impressions.",
    themes: ["Marriage and economics", "Pride and self-perception", "Social class", "Irony as judgment"],
    cover: {
      url: commonsImage.prideAndPrejudiceTitlePage,
      alt: "Title page of the first edition of Pride and Prejudice, 1813",
      sourceId: "lilly-library-austen",
    },
    sourceId: "project-gutenberg",
    readingUrl: "https://www.gutenberg.org/ebooks/1342",
    license: "Public Domain",
    featured: true,
  },
  {
    slug: "great-expectations",
    title: "Great Expectations",
    authorSlug: "charles-dickens",
    publicationYear: 1861,
    genre: "novel",
    period: "victorian",
    language: "English",
    subjectSlugs: [],
    description:
      "Pip's rise from a blacksmith's forge into unexplained wealth becomes Dickens's meditation on class, guilt, and the false promises of gentility in Victorian England.",
    themes: ["Class mobility", "Guilt and redemption", "Appearance vs. reality"],
    cover: {
      url: commonsImage.dickensPortrait,
      alt: "Portrait of Charles Dickens, author of Great Expectations",
      sourceId: "npg-maclise-dickens",
    },
    sourceId: "project-gutenberg",
    readingUrl: "https://www.gutenberg.org/ebooks/1400",
    license: "Public Domain",
    featured: true,
  },
  {
    slug: "mrs-dalloway",
    title: "Mrs Dalloway",
    authorSlug: "virginia-woolf",
    publicationYear: 1925,
    genre: "novel",
    period: "modernism",
    language: "English",
    subjectSlugs: ["womens-writing"],
    description:
      "A single June day in London, following Clarissa Dalloway's preparations for a party and Septimus Warren Smith's unraveling, told through a stream of consciousness that moves freely between minds and moments.",
    themes: ["Time and memory", "War trauma", "The interior life", "The texture of a single day"],
    cover: {
      url: commonsImage.woolfPortrait,
      alt: "Portrait of Virginia Woolf, author of Mrs Dalloway",
      sourceId: "npg-beresford-woolf",
    },
    sourceId: "wikisource",
    readingUrl: "https://en.wikisource.org",
    license: "Public Domain",
    relatedBookSlugs: ["frankenstein"],
  },
  {
    slug: "hamlet",
    title: "Hamlet, Prince of Denmark",
    authorSlug: "william-shakespeare",
    publicationYear: 1603,
    genre: "drama",
    period: "renaissance",
    language: "English",
    subjectSlugs: [],
    description:
      "A prince, a ghost, and a court rotten with concealment — Hamlet's delay has been read as philosophy, pathology, and performance for over four centuries.",
    themes: ["Revenge and delay", "Appearance vs. reality", "Mortality", "Madness, real or performed"],
    cover: {
      url: commonsImage.shakespearePortrait,
      alt: "The Chandos portrait, believed to depict William Shakespeare",
      sourceId: "npg-chandos-shakespeare",
    },
    sourceId: "project-gutenberg",
    readingUrl: "https://www.gutenberg.org/ebooks/1524",
    license: "Public Domain",
  },
  {
    slug: "dickinson-poems",
    title: "Poems",
    authorSlug: "emily-dickinson",
    publicationYear: 1890,
    genre: "poetry",
    period: "victorian",
    language: "English",
    subjectSlugs: ["american-literature", "womens-writing"],
    description:
      "Published posthumously, Dickinson's poems compress mortality, faith, and perception into short, unresolved lines that broke from the metrical conventions of her time.",
    themes: ["Mortality", "Faith and doubt", "Solitude", "Perception"],
    cover: {
      url: commonsImage.dickinsonPortrait,
      alt: "Daguerreotype of Emily Dickinson, author of Poems",
      sourceId: "yale-dickinson",
    },
    sourceId: "project-gutenberg",
    readingUrl: "https://www.gutenberg.org/ebooks/12242",
    license: "Public Domain",
  },
  {
    slug: "the-father", title: "The Father", authorSlug: "august-strindberg", publicationYear: 1887, genre: "drama", period: "modernism", language: "English", subjectSlugs: ["modern-european-drama"],
    description: "A naturalistic family drama in which a struggle over a child becomes a wider conflict about authority, gender, knowledge, and psychological control.", themes: ["Gender and authority", "Family conflict", "Naturalism", "Power and identity"], sourceId: "project-gutenberg", readingUrl: "https://www.gutenberg.org/ebooks/8499", license: "Public Domain translation available through Project Gutenberg",
  },
  {
    slug: "life-of-galileo", title: "Life of Galileo", authorSlug: "bertolt-brecht", publicationYear: 1943, genre: "drama", period: "modernism", language: "English", subjectSlugs: ["modern-european-drama"],
    description: "Brecht’s episodic play stages Galileo’s conflict with authority and asks what responsibilities scientific knowledge carries in a political world.", themes: ["Science and power", "Truth and authority", "Alienation", "Moral responsibility"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "waiting-for-godot", title: "Waiting for Godot", authorSlug: "samuel-beckett", publicationYear: 1953, genre: "drama", period: "postmodernism", language: "English", subjectSlugs: ["modern-european-drama"],
    description: "Two figures wait beside a country road for an absent arrival in Beckett’s spare, repetitive drama of uncertainty, dependence, and time.", themes: ["The absurd", "Waiting and time", "Language and silence", "Human dependence"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-birthday-party", title: "The Birthday Party", authorSlug: "harold-pinter", publicationYear: 1958, genre: "drama", period: "postmodernism", language: "English", subjectSlugs: ["modern-european-drama"],
    description: "A seemingly ordinary boarding-house birthday becomes an unsettling ritual of interrogation, identity loss, and coercive power.", themes: ["Menace", "Power and language", "Identity", "Social conformity"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-old-man-and-the-sea", title: "The Old Man and the Sea", authorSlug: "ernest-hemingway", publicationYear: 1952, genre: "novel", period: "modernism", language: "English", subjectSlugs: ["american-literature"],
    description: "An aging Cuban fisherman’s struggle with a giant marlin becomes a concentrated meditation on endurance, dignity, labour, and defeat.", themes: ["Endurance", "Dignity", "Human and natural worlds", "Defeat and meaning"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "all-my-sons", title: "All My Sons", authorSlug: "arthur-miller", publicationYear: 1947, genre: "drama", period: "modernism", language: "English", subjectSlugs: ["american-literature"],
    description: "A prosperous family’s wartime business secret exposes the costs of profit, denial, responsibility, and inherited guilt.", themes: ["Business and ethics", "Family responsibility", "War", "Guilt"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-purloined-letter", title: "The Purloined Letter", authorSlug: "edgar-allan-poe", publicationYear: 1844, genre: "short-story", period: "romanticism", language: "English", subjectSlugs: ["american-literature"],
    description: "C. Auguste Dupin solves a political theft not by searching harder but by understanding how concealment can operate in plain sight.", themes: ["Detection", "Reason and imagination", "Visibility", "Power and information"], sourceId: "project-gutenberg", readingUrl: "https://www.gutenberg.org/ebooks/2148", license: "Public Domain",
  },
  {
    slug: "up-from-slavery-chapter-one", title: "Up from Slavery, Chapter 1", authorSlug: "booker-t-washington", publicationYear: 1901, genre: "autobiography", period: "modernism", language: "English", subjectSlugs: ["american-literature"],
    description: "The opening chapter of Washington’s autobiography reconstructs childhood, enslavement, emancipation, and the beginnings of a life shaped by education.", themes: ["Memory", "Emancipation", "Education", "Self-making"], sourceId: "project-gutenberg", readingUrl: "https://www.gutenberg.org/ebooks/2376", license: "Public Domain",
  },
  {
    slug: "i-know-why-the-caged-bird-sings-chapter-fifteen", title: "I Know Why the Caged Bird Sings, Chapter 15", authorSlug: "maya-angelou", publicationYear: 1969, genre: "autobiography", period: "contemporary", language: "English", subjectSlugs: ["american-literature"],
    description: "A bibliographic record for the prescribed chapter from Angelou’s memoir, which explores childhood, racial violence, memory, and the recovery of voice.", themes: ["Childhood", "Race and violence", "Memory", "Voice"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "dry-september", title: "Dry September", authorSlug: "william-faulkner", publicationYear: 1931, genre: "short-story", period: "modernism", language: "English", subjectSlugs: ["american-literature"],
    description: "Faulkner’s story traces how rumour, racial hatred, and collective violence turn a hot Southern town into a scene of moral collapse.", themes: ["Racism", "Rumour", "Collective violence", "Moral responsibility"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "o-captain-my-captain", title: "O Captain! My Captain!", authorSlug: "walt-whitman", publicationYear: 1865, genre: "poetry", period: "romanticism", language: "English", subjectSlugs: ["american-literature"],
    description: "Whitman’s elegy for Abraham Lincoln turns a national victory into a paradoxical scene of public celebration and private grief.", themes: ["Mourning", "Nation", "Leadership", "Public memory"], sourceId: "project-gutenberg", readingUrl: "https://www.gutenberg.org/ebooks/1322", license: "Public Domain",
  },
  {
    slug: "this-was-a-poet", title: "This was a Poet", authorSlug: "emily-dickinson", publicationYear: 1890, genre: "poetry", period: "victorian", language: "English", subjectSlugs: ["american-literature", "womens-writing"],
    description: "A compact Dickinson poem that reflects on poetic vocation, recognition, and the difficulty of measuring imaginative work.", themes: ["Poetic vocation", "Recognition", "Language", "Mortality"], sourceId: "project-gutenberg", readingUrl: "https://www.gutenberg.org/ebooks/12242", license: "Public Domain",
  },
  {
    slug: "i-heard-a-fly-buzz", title: "I heard a Fly buzz — when I died —", authorSlug: "emily-dickinson", publicationYear: 1896, genre: "poetry", period: "victorian", language: "English", subjectSlugs: ["american-literature", "womens-writing"],
    description: "Dickinson’s death poem replaces grand spiritual revelation with the small, disruptive sound of a fly, unsettling expectations of transcendence.", themes: ["Death", "Perception", "Faith and doubt", "The ordinary"], sourceId: "project-gutenberg", readingUrl: "https://www.gutenberg.org/ebooks/12242", license: "Public Domain",
  },
  {
    slug: "mending-wall", title: "Mending Wall", authorSlug: "robert-frost", publicationYear: 1914, genre: "poetry", period: "modernism", language: "English", subjectSlugs: ["american-literature"],
    description: "Two neighbours repair a boundary while disagreeing about whether walls preserve community or prevent it.", themes: ["Boundaries", "Community", "Tradition", "Ambiguity"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-negro-speaks-of-rivers", title: "The Negro Speaks of Rivers", authorSlug: "langston-hughes", publicationYear: 1921, genre: "poetry", period: "modernism", language: "English", subjectSlugs: ["american-literature", "postcolonial-literatures"],
    description: "Hughes connects Black history to ancient rivers, transforming geographical movement into an expansive meditation on ancestral memory and endurance.", themes: ["Ancestry", "History", "Race", "Water and memory"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-language-of-african-literature", title: "The Language of African Literature", authorSlug: "ngugi-wa-thiongo", publicationYear: 1986, genre: "theory", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "The prescribed section from Decolonising the Mind argues that language is inseparable from culture, memory, power, and the politics of colonial education.", themes: ["Language and power", "Decolonisation", "Culture", "Education"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "a-far-cry-from-africa", title: "A Far Cry from Africa", authorSlug: "derek-walcott", publicationYear: 1962, genre: "poetry", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "Walcott’s poem confronts colonial violence and the divided loyalties produced by a history that leaves the speaker caught between Africa and Europe.", themes: ["Colonial violence", "Divided identity", "History", "Belonging"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-white-fiends", title: "The White Fiends", authorSlug: "langston-hughes", publicationYear: 1924, genre: "poetry", period: "modernism", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "A bibliographic record for Hughes’s anti-racist poem, prescribed for its direct confrontation with white supremacy and racial terror.", themes: ["Racism", "Resistance", "Voice", "Violence"], sourceId: "external-copyright", license: "Copyright status varies by jurisdiction — catalogue metadata only",
  },
  {
    slug: "small-towns-and-the-river", title: "Small Towns and the River", authorSlug: "mamang-dai", publicationYear: 2006, genre: "poetry", period: "postcolonial", language: "English", subjectSlugs: ["postcolonial-literatures"],
    description: "Dai’s poem remembers small-town life through rivers, landscape, community, and the persistence of place amid change.", themes: ["Place", "Memory", "Ecology", "Community"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-second-sex-introduction", title: "The Second Sex, Introduction", authorSlug: "simone-de-beauvoir", publicationYear: 1949, genre: "theory", period: "modernism", language: "English", subjectSlugs: ["womens-writing"],
    description: "The prescribed introduction to Beauvoir’s feminist study asks how woman is produced as the Other within social, historical, and philosophical systems.", themes: ["Otherness", "Gender", "Freedom", "Social construction"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "a-room-of-ones-own", title: "A Room of One’s Own", authorSlug: "virginia-woolf", publicationYear: 1929, genre: "essay", period: "modernism", language: "English", subjectSlugs: ["womens-writing"],
    description: "Woolf’s extended essay links women’s literary production to material independence, education, space, and the freedom to think.", themes: ["Authorship", "Material conditions", "Gender", "Education"], sourceId: "external-copyright", license: "Copyright status varies by jurisdiction — catalogue metadata only",
  },
  {
    slug: "a-literature-of-their-own", title: "A Literature of Their Own", authorSlug: "elaine-showalter", publicationYear: 1977, genre: "criticism", period: "postmodernism", language: "English", subjectSlugs: ["womens-writing"],
    description: "Showalter’s feminist literary history proposes a tradition of women novelists and examines phases of women’s writing in relation to literary institutions.", themes: ["Feminist literary history", "Tradition", "Canon formation", "Authorship"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "in-other-worlds", title: "In Other Worlds", authorSlug: "gayatri-chakravorty-spivak", publicationYear: 1987, genre: "criticism", period: "postcolonial", language: "English", subjectSlugs: ["womens-writing"],
    description: "A bibliographic record for Spivak’s essays on feminist theory, deconstruction, representation, and the politics of reading across cultures.", themes: ["Representation", "Feminism", "Deconstruction", "Global power"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "under-western-eyes", title: "Under Western Eyes", authorSlug: "chandra-talpade-mohanty", publicationYear: 1984, genre: "criticism", period: "postcolonial", language: "English", subjectSlugs: ["womens-writing"],
    description: "Mohanty critiques universalising accounts of women in the global South and rethinks feminist solidarity through history, labour, and colonial power.", themes: ["Transnational feminism", "Representation", "Colonialism", "Solidarity"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "the-madwoman-in-the-attic", title: "The Madwoman in the Attic", authorSlug: "sandra-gilbert-susan-gubar", publicationYear: 1979, genre: "criticism", period: "postmodernism", language: "English", subjectSlugs: ["womens-writing"],
    description: "Gilbert and Gubar’s influential study reads nineteenth-century women’s writing through figures of authorship, confinement, anger, and revisionary imagination.", themes: ["Female authorship", "Confinement", "Anger", "Revision"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "sexual-textual-politics", title: "Sexual/Textual Politics", authorSlug: "toril-moi", publicationYear: 1985, genre: "criticism", period: "postmodernism", language: "English", subjectSlugs: ["womens-writing"],
    description: "Moi maps key debates in feminist literary theory and distinguishes competing approaches to gender, language, authorship, and interpretation.", themes: ["Feminist theory", "Text and gender", "Authorship", "Interpretation"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },
  {
    slug: "recasting-women", title: "Recasting Women", authorSlug: "kumkum-sangari-sudesh-vaid", publicationYear: 1989, genre: "criticism", period: "postcolonial", language: "English", subjectSlugs: ["womens-writing"],
    description: "A bibliographic record for essays that historicise women, gender, reform, and social change in South Asian contexts.", themes: ["Gender and history", "South Asia", "Reform", "Social change"], sourceId: "external-copyright", license: "Copyrighted work — catalogue metadata only",
  },

];

export const bookBySlug = (slug: string) => books.find((b) => b.slug === slug);
export const booksByAuthor = (authorSlug: string) => books.filter((b) => b.authorSlug === authorSlug);
export const booksBySubject = (subjectSlug: string) => books.filter((b) => b.subjectSlugs.includes(subjectSlug));
export const featuredBooks = () => books.filter((b) => b.featured);
