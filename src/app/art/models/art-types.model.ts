export interface ArtworksCollection {
    total_count: null;
    _links:      {};
    _embedded:   {
        artworks: ArtWork[]
    }
}

export interface ArtWork {
    id: string;
    slug: string;
    created_at: Date;
    updated_at: Date;
    title: string;
    category: string;
    medium: string;
    date: string;
    dimensions: Dimensions;
    published: boolean;
    website: string;
    signature: string;
    series: string;
    provenance: string;
    literature: string;
    exhibition_history: string;
    collecting_institution: string;
    additional_information: string;
    image_rights: string;
    blurb: string;
    unique: boolean;
    cultural_maker: null;
    iconicity: number;
    can_inquire: boolean;
    can_acquire: boolean;
    can_share: boolean;
    sale_message: null;
    sold: boolean;
    image_versions: string[];
    _links: Links;
    _embedded: Embedded;
}

export interface Embedded {
    editions: any[];
}

export interface Links {
    thumbnail: Artists;
    image: Image;
    partner: Artists;
    self: Artists;
    permalink: Artists;
    genes: Artists;
    artists: Artists;
    similar_artworks: Artists;
    collection_users: Artists;
    sale_artworks: Artists;
}

export interface Artists {
    href: string;
}

export interface Image {
    href: string;
    templated: boolean;
}

export interface Dimensions {
    in: CM;
    cm: CM;
}

export interface CM {
    text: string;
    height: number;
    width: number;
    depth: null;
    diameter: null;
}
