import { Box, Text, Tooltip } from "@chakra-ui/react";

const sentimentColor = {
    POSITIVE: 'lightgreen',
    NEGATIVE: 'pink',
    NEUTRAL: 'lightgray'
};

export default function Highlighted({text, sentiment}) {
    return <Box as="mark" bg={sentimentColor[sentiment]} mr="1">{text}</Box>;
 }