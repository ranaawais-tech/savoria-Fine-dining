export type SpecialOffer = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  availability: string;
  buttonText: string;
};

export const specialOffers: SpecialOffer[] = [
  {
    id: 1,
    title: "Chef's Tasting Menu",
    description: "Six-course tasting journey with wine pairings. Available Thursday to Sunday.",
    price: 99,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    availability: "Limited availability - only 10 tables per evening",
    buttonText: "Reserve Now"
  },
  {
    id: 2,
    title: "Date Night Special",
    description: "Three-course dinner for two with a bottle of house wine and shared dessert.",
    price: 120,
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    availability: "Every Tuesday & Wednesday • 6pm-10pm",
    buttonText: "Book Date Night"
  },
  {
    id: 3,
    title: "Sunday Family Feast",
    description: "Shareable platters of our most popular dishes perfect for family gatherings.",
    price: 145,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    availability: "Sundays Only • Minimum 4 People",
    buttonText: "Book Family Feast"
  }
];
