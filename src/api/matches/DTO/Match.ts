export interface Match {
  version: number
  match_id: number
  draft_timings: any[]
  teamfights: Teamfight[]
  objectives: Objective[]
  chat: Chat[]
  radiant_gold_adv: number[]
  radiant_xp_adv: number[]
  cosmetics: Cosmetics
  players: Player[]
  leagueid: number
  start_time: number
  duration: number
  series_id: number
  series_type: number
  cluster: number
  replay_salt: number
  radiant_win: boolean
  pre_game_duration: number
  match_seq_num: number
  tower_status_radiant: number
  tower_status_dire: number
  barracks_status_radiant: number
  barracks_status_dire: number
  first_blood_time: number
  lobby_type: number
  human_players: number
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
  all_word_counts: AllWordCounts
  my_word_counts: MyWordCounts
  comeback: number
  stomp: number
  replay_url: string
}

export interface Chat {
  time: number
  type: string
  key: string
  slot: number
  player_slot: number
}

export interface Objective {
  time: number
  type: string
  slot?: number
  key: any
  player_slot?: number
  value?: number
  killer?: number
  team?: number
  unit?: string
}

export interface Cosmetics {
  [key: string]: number
}

export interface Teamfight {
  start: number
  end: number
  last_death: number
  deaths: number
  players: Player[]
}

export interface Player {
  deaths_pos: KeyMap
  ability_uses: NameMap
  ability_targets: {}
  item_uses: NameMap
  killed: NameMap
  deaths: number
  buybacks: number
  damage: number
  healing: number
  gold_delta: number
  xp_delta: number
  xp_start: number
  xp_end: number

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
  purchase_ward_observer: number;
  purchase_ward_sentry: number;

  lane: number;
  lane_role: number;
  is_roaming: boolean;

  kills_log: KillLog[];

  times: number[];
  gold_t: number[];
  lh_t: number[];
  dn_t: number[];
  xp_t: number[];
}

export interface KillLog {
  time: number;
  key: string;
}

export interface DamageTargets {
  [name: string]: NameMap;
}

export interface NameMap {
  [name: string]: number;
}

export interface KeyMap {
  [key: string]: number;
}

export interface PermanentBuff {
  permanent_buff: number
  stack_count: number
  grant_time: number
}

export interface Cosmetic {
  item_id: number
  name: string
  prefab: string
  creation_date?: string
  image_inventory: string
  image_path: string
  item_description?: string
  item_name: string
  item_rarity?: string
  item_type_name?: string
  used_by_heroes?: string
}

export interface Benchmarks {
  gold_per_min: BenchMark
  xp_per_min: BenchMark
  kills_per_min: BenchMark
  last_hits_per_min: BenchMark
  hero_damage_per_min: BenchMark
  hero_healing_per_min: BenchMark
  tower_damage: BenchMark
}

export interface BenchMark {
  raw: number
  pct: number
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

export interface AllWordCounts {
  nice: number
  arena: number
  bug: number
}

export interface MyWordCounts { }
