import { GameTableReader } from './GameTableReader';
import { GameTableEntry } from './GameTableEntry';
import { UserSettings } from './UserSettings';
import { BymlNode } from '../Byml';

export class GameTable {

  public userGames: GameTableEntry[] = [];
  public tutorialGames: GameTableEntry[] = [];
  public order: number[];
  public userSettings: UserSettings;

  public _bymlCache: BymlNode = null;

  static fromBuffer(buffer: ArrayBuffer) {
    const reader = new GameTableReader(buffer);
    const table = new GameTable();
    table.userGames = reader.getUserGameEntries();
    table.tutorialGames = reader.getTutorialGameEntries();
    table.userSettings = reader.getUserSettings();
    table.order = reader.getIdMap();
    table._bymlCache = reader.rootNode;
    return table;
  }

  static async fromUrl(url: string) {
    const response = await fetch(url);
    const data = await response.arrayBuffer();
    return GameTable.fromBuffer(data);
  }

  getFileNameOrder() {
    
  }

}