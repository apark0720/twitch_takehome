import { config } from 'ventura/globals';

export function gamesDataAdapter(gamesData: any) {
  return gamesData.map((gameData: any) => ({
    icon: config.gameIconURLTemplate(gameData.ID),
    name: gameData.Name,
    supportsAddons: gameData.SupportsAddons,
    supportsVoice: gameData.SupportsVoice,
    order: gameData.Order,
    details: {
      slug: gameData.Slug,
      fileNames: config.gameFileNamesTemplate(gameData.GameFiles),
      categorySectionNames: config.categorySectionNamesTemplate(
        gameData.CategorySections,
      ),
    },
  }));
}
