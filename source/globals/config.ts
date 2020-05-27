export class Config {
  readonly gamesDataURL = '/static/games.json';

  gameIconURLTemplate(gameID: number) {
    return `/static/images/${gameID}.png`;
  }

  gameFileNamesTemplate(gameFiles: any) {
    return gameFiles.map((gameFile: any) => gameFile.FileName);
  }

  categorySectionNamesTemplate(categorySections: any) {
    return categorySections.map((categorySection: any) => categorySection.Name);
  }
}
