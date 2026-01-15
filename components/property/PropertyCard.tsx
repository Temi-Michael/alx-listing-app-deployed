import Image from "next/image";
import { PropertyCardProps } from "@/interfaces/index";
import Button from "../common/Button";

export default function PropertyCard({ id, property }: PropertyCardProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-64">
        <Image
          src={property.image || "/public/assets/Home/heroSection.png"}
          alt={property.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600">
          {property.address.city}, {property.address.state},{" "}
          {property.address.country}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {"★".repeat(Math.round(property.rating))}
            {"☆".repeat(5 - Math.round(property.rating))}
          </span>
          <span className="ml-2 text-gray-600">({property.rating} stars)</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-semibold">${property.price}/night</p>
          <Button
            text="View Details"
            bgColor="bg-blue-500"
            color="text-white"
            onClick={() => console.log(`View details for property ${id}`)}
          />
        </div>
      </div>
    </div>
  );
}
