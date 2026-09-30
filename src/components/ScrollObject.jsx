
function ScrollObject() {
  return (
    <>
      <div className="car-intro pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden">
        <div
          className="car-scroll h-full will-change-transform"
          style={{
            transformOrigin: "50% 55%",
            WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            maskImage:
           "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}car.png`}
            alt="Neon sports car on a rainy night road"
            className="h-full w-auto max-w-none"
          />
        </div>

       
        <div className="absolute inset-0 bg -gradient-to-b from-black/70 via-transparent to-black/70" />
      </div>

      <div className="light-streak pointer-events-none absolute left-0 top-[74%] z-10 h-[2px ] w-full bg- gradient-to-r from-transparent via-cyan-300 to-transparent opacity-70 shadow-[0_0_25px_6px_rgba(34,211,238,0.6)] will-change-transform" />
    </>
  );
 }

   export default ScrollObject;
