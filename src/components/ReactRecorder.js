import {
  Avatar,
  Box,
  ChakraProvider,
  Grid,
  theme,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import axios from "axios";
import Status from "./Status";
import Result from "./Result";

const rockstoneApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "multipart/form-data",
  },
});

const mimeType = 'audio/mpeg';

const initialState = {
  mimeType: 'audio/mpeg',
  url: null,
  blob: null,
  chunks: null,
  duration: {
    h: 0,
    m: 0,
    s: 0,
  },
};

function ReactRecorder() {
  const [audioDetails, setAudioDetails] = useState(initialState);
  const [transcript, setTranscript] = useState({ id: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (transcript.id && transcript.status !== "completed" && isLoading) {
        try {
          const { data: transcriptData } = await rockstoneApi.get(
            `/transcript/${transcript.id}`
          );
          setTranscript({ ...transcript, ...transcriptData }); // have status = 'completed'
        } catch (err) {
          console.error(err);
        }
      } else {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isLoading, transcript]);

  const handleAudioStop = (data) => {
    setAudioDetails(data);
  };

  const handleReset = () => {
    setAudioDetails({ ...initialState });
    setTranscript({ id: "" });
  };


  const handleAudioUpload = async (audioFile) => {
    const myfile = new File(
      [audioFile],
      "test.mp3",
      {type: "audio/mp3"}
    )
    const formData = new FormData();
    formData.append("audioFile", myfile);

    setIsLoading(true);
    if (audioFile) {
      try {
        const { data: uploadResponse } = await rockstoneApi.post(
          "/audio/convert/text",
          formData
        );
        console.log("file uploaded");
      } catch (err) {
        console.error(err);
      }
    }else{
      console.error("no file found");
    }
  };

  return (
    <ChakraProvider theme={theme} className={"pt-30"}>
      <Box textAlign="center" fontSize="xl">
        <Grid maxH="40vh" p={3}>
          <VStack spacing={8}>
            <Box height={20}></Box>
            <Box>
              {transcript.text && transcript.status === "completed" ? (
                <Result transcript={transcript} />
              ) : (
                <Status isLoading={isLoading} status={transcript.status} />
              )}
            </Box>
            <Box width={700} height={50}>
              <Recorder
                record={true}
                audioURL={audioDetails.url}
                handleAudioStop={handleAudioStop}
                handleAudioUpload={handleAudioUpload}
                handleReset={handleReset}

              />
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default ReactRecorder;
