import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coachingPlans } from '../data/mockData';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';


export const Subscribe: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cash'>('upi');
  const [loading, setLoading] = useState(false);

  const plan = coachingPlans.find(p => p.id === id);

  if (!plan) return <div className="text-center mt-10 text-red-600">Plan not found</div>;

  const handlePayment = async () => {
    setLoading(true);
    try {
      const paymentId = paymentMethod !== 'cash' ? `pay_${Date.now()}` : undefined;

      // Simulate booking submission
      console.log('Subscription submitted:', {
        userId: user?.id ?? 'guest',
        planId: plan.id,
        paymentMethod,
        paymentId,
        amount: plan.pricePerMonth,
      });

      // Simulate redirect
      navigate('/thank-you');
    } catch (e) {
      console.error('Subscription failed', e);
    } finally {
      setLoading(false);
    }
  };

  const paymentOptions = [
    { 
        id: 'upi', 
        label: 'UPI', 
        description: 'Pay instantly using UPI apps like GPay, PhonePe, Paytm',
        icon: Smartphone, 
        color: 'bg-blue-100 text-blue-600' 
    },
    { 
        id: 'card', 
        label: 'Card', 
        description: 'Credit/Debit card, Net Banking, Wallets',
        icon: CreditCard, 
        color: 'bg-green-100 text-green-600' 
    },
    { 
        id: 'cash', 
        label: 'Cash at Court', 
        description: 'Pay cash when you arrive at the court',
        icon: Banknote, 
        color: 'bg-orange-100 text-orange-600' 
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Confirm Subscription</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">{plan.name}</h2>
        <p className="text-gray-600 mb-2">{plan.coach.name} • {plan.type} program</p>
        <p className="text-gray-900 font-medium">₹{plan.pricePerMonth} per month</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Choose Payment Method</h3>
        <div className="space-y-3">
        {paymentOptions.map(opt => (
            <div
            key={opt.id}
            onClick={() => setPaymentMethod(opt.id as any)}
            className={`flex items-start space-x-3 border rounded-lg p-4 cursor-pointer ${
                paymentMethod === opt.id 
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mt-1 ${opt.color}`}>
                <opt.icon className="w-5 h-5" />
            </div>
            <div>
                <div className="font-medium text-gray-700">{opt.label}</div>
                <p className="text-sm text-gray-600">{opt.description}</p>
            </div>
            </div>
        ))}
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition disabled:opacity-50"
      >
        {loading ? 'Processing...' : `Subscribe for ₹${plan.pricePerMonth}`}
      </button>

      {paymentMethod === 'cash' && (
        <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-orange-800">
                <strong>Note:</strong> Please arrive 10 minutes early to complete payment at the reception.
                Your booking will be confirmed upon payment.
            </p>
        </div>
      )}
    </div>
  );
};
