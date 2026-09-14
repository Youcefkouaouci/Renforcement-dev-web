export function estValide(texte) {
  if (typeof texte !== "string") {
    return false;
  }
  const longueur = texte.trim().length;
  return longueur >= 3 && longueur <= 40;
}

export function extraireActifs(elements) {
  if (!Array.isArray(elements)) {
    return [];
  }
  return elements
    .filter(
      (el) =>
        el !== null &&
        typeof el === "object" &&
        el.active === true &&
        typeof el.name === "string" &&
        el.name.trim() !== "",
    )
    .map((el) => el.name.trim());
}
