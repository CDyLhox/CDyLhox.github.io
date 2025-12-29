#! /bin/bash

ffmpeg -pattern_type glob -i "/Users/cdylhox/cage/projects/html/elzaPortfolio/assets/Unsorted/*.CR2" \
-vf "exposure=auto=1:limit=0.5" \
-c:v png "%04d.png"

