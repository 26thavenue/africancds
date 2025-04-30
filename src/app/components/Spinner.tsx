const LoadingSpinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner