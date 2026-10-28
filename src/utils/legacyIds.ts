// Detail pages used to be addressed by array index (e.g. /project/0).
// These lists record the order at that time so old shared links still resolve.
export const legacyProjectIds = [
  "landsat",
  "carpg",
  "prevision",
  "water-intake",
  "llm-dbms",
];
export const legacyResearchIds = ["aegis", "efficient-vlm"];
export const legacyExperienceIds = [
  "cyberlink",
  "kkcompany",
  "ml-ta",
  "ntuee-instructor",
];

export function resolveLegacyId(id: string | undefined, legacyIds: string[]) {
  if (!id || !/^\d+$/.test(id)) return undefined;
  return legacyIds[Number(id)];
}
