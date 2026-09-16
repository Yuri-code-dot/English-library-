import type { Author } from "../../types";

const commonsFilePath = (filename: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;

const fallbackPortraits: Record<string, { filename: string; alt: string }> = {
  "august-strindberg": { filename: "Strindberg 1879.jpg", alt: "Portrait of August Strindberg, 1879" },
  "bertolt-brecht": { filename: "Bertolt Brecht Portrait-1.jpg", alt: "Portrait of Bertolt Brecht, 1954" },
  "samuel-beckett": { filename: "Samuel Beckett.jpg", alt: "Portrait of Samuel Beckett" },
  "harold-pinter": { filename: "Harold Pinter 1962.jpg", alt: "Portrait of Harold Pinter, 1962" },
  "ernest-hemingway": { filename: "Ernest Hemingway portrait.JPG", alt: "Portrait of Ernest Hemingway" },
  "arthur-miller": { filename: "Arthur-miller.jpg", alt: "Portrait of Arthur Miller" },
  "edgar-allan-poe": { filename: "Edgar Allan Poe portrait.jpg", alt: "Portrait of Edgar Allan Poe" },
  "booker-t-washington": { filename: "Booker T Washington portrait.jpg", alt: "Portrait of Booker T. Washington" },
  "maya-angelou": { filename: "Portrait photograph of Maya Angelou, c. 1974.webp", alt: "Portrait of Maya Angelou, c. 1974" },
  "william-faulkner": { filename: "Portrait of William Faulkner LCCN2004662865.jpg", alt: "Portrait of William Faulkner" },
  "walt-whitman": { filename: "Walt Whitman portrait painting.jpg", alt: "Portrait of Walt Whitman" },
  "robert-frost": { filename: "Portrait of Robert Frost.jpg", alt: "Portrait of Robert Frost" },
  "langston-hughes": { filename: "Langston Hughes.jpg", alt: "Portrait of Langston Hughes" },
  "derek-walcott": { filename: "Derek Walcott (3x4 cropped).jpg", alt: "Portrait of Derek Walcott" },
  "simone-de-beauvoir": { filename: "Simone de Beauvoir.jpg", alt: "Portrait of Simone de Beauvoir" },
  "gayatri-chakravorty-spivak": { filename: "Gayatri Chakravorty Spivak.jpg", alt: "Portrait of Gayatri Chakravorty Spivak" },
  "chandra-talpade-mohanty": { filename: "Chandra Talpade Mohanty (2011).jpg", alt: "Portrait of Chandra Talpade Mohanty" },
  "toril-moi": { filename: "Toril Moi.JPG", alt: "Portrait of Toril Moi" },
};

function initials(name: string) {
  return name
    .replace(/&.*$/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function AuthorPortrait({ author, className = "" }: { author: Author; className?: string }) {
  const fallback = fallbackPortraits[author.slug];
  const imageUrl = author.portrait?.url ?? (fallback ? commonsFilePath(fallback.filename) : undefined);
  const alt = author.portrait?.alt ?? fallback?.alt ?? `${author.name} portrait`;

  if (!imageUrl) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-[#24211d] ${className}`} aria-label={alt}>
        <span className="font-display text-4xl font-semibold tracking-[0.08em] text-bronze/80">
          {initials(author.name)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
      onError={(event) => {
        const image = event.currentTarget;
        image.style.display = "none";
        image.parentElement?.classList.add("portrait-fallback");
        const fallbackNode = document.createElement("span");
        fallbackNode.className = "font-display text-4xl font-semibold tracking-[0.08em] text-bronze/80";
        fallbackNode.textContent = initials(author.name);
        image.parentElement?.appendChild(fallbackNode);
      }}
    />
  );
}
