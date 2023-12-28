import { PortableTextBlock } from 'sanity';

export type Job = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  salary: string;
  location: string;
  mainImage: string;
  _createdAt: Date;
  description: string;
  body: PortableTextBlock[];
};
