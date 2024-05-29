'use client'

import { fetchProperties } from "@/utils/requests";
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Spinner from "./Spinner";


const Properties = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPropertiesData = async () => {
      try {
        const properties = await fetchProperties();
        setProperties(properties)
      } catch (error) {
        console.error("Error fetching properties: ", error);
      } finally {
        setLoading(false)
      }
    };

    if(properties.length === 0){
      fetchPropertiesData();
    }
  }, [])

  // sort properties according to date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <>
      {loading && <Spinner loading={loading} />}
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          {properties.length === 0 && !loading ? (
            <h1 className="text-center text-bold text-2xl mt-10">
              Properties not found
            </h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map(property => (
                <PropertyCard
                  key={property._id}
                  property={property}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Properties