interface TotalAmountProps {
  total: number;
}

const TotalAmount: React.FC<TotalAmountProps> = ({ total }) => {
  return (
    <div className="mt-10">
      <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div className="mx-auto max-w-xs px-8">
          <p className="text-base font-semibold text-gray-600">Total</p>
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              ₹{total}
            </span>
          </p>
          <p className="mt-6 text-xs leading-5 text-gray-600">
            Please cross-check all the denomination counts before proceeding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalAmount;
