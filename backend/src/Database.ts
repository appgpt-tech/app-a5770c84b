//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { DownloadTaskEntity } from './db/DownloadTask.entity';
import { UserPreferencesEntity } from './db/UserPreferences.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      DownloadTaskEntity,
      UserPreferencesEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      DownloadTask: [
        { url: 'url 1', id: 87 },
        { url: 'url 2', id: 15 },
        { url: 'url 3', id: 6 },
        { url: 'url 4', id: 46 },
        { url: 'url 5', id: 45 },
      ],
      UserPreferences: [
        { targetFolder: 'targetFolder 1', id: 28 },
        { targetFolder: 'targetFolder 2', id: 26 },
        { targetFolder: 'targetFolder 3', id: 68 },
        { targetFolder: 'targetFolder 4', id: 21 },
        { targetFolder: 'targetFolder 5', id: 22 },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('DownloadTaskEntity', data.DownloadTask);
      await this.SeedResource('UserPreferencesEntity', data.UserPreferences);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}
