import React from 'react';

const listings = [
    {
        id: 1,
        title: "Home in Islamabad",
        type: "Home",
        price: 113,
        rating: 4.84,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        guestFavorite: false
    },
    {
        id: 2,
        title: "Condo in Islamabad",
        type: "Condo",
        price: 80,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 3,
        title: "Apartment in Islamabad",
        type: "Apartment",
        price: 70,
        rating: 4.92,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 4,
        title: "Guest suite in Islamabad",
        type: "Guest suite",
        price: 54,
        rating: 4.89,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
    {
        id: 5,
        title: "Home in Islamabad",
        type: "Home",
        price: 174,
        rating: 4.96,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        guestFavorite: true
    },
];

// Individual Card Component
const ListingCard = ({ item }) => (
    <div className="group cursor-pointer">
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
            <img 
                src={item.image} 
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            
            {/* Heart Icon (Top Right) */}
            <button className="absolute top-3 right-3 z-10">
                <svg viewBox="0 0 32 32" className="h-6 w-6 stroke-white stroke-[2px] fill-black/30 hover:fill-rose-500 transition">
                    <path d="m16 28c7-4.733 14-10 14-17 0-3.867-3.133-7-7-7-2.544 0-4.746 1.353-6 3.394-1.254-2.041-3.456-3.394-6-3.394-3.867 0-7 3.133-7 7 0 7 7 12.267 14 17z"></path>
                </svg>
            </button>

            {/* Guest Favorite Badge (Top Left) */}
            {item.guestFavorite && (
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-bold shadow-md border border-gray-100">
                    Guest favorite
                </div>
            )}
        </div>

        {/* Text Details Section */}
        <div className="mt-3">
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-[15px] text-gray-800 truncate">{item.title}</h3>
                <div className="flex items-center gap-1 text-[14px]">
                    <span className="text-black">★</span>
                    <span className="font-light text-gray-600">{item.rating}</span>
                </div>
            </div>
            <p className="text-gray-500 text-[14px] font-light mt-0.5">
                ${item.price} for 2 nights
            </p>
        </div>
    </div>
);

const AllListings = () => {
    return (
        <div className="max-w-[1280px] mx-auto p-6 font-sans">
            {/* Header with Title and Arrow */}
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                    Popular homes in Islamabad
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center">
                    <svg viewBox="0 0 18 18" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 3 12 9 6 15"></polyline>
                    </svg>
                </button>
            </div>

            {/* Main Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
                {listings.map((item) => (
                    <ListingCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default AllListings;