import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import toast, { Toaster } from "react-hot-toast";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      toast.success("Room created successfully");
      setShowChat(true);
    } else {
      toast.error("Both fields are mandatory");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      {!showChat ? (
        <div className="bg-white p-8 rounded-lg shadow-lg md:w-96 w-full">
          <img src="/logo.png" alt="Logo" class="mx-auto mb-8 w-24" />
          <h4 class="text-2xl mb-6 text-center font-semibold">
            Enter Room Details
          </h4>
          <input
            type="text"
            className="border border-gray-300 px-4 py-3 w-full rounded-md focus:outline-none focus:border-blue-500 mb-3"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            className="border border-gray-300 px-4 py-3 w-full rounded-md focus:outline-none focus:border-blue-500 mb-3"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button
            onClick={joinRoom}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none w-full"
          >
            Join A Room
          </button>
          <footer class="text-center mt-8">
            <h4 class="text-sm text-gray-600">
              Built with 💛 by{" "}
              <a
                href="portfolio-sable-kappa-67.vercel.app"
                class="text-blue-500 hover:underline"
              >
                Tejas Chhabra
              </a>
            </h4>
          </footer>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
