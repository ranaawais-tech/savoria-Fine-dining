export type Testimonial = {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "Visited July 2023",
    rating: 5,
    comment: "An extraordinary dining experience from start to finish. The attention to detail, from the ambiance to the presentation of each dish, was impeccable. The filet mignon was cooked to perfection, and the wine pairing recommendation was spot on. Will definitely be returning for special occasions.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  },
  {
    id: 2,
    name: "David Chen",
    date: "Visited August 2023",
    rating: 4.5,
    comment: "The Chef's Tasting Menu was a culinary journey worth every penny. Each course told a story and the staff was incredibly knowledgeable about the origins of each ingredient. The atmosphere was elegant yet comfortable. The seasonal truffle pasta was a highlight I'm still dreaming about.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    date: "Visited June 2023",
    rating: 5,
    comment: "We celebrated our anniversary at Savoria, and it exceeded all expectations. The staff made us feel so special, and the food was phenomenal. The seafood risotto is the best I've ever had, and the chocolate lava cake was the perfect ending. Thank you for making our night memorable!",
    image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  }
];
