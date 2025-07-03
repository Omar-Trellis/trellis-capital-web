export interface CaseStudy {
  id: number;
  title: string;
  location: string;
  purchasePrice: number;
  renovationCost: number;
  salePrice: number;
  timelineMonths: number;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Miami Beach Renovation',
    location: 'Miami, FL',
    purchasePrice: 335000,
    renovationCost: 65000,
    salePrice: 615000,
    timelineMonths: 6,
  },
  {
    id: 2,
    title: 'Tampa Fix & Flip',
    location: 'Tampa, FL',
    purchasePrice: 210000,
    renovationCost: 45000,
    salePrice: 385000,
    timelineMonths: 5,
  },
  {
    id: 3,
    title: 'Orlando Family Home',
    location: 'Orlando, FL',
    purchasePrice: 280000,
    renovationCost: 55000,
    salePrice: 495000,
    timelineMonths: 7,
  },
]; 