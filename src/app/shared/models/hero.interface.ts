export type Gender = 'Male' | 'Female';

export interface PowerStats {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat: string
}

export interface Biography {
    full_name: string,
    alter_egos: Array<string>,
    aliases: Array<string>,
    place_of_birth: string,
    first_appearence: string,
    publisher: string,
    alignment: string,
}

export interface Appearence {
    gender: Gender,
    race: string,
    height: Array<string>,
    weight: Array<string>,
    eye_color: string,
    hair_color: string
}

export interface Work {
    occupation: string,
    base: string
}

export interface Connections {
    group_affiliation: string,
    relatives: string    
}

export interface Image {
    url: string
}

export interface Hero {
    id: number,
    name: string,
    powerstats: PowerStats,
    biography: Biography,
    appearance: Appearence,
    work: Work,
    connections: Connections,
    image: Image
}