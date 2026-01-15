import Image from "next/image";
import { PropertyProps } from "@/interfaces";
import Button from "@/components/common/Button"; // Assuming Button component exists

interface PropertyDetailProps {
  property: PropertyProps;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  if (!property) {
    return <p>No property data available.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-96">
          <Image
            src={property.image || "/public/assets/Home/heroSection.png"}
            alt={property.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-2">{property.name}</h1>
          <p className="text-xl text-gray-700 mb-4">
            {property.address.city}, {property.address.state},{" "}
            {property.address.country}
          </p>

          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl">
              {"★".repeat(Math.round(property.rating))}
              {"☆".repeat(5 - Math.round(property.rating))}
            </span>
            <span className="ml-2 text-gray-600 text-lg">
              ({property.rating} stars)
            </span>
          </div>

          <p className="text-3xl font-semibold text-blue-600 mb-4">
            ${property.price}/night
            {property.discount && (
              <span className="ml-2 text-lg text-red-500 line-through">
                {property.discount} off
              </span>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Details</h2>
              <p>
                <strong>Category:</strong> {property.category.join(", ")}
              </p>
              <p>
                <strong>Bed:</strong> {property.offers.bed}
              </p>
              <p>
                <strong>Shower:</strong> {property.offers.shower}
              </p>
              <p>
                <strong>Occupants:</strong> {property.offers.occupants}
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              text="Book Now"
              bgColor="bg-green-600"
              color="text-white"
              onClick={() => console.log(`Booking ${property.name}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
