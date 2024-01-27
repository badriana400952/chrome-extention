import React from "react";

const useLoading = () => {
   const [loading, setLoading] = React.useState(false);

   const toggleLoadingOn = () => setLoading(true);
   const toggleLoadingOff = () => setLoading(false);

   return {
      loading,
      toggleLoadingOn,
      toggleLoadingOff,
   };
};

export default useLoading;
