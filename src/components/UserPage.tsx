import { useAuth } from "./AuthContext"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const UserPage = () => {
   const {user}=useAuth(); 

   const [bookings, setBookings] = useState([]);

   useEffect(()=>{
    const fetchbookings=async ()=>{
        try{
          const response = await fetch('http://localhost:8080/booking/all',{
        method:'GET'
      })
      if(!response.ok){
        throw new Error("Failed to fetch bookings");
      }
      const data=await response.json();
      console.log(data);
      setBookings(data);
      }
      catch(error){
         console.error("Error fetching bookings:", error);
      }
    }
    fetchbookings();
   },[])

  //  const bookings=[
  //   {id:1,service:"Electrician - Fan Repair",date:"12 Oct 2025",status:"Completed"},
  //   {id:2,service:"Plumbing - Tap Replacement",date:"17 Oct 2025",status:"In Progress"},
  //   {id:3,service:"House Cleaning - Clean entire house",date:"17 Oct 2025",status:"In Progress"}
  //  ]

    const recommendations = [
    "Pest Control",
    "Gardening Service",
    "Home Painting",
  ];

  return (
    <div>
    <motion.div 
    initial={{opacity:0,y:-10}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.6}}
    className="h-[50vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white mb-2">Welcome back, {user} 👋</h2>
        <p className="text-white/90 text-lg">Book your favorite services quickly from here.</p>
    </motion.div>
    <section className="px-8 py-16 bg-white text-gray-800">
        <h3 className="text-3xl font-bold text-center mb-10">Choose Your Service</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Electrician", desc: "From wiring to appliance installation — we’ve got your power needs covered." },
            { title: "Plumbing", desc: "Get instant plumbing solutions — from pipe repairs to bathroom fittings." },
            { title: "House Cleaning", desc: "Deep cleaning experts to make your home sparkle and shine." },
          ].map((feature, idx) => (
            <Card key={idx} className="shadow-lg hover:scale-105 transition">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-white mb-10">
        <h3 className="text-3xl  text-center mb-3 font-medium">Your Recent bookings</h3>
        <div className="grid gap-4 sm:grid-cols-3">
           {bookings.map((b:any)=>(
            <Card key={b.id} className="hover:scale-105 transition">
                <CardContent className="p-4">
                  <p className="font-semibold">{b.bookingType}</p>
                  <p className="text-sm text-gray-500">Booked on {b.bookingDate}</p>
                  <span className={`inline-block mt-2 text-sm px-2 py-1 rounded-full ${
                    b.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"}`}>
                    {b.status}
                  </span>
                </CardContent>
            </Card>
           ))}
        </div>
      </section>
      <section className="bg-white">
        <h3 className="text-xl font-medium mb-3">Recommended for You</h3>
        <div className="flex flex-wrap gap-3">
          {recommendations.map((r) => (
            <Button
              key={r}
              variant="outline"
              className="rounded-full text-sm hover:bg-blue-50"
            >
              {r}
            </Button>
          ))}
        </div>
      </section>
      </div>
  )
}

export default UserPage
