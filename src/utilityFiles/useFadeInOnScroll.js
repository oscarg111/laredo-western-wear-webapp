import { useEffect } from "react";

const useFadeInOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".fade-section")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useFadeInOnScroll;
