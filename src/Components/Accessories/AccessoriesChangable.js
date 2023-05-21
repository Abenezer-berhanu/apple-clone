import React, { useState } from "react";

export default function AccessoriesChangable() {
  const [active, setActive] = useState({
    product: true,
  });
  const handleProduct = () => {
    setActive({ product: true });
  };
  const handleCatagory = () => {
    setActive({ product: false });
  };

  return (
    <div className="accessories--changable--card">
      <div className="accessories--changable--nav">
        <h3
          className={active.product ? "active" : null}
          onClick={handleProduct}
        >
          Browse by Product
        </h3>
        <h3
          className={active.product ? null : "active"}
          onClick={handleCatagory}
        >
          Browse by Catagory
        </h3>
      </div>
      <div className="product">
        {active.product && (
          <div>
            <section>
              <span>
                <img src="./accessoriesImage/image 1.png" alt="" />
              </span>
              <h1>Mac</h1>
            </section>
            <section>
              <span>
                <img src="./accessoriesImage/image 2.png" alt="" />
              </span>
              <h1>iPad</h1>
            </section>
            <section>
              <span>
                <img src="./accessoriesImage/image 3.png" alt="" />
              </span>
              <h1>iPhone</h1>
            </section>
            <section>
              <span>
                <img src="./accessoriesImage/image 4.png" alt="" />
              </span>
              <h1>Watch</h1>
            </section>
            <section>
              <span>
                <img src="./accessoriesImage/image 5.png" alt="" />
              </span>
              <h1>Tv & Home</h1>
            </section>
          </div>
        )}
        {!active.product && (
          <div>
          <section>
              <span>
                <img src="./accessoriesImage/image 6.png" alt="" />
              </span>
              <h1>What's new</h1>
            </section>
            <section>
              <span>
                <img src="./accessoriesImage/image 7.png" alt="" />
              </span>
              <h1>Made by Apple</h1>
            </section>
            <section>
              <span>
                <img src="./accessoriesImage/image 8.png" alt="" />
              </span>
              <h1>MagSafe</h1>
            </section>
            <section>
              <span>
                <img src="./accessoriesImage/image 9.png" alt="" />
              </span>
              <h1>Power & cable</h1>
            </section>
            <section>
              <span>
                <img src="./accessoriesImage/image 10.png" alt="" />
              </span>
              <h1>case and protectin</h1>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
