import { useState } from "react";
import { Bars } from "react-loader-spinner";
import { PinIcon } from "./components";
import { DOMMessage, DOMMessageResponse } from "./types";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<DOMMessageResponse | null>(null);

  const handleParseProfile = () => {
    setIsLoading(true);
    if (chrome.tabs) {
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          // TODO: throw error if  tabs[0].url does not match required regex
          chrome.tabs.sendMessage(
            tabs[0].id || 0,
            { type: "GET_DOM" } as DOMMessage,
            (response: DOMMessageResponse) => {
              setProfile(response);
              setIsLoading(false);
            }
          );
        }
      );
    }
  };

  return (
    <div>
      <h1 className="text-center text-lg text-gray-500 font-semibold mb-4">
        Current Profile
      </h1>

      {isLoading ? (
        // TODO: better styling
        <Bars
          height="100"
          width="100"
          color="grey"
          ariaLabel="loading-indicator"
        />
      ) : profile ? (
        <div>
          <div className="text-xl text-gray-700 font-bold">{profile.name}</div>
          <div className="text-gray-500 flex items-center">
            <PinIcon />
            <span className="ml-1">{profile.location}</span>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <button
            className="rounded shadow mx-auto inline-block bg-purple-100 hover:bg-purple-200 px-3 py-2 text-gray-800"
            onClick={handleParseProfile}
          >
            Parse Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
