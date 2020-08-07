#### TTT- frontend 

The frontend is implemented using ReactJS. 

The link to the final project - https://divyakhetan.github.io/ttt-frontend/

There are 4 components in this project:
* Form.js - Containst the input and the submit button.
* Result.js - Contains the table to be displayed. 
* Row.js - Contains the rows of the table. 
* Notification.js - Contains the success/error message. 

On clicking the submit button, a GET request is sent to the endpoint which returns the JSON object. 
This data is then displayed in a tabular format with an appropriate message. 

The following testcases are considered: 

1. n < 0 

![Image of n < 0](https://dl.dropbox.com/s/sh79nwbweldkjwu/pic5.JPG?dl=0)

2. n > 0 and n < total_words

![Image of n >0](https://dl.dropbox.com/s/rrn4q3qn55nenty/pic4.JPG?dl=0)

3. n > total_words

![Image of n > 321](https://dl.dropbox.com/s/a288tirnj9aearq/pic6.JPG?dl=0)


The text file used : https://terriblytinytales.com/test.txt
