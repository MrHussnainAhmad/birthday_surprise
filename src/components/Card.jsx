import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from "react-router-dom";

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
      <div className="w-[400px]  h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}
        >
          <div id="card" className={`${cardClass}`} onClick={toggleCard}>
            <div id="card-inside">
              <div className="wrap">
                <p>Happy Birthday, Abdul Hadi!</p>
                <p>
                  Umeed ha Mera Bhai, Thk hoga, 10 Saal ky hony py bht mubarak
                  ho
                </p>
                <p>I hope you have a very blessed birthday!</p>
                <p>
                  Allah Mery Bhai ko Acha, Naek aur apny Mama Papa ka
                  farma-brdar bany.
                </p>
                <span>AMEEN</span>
                <p>
                  Allah Mery Bhai ko Kush rakhy, Lambi aur tandurust Zindagi
                  ata farmay. Allah tumhara naseeb acha banay.aur tumhy duniya
                  ki hr khushi naseeb kry.
                </p>
                <span>AMEEN</span>
                <p className="signed">Alaadin</p>
              </div>
            </div>

            <div id="card-front">
              <div className="wrap">
                <h1>Happy Birthday!</h1>
                <h1 style={{ fontStyle: "normal" }}>💌</h1>
                <p
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "10px", // Adjust as needed
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                  }}
                >
                  Card py Click Kro.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* prone to bugs */}
        {isCardOpened && (
          <motion.div
            className="-mt-[3rem]"
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            transition={{ duration: 1.2 }}
          >
            <Link to="/cake">
              <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
                Next Page
              </p>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Card;
