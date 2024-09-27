export type Country = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: string;
  region: string;
  capital: string;
};

export type Region = 'all' | 'africa' | 'america' | 'asia' | 'europe' | 'oceania';
