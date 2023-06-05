//l'interfaccia nei metodi http ha il compito anche di filtrare e prendere solo i dati che ci interessano dall'API

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
