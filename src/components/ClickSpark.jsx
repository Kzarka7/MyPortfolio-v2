import { useRef, useEffect, useCallback } from "react";

export default function ClickSpark({
  sparkColor = "#4FC3F7",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1,
  children,
}) {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const animationRef = useRef(null);

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case "linear":
          return t;

        case "ease-in":
          return t * t;

        case "ease-in-out":
          return t < 0.5
            ? 2 * t * t
            : -1 + (4 - 2 * t) * t;

        default:
          return t * (2 - t);
      }
    },
    [easing]
  );


  // Canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;


    const resize = () => {
      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;
    };


    resize();


    const observer = new ResizeObserver(resize);
    observer.observe(parent);


    return () => {
      observer.disconnect();
    };

  }, []);



  // Animation only runs when sparks exist
  const animate = useCallback(
    (time) => {
      const canvas = canvasRef.current;
      if (!canvas) return;


      const ctx = canvas.getContext("2d");

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );


      sparksRef.current = sparksRef.current.filter(
        (spark) => {

          const elapsed =
            time - spark.startTime;


          if (elapsed >= duration) {
            return false;
          }


          const progress =
            elapsed / duration;


          const eased =
            easeFunc(progress);


          const distance =
            eased *
            sparkRadius *
            extraScale;


          const length =
            sparkSize *
            (1 - eased);


          const x1 =
            spark.x +
            distance *
              Math.cos(spark.angle);


          const y1 =
            spark.y +
            distance *
              Math.sin(spark.angle);


          const x2 =
            spark.x +
            (distance + length) *
              Math.cos(spark.angle);


          const y2 =
            spark.y +
            (distance + length) *
              Math.sin(spark.angle);



          ctx.strokeStyle =
            sparkColor;

          ctx.lineWidth = 2;

          ctx.beginPath();

          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);

          ctx.stroke();


          return true;
        }
      );


      if (sparksRef.current.length > 0) {
        animationRef.current =
          requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
      }

    },
    [
      duration,
      easeFunc,
      extraScale,
      sparkColor,
      sparkRadius,
      sparkSize,
    ]
  );



  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, []);



  const handleClick = (e) => {
    const canvas = canvasRef.current;

    if (!canvas) return;


    const rect =
      canvas.getBoundingClientRect();


    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;


    const now =
      performance.now();



    sparksRef.current.push(
      ...Array.from(
        { length: sparkCount },
        (_, i) => ({
          x,
          y,

          angle:
            (Math.PI * 2 * i) /
            sparkCount,

          startTime: now,
        })
      )
    );



    if (!animationRef.current) {
      animationRef.current =
        requestAnimationFrame(animate);
    }
  };



  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,

          width: "100%",
          height: "100%",

          pointerEvents: "none",
          zIndex: 10,
        }}
      />


      {children}

    </div>
  );
}