import React from 'react'

const Rating = (props) => {
    const {rating} = props;
  return (
    <div className="bg-white rounded-lg shadow-md border p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
          {rating.name.charAt(0)}
        </div>
        <div className="ml-4">
          <div className="text-xl font-semibold">{rating.name}</div>
          <div className="text-gray-500 text-sm">Rated {rating.rating} ⭐️</div>
        </div>
      </div>
      <div className="text-gray-700 mb-2">{rating.desc}</div>
    </div>
  )
}

export default Rating
