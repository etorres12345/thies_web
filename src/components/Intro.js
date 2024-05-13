import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="container mb-5 mt-sm-5 pb-5 ml-1 mr-1">
      <div className="row">
        <div className="introH1Div col-sm-12 col-lg-6 mb-md-0 mt-5 mt-sm-1 mt-md-2 order-md-1 d-flex align-items-center">
          <TextGenerateEffect
            words="Ingenieurbüro für Energie- und Anlagentechnik"
            className="textIntro text-center text-lg-end display-3 p-1 mx-md-5"
          />
        </div>
        <div className="col-sm-12 col-lg-6 order-md-2 d-flex justify-content-center">
          <img
            src={process.env.PUBLIC_URL + "/leistungen-2-0a7ff36d.webp"}
            alt="energy production machines"
            className="img-fluid h-100 w-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { TextGenerateEffect } from "./TextGenerateEffect";
// import "./Intro.css";

// export default function Intro() {
//   return (
//     <div className="container mb-5 mt-sm-5 pb-5 ml-1 mr-1">
//       <div className="row">
//         <div className="introH1Div col-sm-12 col-lg-6 mb-md-0 mt-5 mt-sm-1 mt-md-2 order-md-1 d-flex align-items-center">
//           {/* <h1 className="textIntro text-center text-lg-end display-3 p-1 mx-md-5">
//             Ingenieurbüro für Energie- und Anlagentechnik
//           </h1> */}
//           <TextGenerateEffect
//             words="Ingenieurbüro für Energie- und Anlagentechnik"
//             className="text-center text-lg-end display-3 p-1 mx-md-5"
//           />
//         </div>
//         <div className="col-sm-12 col-lg-6 order-md-2 d-flex justify-content-center">
//           <img
//             src={process.env.PUBLIC_URL + "/leistungen-2-0a7ff36d.webp"}
//             alt="energy production machines"
//             className="img-fluid h-100 w-auto rounded"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
