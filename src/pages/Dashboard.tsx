// import React from 'react';
// import { Calendar, Clock, MapPin, CreditCard, X } from 'lucide-react';
// import { useAuth } from '../contexts/AuthContext';
// import { useBooking } from '../contexts/BookingContext';
// import { format } from 'date-fns';

// export const Dashboard: React.FC = () => {
//   const { user } = useAuth();
//   const { getUserBookings, cancelBooking, courts } = useBooking();
  
//   const userBookings = user ? getUserBookings(user.id) : [];
//   const upcomingBookings = userBookings.filter(booking => 
//     booking.bookingStatus !== 'cancelled' && new Date(booking.date + 'T' + booking.startTime) > new Date()
//   );
//   const pastBookings = userBookings.filter(booking => 
//     booking.bookingStatus !== 'cancelled' && new Date(booking.date + 'T' + booking.startTime) <= new Date()
//   );

//   const getCourtName = (courtId: string) => {
//     const court = courts.find(c => c.id === courtId);
//     return court?.name || 'Unknown Court';
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'confirmed':
//         return 'bg-green-100 text-green-800';
//       case 'cancelled':
//         return 'bg-red-100 text-red-800';
//       case 'completed':
//         return 'bg-blue-100 text-blue-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getPaymentStatusColor = (status: string) => {
//     switch (status) {
//       case 'paid':
//         return 'bg-green-100 text-green-800';
//       case 'pending':
//         return 'bg-orange-100 text-orange-800';
//       case 'failed':
//         return 'bg-red-100 text-red-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const handleCancelBooking = async (bookingId: string) => {
//     if (window.confirm('Are you sure you want to cancel this booking?')) {
//       await cancelBooking(bookingId);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
//           <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
//                 <Calendar className="w-6 h-6 text-orange-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm font-medium text-gray-600">Upcoming Bookings</p>
//                 <p className="text-2xl font-bold text-gray-900">{upcomingBookings.length}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <Clock className="w-6 h-6 text-blue-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm font-medium text-gray-600">Total Sessions</p>
//                 <p className="text-2xl font-bold text-gray-900">{userBookings.length}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                 <CreditCard className="w-6 h-6 text-green-600" />
//               </div>
//               <div className="ml-4">
//                 <p className="text-sm font-medium text-gray-600">Total Spent</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   ₹{userBookings.reduce((sum, booking) => sum + booking.totalAmount, 0).toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Upcoming Bookings */}
//         <div className="bg-white rounded-xl shadow-sm mb-8">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-xl font-semibold text-gray-900">Upcoming Bookings</h2>
//           </div>
//           <div className="p-6">
//             {upcomingBookings.length === 0 ? (
//               <div className="text-center py-8">
//                 <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//                 <p className="text-gray-500">No upcoming bookings</p>
//                 <a
//                   href="/courts"
//                   className="inline-block mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
//                 >
//                   Book a Court
//                 </a>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {upcomingBookings.map((booking) => (
//                   <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
//                     <div className="flex items-center justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-4">
//                           <div>
//                             <h3 className="font-semibold text-gray-900">{getCourtName(booking.courtId)}</h3>
//                             <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
//                               <div className="flex items-center space-x-1">
//                                 <Calendar className="w-4 h-4" />
//                                 <span>{format(new Date(booking.date), 'MMM d, yyyy')}</span>
//                               </div>
//                               <div className="flex items-center space-x-1">
//                                 <Clock className="w-4 h-4" />
//                                 <span>{booking.startTime} - {booking.endTime}</span>
//                               </div>
//                               <div className="flex items-center space-x-1">
//                                 <CreditCard className="w-4 h-4" />
//                                 <span>₹{booking.totalAmount}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.bookingStatus)}`}>
//                           {booking.bookingStatus}
//                         </span>
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(booking.paymentStatus)}`}>
//                           {booking.paymentStatus}
//                         </span>
//                         <button
//                           onClick={() => handleCancelBooking(booking.id)}
//                           className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                           title="Cancel booking"
//                         >
//                           <X className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Past Bookings */}
//         <div className="bg-white rounded-xl shadow-sm">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-xl font-semibold text-gray-900">Past Bookings</h2>
//           </div>
//           <div className="p-6">
//             {pastBookings.length === 0 ? (
//               <div className="text-center py-8">
//                 <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//                 <p className="text-gray-500">No past bookings</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {pastBookings.slice(0, 5).map((booking) => (
//                   <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
//                     <div className="flex items-center justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-4">
//                           <div>
//                             <h3 className="font-semibold text-gray-900">{getCourtName(booking.courtId)}</h3>
//                             <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
//                               <div className="flex items-center space-x-1">
//                                 <Calendar className="w-4 h-4" />
//                                 <span>{format(new Date(booking.date), 'MMM d, yyyy')}</span>
//                               </div>
//                               <div className="flex items-center space-x-1">
//                                 <Clock className="w-4 h-4" />
//                                 <span>{booking.startTime} - {booking.endTime}</span>
//                               </div>
//                               <div className="flex items-center space-x-1">
//                                 <CreditCard className="w-4 h-4" />
//                                 <span>₹{booking.totalAmount}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor('completed')}`}>
//                           completed
//                         </span>
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(booking.paymentStatus)}`}>
//                           {booking.paymentStatus}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };