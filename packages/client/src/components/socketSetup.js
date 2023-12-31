// import { useContext, useEffect } from "react";
// import socket from "../../socket";

// const useSocketSetup = () => {
//   useEffect(() => {
//     socket.connect();
//     socket.on("connect_error", () => {
//       setUser({ loggedIn: false });
//     });
//     return () => {
//       socket.off("connect_error");
//     };
//   }, [setUser]);
// };

// export default useSocketSetup;