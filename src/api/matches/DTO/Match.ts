export interface Match {
  radiant_gold_adv: number[];
  radiant_xp_adv: number[];
  players: Player[]
  radiant_win: boolean
  duration: number
  pre_game_duration: number
  start_time: number
  match_id: number
  match_seq_num: number
  tower_status_radiant: number
  tower_status_dire: number
  barracks_status_radiant: number
  barracks_status_dire: number
  cluster: number
  first_blood_time: number
  lobby_type: number
  human_players: number
  leagueid: number
  game_mode: number
  flags: number
  engine: number
  radiant_score: number
  dire_score: number
  picks_bans: PicksBan[]
  od_data: OdData
  metadata: any
  patch: number
  region: number
}

export interface Player {
  account_id?: number
  player_slot: number
  team_number: number
  team_slot: number
  hero_id: number
  item_0: number
  item_1: number
  item_2: number
  item_3: number
  item_4: number
  item_5: number
  backpack_0: number
  backpack_1: number
  backpack_2: number
  item_neutral: number
  kills: number
  deaths: number
  assists: number
  leaver_status: number
  last_hits: number
  denies: number
  gold_per_min: number
  xp_per_min: number
  level: number
  net_worth: number
  aghanims_scepter: number
  aghanims_shard: number
  moonshard: number
  hero_damage: number
  tower_damage: number
  hero_healing: number
  gold: number
  gold_spent: number
  ability_upgrades_arr: number[]
  personaname?: string
  name: any
  last_login?: string
  radiant_win: boolean
  start_time: number
  duration: number
  cluster: number
  lobby_type: number
  game_mode: number
  is_contributor: boolean
  patch: number
  region: number
  isRadiant: boolean
  win: number
  lose: number
  total_gold: number
  total_xp: number
  kills_per_min: number
  kda: number
  abandons: number
  rank_tier?: number
  is_subscriber: boolean
  benchmarks: Benchmarks
  additional_units?: AdditionalUnit[]

  purchase_ward_observer: number;
  purchase_ward_sentry: number;

  kills_log: KillLog[];
}

export interface KillLog {
  time: number;
  key: string;
}

export interface Benchmarks {
  gold_per_min: RawPctBenchMark
  xp_per_min: RawPctBenchMark
  kills_per_min: RawPctBenchMark
  last_hits_per_min: RawPctBenchMark
  hero_damage_per_min: RawPctBenchMark
  hero_healing_per_min: RawPctBenchMark
  tower_damage: RawPctBenchMark
}

export interface RawPctBenchMark {
  raw: number
  pct: number
}

export interface AdditionalUnit {
  unitname: string
  item_0: number
  item_1: number
  item_2: number
  item_3: number
  item_4: number
  item_5: number
  backpack_0: number
  backpack_1: number
  backpack_2: number
  item_neutral: number
}

export interface PicksBan {
  is_pick: boolean
  hero_id: number
  team: number
  order: number
}

export interface OdData {
  has_api: boolean
  has_gcdata: boolean
  has_parsed: boolean
}
