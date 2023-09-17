// Define enums for specific sets of values
enum Category {
    PAINTING = "PAINTING",
    // Add other categories as needed
  }
  
enum Status {
    AVAILABLE = "AVAILABLE",
    // Add other statuses as needed
}

// Define the shape of the nested 'dimensions' object
interface Dimensions {
  depth: number;
  height: number;
  width: number;
}

// Define the shape of the nested 'artistShort' object
interface ArtistShort {
  name: string;
  country: string;
  countryCode: string;
  fullname: string;
}
  
  // Main interface for the artwork
export interface IArtwork {
  _id: string;
  title: string;
  category: Category;
  styles: string[];
  mediums: string[];
  materials: string[];
  subjects: string[];
  description: string;
  dimensions: Dimensions;
  creationYear: number;
  imageUrl: string;
  price: number;
  artistShort: ArtistShort;
  fullname: string;
  status: Status;
  artistId: string;
  otherArtworkImages: string[];
}
