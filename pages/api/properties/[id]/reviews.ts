import { NextApiRequest, NextApiResponse } from "next";
import { Review } from "@/interfaces";

const reviews: Review[] = [
  {
    id: "1",
    author: "John Doe",
    comment: "This is a great place to stay!",
    rating: 5,
  },
  {
    id: "2",
    author: "Jane Smith",
    comment: "The location is perfect, but it was a bit noisy.",
    rating: 4,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review[]>
) {
  // In a real application, you would fetch reviews for the property with the given id.
  res.status(200).json(reviews);
}
